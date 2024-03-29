const dua = [
	{
		name : "Sübhaneke Duası",
		arab : "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ ﴿﴾ وَتَبَارَكَ اسْمُكَ ﴿﴾ وَتَعَالَى جَدُّكَ ﴿﴾ وَلاَ إِلَهَ غَيْرُكَ",
		turk : "Subhânekellâhumme ve bi hamdik ve tebârakesmuk ve teâlâ cedduk (ve celle senâuk*) ve lâ ilâhe ğayruk.",
		en : "Allah'ım! Sen eksik sıfatlardan pak ve uzaksın. Seni daima böyle tenzih eder ve överim. Senin adın mübarektir. Varlığın her şeyden üstündür. Senden başka ilah yoktur.",		
	},
	{
		name : "Ettehiyyâtu Duası",
		arab : "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ ﴿﴾السَّلامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ ﴿﴾ السَّلامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ ﴿﴾ أَشْهَدُ أَنْ لا إِلَهَ إِلا اللَّهُ ﴿﴾ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ"
		,
		turk : "Ettehiyyâtu lillâhi vessalevâtu vettayibât. Esselâmu aleyke eyyuhen-Nebiyyu ve rahmetullahi ve berakâtuhu. Esselâmu aleynâ ve alâ ibâdillâhis-Sâlihîn. Eşhedu en lâ ilâhe illallâh ve eşhedu enne Muhammeden abduhû ve Rasuluh.",
		en : "Dil ile, beden ve mal ile yapılan bütün ibadetler Allah'a dır. Ey Peygamber! Allah'ın selamı, rahmet ve bereketleri senin üzerine olsun. Selam bizim üzerimize ve Allah'ın bütün iyi kulları üzerine olsun. Şahitlik ederim ki, Allah'tan başka ilah yoktur. Yine şahitlik ederim ki, Muhammed, O'nun kulu ve elçisidir.",	
	},
	{
		name : "Allâhumme Salli Duası",
		arab : "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ ﴿﴾ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيم ﴿﴾ إِنَّكَ حَمِيدٌ مَجِيدٌ",
		turk : "Allâhumme salli alâ Muhammedin ve alâ âli Muhammed. Kemâ salleyte alâ İbrahime ve alâ âli İbrahim. İnneke hamidun mecîd.",
		en : "Allah'ım! Muhammed'e ve Muhammed'in ümmetine rahmet eyle; şerefini yücelt. İbrahim'e ve İbrahim'in ümmetine rahmet ettiğin gibi. Şüphesiz övülmeye layık yalnız sensin, şan ve şeref sahibi de sensin.",		
	},
	{
		name : "Allâhumme Barik Duası",
		arab : "اللَّهُمَّ بَارِكَ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ ﴿﴾ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيم ﴿﴾ إِنَّكَ حَمِيدٌ مَجِيدٌ",
		turk : "Allâhumme barik alâ Muhammedin ve alâ âli Muhammed. Kemâ barekte alâ İbrahîme ve alâ âli İbrahim. İnneke hamidun mecîd",
		en : "Allah'ım! Muhammed'e ve Muhammed'in ümmetine hayır ve bereket ver. İbrahim'e ve İbrahim'in ümmetine verdiğin gibi. Şüphesiz övülmeye layık yalnız sensin, şan ve şeref sahibi de sensin.",		
	},
	{
		name : "Rabbenâ âtina Duası",
		arab : "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
		turk : "Rabbenâ âtina fid'dunyâ haseneten ve fil'âhirati haseneten ve kınâ azâbennâr.",
		en : "Allah'ım! Bize dünyada iyilik ve güzellik, ahirette de iyilik, güzellik ver. Bizi ateş azabından koru.",		
	},	
	{
		name : "Rabbenâğfirlî Duası",
		arab : "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
		turk : "Rabbenâğfirlî ve li-vâlideyye ve lil-Mu'minine yevme yekûmu'l hisâb.",
		en : "Ey bizim Rabbimiz! Beni, anamı ve babamı ve bütün mü'minleri hesap gününde (herkesin sorguya çekileceği günde) bağışla.",		
	},
	{
		name : "Kunut 1 Duası",
		arab : "اَللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَ نَسْتَغْفِرُكَ وَ نَسْتَهْدِيكَ ﴿﴾ وَ نُؤْمِنُ بِكَ وَ نَتُوبُ اِلَيْكَ ﴿﴾ وَ نَتَوَكَّلُ عَلَيْكَ وَنُثْنِى عَلَيْك اْلخَيْرَ كُلَّهُ نَشْكُرُكَ وَ لاَ نَكْفُرُكَ ﴿﴾ وَ نَخْلَعُ وَ نَتْرُكُ مَنْ يَفْجُرُكَ",
		turk : "Allâhumme innâ nesteînuke ve nestağfiruke ve nestehdik. Ve nu'minu bike ve netûbu ileyk. Ve netevekkelu aleyke ve nusni aleykel-hayra kullehu neşkuruke ve lâ nekfuruke ve nahleu ve netruku men yefcuruk",
		en : "Allahım! Senden yardım isteriz, günahlarımızı bağışlamanı isteriz, razı olduğun şeylere hidayet etmeni isteriz. Sana inanırız, sana tevbe ederiz. Sana güveniriz. Bize verdiğin bütün nimetleri bilerek seni hayır ile överiz. Sana şükrederiz. Hiçbir nimetini inkar etmez ve onları başkasından bilmeyiz. Nimetlerini inkar eden ve sana karşı geleni bırakırız.",		
	},
	{
		name : "Kunut 2 Duası",
		arab : "اَللَّهُمَّ اِيَّاكَ نَعْبُدُ وَ لَكَ نُصَلِّى وَ نَسْجُدُ ﴿﴾ وَ اِلَيْكَ نَسعْىَ وَ نَحْفِدُ ﴿﴾ نَرْجُو رَحْمَتَكَ وَ نَخْشَى عَذَابَك ﴿﴾ اِنَّ عَذَابَكَ بِاْلكُفَّارِ مُلْحِقٌ",
		turk : "Allâhumme iyyâke na'budu ve leke nusalli ve nescudu ve ileyke nes'a ve nahfidu nercû rahmeteke ve nahşâ azâbeke inne azâbeke bilkuffâri mulhık",
		en : "Allahım! Biz yalnız sana kulluk ederiz. Namazı yalnız senin için kılarız, ancak sana secde ederiz. Yalnız sana koşar ve sana yaklaştıracak şeyleri kazanmaya çalışırız. İbadetlerini sevinçle yaparız. Rahmetinin devamını ve çoğalmasını dileriz. Azabından korkarız, şüphesiz senin azabın kafirlere ve inançsızlara ulaşır.",		
	},
];