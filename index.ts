// أنواع البيانات الأساسية للتطبيق

export interface DhikrCounter {
  dhikrId: string;
  count: number;
  lastReset: string; // ISO date string
}

export interface UserSettings {
  darkMode: boolean;
  fontSize: number; // 1 = small, 2 = medium, 3 = large
  morningNotification: boolean;
  morningTime: string; // HH:mm format
  eveningNotification: boolean;
  eveningTime: string; // HH:mm format
  hapticFeedback: boolean;
  soundEffects: boolean;
}

export interface NotificationSchedule {
  id: string;
  title: string;
  body: string;
  time: string; // HH:mm format
  enabled: boolean;
  type: 'morning' | 'evening';
}

export interface SearchResult {
  dhikrId: string;
  text: string;
  category: string;
  categoryName: string;
  matchIndex: number;
}

export interface AppState {
  counters: Record<string, DhikrCounter>;
  settings: UserSettings;
  favorites: string[]; // Array of dhikr IDs
  lastOpenedCategory: string;
}

// Default settings
export const DEFAULT_SETTINGS: UserSettings = {
  darkMode: false,
  fontSize: 2,
  morningNotification: true,
  morningTime: '06:00',
  eveningNotification: true,
  eveningTime: '18:00',
  hapticFeedback: true,
  soundEffects: true,
};

// Default app state
export const DEFAULT_APP_STATE: AppState = {
  counters: {},
  settings: DEFAULT_SETTINGS,
  favorites: [],
  lastOpenedCategory: 'morning',
};
