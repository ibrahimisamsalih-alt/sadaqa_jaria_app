import { ScrollView, Text, View, TouchableOpacity, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';
import { useColors } from '@/hooks/use-colors';
import { useSettings } from '@/lib/context/app-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeContext } from '@/lib/theme-provider';

export default function SettingsScreen() {
  const router = useRouter();
  const colors = useColors();
  const { settings, updateSettings } = useSettings();
  const colorScheme = useColorScheme();
  const { setColorScheme } = useThemeContext();

  const handleToggleDarkMode = () => {
    const newScheme = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(newScheme);
  };

  const handleToggleHaptic = () => {
    updateSettings({ hapticFeedback: !settings.hapticFeedback });
  };

  const handleToggleSoundEffects = () => {
    updateSettings({ soundEffects: !settings.soundEffects });
  };

  const handleToggleMorningNotification = () => {
    updateSettings({ morningNotification: !settings.morningNotification });
  };

  const handleToggleEveningNotification = () => {
    updateSettings({ eveningNotification: !settings.eveningNotification });
  };

  return (
    <ScreenContainer className="bg-background">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* الرأس */}
        <View className="flex-row items-center gap-3 mb-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 rounded-full items-center justify-center"
            style={{ backgroundColor: colors.surface }}
          >
            <MaterialIcons name="arrow-back" size={24} color={colors.foreground} />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-foreground flex-1">الإعدادات</Text>
        </View>

        {/* قسم العرض */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-foreground mb-4">العرض</Text>

          {/* الوضع الليلي */}
          <View
            className="flex-row items-center justify-between p-4 rounded-xl mb-3"
            style={{ backgroundColor: colors.surface }}
          >
            <View className="flex-row items-center gap-3">
              <View
                className="w-10 h-10 rounded-full items-center justify-center"
                style={{ backgroundColor: colors.primary }}
              >
                <MaterialIcons name="dark-mode" size={20} color="white" />
              </View>
              <View>
                <Text className="text-base font-semibold text-foreground">الوضع الليلي</Text>
                <Text className="text-xs text-muted mt-1">
                  {colorScheme === 'dark' ? 'مفعّل' : 'معطّل'}
                </Text>
              </View>
            </View>
            <Switch
              value={colorScheme === 'dark'}
              onValueChange={handleToggleDarkMode}
              trackColor={{ false: colors.border, true: colors.primary }}
            />
          </View>

          {/* حجم الخط */}
          <View
            className="p-4 rounded-xl"
            style={{ backgroundColor: colors.surface }}
          >
            <View className="flex-row items-center gap-3 mb-3">
              <View
                className="w-10 h-10 rounded-full items-center justify-center"
                style={{ backgroundColor: colors.primary }}
              >
                <MaterialIcons name="text-fields" size={20} color="white" />
              </View>
              <Text className="text-base font-semibold text-foreground">حجم الخط</Text>
            </View>
            <View className="flex-row items-center justify-around mt-3">
              {[1, 2, 3].map((size) => (
                <TouchableOpacity
                  key={size}
                  onPress={() => updateSettings({ fontSize: size })}
                  className={`px-4 py-2 rounded-lg ${
                    settings.fontSize === size ? 'bg-primary' : ''
                  }`}
                  style={{
                    backgroundColor: settings.fontSize === size ? colors.primary : colors.background,
                  }}
                >
                  <Text
                    style={{
                      color: settings.fontSize === size ? 'white' : colors.foreground,
                      fontSize: size === 1 ? 12 : size === 2 ? 14 : 16,
                    }}
                  >
                    {size === 1 ? 'صغير' : size === 2 ? 'متوسط' : 'كبير'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* قسم الإشعارات */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-foreground mb-4">الإشعارات</Text>

          {/* إشعار الصباح */}
          <View
            className="flex-row items-center justify-between p-4 rounded-xl mb-3"
            style={{ backgroundColor: colors.surface }}
          >
            <View className="flex-row items-center gap-3">
              <View
                className="w-10 h-10 rounded-full items-center justify-center"
                style={{ backgroundColor: '#FF9800' }}
              >
                <MaterialIcons name="wb-sunny" size={20} color="white" />
              </View>
              <View>
                <Text className="text-base font-semibold text-foreground">إشعار الصباح</Text>
                <Text className="text-xs text-muted mt-1">{settings.morningTime}</Text>
              </View>
            </View>
            <Switch
              value={settings.morningNotification}
              onValueChange={handleToggleMorningNotification}
              trackColor={{ false: colors.border, true: colors.primary }}
            />
          </View>

          {/* إشعار المساء */}
          <View
            className="flex-row items-center justify-between p-4 rounded-xl"
            style={{ backgroundColor: colors.surface }}
          >
            <View className="flex-row items-center gap-3">
              <View
                className="w-10 h-10 rounded-full items-center justify-center"
                style={{ backgroundColor: '#2196F3' }}
              >
                <MaterialIcons name="nights-stay" size={20} color="white" />
              </View>
              <View>
                <Text className="text-base font-semibold text-foreground">إشعار المساء</Text>
                <Text className="text-xs text-muted mt-1">{settings.eveningTime}</Text>
              </View>
            </View>
            <Switch
              value={settings.eveningNotification}
              onValueChange={handleToggleEveningNotification}
              trackColor={{ false: colors.border, true: colors.primary }}
            />
          </View>
        </View>

        {/* قسم التفاعل */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-foreground mb-4">التفاعل</Text>

          {/* الاهتزاز */}
          <View
            className="flex-row items-center justify-between p-4 rounded-xl mb-3"
            style={{ backgroundColor: colors.surface }}
          >
            <View className="flex-row items-center gap-3">
              <View
                className="w-10 h-10 rounded-full items-center justify-center"
                style={{ backgroundColor: colors.primary }}
              >
                <MaterialIcons name="vibration" size={20} color="white" />
              </View>
              <Text className="text-base font-semibold text-foreground">الاهتزاز</Text>
            </View>
            <Switch
              value={settings.hapticFeedback}
              onValueChange={handleToggleHaptic}
              trackColor={{ false: colors.border, true: colors.primary }}
            />
          </View>

          {/* المؤثرات الصوتية */}
          <View
            className="flex-row items-center justify-between p-4 rounded-xl"
            style={{ backgroundColor: colors.surface }}
          >
            <View className="flex-row items-center gap-3">
              <View
                className="w-10 h-10 rounded-full items-center justify-center"
                style={{ backgroundColor: colors.primary }}
              >
                <MaterialIcons name="volume-up" size={20} color="white" />
              </View>
              <Text className="text-base font-semibold text-foreground">المؤثرات الصوتية</Text>
            </View>
            <Switch
              value={settings.soundEffects}
              onValueChange={handleToggleSoundEffects}
              trackColor={{ false: colors.border, true: colors.primary }}
            />
          </View>
        </View>

        {/* قسم عن التطبيق */}
        <View>
          <Text className="text-lg font-bold text-foreground mb-4">عن التطبيق</Text>
          <View
            className="p-4 rounded-xl"
            style={{ backgroundColor: colors.surface }}
          >
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-sm text-muted">الإصدار</Text>
              <Text className="text-sm font-semibold text-foreground">1.0.0</Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-sm text-muted">من حصن المسلم</Text>
              <MaterialIcons name="check-circle" size={20} color={colors.primary} />
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
