import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import Animated, { FadeIn, FadeOut, withTiming } from 'react-native-reanimated';
import { useAppContext } from '@/lib/context/app-context';
import { useColors } from '@/hooks/use-colors';

// منع إخفاء الشاشة الأولية تلقائياً
SplashScreen.preventAutoHideAsync();

export default function SplashScreenComponent() {
  const router = useRouter();
  const { isLoading } = useAppContext();
  const colors = useColors();

  useEffect(() => {
    async function prepare() {
      try {
        // محاكاة تحميل البيانات
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // إخفاء الشاشة الأولية
        await SplashScreen.hideAsync();

        // الانتقال إلى الشاشة الرئيسية
        router.replace('/(tabs)');
      } catch (e) {
        console.warn(e);
      }
    }

    if (!isLoading) {
      prepare();
    }
  }, [isLoading, router]);

  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: colors.background }}
    >
      <View className="items-center gap-6">
        {/* الشعار */}
        <Animated.View
          entering={FadeIn.delay(300).duration(800)}
          className="items-center gap-4"
        >
          <View
            className="w-24 h-24 rounded-full items-center justify-center"
            style={{ backgroundColor: colors.primary }}
          >
            <Text className="text-5xl">🤲</Text>
          </View>

          <Text
            className="text-3xl font-bold"
            style={{ color: colors.foreground }}
          >
            أذكار
          </Text>

          <Text
            className="text-base"
            style={{ color: colors.muted }}
          >
            أذكار المسلم الاحترافية
          </Text>
        </Animated.View>

        {/* مؤشر التحميل */}
        <Animated.View
          entering={FadeIn.delay(600).duration(800)}
          className="mt-8"
        >
          <ActivityIndicator
            size="large"
            color={colors.primary}
          />
        </Animated.View>

        {/* نص التحميل */}
        <Animated.Text
          entering={FadeIn.delay(900).duration(800)}
          className="text-sm mt-4"
          style={{ color: colors.muted }}
        >
          جاري التحضير...
        </Animated.Text>
      </View>
    </Animated.View>
  );
}
