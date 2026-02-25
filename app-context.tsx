import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState, UserSettings, DEFAULT_APP_STATE, DEFAULT_SETTINGS } from '@/lib/types';
import * as StorageService from '@/lib/services/storage';

type AppAction =
  | { type: 'SET_STATE'; payload: AppState }
  | { type: 'UPDATE_SETTINGS'; payload: Partial<UserSettings> }
  | { type: 'INCREMENT_COUNTER'; payload: string }
  | { type: 'RESET_COUNTER'; payload: string }
  | { type: 'RESET_ALL_COUNTERS' }
  | { type: 'ADD_FAVORITE'; payload: string }
  | { type: 'REMOVE_FAVORITE'; payload: string }
  | { type: 'SET_LAST_OPENED_CATEGORY'; payload: string };

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  isLoading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_STATE':
      return action.payload;

    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: { ...state.settings, ...action.payload },
      };

    case 'INCREMENT_COUNTER': {
      const dhikrId = action.payload;
      const currentCount = state.counters[dhikrId]?.count || 0;
      return {
        ...state,
        counters: {
          ...state.counters,
          [dhikrId]: {
            dhikrId,
            count: currentCount + 1,
            lastReset: new Date().toISOString().split('T')[0],
          },
        },
      };
    }

    case 'RESET_COUNTER': {
      const dhikrId = action.payload;
      const newCounters = { ...state.counters };
      delete newCounters[dhikrId];
      return {
        ...state,
        counters: newCounters,
      };
    }

    case 'RESET_ALL_COUNTERS':
      return {
        ...state,
        counters: {},
      };

    case 'ADD_FAVORITE': {
      const dhikrId = action.payload;
      if (!state.favorites.includes(dhikrId)) {
        return {
          ...state,
          favorites: [...state.favorites, dhikrId],
        };
      }
      return state;
    }

    case 'REMOVE_FAVORITE': {
      const dhikrId = action.payload;
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== dhikrId),
      };
    }

    case 'SET_LAST_OPENED_CATEGORY':
      return {
        ...state,
        lastOpenedCategory: action.payload,
      };

    default:
      return state;
  }
}

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, DEFAULT_APP_STATE);
  const [isLoading, setIsLoading] = React.useState(true);

  // تحميل البيانات من التخزين عند بدء التطبيق
  useEffect(() => {
    async function loadData() {
      try {
        const savedState = await StorageService.getAppState();
        dispatch({ type: 'SET_STATE', payload: savedState });
      } catch (error) {
        console.error('Error loading app state:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  // حفظ الحالة عند التغيير
  useEffect(() => {
    if (!isLoading) {
      StorageService.saveAppState(state).catch((error) => {
        console.error('Error saving app state:', error);
      });
    }
  }, [state, isLoading]);

  // حفظ الإعدادات عند التغيير
  useEffect(() => {
    if (!isLoading) {
      StorageService.saveUserSettings(state.settings).catch((error) => {
        console.error('Error saving user settings:', error);
      });
    }
  }, [state.settings, isLoading]);

  // حفظ المفضلة عند التغيير
  useEffect(() => {
    if (!isLoading) {
      AsyncStorage.setItem('azkar_favorites', JSON.stringify(state.favorites)).catch(
        (error) => {
          console.error('Error saving favorites:', error);
        }
      );
    }
  }, [state.favorites, isLoading]);

  const value: AppContextType = {
    state,
    dispatch,
    isLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

// Hook مساعد للعدادات
export function useDhikrCounter(dhikrId: string) {
  const { state, dispatch } = useAppContext();
  const count = state.counters[dhikrId]?.count || 0;

  return {
    count,
    increment: () => dispatch({ type: 'INCREMENT_COUNTER', payload: dhikrId }),
    reset: () => dispatch({ type: 'RESET_COUNTER', payload: dhikrId }),
  };
}

// Hook مساعد للمفضلة
export function useFavorite(dhikrId: string) {
  const { state, dispatch } = useAppContext();
  const isFavorite = state.favorites.includes(dhikrId);

  return {
    isFavorite,
    toggle: () => {
      if (isFavorite) {
        dispatch({ type: 'REMOVE_FAVORITE', payload: dhikrId });
      } else {
        dispatch({ type: 'ADD_FAVORITE', payload: dhikrId });
      }
    },
  };
}

// Hook مساعد للإعدادات
export function useSettings() {
  const { state, dispatch } = useAppContext();

  return {
    settings: state.settings,
    updateSettings: (updates: Partial<UserSettings>) => {
      dispatch({ type: 'UPDATE_SETTINGS', payload: updates });
    },
  };
}
