import { ScrollView, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';
import { useColors } from '@/hooks/use-colors';
import { useAppContext, useDhikrCounter, useFavorite, useSettings } from '@/lib/context/app-context';
import { getAzkarByCategory, categories } from '@/lib/data/azkar_data';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { Share } from 'react-native';

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const colors = useColors();
  const { settings } = useSettings();

  const category = categories.find((cat) => cat.id === id);
  const azkar = getAzkarByCategory(id || '');

  if (!category) {
    return (
      <ScreenContainer className="items-center justify-center">
        <Text className="text-foreground">التصنيف غير موجود</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer className="bg-background">
      {/* الرأس */}
      <View className="flex-row items-center gap-4 mb-6">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full items-center justify-center"
          style={{ backgroundColor: colors.surface }}
        >
          <MaterialIcons name="arrow-back" size={24} color={colors.foreground} />
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-2xl font-bold text-foreground">{category.name}</Text>
          <Text className="text-sm text-muted mt-1">{azkar.length} أذكار</Text>
        </View>
      </View>

      {/* قائمة الأذكار */}
      <FlatList
        data={azkar}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <DhikrCard
            dhikr={item}
            index={index}
            colors={colors}
            settings={settings}
            categoryName={category.name}
          />
        )}
        ItemSeparatorComponent={() => <View className="h-3" />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </ScreenContainer>
  );
}

interface DhikrCardProps {
  dhikr: any;
  index: number;
  colors: any;
  settings: any;
  categoryName: string;
}

function DhikrCard({ dhikr, index, colors, settings, categoryName }: DhikrCardProps) {
  const { count, increment, reset } = useDhikrCounter(dhikr.id);
  const { isFavorite, toggle } = useFavorite(dhikr.id);

  const handleIncrement = async () => {
    increment();
    if (settings.hapticFeedback) {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${dhikr.text}\n\n- من ${categoryName}`,
        title: 'شارك الذكر',
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleToggleFavorite = async () => {
    toggle();
    if (settings.hapticFeedback) {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
  };

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 50).duration(400)}
      className="p-4 rounded-xl"
      style={{ backgroundColor: colors.surface }}
    >
      {/* نص الذكر */}
      <Text className="text-base leading-relaxed text-foreground mb-4">
        {dhikr.text}
      </Text>

      {/* المصدر والعدد المستهدف */}
      {(dhikr.source || dhikr.count) && (
        <View className="flex-row items-center gap-2 mb-4">
          {dhikr.source && (
            <View className="flex-row items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: colors.background }}>
              <MaterialIcons name="bookmark" size={12} color={colors.muted} />
              <Text className="text-xs text-muted">{dhikr.source}</Text>
            </View>
          )}
          {dhikr.count && (
            <View className="flex-row items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: colors.background }}>
              <MaterialIcons name="repeat" size={12} color={colors.muted} />
              <Text className="text-xs text-muted">×{dhikr.count}</Text>
            </View>
          )}
        </View>
      )}

      {/* أزرار التحكم */}
      <View className="flex-row items-center gap-2">
        {/* العداد */}
        <TouchableOpacity
          onPress={handleIncrement}
          className="flex-1 flex-row items-center justify-center gap-2 py-3 rounded-lg"
          style={{ backgroundColor: colors.primary }}
        >
          <MaterialIcons name="add" size={20} color="white" />
          <Text className="text-white font-semibold">
            {count > 0 ? `${count}` : 'عد'}
          </Text>
        </TouchableOpacity>

        {/* إعادة تعيين */}
        {count > 0 && (
          <TouchableOpacity
            onPress={reset}
            className="px-3 py-3 rounded-lg"
            style={{ backgroundColor: colors.background }}
          >
            <MaterialIcons name="refresh" size={20} color={colors.foreground} />
          </TouchableOpacity>
        )}

        {/* المفضلة */}
        <TouchableOpacity
          onPress={handleToggleFavorite}
          className="px-3 py-3 rounded-lg"
          style={{ backgroundColor: colors.background }}
        >
          <MaterialIcons
            name={isFavorite ? 'favorite' : 'favorite-border'}
            size={20}
            color={isFavorite ? '#E91E63' : colors.foreground}
          />
        </TouchableOpacity>

        {/* المشاركة */}
        <TouchableOpacity
          onPress={handleShare}
          className="px-3 py-3 rounded-lg"
          style={{ backgroundColor: colors.background }}
        >
          <MaterialIcons name="share" size={20} color={colors.foreground} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
