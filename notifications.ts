import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

// إعداد معالج الإشعارات
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  } as any),
});

export interface NotificationSchedule {
  id: string;
  title: string;
  body: string;
  time: string; // HH:mm format
  type: 'morning' | 'evening';
}

const NOTIFICATIONS_KEY = 'azkar_scheduled_notifications';

/**
 * طلب إذن الإشعارات
 */
export async function requestNotificationPermissions(): Promise<boolean> {
  try {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.error('Error requesting notification permissions:', error);
    return false;
  }
}

/**
 * جدولة إشعار صباحي ومسائي
 */
export async function scheduleNotifications(
  morningTime: string,
  eveningTime: string,
  enabled: boolean = true
): Promise<void> {
  try {
    // إلغاء الإشعارات السابقة
    await Notifications.cancelAllScheduledNotificationsAsync();

    if (!enabled) {
      return;
    }

    // جدولة الإشعار الصباحي
    const [morningHour, morningMinute] = morningTime.split(':').map(Number);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'حان وقت الأذكار',
        body: 'ابدأ يومك بأذكار الصباح',
        sound: 'default',
        badge: 1,
      },
      trigger: {
        type: 'calendar',
        hour: morningHour,
        minute: morningMinute,
        repeats: true,
      } as any,
    });

    // جدولة الإشعار المسائي
    const [eveningHour, eveningMinute] = eveningTime.split(':').map(Number);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'حان وقت الأذكار',
        body: 'لا تنسَ أذكار المساء',
        sound: 'default',
        badge: 1,
      },
      trigger: {
        type: 'calendar',
        hour: eveningHour,
        minute: eveningMinute,
        repeats: true,
      } as any,
    });

    console.log('Notifications scheduled successfully');
  } catch (error) {
    console.error('Error scheduling notifications:', error);
  }
}

/**
 * إلغاء جميع الإشعارات المجدولة
 */
export async function cancelAllNotifications(): Promise<void> {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    console.log('All notifications cancelled');
  } catch (error) {
    console.error('Error cancelling notifications:', error);
  }
}

/**
 * الحصول على الإشعارات المجدولة
 */
export async function getScheduledNotifications(): Promise<Notifications.NotificationRequest[]> {
  try {
    return await Notifications.getAllScheduledNotificationsAsync();
  } catch (error) {
    console.error('Error getting scheduled notifications:', error);
    return [];
  }
}

/**
 * إرسال إشعار فوري (للاختبار)
 */
export async function sendTestNotification(title: string, body: string): Promise<void> {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        sound: 'default',
        badge: 1,
      },
      trigger: {
        type: 'timeInterval',
        seconds: 1,
      } as any,
    });
  } catch (error) {
    console.error('Error sending test notification:', error);
  }
}

/**
 * معالج الإشعارات عند النقر عليها
 */
export function setupNotificationListeners(
  onNotificationReceived?: (notification: Notifications.Notification) => void,
  onNotificationTapped?: (notification: Notifications.Notification) => void
): (() => void) | undefined {
  // معالج الإشعارات المستقبلة
  if (onNotificationReceived) {
    const subscription = Notifications.addNotificationReceivedListener(onNotificationReceived);
    return () => subscription.remove();
  }

  // معالج النقر على الإشعار
  if (onNotificationTapped) {
    const subscription = Notifications.addNotificationResponseReceivedListener((response) => {
      onNotificationTapped(response.notification);
    });
    return () => subscription.remove();
  }
}
