import { Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer } from '@/components/screen-container';
import { useColors } from '@/hooks/use-colors';
import { searchAzkar, categories } from '@/lib/data/azkar_data';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function SearchScreen() {
  const router = useRouter();
  const colors = useColors();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      const searchResults = searchAzkar(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  const getCategoryName = (categoryId: string) => {
    return categories.find((cat) => cat.id === categoryId)?.name || '';
  };

  return (
    <ScreenContainer className="bg-background">
      {/* الرأس */}
      <View className="flex-row items-center gap-3 mb-6">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full items-center justify-center"
          style={{ backgroundColor: colors.surface }}
        >
          <MaterialIcons name="arrow-back" size={24} color={colors.foreground} />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-foreground flex-1">البحث</Text>
      </View>

      {/* حقل البحث */}
      <View
        className="flex-row items-center gap-3 px-4 py-3 rounded-xl mb-6"
        style={{ backgroundColor: colors.surface }}
      >
        <MaterialIcons name="search" size={24} color={colors.muted} />
        <TextInput
          placeholder="ابحث عن ذكر..."
          placeholderTextColor={colors.muted}
          value={searchQuery}
          onChangeText={handleSearch}
          className="flex-1 text-foreground text-base"
          style={{ color: colors.foreground }}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => handleSearch('')}>
            <MaterialIcons name="close" size={24} color={colors.muted} />
          </TouchableOpacity>
        )}
      </View>

      {/* النتائج */}
      {results.length > 0 ? (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
            <Animated.View
              entering={FadeInDown.delay(index * 50).duration(400)}
              className="p-4 rounded-xl mb-3"
              style={{ backgroundColor: colors.surface }}
            >
              <Text className="text-base leading-relaxed text-foreground mb-3">
                {item.text}
              </Text>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-2">
                  <View
                    className="px-3 py-1 rounded-full"
                    style={{ backgroundColor: colors.background }}
                  >
                    <Text className="text-xs text-muted">
                      {getCategoryName(item.category)}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    router.push({
                      pathname: '/category/[id]',
                      params: { id: item.category },
                    });
                  }}
                >
                  <MaterialIcons name="chevron-right" size={24} color={colors.primary} />
                </TouchableOpacity>
              </View>
            </Animated.View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : searchQuery.length > 0 ? (
        <View className="flex-1 items-center justify-center">
          <MaterialIcons name="search-off" size={48} color={colors.muted} />
          <Text className="text-muted text-center mt-4">لم يتم العثور على نتائج</Text>
        </View>
      ) : (
        <View className="flex-1 items-center justify-center">
          <MaterialIcons name="search" size={48} color={colors.muted} />
          <Text className="text-muted text-center mt-4">ابدأ البحث عن أذكار</Text>
        </View>
      )}
    </ScreenContainer>
  );
}
