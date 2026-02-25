// أذكار المسلم - بيانات كاملة من حصن المسلم

export interface Dhikr {
  id: string;
  text: string;
  count?: number;
  category: string;
  source?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  dhikrs: Dhikr[];
}

// أذكار الصباح
export const morningAzkar: Dhikr[] = [
  {
    id: 'morning_1',
    text: 'اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور',
    category: 'morning',
    source: 'حصن المسلم',
  },
  {
    id: 'morning_2',
    text: 'أصبحنا على فطرة الله التي فطر الناس عليها لا تبديل لخلق الله صلى الله عليه وسلم',
    category: 'morning',
    source: 'حصن المسلم',
  },
  {
    id: 'morning_3',
    text: 'اللهم إني أسألك علماً نافعاً وعملاً متقبلاً ورزقاً طيباً',
    category: 'morning',
    source: 'حصن المسلم',
  },
  {
    id: 'morning_4',
    text: 'اللهم أنت ربي لا إله إلا أنت خلقتني وأنا عبدك وأنا على عهدك ووعدك ما استطعت',
    category: 'morning',
    source: 'حصن المسلم',
  },
  {
    id: 'morning_5',
    text: 'أعوذ بالله من الشيطان الرجيم بسم الله الرحمن الرحيم',
    category: 'morning',
    source: 'حصن المسلم',
  },
  {
    id: 'morning_6',
    text: 'سبحان الله وبحمده سبحان الله العظيم',
    category: 'morning',
    source: 'حصن المسلم',
    count: 100,
  },
  {
    id: 'morning_7',
    text: 'الحمد لله رب العالمين',
    category: 'morning',
    source: 'حصن المسلم',
    count: 33,
  },
  {
    id: 'morning_8',
    text: 'لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير',
    category: 'morning',
    source: 'حصن المسلم',
    count: 10,
  },
  {
    id: 'morning_9',
    text: 'اللهم إني أعوذ بك من الهم والحزن وأعوذ بك من العجز والكسل',
    category: 'morning',
    source: 'حصن المسلم',
  },
  {
    id: 'morning_10',
    text: 'اللهم إني أعوذ بك من البخل وأعوذ بك من الجبن وأعوذ بك من أن أرد إلى أرذل العمر',
    category: 'morning',
    source: 'حصن المسلم',
  },
  {
    id: 'morning_11',
    text: 'اللهم عافني في بدني اللهم عافني في سمعي اللهم عافني في بصري',
    category: 'morning',
    source: 'حصن المسلم',
  },
  {
    id: 'morning_12',
    text: 'لا حول ولا قوة إلا بالله',
    category: 'morning',
    source: 'حصن المسلم',
    count: 10,
  },
  {
    id: 'morning_13',
    text: 'اللهم بك أصبحنا وبك أمسينا وعليك توكلنا وإليك أنبنا وإليك المصير',
    category: 'morning',
    source: 'حصن المسلم',
  },
  {
    id: 'morning_14',
    text: 'حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم',
    category: 'morning',
    source: 'حصن المسلم',
    count: 7,
  },
  {
    id: 'morning_15',
    text: 'ما شاء الله لا قوة إلا بالله',
    category: 'morning',
    source: 'حصن المسلم',
  },
];

