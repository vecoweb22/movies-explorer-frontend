const movies = [
  {
    _id: 1,
    country: 'Великобритания',
    director: 'Уилл Лавлейс, Дилан Сотерн',
    duration: 104,
    year: '2010',
    description: 'Затеянный по такому подозрительному поводу, как реюнион Blur в 2009-м году фильм начисто лишен присущего моменту пафоса и выхолощенности речей. Вернее, что-то похожее неизбежно возникает, когда ты видишь, как забитый до отказа Гайд-парк как в последний раз ревет «Song 2», но это лишь буквальное свидетельство того, что Blur — великая группа. К счастью, помимо прямых и косвенных свидетельств этого, в «No Distance Left to Run» хватает острых углов, неловких моментов и всего того сора, из которого рождаются по-настоящему отличные группы: помимо важных, но общеизвестных моментов (вроде соперничества с Oasis за первенство в том же бритпопе) визуализируются и те, что всегда оставались за кадром: наркотическая зависимость, неутихающие костры амбиций, ревность, обиды, слава — и все это блестяще снято на фоне истории того, что вообще происходило в Британии времен Блэра.',
    image: 'https://i.ytimg.com/vi/OwReCTWEotU/maxresdefault.jpg',
    nameRU: 'Без обратного пути',
    nameEN: 'No Distance Left to Run',
    trailerLink: 'https://www.youtube.com/watch?v=6iYxdghpJZY',
  },
  {
    _id: 2,
    country: 'Великобритания',
    director: 'Сурид Хассан',
    duration: 61,
    year: '2008',
    description: 'Фильм про самую многообещающую музыкальную субкультуру нулевых использует тот же ассоциативный ряд, что и искомая музыка: низкое, затянутое облаками небо южного Лондона, приглушенный свет, массивный бас, удары которого отдаются в грудной клетке, негромкая речь людей, предпочитающих не показывать свои лица. Впрочем, все ключевые для дабстепа люди здесь, конечно, имеются — Бенга, Скрим, Kode 9, Мэри Энн Хоббс и прочие, а география не сводится к одному только Кройдону — следом за исторической родиной дабстепа режиссер фильма исследует и другие очаги возгорания, включая Бразилию и Японию.',
    image: 'https://m.media-amazon.com/images/M/MV5BZTYyMWMyNGQtYTM2OS00OTM3LThiOTEtZGY4ODQxZmQ3MjYwXkEyXkFqcGdeQXVyODA1NzQ1MTY@._V1_.jpg',
    nameRU: 'Bassweight',
    nameEN: 'Bassweight',
    trailerLink: 'https://www.youtube.com/watch?v=dgSyC6me-jQ',
  },
  {
    _id: 3,
    country: 'Канада',
    director: 'Омар Маджид',
    duration: 80,
    year: '2009',
    description: "**Don't panic, we're Islamic!**\nПакистанские лесбиянки из Ванкувера, арабские хеви-металлисты из Чикаго, группа Vote Hezbollah, ведомая иранцем из Сан-Антонио, — все это невымышленные, сплошь настоящие персонажи, запечатленные в первом документальном свидетельстве о субкультуре исламского панка. Хотя до недавнего времени исламский панк, он же taqwacore, был художественным вымыслом, вышедшим из-под пера писателя-мусульманина Майкла Мухаммеда Найта, его книга сделала это явление вполне реальным, тогда как сам он стал главным героем фильма.\n",
    image: 'https://i0.wp.com/allonesthatgotaway.com/wp-content/uploads/2022/05/Taqwacore-double-feature.jpg?resize=665%2C375&ssl=1',
    nameRU: 'Taqwacore: The Birth of Punk Islam',
    nameEN: 'Taqwacore: The Birth of Punk Islam',
    trailerLink: 'https://www.youtube.com/watch?v=JMZ8DO9F4Mo',
  },
  {
    _id: 4,
    country: 'Бразилия',
    director: 'Уэсли Пенц',
    duration: 80,
    year: '2008',
    description: '**Визионер из трущоб**\nГимн бразильским гетто (они же фавелы), породившим байле-фанк — взбалмошную смесь музыки стран третьего мира, нелегального рейва и злого фанка, на волне которого вышли в люди Майя и Сантиголд. Снял фильм не кто иной, как Дипло (он же Уэсли Пенц) — диджей, продюсер и крестный отец двух вышеупомянутых артисток. Поэтому неудивительно, что вместо истории жанра в сухом остатке у него вышла увлекательная этнографическая экспедиция в трущобы Рио-де-Жанейро, где наркотики, секс и зашкаливающий уровень преступности играют в становлении байле-фанка не меньшую роль, чем сама музыка.\n',
    image: 'https://m.media-amazon.com/images/M/MV5BZTVlMjRjZWItYTU5OC00MGQ1LWFiY2MtYjQzZThlMzk0MDE5XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
    nameRU: 'Фавела на взрыве',
    nameEN: 'Favela on Blast',
    trailerLink: 'https://www.youtube.com/watch?v=Cugdwa7mndA',
  },
  {
    _id: 5,
    country: 'Великобритания',
    director: 'Джереми Деллер, Николас Абрахамс',
    duration: 72,
    year: '2008',
    description: '**Визионер из трущоб**\nГимн бразильским гетто (они же фавелы), породившим байле-фанк — взбалмошную смесь музыки стран третьего мира, нелегального рейва и злого фанка, на волне которого вышли в люди Майя и Сантиголд. Снял фильм не кто иной, как Дипло (он же Уэсли Пенц) — диджей, продюсер и крестный отец двух вышеупомянутых артисток. Поэтому неудивительно, что вместо истории жанра в сухом остатке у него вышла увлекательная этнографическая экспедиция в трущобы Рио-де-Жанейро, где наркотики, секс и зашкаливающий уровень преступности играют в становлении байле-фанка не меньшую роль, чем сама музыка.\n',
    image: 'https://m.media-amazon.com/images/M/MV5BYzkzY2FkYTMtNDlmOC00MzIzLWI1NGItNTYyYzc3MTc3OTk2XkEyXkFqcGdeQXVyNTE1MDU0NzY@._V1_.jpg',
    nameRU: 'Постеры, сошедшие со стен',
    nameEN: 'The Posters Came from the Walls',
    trailerLink: 'https://www.youtube.com/watch?v=VFMU3crg0sM',
  },
  {
    _id: 6,
    country: 'США',
    director: 'Джеффри Леви-Хинте',
    duration: 92,
    year: '2008',
    description: 'Мухаммед Али против Джеймса Брауна\nХроника трехдневного соул-фестиваля в Заире в 1974 году, приуроченного к историческому бою Мухаммеда Али против Джорджа Формана (также известного как Rumble in the Jungle), — кровь, пот и Джеймс Браун, садящийся на шпагат на глазах у стотысячного стадиона. Скроенный из того же архивного материала, что лег в основу знаменитой боксерской ленты «When We Were Kings», этот фильм представляет собой пошаговую инструкцию «Как сделать громадный фестиваль в Африке: от первой гайки до последней песни».\n',
    image: 'https://i.ytimg.com/vi/8OprNgiOq-I/maxresdefault.jpg',
    nameRU: 'Soul Power',
    nameEN: 'Soul Power',
    trailerLink: 'https://www.youtube.com/watch?v=8OprNgiOq-I',
  },
  {
    _id: 7,
    country: 'Германия',
    director: 'Ромуальд Кармакар',
    duration: 60,
    year: '2003',
    description: 'Панорамный взгляд на берлинский Лав-парад 2002-го года с трех разных точек зрения, каждая из которых образует отдельную новеллу. Первая, «Интро», показывает происходящее глазами людей, стоящих у входа в клуб Linientreu; вторая, «Габба», переносит зрителя в гущу толпы на площади Брайтшайдплац, где диджейские вертушки установлены даже в кебабной. И третья, «Хелл за работой», дает исчерпывающее представление о том, как DJ Hell сводит пластинки во время своего сета в WMF.',
    image: 'https://images.squarespace-cdn.com/content/v1/5724ab6027d4bd23efd03ef6/1546354891867-EITXB9IGJ5EP3WUNF49U/RK_196_cover_neuEX.jpg',
    nameRU: '196 ударов в минуту',
    nameEN: '196 BPM',
    trailerLink: 'https://www.youtube.com/watch?v=GsDRVpdgNJ4',
  },
  {
    _id: 8,
    country: 'США',
    director: 'П.Дэвид Эберсол',
    duration: 103,
    year: '2011',
    description: 'Это история о тех, кто выжил в 90-е, рассказанная от первого лица: Патти Шемель, барабанщица «золотого» состава группы Hole, открытая лесбиянка и подруга Курта Кобейна, сняла более сорока часов видео на 8-миллиметровую пленку еще в самом начале девяностых. Кобейн, держащий на руках дочь, Кортни Лав, бренчащая что-то на гитаре, сама Патти, зачитывающая в слух итоговой номер Rolling Stone за 94-й год — все это легло в основу Hit So Hard, в котором Дэвид Эбесол реконструирует историю всего беспробудного, безнадежного и до сих пор притягательного поколения 90-х',
    image: 'https://i.ytimg.com/vi/MHqK9mByWzE/maxresdefault.jpg',
    nameRU: 'Hit So Hard: Школа жизни Патти Шемель',
    nameEN: 'Hit So Hard: The Life & Near Death Story of Patty Schemel',
    trailerLink: 'https://www.youtube.com/watch?v=DMvFMeaGj_w',
  },
  {
    _id: 9,
    country: 'США, Германия, Великобритания, Нидерланды, Бельгия, Франция',
    director: 'Мари Лозье',
    duration: 65,
    year: '2011',
    description: 'Невероятная история любви Дженезиса Пи-Орриджа и его жены Леди Джей, вместе с ним игравшей в группе Psychic TV, — история, которая вряд ли сообщает что-то новое о природе индастриала, но определенно — о природе человека вообще и о природе Пи-Орриджа в частности. Нью-йоркская художница французского происхождения Мари Лозье задумала и начала снимать этот фильм семь лет тому назад — ходила в гости в их квартиру в Нью-Йорке, снимала Дженезиса, стоящего за плитой, и Джей с пучками петрушки и котом на шестнадцатимиллиметровую камеру, одевала их в дурацкие костюмы, ездила с Psychic TV в тур и следила за тем, как любовь заставляет человека отказаться от собственной личности, раствориться в другом человеке и стать одним целым с возлюбленным, используя метод сut-up Уилльяма Берроуза; когда Леди Джей умерла в 2007 году, Дженезис сделал ее татуировку почти во всю руку и до сих пор говорит «мы» вместо «я».',
    image: 'https://dthevoice.files.wordpress.com/2012/02/ballad-of-genesis-and-lady-jaye.jpg',
    nameRU: 'Баллада о Дженезисе и Леди Джей',
    nameEN: 'The Ballad of Genesis and Lady Jaye',
    trailerLink: 'https://www.youtube.com/watch?v=d8BX2FDrogo',
  },
  {
    _id: 10,
    country: 'США',
    director: 'Эми Берг',
    duration: 103,
    year: '2015',
    description: 'В родном Порт-Артуре она всегда чувствовала себя изгоем. Найдя близких по духу людей в Сан-Франциско, Дженис Джоплин стала суперзвездой — но совсем ненадолго. «Грустная маленькая девочка», один из немногих фильмов о быстрой, яркой и бурной жизни одной из главных рок-певиц в истории, сделан однажды номинировавшейся на «Оскар» Эми Берг без излишней сентиментальности, зато с большими почтением и любовью. О Джоплин нежно и без осуждения рассказывают ее друзья, родственники и игравшие с ней музыканты. Они вспоминают, как Дженис при первой встрече с Бобом Диланом заявила ему, что тоже станет знаменитой; как она не могла понять, почему не получается стать такой же, как все — и слава богу; как любила вообще весь мир — и почему это было проблемой. В перерывах между интервью — песни, записи концертов, бешеная энергетика которых прорывается через экран, и голос Кэт Пауэр, читающий письма, которые Дженис успела написать за свои 27.',
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/e8b520cb-a3e0-443a-ad10-2e4d42c400cb/1200x630',
    nameRU: 'Дженис: Маленькая девочка грустит',
    nameEN: 'Janis: Little Girl Blue',
    trailerLink: 'https://www.youtube.com/watch?v=Hefit0jYmfw',
  },
  {
    _id: 11,
    country: 'США, Великобритания',
    director: 'Стивен Кайак',
    duration: 93,
    year: '2016',
    description: '«Постоянно спрашивая: «Почему я здесь?» Что я делаю в этом мире?», я будто бы ищу причину для смерти. Вот почему я играю на барабанах так, будто никакого завтра не существует», — говорит в начале фильма Ёсики Хаяси, со-основатель одной из главных рок-групп Японии, X Japan.\n\nX Japan, в соответствии с названием, очень японская группа — в фильме рассказывается о чести, достоинстве, попытках выйти на западный рынок и том, что в любые моменты жизни ты должен быть готов к тому, чтобы выполнить волю императора. Все критики наперебой хвалят группу, ненадолго появляющиеся Стэн Ли, Джин Симмонс и Мэрилин Мэнсон склоняют голову в почтении, фанаты без ума от них, но на самом деле это фильм не об успехе и о том, как достичь в жизни всего, что хотел. «We Are X» лишь поначалу показывает только подготовку к важному для группы концерту в Madison Square Garden. Ёсики рассказывает о смерти отца и не стесняется показывать свои походы по врачам, лишь иногда отказываясь говорить о слишком личном. Тоси, вокалист и давний друг Ёсики, откровенно отвечает на вопросы о времени, проведённом в секте, и о временах, когда ему пришлось уйти из группы. Остальные участники скорее остаются на заднем плане — но лишь для того, чтобы подчеркнуть эту историю многолетней дружбы, пережившей смерть близких, срывы, непонимание и ссоры.',
    image: 'https://i.ytimg.com/vi/l66IFX-H5Wo/maxresdefault.jpg',
    nameRU: 'Мы – X',
    nameEN: 'We Are X',
    trailerLink: 'https://www.youtube.com/watch?v=l66IFX-H5Wo',
  },
  {
    _id: 12,
    country: 'Германия',
    director: 'Ромуальд Кармакар',
    duration: 89,
    year: '2005',
    description: 'Удивительная одиссея, проливающая свет на европейскую электронную сцену нулевых.\nМузыка здесь говорит сама за себя — в фильме нет ни единого интервью, только построенные на длинных планах съемки живых выступлений на самых разных площадках, от клуба Cocoon на Ибице до тесных лондонских залов. В камеру попадают как мало-мальски известные фигуры — T.Raumschmiere, Alter Ego, Captain Comatose, так и менее очевидные люди. Впрочем, главное здесь вовсе не имена, а точно переданное ощущение сопричастности всему происходящему с этой сценой. Фильм был показан на многих международных кинофестивалях, таких как фестиваль в Локарно и фестиваль Sonar, и стал лучшим немецким документальным фильмом 2005-го года по версии канала ARTE.\n',
    image: 'https://images.squarespace-cdn.com/content/v1/5724ab6027d4bd23efd03ef6/1546335191297-OOH99MD3SYTM0H4BPMLX/new_BTD-TR-1.test.jpg',
    nameRU: 'Между дьяволом и глубоким синим морем',
    nameEN: 'Between the Devil and Wide Blue Sea',
    trailerLink: 'https://www.youtube.com/watch?v=qUmIgNwRCP4',
  },
];

export default movies;