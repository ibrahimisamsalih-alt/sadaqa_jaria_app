import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState, UserSettings, DEFAULT_APP_STATE, DEFAULT_SETTINGS, DhikrCounter } from '@/lib/types';

const STORAGE_KEYS = {
  APP_STATE: 'azkar_app_state',
  USER_SETTINGS: 'azkar_user_settings',
  COUNTERS: 'azkar_counters',
  FAVORITES: 'azkar_favorites',
  LAST_RESET_DATE: 'azkar_last_reset_date',
};

/**
 * حفظ حالة التطبيق الكاملة
 */
export async function saveAppState(state: AppState): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.APP_STATE, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving app state:', error);
    throw error;
  }
}

/**
 * استرجاع حالة التطبيق الكاملة
 */
export async function getAppState(): Promise<AppState> {
  try {
    const state = await AsyncStorage.getItem(STORAGE_KEYS.APP_STATE);
    return state ? JSON.parse(state) : DEFAULT_APP_STATE;
  } catch (error) {
    console.error('Error getting app state:', error);
    return DEFAULT_APP_STATE;
  }
}

/**
 * حفظ إعدادات المستخدم
 */
export async function saveUserSettings(settings: UserSettings): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.USER_SETTINGS, JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving user settings:', error);
    throw error;
  }
}

/**
 * استرجاع إعدادات المستخدم
 */
export async function getUserSettings(): Promise<UserSettings> {
  try {
    const settings = await AsyncStorage.getItem(STORAGE_KEYS.USER_SETTINGS);
    return settings ? JSON.parse(settings) : DEFAULT_SETTINGS;
  } catch (error) {
    console.error('Error getting user settings:', error);
    return DEFAULT_SETTINGS;
  }
}

/**
 * حفظ عداد ذكر معين
 */
export async function saveDhikrCounter(dhikrId: string, count: number): Promise<void> {
  try {
    const counters = await getDhikrCounters();
    counters[dhikrId] = {
      dhikrId,
      count,
      lastReset: new Date().toISOString().split('T')[0],
    };
    await AsyncStorage.setItem(STORAGE_KEYS.COUNTERS, JSON.stringify(counters));
  } catch (error) {
    console.error('Error saving dhikr counter:', error);
    throw error;
  }
}

/**
 * استرجاع عداد ذكر معين
 */
export async function getDhikrCounter(dhikrId: string): Promise<number> {
  try {
    const counters = await getDhikrCounters();
    return counters[dhikrId]?.count || 0;
  } catch (error) {
    console.error('Error getting dhikr counter:', error);
    return 0;
  }
}

/**
 * استرجاع جميع العدادات
 */
export async function getDhikrCounters(): Promise<Record<string, DhikrCounter>> {
  try {
    const counters = await AsyncStorage.getItem(STORAGE_KEYS.COUNTERS);
    return counters ? JSON.parse(counters) : {};
  } catch (error) {
    console.error('Error getting dhikr counters:', error);
    return {};
  }
}

/**
 * إعادة تعيين عداد ذكر معين
 */
export async function resetDhikrCounter(dhikrId: string): Promise<void> {
  try {
    const counters = await getDhikrCounters();
    delete counters[dhikrId];
    await AsyncStorage.setItem(STORAGE_KEYS.COUNTERS, JSON.stringify(counters));
  } catch (error) {
    console.error('Error resetting dhikr counter:', error);
    throw error;
  }
}

/**
 * إعادة تعيين جميع العدادات
 */
export async function resetAllCounters(): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.COUNTERS, JSON.stringify({}));
  } catch (error) {
    console.error('Error resetting all counters:', error);
    throw error;
  }
}

/**
 * إضافة ذكر إلى المفضلة
 */
export async function addToFavorites(dhikrId: string): Promise<void> {
  try {
    const favorites = await getFavorites();
    if (!favorites.includes(dhikrId)) {
      favorites.push(dhikrId);
      await AsyncStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('Error adding to favorites:', error);
    throw error;
  }
}

/**
 * إزالة ذكر من المفضلة
 */
export async function removeFromFavorites(dhikrId: string): Promise<void> {
  try {
    let favorites = await getFavorites();
    favorites = favorites.filter((id) => id !== dhikrId);
    await AsyncStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error removing from favorites:', error);
    throw error;
  }
}

/**
 * استرجاع المفضلة
 */
export async function getFavorites(): Promise<string[]> {
  try {
    const favorites = await AsyncStorage.getItem(STORAGE_KEYS.FAVORITES);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error getting favorites:', error);
    return [];
  }
}

/**
 * التحقق من كون ذكر في المفضلة
 */
export async function isFavorite(dhikrId: string): Promise<boolean> {
  try {
    const favorites = await getFavorites();
    return favorites.includes(dhikrId);
  } catch (error) {
    console.error('Error checking if favorite:', error);
    return false;
  }
}

/**
 * حفظ تاريخ آخر إعادة تعيين
 */
export async function saveLastResetDate(date: string): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.LAST_RESET_DATE, date);
  } catch (error) {
    console.error('Error saving last reset date:', error);
    throw error;
  }
}

/**
 * استرجاع تاريخ آخر إعادة تعيين
 */
export async function getLastResetDate(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(STORAGE_KEYS.LAST_RESET_DATE);
  } catch (error) {
    console.error('Error getting last reset date:', error);
    return null;
  }
}

/**
 * مسح جميع البيانات المحفوظة
 */
export async function clearAllData(): Promise<void> {
  try {
    await AsyncStorage.multiRemove(Object.values(STORAGE_KEYS));
  } catch (error) {
    console.error('Error clearing all data:', error);
    throw error;
  }
}