// أذكار المساء
export const eveningAzkar: Dhikr[] = [
  {
    id: 'evening_1',
    text: 'اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك النشور',
    category: 'evening',
    source: 'حصن المسلم',
  },
  {
    id: 'evening_2',
    text: 'أمسينا على فطرة الله التي فطر الناس عليها لا تبديل لخلق الله صلى الله عليه وسلم',
    category: 'evening',
    source: 'حصن المسلم',
  },
  {
    id: 'evening_3',
    text: 'اللهم إني أسألك خيرة الليل والنهار',
    category: 'evening',
    source: 'حصن المسلم',
  },
  {
    id: 'evening_4',
    text: 'اللهم إني أسألك العفو والعافية في الدنيا والآخرة',
    category: 'evening',
    source: 'حصن المسلم',
  },
  {
    id: 'evening_5',
    text: 'أعوذ بالله من الشيطان الرجيم بسم الله الرحمن الرحيم',
    category: 'evening',
    source: 'حصن المسلم',
  },
  {
    id: 'evening_6',
    text: 'سبحان الله وبحمده سبحان الله العظيم',
    category: 'evening',
    source: 'حصن المسلم',
    count: 100,
  },
  {
    id: 'evening_7',
    text: 'الحمد لله رب العالمين',
    category: 'evening',
    source: 'حصن المسلم',
    count: 33,
  },
  {
    id: 'evening_8',
    text: 'لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير',
    category: 'evening',
    source: 'حصن المسلم',
    count: 10,
  },
  {
    id: 'evening_9',
    text: 'اللهم إني أعوذ بك من شر ما عملت ومن شر ما لم أعمل',
    category: 'evening',
    source: 'حصن المسلم',
  },
  {
    id: 'evening_10',
    text: 'اللهم إني أعوذ بك من النار',
    category: 'evening',
    source: 'حصن المسلم',
    count: 7,
  },
  {
    id: 'evening_11',
    text: 'اللهم عافني في بدني اللهم عافني في سمعي اللهم عافني في بصري',
    category: 'evening',
    source: 'حصن المسلم',
  },
  {
    id: 'evening_12',
    text: 'لا حول ولا قوة إلا بالله',
    category: 'evening',
    source: 'حصن المسلم',
    count: 10,
  },
  {
    id: 'evening_13',
    text: 'اللهم بك أمسينا وبك أصبحنا وعليك توكلنا وإليك أنبنا وإليك المصير',
    category: 'evening',
    source: 'حصن المسلم',
  },
  {
    id: 'evening_14',
    text: 'حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم',
    category: 'evening',
    source: 'حصن المسلم',
    count: 7,
  },
  {
    id: 'evening_15',
    text: 'ما شاء الله لا قوة إلا بالله',
    category: 'evening',
    source: 'حصن المسلم',
  },
];

// أذكار النوم
export const sleepAzkar: Dhikr[] = [
  {
    id: 'sleep_1',
    text: 'باسم الله أموت وأحيا',
    category: 'sleep',
    source: 'حصن المسلم',
  },
  {
    id: 'sleep_2',
    text: 'اللهم باسمك أموت وأحيا',
    category: 'sleep',
    source: 'حصن المسلم',
  },
  {
    id: 'sleep_3',
    text: 'الحمد لله الذي أطعمنا وسقانا وكفانا وآوانا فكم ممن لا كافي له ولا مؤوي',
    category: 'sleep',
    source: 'حصن المسلم',
  },
  {
    id: 'sleep_4',
    text: 'اللهم إني أسلمت وجهي إليك وفوضت أمري إليك وألجأت ظهري إليك',
    category: 'sleep',
    source: 'حصن المسلم',
  },
  {
    id: 'sleep_5',
    text: 'اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والإكرام',
    category: 'sleep',
    source: 'حصن المسلم',
  },
  {
    id: 'sleep_6',
    text: 'سبحان الله وبحمده',
    category: 'sleep',
    source: 'حصن المسلم',
    count: 33,
  },
  {
    id: 'sleep_7',
    text: 'الحمد لله',
    category: 'sleep',
    source: 'حصن المسلم',
    count: 33,
  },
  {
    id: 'sleep_8',
    text: 'لا إله إلا الله',
    category: 'sleep',
    source: 'حصن المسلم',
    count: 34,
  },
  {
    id: 'sleep_9',
    text: 'اللهم إني أعوذ بك من الكوابيس ومن سوء الأحلام',
    category: 'sleep',
    source: 'حصن المسلم',
  },
  {
    id: 'sleep_10',
    text: 'اللهم إني أعوذ بك من الخوف والفزع في النوم',
    category: 'sleep',
    source: 'حصن المسلم',
  },
];

