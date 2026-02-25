import { ScrollView, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';
import { useColors } from '@/hooks/use-colors';
import { useAppContext } from '@/lib/context/app-context';
import { categories, morningAzkar } from '@/lib/data/azkar_data';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function HomeScreen() {
  const router = useRouter();
  const colors = useColors();
  const { state } = useAppContext();

  // حساب إجمالي الأذكار المحفوظة
  const totalCount = Object.values(state.counters).reduce((sum, counter) => sum + counter.count, 0);

  const handleCategoryPress = (categoryId: string) => {
    router.push({
      pathname: '/category/[id]',
      params: { id: categoryId },
    });
  };

  const handleSearchPress = () => {
    router.push('/search');
  };

  const handleSettingsPress = () => {
    router.push('/settings');
  };

  return (
    <ScreenContainer className="bg-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* رأس الصفحة */}
        <View className="flex-row items-center justify-between mb-6">
          <View>
            <Text className="text-3xl font-bold text-foreground">أذكار</Text>
            <Text className="text-sm text-muted mt-1">أذكار المسلم الاحترافية</Text>
          </View>
          <View className="flex-row gap-3">
            <TouchableOpacity
              onPress={handleSearchPress}
              className="w-12 h-12 rounded-full items-center justify-center"
              style={{ backgroundColor: colors.surface }}
            >
              <MaterialIcons name="search" size={24} color={colors.foreground} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSettingsPress}
              className="w-12 h-12 rounded-full items-center justify-center"
              style={{ backgroundColor: colors.surface }}
            >
              <MaterialIcons name="settings" size={24} color={colors.foreground} />
            </TouchableOpacity>
          </View>
        </View>

        {/* بطاقة الإحصائيات */}
        <Animated.View
          entering={FadeInDown.delay(100).duration(600)}
          className="rounded-2xl p-6 mb-6"
          style={{ backgroundColor: colors.primary }}
        >
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-white text-sm opacity-90">إجمالي الأذكار</Text>
              <Text className="text-white text-4xl font-bold mt-2">{totalCount}</Text>
            </View>
            <View className="w-16 h-16 rounded-full items-center justify-center bg-white/20">
              <Text className="text-4xl">📿</Text>
            </View>
          </View>
        </Animated.View>

        {/* الأذكار الموصى بها */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-foreground mb-4">أذكار اليوم الموصى بها</Text>
          <View className="gap-3">
            {morningAzkar.slice(0, 3).map((dhikr, index) => (
              <Animated.View
                key={dhikr.id}
                entering={FadeInDown.delay(200 + index * 100).duration(600)}
              >
                <TouchableOpacity
                  onPress={() => handleCategoryPress('morning')}
                  className="p-4 rounded-xl flex-row items-start gap-3"
                  style={{ backgroundColor: colors.surface }}
                >
                  <View
                    className="w-10 h-10 rounded-full items-center justify-center"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <Text className="text-white text-lg">✨</Text>
                  </View>
                  <View className="flex-1">
                    <Text
                      className="text-sm text-foreground leading-relaxed"
                      numberOfLines={2}
                    >
                      {dhikr.text}
                    </Text>
                    <Text className="text-xs text-muted mt-2">أذكار الصباح</Text>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </View>

        {/* التصنيفات الرئيسية */}
        <View>
          <Text className="text-lg font-bold text-foreground mb-4">التصنيفات</Text>
          <View className="gap-3">
            {categories.map((category, index) => (
              <Animated.View
                key={category.id}
                entering={FadeInDown.delay(500 + index * 100).duration(600)}
              >
                <TouchableOpacity
                  onPress={() => handleCategoryPress(category.id)}
                  className="p-4 rounded-xl flex-row items-center gap-4"
                  style={{ backgroundColor: colors.surface }}
                >
                  <View
                    className="w-14 h-14 rounded-full items-center justify-center"
                    style={{ backgroundColor: category.color }}
                  >
                    <Text className="text-2xl">{getCategoryEmoji(category.id)}</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-semibold text-foreground">
                      {category.name}
                    </Text>
                    <Text className="text-xs text-muted mt-1">
                      {category.dhikrs.length} أذكار
                    </Text>
                  </View>
                  <MaterialIcons name="chevron-right" size={24} color={colors.muted} />
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

// دالة مساعدة للحصول على emoji التصنيف
function getCategoryEmoji(categoryId: string): string {
  const emojiMap: Record<string, string> = {
    morning: '🌅',
    evening: '🌙',
    sleep: '😴',
    market: '🛍️',
    memory: '🧠',
    ramadan: '🌙',
  };
  return emojiMap[categoryId] || '📿';
}