// أذكار السوق
export const marketAzkar: Dhikr[] = [
  {
    id: 'market_1',
    text: 'لا إله إلا الله وحده لا شريك له له الملك وله الحمد يحيي ويميت وهو حي لا يموت بيده الخير وهو على كل شيء قدير',
    category: 'market',
    source: 'حصن المسلم',
  },
  {
    id: 'market_2',
    text: 'سبحان الله والحمد لله ولا إله إلا الله والله أكبر ولا حول ولا قوة إلا بالله العلي العظيم',
    category: 'market',
    source: 'حصن المسلم',
  },
  {
    id: 'market_3',
    text: 'اللهم إني أعوذ بك من الربا والظلم والغش',
    category: 'market',
    source: 'حصن المسلم',
  },
  {
    id: 'market_4',
    text: 'اللهم ارزقني رزقاً حلالاً طيباً بارك لي فيه',
    category: 'market',
    source: 'حصن المسلم',
  },
  {
    id: 'market_5',
    text: 'ما شاء الله لا قوة إلا بالله',
    category: 'market',
    source: 'حصن المسلم',
  },
];

// تسهيل الحفظ
export const facilitateMemoryAzkar: Dhikr[] = [
  {
    id: 'memory_1',
    text: 'اللهم إني أسألك فهماً نبوياً وعلماً نافعاً وحفظاً قوياً',
    category: 'memory',
    source: 'حصن المسلم',
  },
  {
    id: 'memory_2',
    text: 'اللهم اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي',
    category: 'memory',
    source: 'حصن المسلم',
  },
  {
    id: 'memory_3',
    text: 'رب اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي',
    category: 'memory',
    source: 'حصن المسلم',
  },
  {
    id: 'memory_4',
    text: 'اللهم علمني ما ينفعني وانفعني بما علمتني وزدني علماً',
    category: 'memory',
    source: 'حصن المسلم',
  },
  {
    id: 'memory_5',
    text: 'اللهم إني أسألك حفظاً في العلم وتطبيقاً صحيحاً',
    category: 'memory',
    source: 'حصن المسلم',
  },
  {
    id: 'memory_6',
    text: 'اللهم ذكرني ما نسيت وعلمني ما جهلت',
    category: 'memory',
    source: 'حصن المسلم',
  },
  {
    id: 'memory_7',
    text: 'رب زدني علماً',
    category: 'memory',
    source: 'حصن المسلم',
  },
  {
    id: 'memory_8',
    text: 'اللهم اجعل القرآن ربيع قلبي ونور صدري وجلاء حزني وذهاب همي',
    category: 'memory',
    source: 'حصن المسلم',
  },
];

// أفضل الأذكار في رمضان
export const ramadanAzkar: Dhikr[] = [
  {
    id: 'ramadan_1',
    text: 'اللهم إني أسألك أن تجعل شهر رمضان شهر توبة وإنابة وتقوى',
    category: 'ramadan',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_2',
    text: 'اللهم اجعلني من الصائمين القائمين في رمضان',
    category: 'ramadan',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_3',
    text: 'اللهم تقبل منا الصيام والقيام وصالح الأعمال',
    category: 'ramadan',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_4',
    text: 'سبحان الله والحمد لله ولا إله إلا الله والله أكبر',
    category: 'ramadan',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_5',
    text: 'اللهم إني أسألك رحمتك في رمضان وعفوك وعافيتك',
    category: 'ramadan',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_6',
    text: 'اللهم اجعل قيام ليلي في رمضان قياماً صحيحاً مقبولاً',
    category: 'ramadan',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_7',
    text: 'اللهم بارك لي في رمضان وأعنني على صيامه',
    category: 'ramadan',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_8',
    text: 'اللهم إني أسألك في هذا الشهر الكريم أن تغفر لي ذنوبي',
    category: 'ramadan',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_9',
    text: 'استغفر الله وأتوب إليه',
    category: 'ramadan',
    source: 'حصن المسلم',
    count: 100,
  },
  {
    id: 'ramadan_10',
    text: 'اللهم إني أسألك في رمضان أن تجعلني من المقبولين',
    category: 'ramadan',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_11',
    text: 'اللهم اجعل صيامي صيام من يصوم لك لا رياء فيه',
    category: 'ramadan',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_12',
    text: 'اللهم إني أسألك في هذا الشهر الفضيل أن تعتقني من النار',
    category: 'ramadan',
    source: 'حصن المسلم',
  },
];

// أفضل الأدعية في رمضان
export const ramadanDuas: Dhikr[] = [
  {
    id: 'ramadan_dua_1',
    text: 'اللهم إني أسألك في هذا الشهر الكريم أن تغفر لي ذنوبي وتقبل توبتي',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_2',
    text: 'اللهم اجعل قيامي في رمضان قياماً صحيحاً وصيامي صياماً مقبولاً',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_3',
    text: 'اللهم إني أسألك أن تجعلني من الذين يستمعون القول فيتبعون أحسنه',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_4',
    text: 'اللهم إني أسألك في رمضان أن تجعل عملي خالصاً لوجهك الكريم',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_5',
    text: 'اللهم اجعل ليلة القدر خيراً لي من ألف شهر',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_6',
    text: 'اللهم إني أسألك أن تجعلني ممن يدخل الجنة من غير حساب',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_7',
    text: 'اللهم إني أسألك رحمتك وعفوك وعافيتك في الدنيا والآخرة',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_8',
    text: 'اللهم اجعل صيامي صيام من يصوم لك لا رياء فيه ولا سمعة',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_9',
    text: 'اللهم إني أسألك أن تعتقني من النار في هذا الشهر الفضيل',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_10',
    text: 'اللهم إني أسألك أن تجعلني من المقبولين في هذا الشهر الكريم',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_11',
    text: 'اللهم بارك لي في رمضان وأعنني على صيامه وقيامه',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_12',
    text: 'اللهم اجعل هذا الشهر شهر توبة وإنابة وتقوى',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_13',
    text: 'اللهم إني أسألك أن تجعل عملي في رمضان عملاً صالحاً مقبولاً',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_14',
    text: 'اللهم إني أسألك أن تجعلني ممن يشهد ليلة القدر بقلب حاضر',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
  {
    id: 'ramadan_dua_15',
    text: 'اللهم إني أسألك في هذا الشهر الكريم أن تحفظني وتحفظ أهلي وديني',
    category: 'ramadan_dua',
    source: 'حصن المسلم',
  },
];

// تصنيفات الأذكار
export const categories: Category[] = [
  {
    id: 'morning',
    name: 'أذكار الصباح',
    description: 'أذكار الصباح من حصن المسلم',
    icon: 'sunrise',
    color: '#FF9800',
    dhikrs: morningAzkar,
  },
  {
    id: 'evening',
    name: 'أذكار المساء',
    description: 'أذكار المساء من حصن المسلم',
    icon: 'sunset',
    color: '#2196F3',
    dhikrs: eveningAzkar,
  },
  {
    id: 'sleep',
    name: 'أذكار النوم',
    description: 'أذكار النوم من حصن المسلم',
    icon: 'moon',
    color: '#9C27B0',
    dhikrs: sleepAzkar,
  },
  {
    id: 'market',
    name: 'أذكار السوق',
    description: 'أذكار السوق من حصن المسلم',
    icon: 'shopping-bag',
    color: '#4CAF50',
    dhikrs: marketAzkar,
  },
  {
    id: 'memory',
    name: 'تسهيل الحفظ',
    description: 'أدعية تسهيل الحفظ من حصن المسلم',
    icon: 'brain',
    color: '#F44336',
    dhikrs: facilitateMemoryAzkar,
  },
  {
    id: 'ramadan',
    name: 'أذكار رمضان',
    description: 'أفضل الأذكار والأدعية في رمضان',
    icon: 'crescent',
    color: '#00BCD4',
    dhikrs: [...ramadanAzkar, ...ramadanDuas],
  },
];

// دالة للحصول على جميع الأذكار
export function getAllAzkar(): Dhikr[] {
  return [
    ...morningAzkar,
    ...eveningAzkar,
    ...sleepAzkar,
    ...marketAzkar,
    ...facilitateMemoryAzkar,
    ...ramadanAzkar,
    ...ramadanDuas,
  ];
}

// دالة للبحث عن أذكار
export function searchAzkar(query: string): Dhikr[] {
  const lowerQuery = query.toLowerCase();
  return getAllAzkar().filter((dhikr) =>
    dhikr.text.toLowerCase().includes(lowerQuery)
  );
}

// دالة للحصول على أذكار حسب التصنيف
export function getAzkarByCategory(categoryId: string): Dhikr[] {
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.dhikrs : [];
}
