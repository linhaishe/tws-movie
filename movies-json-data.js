const data = [
{"id":"1291545","alt":"https://movie.douban.com/subject/1291545/","year":"2003","title":"大鱼","rating":"8.7","original_title":"Big Fish","directors":"蒂姆·波顿","casts":"伊万·麦克格雷格,阿尔伯特·芬尼,比利·克鲁德普","genres":"剧情,家庭,奇幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p692813374.jpg"}
,
{"id":"1291546","alt":"https://movie.douban.com/subject/1291546/","year":"1993","title":"霸王别姬","rating":"9.5","original_title":"霸王别姬","directors":"陈凯歌","casts":"张国荣,张丰毅,巩俐","genres":"剧情,爱情,同性","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910813120.jpg"}
,
{"id":"1291548","alt":"https://movie.douban.com/subject/1291548/","year":"1989","title":"死亡诗社","rating":"8.9","original_title":"Dead Poets Society","directors":"彼得·威尔","casts":"罗宾·威廉姆斯,罗伯特·肖恩·莱纳德,伊桑·霍克","genres":"剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910824340.jpg"}
,
{"id":"1291549","alt":"https://movie.douban.com/subject/1291549/","year":"2004","title":"放牛班的春天","rating":"9.2","original_title":"Les choristes","directors":"克里斯托夫·巴拉蒂","casts":"热拉尔·朱尼奥,让-巴蒂斯特·莫尼耶,弗朗索瓦·贝莱昂","genres":"剧情,音乐","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910824951.jpg"}
,
{"id":"1291552","alt":"https://movie.douban.com/subject/1291552/","year":"2003","title":"指环王3：王者无敌","rating":"9.1","original_title":"The Lord of the Rings: The Return of the King","directors":"彼得·杰克逊","casts":"维果·莫腾森,伊利亚·伍德,西恩·奥斯汀","genres":"剧情,动作,奇幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910825503.jpg"}
,
{"id":"1291557","alt":"https://movie.douban.com/subject/1291557/","year":"2000","title":"花样年华","rating":"8.5","original_title":"花樣年華","directors":"王家卫","casts":"梁朝伟,张曼玉,潘迪华","genres":"剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910828286.jpg"}
,
{"id":"1291560","alt":"https://movie.douban.com/subject/1291560/","year":"1988","title":"龙猫","rating":"9.1","original_title":"となりのトトロ","directors":"宫崎骏","casts":"日高法子,坂本千夏,岛本须美","genres":"动画,奇幻","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1910829638.jpg"}
,
{"id":"1291561","alt":"https://movie.douban.com/subject/1291561/","year":"2001","title":"千与千寻","rating":"9.2","original_title":"千と千尋の神隠し","directors":"宫崎骏","casts":"柊瑠美,入野自由,夏木真理","genres":"剧情,动画,奇幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910830216.jpg"}
,
{"id":"1291568","alt":"https://movie.douban.com/subject/1291568/","year":"1953","title":"东京物语","rating":"9.2","original_title":"東京物語","directors":"小津安二郎","casts":"笠智众,原节子,杉村春子","genres":"剧情,家庭","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910832390.jpg"}
,
{"id":"1291571","alt":"https://movie.douban.com/subject/1291571/","year":"2001","title":"指环王1：魔戒再现","rating":"8.9","original_title":"The Lord of the Rings: The Fellowship of the Ring","directors":"彼得·杰克逊","casts":"伊利亚·伍德,西恩·奥斯汀,伊恩·麦克莱恩","genres":"剧情,动作,奇幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1354436051.jpg"}
,
{"id":"1291572","alt":"https://movie.douban.com/subject/1291572/","year":"2002","title":"指环王2：双塔奇兵","rating":"8.9","original_title":"The Lord of the Rings: The Two Towers","directors":"彼得·杰克逊","casts":"伊利亚·伍德,西恩·奥斯汀,伊恩·麦克莱恩","genres":"剧情,动作,奇幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p909265336.jpg"}
,
{"id":"1291578","alt":"https://movie.douban.com/subject/1291578/","year":"2002","title":"冰川时代","rating":"8.4","original_title":"Ice Age","directors":"卡洛斯·萨尔达尼亚,克里斯·韦奇","casts":"雷·罗马诺,约翰·雷吉扎莫,丹尼斯·利瑞","genres":"喜剧,动画,冒险","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1910895719.jpg"}
,
{"id":"1291579","alt":"https://movie.douban.com/subject/1291579/","year":"2001","title":"怪兽电力公司","rating":"8.6","original_title":"Monsters, Inc.","directors":"彼特·道格特,大卫·斯沃曼,李·昂克里奇","casts":"约翰·古德曼,比利·克里斯托,玛丽·吉布斯","genres":"喜剧,动画,儿童","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1805127697.jpg"}
,
{"id":"1291583","alt":"https://movie.douban.com/subject/1291583/","year":"1986","title":"天空之城","rating":"9","original_title":"天空の城ラピュタ","directors":"宫崎骏","casts":"田中真弓,横泽启子,初井言荣","genres":"动画,奇幻,冒险","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1446261379.jpg"}
,
{"id":"1291585","alt":"https://movie.douban.com/subject/1291585/","year":"1984","title":"风之谷","rating":"8.8","original_title":"風の谷のナウシカ","directors":"宫崎骏","casts":"岛本须美,松田洋治,榊原良子","genres":"科幻,动画,奇幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1917567652.jpg"}
,
{"id":"1291818","alt":"https://movie.douban.com/subject/1291818/","year":"1994","title":"饮食男女","rating":"9","original_title":"飲食男女","directors":"李安","casts":"吴倩莲,杨贵媚,王渝文","genres":"剧情,家庭","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910899751.jpg"}
,
{"id":"1291822","alt":"https://movie.douban.com/subject/1291822/","year":"2004","title":"卢旺达饭店","rating":"8.8","original_title":"Hotel Rwanda","directors":"特瑞·乔治","casts":"唐·钱德尔,苏菲·奥康内多,杰昆·菲尼克斯","genres":"剧情,历史,战争","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2159368352.jpg"}
,
{"id":"1291824","alt":"https://movie.douban.com/subject/1291824/","year":"2001","title":"黑鹰坠落","rating":"8.5","original_title":"Black Hawk Down","directors":"雷德利·斯科特","casts":"乔什·哈奈特,伊万·麦克格雷格,汤姆·塞兹摩尔","genres":"动作,历史,战争","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910900710.jpg"}
,
{"id":"1291828","alt":"https://movie.douban.com/subject/1291828/","year":"1988","title":"天堂电影院","rating":"9.1","original_title":"Nuovo Cinema Paradiso","directors":"朱塞佩·托纳多雷","casts":"安东内拉·阿蒂利,恩佐·卡拉瓦勒,艾萨·丹尼埃利","genres":"剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910901025.jpg"}
,
{"id":"1291832","alt":"https://movie.douban.com/subject/1291832/","year":"1994","title":"低俗小说","rating":"8.7","original_title":"Pulp Fiction","directors":"昆汀·塔伦蒂诺","casts":"约翰·特拉沃尔塔,乌玛·瑟曼,阿曼达·普拉莫","genres":"剧情,喜剧,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910902213.jpg"}
,
{"id":"1291841","alt":"https://movie.douban.com/subject/1291841/","year":"1972","title":"教父","rating":"9.2","original_title":"The Godfather","directors":"弗朗西斯·福特·科波拉","casts":"马龙·白兰度,阿尔·帕西诺,詹姆斯·肯恩","genres":"剧情,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910907590.jpg"}
,
{"id":"1291843","alt":"https://movie.douban.com/subject/1291843/","year":"1999","title":"黑客帝国","rating":"8.8","original_title":"The Matrix","directors":"莉莉·沃卓斯基,拉娜·沃卓斯基","casts":"基努·里维斯,凯瑞-安·莫斯,劳伦斯·菲什伯恩","genres":"动作,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910908765.jpg"}
,
{"id":"1291844","alt":"https://movie.douban.com/subject/1291844/","year":"1991","title":"终结者2：审判日","rating":"8.5","original_title":"Terminator 2: Judgment Day","directors":"詹姆斯·卡梅隆","casts":"阿诺·施瓦辛格,琳达·汉密尔顿,爱德华·福隆","genres":"动作,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910909085.jpg"}
,
{"id":"1291853","alt":"https://movie.douban.com/subject/1291853/","year":"1996","title":"英国病人","rating":"8.4","original_title":"The English Patient","directors":"安东尼·明格拉","casts":"拉尔夫·费因斯,克里斯汀·斯科特·托马斯,朱丽叶·比诺什","genres":"爱情,剧情,战争","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2408623752.jpg"}
,
{"id":"1291858","alt":"https://movie.douban.com/subject/1291858/","year":"2000","title":"鬼子来了","rating":"9.2","original_title":"鬼子来了","directors":"姜文","casts":"姜文,香川照之,袁丁","genres":"剧情,战争","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1181775734.jpg"}
,
{"id":"1291870","alt":"https://movie.douban.com/subject/1291870/","year":"1988","title":"雨人","rating":"8.6","original_title":"Rain Man","directors":"巴瑞·莱文森","casts":"达斯汀·霍夫曼,汤姆·克鲁斯,瓦莱丽亚·戈利诺","genres":"剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p942376281.jpg"}
,
{"id":"1291875","alt":"https://movie.douban.com/subject/1291875/","year":"1994","title":"阳光灿烂的日子","rating":"8.7","original_title":"阳光灿烂的日子","directors":"姜文","casts":"夏雨,宁静,陶虹","genres":"剧情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p967457079.jpg"}
,
{"id":"1291879","alt":"https://movie.douban.com/subject/1291879/","year":"1950","title":"罗生门","rating":"8.7","original_title":"羅生門","directors":"黑泽明","casts":"三船敏郎,千秋实,京町子","genres":"犯罪,剧情,悬疑","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1864872647.jpg"}
,
{"id":"1291990","alt":"https://movie.douban.com/subject/1291990/","year":"2004","title":"爱在日落黄昏时","rating":"8.7","original_title":"Before Sunset","directors":"理查德·林克莱特","casts":"伊桑·霍克,朱莉·德尔佩,弗农·多布切夫","genres":"剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910924055.jpg"}
,
{"id":"1291992","alt":"https://movie.douban.com/subject/1291992/","year":"1991","title":"末路狂花","rating":"8.7","original_title":"Thelma & Louise","directors":"雷德利·斯科特","casts":"吉娜·戴维斯,苏珊·萨兰登,哈威·凯特尔","genres":"犯罪,剧情,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p794583044.jpg"}
,
{"id":"1291999","alt":"https://movie.douban.com/subject/1291999/","year":"1994","title":"重庆森林","rating":"8.6","original_title":"重慶森林","directors":"王家卫","casts":"林青霞,金城武,梁朝伟","genres":"剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p792381411.jpg"}
,
{"id":"1292000","alt":"https://movie.douban.com/subject/1292000/","year":"1999","title":"搏击俱乐部","rating":"9","original_title":"Fight Club","directors":"大卫·芬奇","casts":"爱德华·诺顿,布拉德·皮特,海伦娜·伯翰·卡特","genres":"剧情,动作,悬疑","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1910926158.jpg"}
,
{"id":"1292001","alt":"https://movie.douban.com/subject/1292001/","year":"1998","title":"海上钢琴师","rating":"9.2","original_title":"La leggenda del pianista sull'oceano","directors":"朱塞佩·托纳多雷","casts":"蒂姆·罗斯,普路特·泰勒·文斯,比尔·努恩","genres":"剧情,音乐","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p511146957.jpg"}
,
{"id":"1292052","alt":"https://movie.douban.com/subject/1292052/","year":"1994","title":"肖申克的救赎","rating":"9.6","original_title":"The Shawshank Redemption","directors":"弗兰克·德拉邦特","casts":"蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿","genres":"犯罪,剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p480747492.jpg"}
,
{"id":"1292056","alt":"https://movie.douban.com/subject/1292056/","year":"2002","title":"蝴蝶","rating":"8.6","original_title":"Le Papillon","directors":"费利普·弥勒","casts":"米歇尔·塞罗尔,柯莱儿·布翁尼许,娜德·蒂约","genres":"剧情,儿童,喜剧","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1451436171.jpg"}
,
{"id":"1292062","alt":"https://movie.douban.com/subject/1292062/","year":"1999","title":"美国丽人","rating":"8.4","original_title":"American Beauty","directors":"萨姆·门德斯","casts":"凯文·史派西,安妮特·贝宁,索拉·伯奇","genres":"剧情,家庭","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p571671715.jpg"}
,
{"id":"1292063","alt":"https://movie.douban.com/subject/1292063/","year":"1997","title":"美丽人生","rating":"9.5","original_title":"La vita è bella","directors":"罗伯托·贝尼尼","casts":"罗伯托·贝尼尼,尼可莱塔·布拉斯基,乔治·坎塔里尼","genres":"剧情,喜剧,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p510861873.jpg"}
,
{"id":"1292064","alt":"https://movie.douban.com/subject/1292064/","year":"1998","title":"楚门的世界","rating":"9","original_title":"The Truman Show","directors":"彼得·威尔","casts":"金·凯瑞,劳拉·琳妮,艾德·哈里斯","genres":"剧情,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p479682972.jpg"}
,
{"id":"1292208","alt":"https://movie.douban.com/subject/1292208/","year":"2002","title":"上帝之城","rating":"8.9","original_title":"Cidade de Deus","directors":"卡迪亚·兰德,费尔南多·梅里尔斯","casts":"亚历桑德雷·罗德里格斯,莱安德鲁·菲尔米诺,菲利佩·哈根森","genres":"犯罪,剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p455677490.jpg"}
,
{"id":"1292213","alt":"https://movie.douban.com/subject/1292213/","year":"1995","title":"大话西游之大圣娶亲","rating":"9.2","original_title":"西遊記大結局之仙履奇緣","directors":"刘镇伟","casts":"周星驰,吴孟达,朱茵","genres":"动作,冒险,喜剧","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2455050536.jpg"}
,
{"id":"1292214","alt":"https://movie.douban.com/subject/1292214/","year":"1995","title":"非常嫌疑犯","rating":"8.6","original_title":"The Usual Suspects","directors":"布莱恩·辛格","casts":"史蒂芬·鲍德温,加布里埃尔·伯恩,本尼西奥·德尔·托罗","genres":"剧情,犯罪,悬疑","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p470383576.jpg"}
,
{"id":"1292215","alt":"https://movie.douban.com/subject/1292215/","year":"2001","title":"天使爱美丽","rating":"8.7","original_title":"Le fabuleux destin d'Amélie Poulain","directors":"让-皮埃尔·热内","casts":"奥黛丽·塔图,马修·卡索维茨,吕菲斯","genres":"喜剧,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p803896904.jpg"}
,
{"id":"1292217","alt":"https://movie.douban.com/subject/1292217/","year":"2001","title":"穆赫兰道","rating":"8.3","original_title":"Mulholland Dr.","directors":"大卫·林奇","casts":"娜奥米·沃茨,劳拉·哈灵,安·米勒","genres":"剧情,悬疑,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p792248233.jpg"}
,
{"id":"1292218","alt":"https://movie.douban.com/subject/1292218/","year":"1998","title":"中央车站","rating":"8.7","original_title":"Central do Brasil","directors":"沃尔特·塞勒斯","casts":"费尔兰德·蒙特纳哥,马里利娅·佩拉,文尼西斯·狄·奥利维拉","genres":"剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2239441575.jpg"}
,
{"id":"1292220","alt":"https://movie.douban.com/subject/1292220/","year":"1995","title":"情书","rating":"8.8","original_title":"Love Letter","directors":"岩井俊二","casts":"中山美穗,丰川悦司,酒井美纪","genres":"剧情,爱情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p449897379.jpg"}
,
{"id":"1292223","alt":"https://movie.douban.com/subject/1292223/","year":"1995","title":"七宗罪","rating":"8.7","original_title":"Se7en","directors":"大卫·芬奇","casts":"摩根·弗里曼,布拉德·皮特,凯文·史派西","genres":"剧情,犯罪,悬疑","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p457631605.jpg"}
,
{"id":"1292224","alt":"https://movie.douban.com/subject/1292224/","year":"1975","title":"飞越疯人院","rating":"9","original_title":"One Flew Over the Cuckoo's Nest","directors":"米洛斯·福尔曼","casts":"杰克·尼科尔森,丹尼·德维托,克里斯托弗·洛伊德","genres":"剧情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p792238287.jpg"}
,
{"id":"1292233","alt":"https://movie.douban.com/subject/1292233/","year":"1971","title":"发条橙","rating":"8.4","original_title":"A Clockwork Orange","directors":"斯坦利·库布里克","casts":"马尔科姆·麦克道威尔,帕特里克·马基,迈克尔·贝茨","genres":"犯罪,剧情,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p529908155.jpg"}
,
{"id":"1292262","alt":"https://movie.douban.com/subject/1292262/","year":"1984","title":"美国往事","rating":"9.1","original_title":"Once Upon a Time in America","directors":"赛尔乔·莱翁内","casts":"罗伯特·德尼罗,詹姆斯·伍兹,伊丽莎白·麦戈文","genres":"犯罪,剧情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p477229647.jpg"}
,
{"id":"1292270","alt":"https://movie.douban.com/subject/1292270/","year":"2000","title":"梦之安魂曲","rating":"8.7","original_title":"Requiem for a Dream","directors":"达伦·阿伦诺夫斯基","casts":"艾伦·伯斯汀,杰瑞德·莱托,詹妮弗·康纳利","genres":"剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p884936202.jpg"}
,
{"id":"1292274","alt":"https://movie.douban.com/subject/1292274/","year":"2004","title":"幸福终点站","rating":"8.6","original_title":"The Terminal","directors":"史蒂文·斯皮尔伯格","casts":"汤姆·汉克斯,凯瑟琳·泽塔-琼斯,斯坦利·图齐","genres":"喜剧,剧情,爱情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p854757687.jpg"}
,
{"id":"1292281","alt":"https://movie.douban.com/subject/1292281/","year":"2001","title":"迁徙的鸟","rating":"9.1","original_title":"Le peuple migrateur","directors":"雅克·贝汉, 雅克·克鲁奥德,米歇尔·德巴","casts":"雅克·贝汉","genres":"纪录片","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2238274168.jpg"}
,
{"id":"1292287","alt":"https://movie.douban.com/subject/1292287/","year":"1992","title":"新龙门客栈","rating":"8.4","original_title":"新龍門客棧","directors":"李惠民","casts":"张曼玉,林青霞,梁家辉","genres":"剧情,动作,武侠","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1421018669.jpg"}
,
{"id":"1292328","alt":"https://movie.douban.com/subject/1292328/","year":"1994","title":"东邪西毒","rating":"8.6","original_title":"東邪西毒","directors":"王家卫","casts":"张国荣,张曼玉,梁朝伟","genres":"剧情,动作,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1982176012.jpg"}
,
{"id":"1292329","alt":"https://movie.douban.com/subject/1292329/","year":"1991","title":"牯岭街少年杀人事件","rating":"8.7","original_title":"牯嶺街少年殺人事件","directors":"杨德昌","casts":"张震,杨静怡,张国柱","genres":"剧情,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p848381236.jpg"}
,
{"id":"1292343","alt":"https://movie.douban.com/subject/1292343/","year":"2004","title":"蝴蝶效应","rating":"8.7","original_title":"The Butterfly Effect","directors":"埃里克·布雷斯,J·麦基·格鲁伯","casts":"阿什顿·库彻,梅罗拉·沃特斯,艾米·斯马特","genres":"剧情,悬疑,科幻","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2209066019.jpg"}
,
{"id":"1292365","alt":"https://movie.douban.com/subject/1292365/","year":"1994","title":"活着","rating":"9.1","original_title":"活着","directors":"张艺谋","casts":"葛优,巩俐,姜武","genres":"剧情,家庭","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2173575484.jpg"}
,
{"id":"1292370","alt":"https://movie.douban.com/subject/1292370/","year":"1990","title":"剪刀手爱德华","rating":"8.7","original_title":"Edward Scissorhands","directors":"蒂姆·波顿","casts":"约翰尼·德普,薇诺娜·瑞德,黛安·韦斯特","genres":"剧情,奇幻,爱情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p480956937.jpg"}
,
{"id":"1292401","alt":"https://movie.douban.com/subject/1292401/","year":"2003","title":"真爱至上","rating":"8.5","original_title":"Love Actually","directors":"理查德·柯蒂斯","casts":"休·格兰特,科林·费尔斯,艾玛·汤普森","genres":"喜剧,剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p475600770.jpg"}
,
{"id":"1292402","alt":"https://movie.douban.com/subject/1292402/","year":"2000","title":"西西里的美丽传说","rating":"8.7","original_title":"Malèna","directors":"朱塞佩·托纳多雷","casts":"莫妮卡·贝鲁奇,朱塞佩·苏尔法罗,Luciano Federico","genres":"剧情,战争,情色","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p792400696.jpg"}
,
{"id":"1292434","alt":"https://movie.douban.com/subject/1292434/","year":"2000","title":"一一","rating":"8.9","original_title":"一一","directors":"杨德昌","casts":"吴念真,李凯莉,金燕玲","genres":"剧情,爱情,家庭","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2119675128.jpg"}
,
{"id":"1292528","alt":"https://movie.douban.com/subject/1292528/","year":"1996","title":"猜火车","rating":"8.5","original_title":"Trainspotting","directors":"丹尼·博伊尔","casts":"伊万·麦克格雷格,艾文·布莱纳,约翰尼·李·米勒","genres":"犯罪,剧情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p513567548.jpg"}
,
{"id":"1292656","alt":"https://movie.douban.com/subject/1292656/","year":"1997","title":"心灵捕手","rating":"8.7","original_title":"Good Will Hunting","directors":"格斯·范·桑特","casts":"马特·达蒙,罗宾·威廉姆斯,本·阿弗莱克","genres":"剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p480965695.jpg"}
,
{"id":"1292659","alt":"https://movie.douban.com/subject/1292659/","year":"1997","title":"变脸","rating":"8.4","original_title":"Face/Off","directors":"吴宇森","casts":"约翰·特拉沃尔塔,尼古拉斯·凯奇,琼·艾伦","genres":"动作,科幻,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2173855883.jpg"}
,
{"id":"1292679","alt":"https://movie.douban.com/subject/1292679/","year":"1997","title":"春光乍泄","rating":"8.8","original_title":"春光乍洩","directors":"王家卫","casts":"张国荣,梁朝伟,张震","genres":"剧情,爱情,同性","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p465939041.jpg"}
,
{"id":"1292720","alt":"https://movie.douban.com/subject/1292720/","year":"1994","title":"阿甘正传","rating":"9.4","original_title":"Forrest Gump","directors":"罗伯特·泽米吉斯","casts":"汤姆·汉克斯,罗宾·怀特,加里·西尼斯","genres":"剧情,爱情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p510876377.jpg"}
,
{"id":"1292722","alt":"https://movie.douban.com/subject/1292722/","year":"1997","title":"泰坦尼克号","rating":"9.2","original_title":"Titanic","directors":"詹姆斯·卡梅隆","casts":"莱昂纳多·迪卡普里奥,凯特·温丝莱特,比利·赞恩","genres":"剧情,爱情,灾难","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p457760035.jpg"}
,
{"id":"1292728","alt":"https://movie.douban.com/subject/1292728/","year":"1996","title":"勇闯夺命岛","rating":"8.5","original_title":"The Rock","directors":"迈克尔·贝","casts":"肖恩·康纳利,尼古拉斯·凯奇,艾德·哈里斯","genres":"动作,冒险","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p636048104.jpg"}
,
{"id":"1292849","alt":"https://movie.douban.com/subject/1292849/","year":"1998","title":"拯救大兵瑞恩","rating":"8.8","original_title":"Saving Private Ryan","directors":"史蒂文·斯皮尔伯格","casts":"汤姆·汉克斯,汤姆·塞兹摩尔,爱德华·伯恩斯","genres":"剧情,历史,战争","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1014542496.jpg"}
,
{"id":"1293172","alt":"https://movie.douban.com/subject/1293172/","year":"1987","title":"末代皇帝","rating":"8.9","original_title":"The Last Emperor","directors":"贝纳尔多·贝托鲁奇","casts":"尊龙,陈冲,彼得·奥图尔","genres":"剧情,传记,历史","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p452088641.jpg"}
,
{"id":"1293181","alt":"https://movie.douban.com/subject/1293181/","year":"1960","title":"惊魂记","rating":"8.8","original_title":"Psycho","directors":"阿尔弗雷德·希区柯克","casts":"珍妮特·利,安东尼·博金斯,维拉·迈尔斯","genres":"悬疑,恐怖","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1021883305.jpg"}
,
{"id":"1293182","alt":"https://movie.douban.com/subject/1293182/","year":"1957","title":"十二怒汉","rating":"9.4","original_title":"12 Angry Men","directors":"西德尼·吕美特","casts":"亨利·方达,马丁·鲍尔萨姆,约翰·菲德勒","genres":"剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2173577632.jpg"}
,
{"id":"1293318","alt":"https://movie.douban.com/subject/1293318/","year":"1988","title":"萤火虫之墓","rating":"8.7","original_title":"火垂るの墓","directors":"高畑勋","casts":"辰己努,白石绫乃,志乃原良子","genres":"动画,剧情,战争","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1157334208.jpg"}
,
{"id":"1293350","alt":"https://movie.douban.com/subject/1293350/","year":"1998","title":"两杆大烟枪","rating":"9","original_title":"Lock, Stock and Two Smoking Barrels","directors":"盖·里奇","casts":"杰森·弗莱明,德克斯特·弗莱彻,尼克·莫兰","genres":"剧情,喜剧,犯罪","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p792443418.jpg"}
,
{"id":"1293359","alt":"https://movie.douban.com/subject/1293359/","year":"1999","title":"菊次郎的夏天","rating":"8.7","original_title":"菊次郎の夏","directors":"北野武","casts":"北野武,关口雄介,岸本加世子","genres":"剧情,喜剧","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p751835224.jpg"}
,
{"id":"1293460","alt":"https://movie.douban.com/subject/1293460/","year":"1952","title":"雨中曲","rating":"8.9","original_title":"Singin' in the Rain","directors":"斯坦利·多南,吉恩·凯利","casts":"吉恩·凯利,唐纳德·奥康纳,黛比·雷诺斯","genres":"喜剧,歌舞,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1612355875.jpg"}
,
{"id":"1293544","alt":"https://movie.douban.com/subject/1293544/","year":"1991","title":"沉默的羔羊","rating":"8.7","original_title":"The Silence of the Lambs","directors":"乔纳森·戴米","casts":"朱迪·福斯特,安东尼·霍普金斯,斯科特·格伦","genres":"剧情,犯罪,惊悚","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1593414327.jpg"}
,
{"id":"1293764","alt":"https://movie.douban.com/subject/1293764/","year":"1990","title":"与狼共舞","rating":"8.9","original_title":"Dances with Wolves","directors":"凯文·科斯特纳","casts":"凯文·科斯特纳,玛丽·麦克唐纳,格雷厄姆·格林","genres":"冒险,剧情,西部","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p499158228.jpg"}
,
{"id":"1293839","alt":"https://movie.douban.com/subject/1293839/","year":"1953","title":"罗马假日","rating":"8.9","original_title":"Roman Holiday","directors":"威廉·惠勒","casts":"奥黛丽·赫本,格利高里·派克,埃迪·艾伯特","genres":"喜剧,剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2189265085.jpg"}
,
{"id":"1293908","alt":"https://movie.douban.com/subject/1293908/","year":"1931","title":"城市之光","rating":"9.2","original_title":"City Lights","directors":"查理·卓别林","casts":"查理·卓别林,弗吉尼亚·切瑞尔,佛罗伦斯·李","genres":"喜剧,剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2099815842.jpg"}
,
{"id":"1293929","alt":"https://movie.douban.com/subject/1293929/","year":"1995","title":"廊桥遗梦","rating":"8.5","original_title":"The Bridges of Madison County","directors":"克林特·伊斯特伍德","casts":"克林特·伊斯特伍德,梅丽尔·斯特里普,安妮·科利","genres":"剧情,爱情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2190558219.jpg"}
,
{"id":"1293964","alt":"https://movie.douban.com/subject/1293964/","year":"1940","title":"魂断蓝桥","rating":"8.8","original_title":"Waterloo Bridge","directors":"茂文·勒鲁瓦","casts":"费雯·丽,罗伯特·泰勒,露塞尔·沃特森","genres":"剧情,战争,爱情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2351134499.jpg"}
,
{"id":"1294240","alt":"https://movie.douban.com/subject/1294240/","year":"1990","title":"教父3","rating":"8.7","original_title":"The Godfather: Part III","directors":"弗朗西斯·福特·科波拉","casts":"阿尔·帕西诺,黛安·基顿,塔莉娅·夏尔","genres":"剧情,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2169664351.jpg"}
,
{"id":"1294371","alt":"https://movie.douban.com/subject/1294371/","year":"1936","title":"摩登时代","rating":"9.2","original_title":"Modern Times","directors":"查理·卓别林","casts":"查理·卓别林,宝莲·高黛,亨利·伯格曼","genres":"喜剧,剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2173707976.jpg"}
,
{"id":"1294408","alt":"https://movie.douban.com/subject/1294408/","year":"1965","title":"音乐之声","rating":"8.9","original_title":"The Sound of Music","directors":"罗伯特·怀斯","casts":"朱莉·安德鲁斯,克里斯托弗·普卢默,埃琳诺·帕克","genres":"剧情,爱情,歌舞","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p453788577.jpg"}
,
{"id":"1294638","alt":"https://movie.douban.com/subject/1294638/","year":"1982","title":"E.T. 外星人","rating":"8.5","original_title":"E.T.: The Extra-Terrestrial","directors":"史蒂文·斯皮尔伯格","casts":"亨利·托马斯,迪·沃伦斯,罗伯特·麦克纳夫顿","genres":"剧情,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p984732992.jpg"}
,
{"id":"1294639","alt":"https://movie.douban.com/subject/1294639/","year":"1995","title":"勇敢的心","rating":"8.8","original_title":"Braveheart","directors":"梅尔·吉布森","casts":"梅尔·吉布森,苏菲·玛索,布莱恩·考克斯","genres":"动作,传记,剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1374546770.jpg"}
,
{"id":"1295038","alt":"https://movie.douban.com/subject/1295038/","year":"2001","title":"哈利·波特与魔法石","rating":"8.6","original_title":"Harry Potter and the Sorcerer's Stone","directors":"克里斯·哥伦布","casts":"丹尼尔·雷德克里夫,艾玛·沃森,鲁伯特·格林特","genres":"奇幻,冒险","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p804947166.jpg"}
,
{"id":"1295124","alt":"https://movie.douban.com/subject/1295124/","year":"1993","title":"辛德勒的名单","rating":"9.4","original_title":"Schindler's List","directors":"史蒂文·斯皮尔伯格","casts":"连姆·尼森,本·金斯利,拉尔夫·费因斯","genres":"剧情,历史,战争","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p492406163.jpg"}
,
{"id":"1295399","alt":"https://movie.douban.com/subject/1295399/","year":"1954","title":"七武士","rating":"9.2","original_title":"七人の侍","directors":"黑泽明","casts":"三船敏郎,志村乔,稻叶义男","genres":"动作,冒险,剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p647099823.jpg"}
,
{"id":"1295409","alt":"https://movie.douban.com/subject/1295409/","year":"1991","title":"纵横四海","rating":"8.7","original_title":"緃横四海","directors":"吴宇森","casts":"周润发,张国荣,钟楚红","genres":"剧情,喜剧,动作","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2173708731.jpg"}
,
{"id":"1295644","alt":"https://movie.douban.com/subject/1295644/","year":"1994","title":"这个杀手不太冷","rating":"9.4","original_title":"Léon","directors":"吕克·贝松","casts":"让·雷诺,娜塔莉·波特曼,加里·奥德曼","genres":"剧情,动作,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p511118051.jpg"}
,
{"id":"1295865","alt":"https://movie.douban.com/subject/1295865/","year":"1994","title":"燃情岁月","rating":"8.8","original_title":"Legends of the Fall","directors":"爱德华·兹威克","casts":"安东尼·霍普金斯,布拉德·皮特,朱莉娅·奥蒙德","genres":"剧情,爱情,西部","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1023654037.jpg"}
,
{"id":"1296141","alt":"https://movie.douban.com/subject/1296141/","year":"1957","title":"控方证人","rating":"9.6","original_title":"Witness for the Prosecution","directors":"比利·怀德","casts":"泰隆·鲍华,玛琳·黛德丽,查尔斯·劳顿","genres":"剧情,犯罪,悬疑","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1505392928.jpg"}
,
{"id":"1296339","alt":"https://movie.douban.com/subject/1296339/","year":"1995","title":"爱在黎明破晓前","rating":"8.7","original_title":"Before Sunrise","directors":"理查德·林克莱特","casts":"伊桑·霍克,朱莉·德尔佩,安德莉亚·埃克特","genres":"剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1486234122.jpg"}
,
{"id":"1296736","alt":"https://movie.douban.com/subject/1296736/","year":"2002","title":"钢琴家","rating":"9","original_title":"The Pianist","directors":"罗曼·波兰斯基","casts":"艾德里安·布洛迪,托马斯·克莱舒曼,艾米莉娅·福克斯","genres":"剧情,传记,历史","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p792484461.jpg"}
,
{"id":"1296753","alt":"https://movie.douban.com/subject/1296753/","year":"1942","title":"卡萨布兰卡","rating":"8.6","original_title":"Casablanca","directors":"迈克尔·柯蒂斯","casts":"亨弗莱·鲍嘉,英格丽·褒曼,保罗·亨雷德","genres":"剧情,爱情,战争","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1244791866.jpg"}
,
{"id":"1296909","alt":"https://movie.douban.com/subject/1296909/","year":"1966","title":"虎口脱险","rating":"8.9","original_title":"La grande vadrouille","directors":"热拉尔·乌里","casts":"路易·德·菲耐斯,布尔维尔,克劳迪奥·布鲁克","genres":"喜剧,战争","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2399597512.jpg"}
,
{"id":"1297052","alt":"https://movie.douban.com/subject/1297052/","year":"1995","title":"侧耳倾听","rating":"8.8","original_title":"耳をすませば","directors":"近藤喜文","casts":"本名阳子,小林桂树,高山南","genres":"剧情,爱情,动画","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p456692072.jpg"}
,
{"id":"1297192","alt":"https://movie.douban.com/subject/1297192/","year":"2003","title":"致命ID","rating":"8.6","original_title":"Identity","directors":"詹姆斯·曼高德","casts":"约翰·库萨克,雷·利奥塔,阿曼达·皮特","genres":"剧情,悬疑,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p453720880.jpg"}
,
{"id":"1297359","alt":"https://movie.douban.com/subject/1297359/","year":"1997","title":"幽灵公主","rating":"8.8","original_title":"もののけ姫","directors":"宫崎骏","casts":"松田洋治,石田百合子,田中裕子","genres":"动作,爱情,战争","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1613191025.jpg"}
,
{"id":"1297447","alt":"https://movie.douban.com/subject/1297447/","year":"1987","title":"倩女幽魂","rating":"8.6","original_title":"倩女幽魂","directors":"程小东","casts":"张国荣,王祖贤,午马","genres":"剧情,爱情,武侠","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2414157745.jpg"}
,
{"id":"1297478","alt":"https://movie.douban.com/subject/1297478/","year":"1980","title":"上帝也疯狂","rating":"8.6","original_title":"The Gods Must Be Crazy","directors":"加美·尤伊斯","casts":"Marius Weyers,Sandra Prinsloo,历苏","genres":"喜剧","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2173719647.jpg"}
,
{"id":"1297574","alt":"https://movie.douban.com/subject/1297574/","year":"1986","title":"英雄本色","rating":"8.7","original_title":"英雄本色","directors":"吴宇森","casts":"周润发,狄龙,张国荣","genres":"动作,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2157672975.jpg"}
,
{"id":"1297630","alt":"https://movie.douban.com/subject/1297630/","year":"1999","title":"第六感","rating":"8.8","original_title":"The Sixth Sense","directors":"M·奈特·沙马兰","casts":"布鲁斯·威利斯,海利·乔·奥斯蒙,托妮·科莱特","genres":"剧情,悬疑,恐怖","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2220184425.jpg"}
,
{"id":"1298070","alt":"https://movie.douban.com/subject/1298070/","year":"2003","title":"加勒比海盗","rating":"8.6","original_title":"Pirates of the Caribbean: The Curse of the Black Pearl","directors":"戈尔·维宾斯基","casts":"约翰尼·德普,杰弗里·拉什,奥兰多·布鲁姆","genres":"动作,冒险,奇幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1596085504.jpg"}
,
{"id":"1298624","alt":"https://movie.douban.com/subject/1298624/","year":"1992","title":"闻香识女人","rating":"8.9","original_title":"Scent of a Woman","directors":"马丁·布莱斯","casts":"阿尔·帕西诺,克里斯·奥唐纳,詹姆斯·瑞布霍恩","genres":"剧情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p925123037.jpg"}
,
{"id":"1298653","alt":"https://movie.douban.com/subject/1298653/","year":"2000","title":"荒岛余生","rating":"8.4","original_title":"Cast Away","directors":"罗伯特·泽米吉斯","casts":"汤姆·汉克斯,海伦·亨特,克里斯·诺斯","genres":"冒险,剧情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1341248319.jpg"}
,
{"id":"1299131","alt":"https://movie.douban.com/subject/1299131/","year":"1974","title":"教父2","rating":"9.1","original_title":"The Godfather: Part Ⅱ","directors":"弗朗西斯·福特·科波拉","casts":"阿尔·帕西诺,罗伯特·杜瓦尔,黛安·基顿","genres":"剧情,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p616779231.jpg"}
,
{"id":"1299327","alt":"https://movie.douban.com/subject/1299327/","year":"1994","title":"夜访吸血鬼","rating":"8.3","original_title":"Interview with the Vampire: The Vampire Chronicles","directors":"尼尔·乔丹","casts":"布拉德·皮特,汤姆·克鲁斯,克斯汀·邓斯特","genres":"剧情,奇幻,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1353910572.jpg"}
,
{"id":"1299361","alt":"https://movie.douban.com/subject/1299361/","year":"2002","title":"爱·回家","rating":"9","original_title":"집으로...","directors":"李廷香","casts":"金艺芬,俞承豪,童孝熙","genres":"剧情,儿童,家庭","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2107418134.jpg"}
,
{"id":"1299398","alt":"https://movie.douban.com/subject/1299398/","year":"1995","title":"大话西游之月光宝盒","rating":"8.9","original_title":"西遊記第壹佰零壹回之月光寶盒","directors":"刘镇伟","casts":"周星驰,吴孟达,罗家英","genres":"喜剧,动作,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1280323646.jpg"}
,
{"id":"1300117","alt":"https://movie.douban.com/subject/1300117/","year":"1997","title":"千钧一发","rating":"8.7","original_title":"Gattaca","directors":"安德鲁·尼科尔","casts":"伊桑·霍克,乌玛·瑟曼,裘德·洛","genres":"剧情,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2195672555.jpg"}
,
{"id":"1300267","alt":"https://movie.douban.com/subject/1300267/","year":"1939","title":"乱世佳人","rating":"9.2","original_title":"Gone with the Wind","directors":"维克多·弗莱明,乔治·库克,山姆·伍德","casts":"克拉克·盖博,费雯·丽,莱斯利·霍华德","genres":"剧情,爱情,战争","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1963126880.jpg"}
,
{"id":"1300299","alt":"https://movie.douban.com/subject/1300299/","year":"2003","title":"杀人回忆","rating":"8.6","original_title":"살인의 추억","directors":"奉俊昊","casts":"宋康昊,金相庆,金雷河","genres":"犯罪,剧情,悬疑","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p480225538.jpg"}
,
{"id":"1300374","alt":"https://movie.douban.com/subject/1300374/","year":"1999","title":"绿里奇迹","rating":"8.7","original_title":"The Green Mile","directors":"弗兰克·德拉邦特","casts":"汤姆·汉克斯,大卫·摩斯,迈克·克拉克·邓肯","genres":"犯罪,剧情,奇幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p767586451.jpg"}
,
{"id":"1300741","alt":"https://movie.douban.com/subject/1300741/","year":"1999","title":"枪火","rating":"8.6","original_title":"鎗火","directors":"杜琪峰","casts":"吴镇宇,任达华,黄秋生","genres":"剧情,动作,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1538646661.jpg"}
,
{"id":"1300960","alt":"https://movie.douban.com/subject/1300960/","year":"1988","title":"碧海蓝天","rating":"8.7","original_title":"Le grand bleu","directors":"吕克·贝松","casts":"让-马克·巴尔,让·雷诺,罗姗娜·阿奎特","genres":"剧情,爱情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p455724599.jpg"}
,
{"id":"1300992","alt":"https://movie.douban.com/subject/1300992/","year":"1993","title":"完美的世界","rating":"9","original_title":"A Perfect World","directors":"克林特·伊斯特伍德","casts":"凯文·科斯特纳,劳拉·邓恩,克林特·伊斯特伍德","genres":"剧情,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p792403691.jpg"}
,
{"id":"1301171","alt":"https://movie.douban.com/subject/1301171/","year":"2000","title":"偷拐抢骗","rating":"8.5","original_title":"Snatch","directors":"盖·里奇","casts":"布拉德·皮特,本尼西奥·德尔·托罗,杰森·斯坦森","genres":"喜剧,犯罪","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p616753227.jpg"}
,
{"id":"1301753","alt":"https://movie.douban.com/subject/1301753/","year":"1994","title":"狮子王","rating":"8.9","original_title":"The Lion King","directors":"罗杰·阿勒斯,罗伯·明可夫","casts":"乔纳森·泰勒·托马斯,马修·布罗德里克,杰瑞米·艾恩斯","genres":"剧情,动画,冒险","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2277799019.jpg"}
,
{"id":"1302425","alt":"https://movie.douban.com/subject/1302425/","year":"1999","title":"喜剧之王","rating":"8.5","original_title":"喜劇之王","directors":"周星驰,李力持","casts":"周星驰,张柏芝,莫文蔚","genres":"喜剧,剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1043597424.jpg"}
,
{"id":"1302467","alt":"https://movie.douban.com/subject/1302467/","year":"2003","title":"黑客帝国3：矩阵革命","rating":"8.5","original_title":"The Matrix Revolutions","directors":"莉莉·沃卓斯基,拉娜·沃卓斯基","casts":"基努·里维斯,劳伦斯·菲什伯恩,凯瑞-安·莫斯","genres":"动作,科幻","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p443461818.jpg"}
,
{"id":"1302476","alt":"https://movie.douban.com/subject/1302476/","year":"2001","title":"麦兜故事","rating":"8.5","original_title":"麥兜故事","directors":"袁建滔","casts":"李晋纬,林海峰,吴君如","genres":"剧情,喜剧,动画","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p804938713.jpg"}
,
{"id":"1302827","alt":"https://movie.douban.com/subject/1302827/","year":"2001","title":"人工智能","rating":"8.6","original_title":"Artificial Intelligence: AI","directors":"史蒂文·斯皮尔伯格","casts":"海利·乔·奥斯蒙,弗兰西丝·奥康纳,山姆·洛巴兹","genres":"冒险,剧情,科幻","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p792257137.jpg"}
,
{"id":"1303021","alt":"https://movie.douban.com/subject/1303021/","year":"1997","title":"小鞋子","rating":"9.2","original_title":"بچههای آسمان","directors":"马基德·马基迪","casts":"Amir Farrokh Hashemian,默罕默德·阿米尔·纳吉,Bahare Seddiqi","genres":"剧情,家庭,儿童","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2173580603.jpg"}
,
{"id":"1303037","alt":"https://movie.douban.com/subject/1303037/","year":"1993","title":"喜宴","rating":"8.8","original_title":"喜宴","directors":"李安","casts":"赵文瑄,归亚蕾,金素梅","genres":"剧情,喜剧,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2173713676.jpg"}
,
{"id":"1303394","alt":"https://movie.douban.com/subject/1303394/","year":"1993","title":"青蛇","rating":"8.4","original_title":"青蛇","directors":"徐克","casts":"张曼玉,王祖贤,赵文卓","genres":"剧情,奇幻,古装","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584021784.jpg"}
,
{"id":"1304102","alt":"https://movie.douban.com/subject/1304102/","year":"2002","title":"谍影重重","rating":"8.5","original_title":"The Bourne Identity","directors":"道格·里曼","casts":"马特·达蒙,弗朗卡·波滕特,克里斯·库珀","genres":"动作,悬疑,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1597183981.jpg"}
,
{"id":"1304447","alt":"https://movie.douban.com/subject/1304447/","year":"2000","title":"记忆碎片","rating":"8.5","original_title":"Memento","directors":"克里斯托弗·诺兰","casts":"盖·皮尔斯,凯瑞-安·莫斯,乔·潘托里亚诺","genres":"犯罪,剧情,悬疑","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p641688453.jpg"}
,
{"id":"1305164","alt":"https://movie.douban.com/subject/1305164/","year":"1996","title":"甜蜜蜜","rating":"8.7","original_title":"甜蜜蜜","directors":"陈可辛","casts":"黎明,张曼玉,杨恭如","genres":"剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1962839732.jpg"}
,
{"id":"1305487","alt":"https://movie.douban.com/subject/1305487/","year":"2002","title":"猫鼠游戏","rating":"8.7","original_title":"Catch Me If You Can","directors":"史蒂文·斯皮尔伯格","casts":"莱昂纳多·迪卡普里奥,汤姆·汉克斯,克里斯托弗·沃肯","genres":"传记,犯罪,剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p453924541.jpg"}
,
{"id":"1305690","alt":"https://movie.douban.com/subject/1305690/","year":"1990","title":"阿飞正传","rating":"8.5","original_title":"阿飛正傳","directors":"王家卫","casts":"张国荣,张曼玉,刘嘉玲","genres":"犯罪,剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p924558512.jpg"}
,
{"id":"1305725","alt":"https://movie.douban.com/subject/1305725/","year":"2003","title":"大卫·戈尔的一生","rating":"8.7","original_title":"The Life of David Gale","directors":"艾伦·帕克","casts":"凯文·史派西,凯特·温丝莱特,劳拉·琳妮","genres":"剧情,犯罪,悬疑","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2186861098.jpg"}
,
{"id":"1306029","alt":"https://movie.douban.com/subject/1306029/","year":"2001","title":"美丽心灵","rating":"8.9","original_title":"A Beautiful Mind","directors":"朗·霍华德","casts":"罗素·克劳,詹妮弗·康纳利,艾德·哈里斯","genres":"传记,剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1665997400.jpg"}
,
{"id":"1306249","alt":"https://movie.douban.com/subject/1306249/","year":"1993","title":"唐伯虎点秋香","rating":"8.4","original_title":"唐伯虎點秋香","directors":"李力持","casts":"周星驰,巩俐,陈百祥","genres":"喜剧,爱情,古装","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1946455272.jpg"}
,
{"id":"1306861","alt":"https://movie.douban.com/subject/1306861/","year":"2001","title":"我是山姆","rating":"8.8","original_title":"I Am Sam","directors":"杰茜·尼尔森","casts":"西恩·潘,达科塔·范宁,米歇尔·菲佛","genres":"剧情,家庭","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p652417775.jpg"}
,
{"id":"1307315","alt":"https://movie.douban.com/subject/1307315/","year":"1979","title":"哪吒闹海","rating":"8.8","original_title":"哪吒闹海","directors":"严定宪,王树忱,徐景达","casts":"梁正晖,邱岳峰,毕克","genres":"冒险,动画,奇幻","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2163636038.jpg"}
,
{"id":"1307793","alt":"https://movie.douban.com/subject/1307793/","year":"1996","title":"燕尾蝶","rating":"8.6","original_title":"スワロウテイル","directors":"岩井俊二","casts":"三上博史,恰拉,伊藤步","genres":"犯罪,剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p532195562.jpg"}
,
{"id":"1307811","alt":"https://movie.douban.com/subject/1307811/","year":"1989","title":"魔女宅急便","rating":"8.4","original_title":"魔女の宅急便","directors":"宫崎骏","casts":"高山南,佐久间玲,山口胜平","genres":"动画,奇幻,冒险","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p456676352.jpg"}
,
{"id":"1307914","alt":"https://movie.douban.com/subject/1307914/","year":"2002","title":"无间道","rating":"9","original_title":"無間道","directors":"刘伟强,麦兆辉","casts":"刘德华,梁朝伟,黄秋生","genres":"剧情,犯罪,悬疑","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2233971046.jpg"}
,
{"id":"1308575","alt":"https://movie.douban.com/subject/1308575/","year":"2002","title":"蓝色大门","rating":"8.3","original_title":"藍色大門","directors":"易智言","casts":"桂纶镁,陈柏霖,梁又琳","genres":"剧情,爱情,同性","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584822570.jpg"}
,
{"id":"1308767","alt":"https://movie.douban.com/subject/1308767/","year":"2004","title":"谍影重重2","rating":"8.5","original_title":"The Bourne Supremacy","directors":"保罗·格林格拉斯","casts":"马特·达蒙,弗朗卡·波滕特,布莱恩·考克斯","genres":"动作,悬疑,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p667644866.jpg"}
,
{"id":"1308777","alt":"https://movie.douban.com/subject/1308777/","year":"2004","title":"暖暖内含光","rating":"8.4","original_title":"Eternal Sunshine of the Spotless Mind","directors":"米歇尔·贡德里","casts":"金·凯瑞,凯特·温丝莱特,伊利亚·伍德","genres":"剧情,爱情,奇幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p479565065.jpg"}
,
{"id":"1308807","alt":"https://movie.douban.com/subject/1308807/","year":"2004","title":"哈尔的移动城堡","rating":"8.9","original_title":"ハウルの動く城","directors":"宫崎骏","casts":"倍赏千惠子,木村拓哉,美轮明宏","genres":"爱情,动画,奇幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2174346180.jpg"}
,
{"id":"1308857","alt":"https://movie.douban.com/subject/1308857/","year":"2004","title":"可可西里","rating":"8.6","original_title":"可可西里","directors":"陆川","casts":"多布杰,张正阳,亓亮","genres":"剧情,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2363208684.jpg"}
,
{"id":"1309027","alt":"https://movie.douban.com/subject/1309027/","year":"2005","title":"罪恶之城","rating":"8.4","original_title":"Sin City","directors":"弗兰克·米勒,罗伯特·罗德里格兹,昆汀·塔伦蒂诺","casts":"杰西卡·阿尔芭,布鲁斯·威利斯,克里夫·欧文","genres":"动作,犯罪,惊悚","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2173716829.jpg"}
,
{"id":"1309046","alt":"https://movie.douban.com/subject/1309046/","year":"2005","title":"V字仇杀队","rating":"8.8","original_title":"V for Vendetta","directors":"詹姆斯·麦克特格","casts":"娜塔莉·波特曼,雨果·维文,斯蒂芬·瑞","genres":"剧情,动作,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1465235231.jpg"}
,
{"id":"1309163","alt":"https://movie.douban.com/subject/1309163/","year":"2004","title":"恋恋笔记本","rating":"8.5","original_title":"The Notebook","directors":"尼克·卡索维茨","casts":"瑞恩·高斯林,瑞秋·麦克亚当斯,吉娜·罗兰兹","genres":"剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p483604864.jpg"}
,
{"id":"1316510","alt":"https://movie.douban.com/subject/1316510/","year":"1993","title":"射雕英雄传之东成西就","rating":"8.7","original_title":"射鵰英雄傳之東成西就","directors":"刘镇伟","casts":"梁朝伟,林青霞,张国荣","genres":"喜剧,古装","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1993903133.jpg"}
,
{"id":"1388216","alt":"https://movie.douban.com/subject/1388216/","year":"2004","title":"撞车","rating":"8.6","original_title":"Crash","directors":"保罗·哈吉斯","casts":"桑德拉·布洛克,唐·钱德尔,马特·狄龙","genres":"犯罪,剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2075132390.jpg"}
,
{"id":"1395091","alt":"https://movie.douban.com/subject/1395091/","year":"1997","title":"未麻的部屋","rating":"8.8","original_title":"Perfect Blue","directors":"今敏","casts":"岩男润子,松本梨香,辻亲八","genres":"动画,奇幻,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1351050722.jpg"}
,
{"id":"1397546","alt":"https://movie.douban.com/subject/1397546/","year":"1998","title":"追随","rating":"8.9","original_title":"Following","directors":"克里斯托弗·诺兰","casts":"杰里米·西奥伯德,亚历克斯·霍,露西·拉塞尔","genres":"犯罪,悬疑,惊悚","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1150103377.jpg"}
,
{"id":"1401118","alt":"https://movie.douban.com/subject/1401118/","year":"1966","title":"黄金三镖客","rating":"9.1","original_title":"Il buono, il brutto, il cattivo.","directors":"赛尔乔·莱翁内","casts":"克林特·伊斯特伍德,埃里·瓦拉赫,李·范·克里夫","genres":"冒险,西部","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2101693489.jpg"}
,
{"id":"1417598","alt":"https://movie.douban.com/subject/1417598/","year":"2004","title":"电锯惊魂","rating":"8.6","original_title":"Saw","directors":"温子仁","casts":"雷·沃纳尔,加利·艾尔维斯,丹尼·格洛弗","genres":"犯罪,悬疑,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2163771304.jpg"}
,
{"id":"1418019","alt":"https://movie.douban.com/subject/1418019/","year":"1961","title":"大闹天宫","rating":"9.2","original_title":"大闹天宫","directors":"万籁鸣,唐澄","casts":"邱岳峰,富润生,毕克","genres":"动画,奇幻","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2184505167.jpg"}
,
{"id":"1418200","alt":"https://movie.douban.com/subject/1418200/","year":"2005","title":"傲慢与偏见","rating":"8.4","original_title":"Pride & Prejudice","directors":"乔·赖特","casts":"凯拉·奈特莉,马修·麦克费登,唐纳德·萨瑟兰","genres":"剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p452005185.jpg"}
,
{"id":"1418834","alt":"https://movie.douban.com/subject/1418834/","year":"2005","title":"断背山","rating":"8.6","original_title":"Brokeback Mountain","directors":"李安","casts":"希斯·莱杰,杰克·吉伦哈尔,米歇尔·威廉姆斯","genres":"剧情,爱情,同性","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p513535588.jpg"}
,
{"id":"1419936","alt":"https://movie.douban.com/subject/1419936/","year":"2005","title":"战争之王","rating":"8.5","original_title":"Lord of War","directors":"安德鲁·尼科尔","casts":"尼古拉斯·凯奇,布丽姬·穆娜,杰瑞德·莱托","genres":"剧情,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p453719066.jpg"}
,
{"id":"1428175","alt":"https://movie.douban.com/subject/1428175/","year":"2006","title":"血钻","rating":"8.5","original_title":"Blood Diamond","directors":"爱德华·兹威克","casts":"莱昂纳多·迪卡普里奥,詹妮弗·康纳利,杰曼·翰苏","genres":"剧情,惊悚,冒险","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p554741987.jpg"}
,
{"id":"1438652","alt":"https://movie.douban.com/subject/1438652/","year":"2009","title":"无耻混蛋","rating":"8.4","original_title":"Inglourious Basterds","directors":"昆汀·塔伦蒂诺","casts":"布拉德·皮特,梅拉尼·罗兰,克里斯托弗·瓦尔茨","genres":"剧情,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p770734475.jpg"}
,
{"id":"1485260","alt":"https://movie.douban.com/subject/1485260/","year":"2008","title":"本杰明·巴顿奇事","rating":"8.7","original_title":"The Curious Case of Benjamin Button","directors":"大卫·芬奇","casts":"凯特·布兰切特,布拉德·皮特,朱莉娅·奥蒙德","genres":"剧情,爱情,奇幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2177269645.jpg"}
,
{"id":"1578507","alt":"https://movie.douban.com/subject/1578507/","year":"2007","title":"谍影重重3","rating":"8.7","original_title":"The Bourne Ultimatum","directors":"保罗·格林格拉斯","casts":"马特·达蒙,朱丽娅·斯蒂尔斯,大卫·斯特雷泽恩","genres":"动作,悬疑,惊悚","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p792223507.jpg"}
,
{"id":"1652587","alt":"https://movie.douban.com/subject/1652587/","year":"2009","title":"阿凡达","rating":"8.6","original_title":"Avatar","directors":"詹姆斯·卡梅隆","casts":"萨姆·沃辛顿,佐伊·索尔达娜,西格妮·韦弗","genres":"动作,冒险,奇幻","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2180085848.jpg"}
,
{"id":"1760622","alt":"https://movie.douban.com/subject/1760622/","year":"2006","title":"香水","rating":"8.4","original_title":"Perfume: The Story of a Murderer","directors":"汤姆·提克威","casts":"本·卫肖,艾伦·瑞克曼,蕾切儿·哈伍德","genres":"剧情,犯罪,奇幻","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p470006658.jpg"}
,
{"id":"1780330","alt":"https://movie.douban.com/subject/1780330/","year":"2006","title":"致命魔术","rating":"8.8","original_title":"The Prestige","directors":"克里斯托弗·诺兰","casts":"克里斯蒂安·贝尔,休·杰克曼,迈克尔·凯恩","genres":"剧情,悬疑,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p480383375.jpg"}
,
{"id":"1787291","alt":"https://movie.douban.com/subject/1787291/","year":"2006","title":"被嫌弃的松子的一生","rating":"8.9","original_title":"嫌われ松子の一生","directors":"中岛哲也","casts":"中谷美纪,瑛太,香川照之","genres":"剧情,歌舞","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p453723669.jpg"}
,
{"id":"1793929","alt":"https://movie.douban.com/subject/1793929/","year":"2013","title":"达拉斯买家俱乐部","rating":"8.6","original_title":"Dallas Buyers Club","directors":"让-马克·瓦雷","casts":"马修·麦康纳,詹妮弗·加纳,杰瑞德·莱托","genres":"剧情,传记,同性","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2166160837.jpg"}
,
{"id":"1849031","alt":"https://movie.douban.com/subject/1849031/","year":"2006","title":"当幸福来敲门","rating":"8.9","original_title":"The Pursuit of Happyness","directors":"加布里埃莱·穆奇诺","casts":"威尔·史密斯,贾登·史密斯,坦迪·牛顿","genres":"剧情,传记,家庭","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1312700628.jpg"}
,
{"id":"1851857","alt":"https://movie.douban.com/subject/1851857/","year":"2008","title":"蝙蝠侠：黑暗骑士","rating":"9","original_title":"The Dark Knight","directors":"克里斯托弗·诺兰","casts":"克里斯蒂安·贝尔,希斯·莱杰,艾伦·艾克哈特","genres":"剧情,动作,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p462657443.jpg"}
,
{"id":"1858711","alt":"https://movie.douban.com/subject/1858711/","year":"2010","title":"玩具总动员3","rating":"8.7","original_title":"Toy Story 3","directors":"李·昂克里奇","casts":"汤姆·汉克斯,蒂姆·艾伦,琼·库萨克","genres":"喜剧,动画,奇幻","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1283675359.jpg"}
,
{"id":"1862151","alt":"https://movie.douban.com/subject/1862151/","year":"2006","title":"疯狂的石头","rating":"8.2","original_title":"疯狂的石头","directors":"宁浩","casts":"郭涛,刘桦,连晋","genres":"喜剧,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p712241453.jpg"}
,
{"id":"1865703","alt":"https://movie.douban.com/subject/1865703/","year":"2006","title":"红辣椒","rating":"8.8","original_title":"パプリカ","directors":"今敏","casts":"林原惠美,古谷彻,江守彻","genres":"动画,悬疑,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p672363704.jpg"}
,
{"id":"1867345","alt":"https://movie.douban.com/subject/1867345/","year":"2007","title":"遗愿清单","rating":"8.5","original_title":"The Bucket List","directors":"罗伯·莱纳","casts":"杰克·尼科尔森,摩根·弗里曼,西恩·海耶斯","genres":"冒险,喜剧,剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p708613284.jpg"}
,
{"id":"1889243","alt":"https://movie.douban.com/subject/1889243/","year":"2014","title":"星际穿越","rating":"9.1","original_title":"Interstellar","directors":"克里斯托弗·诺兰","casts":"马修·麦康纳,安妮·海瑟薇,杰西卡·查斯坦","genres":"剧情,科幻,冒险","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2206088801.jpg"}
,
{"id":"1900841","alt":"https://movie.douban.com/subject/1900841/","year":"2006","title":"窃听风暴","rating":"9.1","original_title":"Das Leben der Anderen","directors":"弗洛里安·亨克尔·冯·多纳斯马尔克","casts":"乌尔里希·穆埃,马蒂娜·格德克,塞巴斯蒂安·科赫","genres":"剧情,悬疑","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1808872109.jpg"}
,
{"id":"1905462","alt":"https://movie.douban.com/subject/1905462/","year":"2007","title":"荒野生存","rating":"8.6","original_title":"Into the Wild","directors":"西恩·潘","casts":"埃米尔·赫施,马西娅·盖伊·哈登,威廉·赫特","genres":"冒险,传记,剧情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p465687407.jpg"}
,
{"id":"1907966","alt":"https://movie.douban.com/subject/1907966/","year":"2013","title":"疯狂原始人","rating":"8.7","original_title":"The Croods","directors":"柯克·德·米科,克里斯·桑德斯","casts":"尼古拉斯·凯奇,瑞恩·雷诺兹,艾玛·斯通","genres":"喜剧,动画,冒险","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1867084027.jpg"}
,
{"id":"1929463","alt":"https://movie.douban.com/subject/1929463/","year":"2012","title":"少年派的奇幻漂流","rating":"9","original_title":"Life of Pi","directors":"李安","casts":"苏拉·沙玛,拉菲·斯波,伊尔凡·可汗","genres":"剧情,奇幻,冒险","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1784592701.jpg"}
,
{"id":"1937946","alt":"https://movie.douban.com/subject/1937946/","year":"2006","title":"穿越时空的少女","rating":"8.6","original_title":"時をかける少女","directors":"细田守","casts":"仲里依纱,石田卓也,板仓光隆","genres":"剧情,爱情,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2079334286.jpg"}
,
{"id":"1959195","alt":"https://movie.douban.com/subject/1959195/","year":"1987","title":"忠犬八公物语","rating":"9","original_title":"ハチ公物語","directors":"神山征二郎","casts":"山本圭,井川比佐志,片桐入","genres":"剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2297934945.jpg"}
,
{"id":"1978709","alt":"https://movie.douban.com/subject/1978709/","year":"2010","title":"黑天鹅","rating":"8.5","original_title":"Black Swan","directors":"达伦·阿伦诺夫斯基","casts":"娜塔莉·波特曼,米拉·库尼斯,薇诺娜·瑞德","genres":"剧情,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p719282906.jpg"}
,
{"id":"2043546","alt":"https://movie.douban.com/subject/2043546/","year":"2007","title":"秒速5厘米","rating":"8.3","original_title":"秒速5センチメートル","directors":"新海诚","casts":"水桥研二,近藤好美 ,尾上绫华","genres":"动画,剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p982896012.jpg"}
,
{"id":"2053515","alt":"https://movie.douban.com/subject/2053515/","year":"2006","title":"曾经","rating":"8.3","original_title":"Once","directors":"约翰·卡尼","casts":"格伦·汉塞德,玛可塔·伊尔格洛娃,Alaistair Foley","genres":"剧情,音乐,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2173720203.jpg"}
,
{"id":"2129039","alt":"https://movie.douban.com/subject/2129039/","year":"2009","title":"飞屋环游记","rating":"8.9","original_title":"Up","directors":"彼特·道格特","casts":"爱德华·阿斯纳,克里斯托弗·普卢默,乔丹·长井","genres":"剧情,喜剧,动画","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p465583562.jpg"}
,
{"id":"2131459","alt":"https://movie.douban.com/subject/2131459/","year":"2008","title":"机器人总动员","rating":"9.3","original_title":"WALL·E","directors":"安德鲁·斯坦顿","casts":"本·贝尔特,艾丽莎·奈特,杰夫·格尔林","genres":"喜剧,爱情,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p449665982.jpg"}
,
{"id":"2149806","alt":"https://movie.douban.com/subject/2149806/","year":"2008","title":"入殓师","rating":"8.8","original_title":"おくりびと","directors":"泷田洋二郎","casts":"本木雅弘,广末凉子,山崎努","genres":"剧情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p594972928.jpg"}
,
{"id":"2209573","alt":"https://movie.douban.com/subject/2209573/","year":"2008","title":"贫民窟的百万富翁","rating":"8.5","original_title":"Slumdog Millionaire","directors":"丹尼·博伊尔,洛芙琳·坦丹","casts":"戴夫·帕特尔,芙蕾达·平托,亚尼·卡普","genres":"剧情,爱情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p470476887.jpg"}
,
{"id":"2213597","alt":"https://movie.douban.com/subject/2213597/","year":"2008","title":"朗读者","rating":"8.5","original_title":"The Reader","directors":"史蒂芬·戴德利","casts":"凯特·温丝莱特,拉尔夫·费因斯,大卫·克劳斯","genres":"剧情,爱情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1140984198.jpg"}
,
{"id":"2297265","alt":"https://movie.douban.com/subject/2297265/","year":"2008","title":"浪潮","rating":"8.7","original_title":"Die Welle","directors":"丹尼斯·甘塞尔","casts":"于尔根·福格尔,弗雷德里克·劳,马克思·雷迈特","genres":"剧情,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1344888983.jpg"}
,
{"id":"2300586","alt":"https://movie.douban.com/subject/2300586/","year":"2007","title":"这个男人来自地球","rating":"8.5","original_title":"The Man from Earth","directors":"理查德·沙因克曼","casts":"大卫·李·史密斯,托尼·托德,约翰·比灵斯列","genres":"剧情,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p513303986.jpg"}
,
{"id":"2334904","alt":"https://movie.douban.com/subject/2334904/","year":"2010","title":"禁闭岛","rating":"8.6","original_title":"Shutter Island","directors":"马丁·斯科塞斯","casts":"莱昂纳多·迪卡普里奥,马克·鲁弗洛,本·金斯利","genres":"剧情,悬疑,惊悚","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1832875827.jpg"}
,
{"id":"2353023","alt":"https://movie.douban.com/subject/2353023/","year":"2010","title":"驯龙高手","rating":"8.7","original_title":"How to Train Your Dragon","directors":"迪恩·德布洛斯,克里斯·桑德斯","casts":"杰伊·巴鲁切尔,杰拉德·巴特勒,克雷格·费格森","genres":"喜剧,动画,奇幻","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p450042258.jpg"}
,
{"id":"2363506","alt":"https://movie.douban.com/subject/2363506/","year":"2007","title":"地球上的星星","rating":"8.8","original_title":"Taare Zameen Par","directors":"阿米尔·汗","casts":"达席尔·萨法瑞,阿米尔·汗,塔奈·切赫达","genres":"剧情,儿童,家庭","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1973489335.jpg"}
,
{"id":"2365260","alt":"https://movie.douban.com/subject/2365260/","year":"2007","title":"爱在暹罗","rating":"8.3","original_title":"รักแห่งสยาม","directors":"楚克‧萨克瑞科","casts":"维特维斯特·海伦亚沃恩酷,马里奥·毛瑞尔,赖拉·邦雅淑","genres":"剧情,爱情,同性","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1024585648.jpg"}
,
{"id":"3007773","alt":"https://movie.douban.com/subject/3007773/","year":"2009","title":"海盗电台","rating":"8.6","original_title":"The Boat That Rocked","directors":"理查德·柯蒂斯","casts":"比尔·奈伊,肯尼思·布拉纳,菲利普·塞默·霍夫曼","genres":"剧情,喜剧,音乐","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p769608791.jpg"}
,
{"id":"3008247","alt":"https://movie.douban.com/subject/3008247/","year":"2008","title":"穿条纹睡衣的男孩","rating":"8.8","original_title":"The Boy in the Striped Pajamas","directors":"马克·赫尔曼","casts":"阿萨·巴特菲尔德,维拉·法米加,大卫·休里斯","genres":"剧情,战争","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1473670352.jpg"}
,
{"id":"3011051","alt":"https://movie.douban.com/subject/3011051/","year":"2009","title":"恐怖游轮","rating":"8.3","original_title":"Triangle","directors":"克里斯托弗·史密斯","casts":"梅利莎·乔治,利亚姆·海姆斯沃斯,迈克尔·多曼","genres":"剧情,悬疑,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p462470694.jpg"}
,
{"id":"3011091","alt":"https://movie.douban.com/subject/3011091/","year":"2009","title":"忠犬八公的故事","rating":"9.2","original_title":"Hachi: A Dog's Tale","directors":"拉斯·霍尔斯道姆","casts":"理查·基尔,萨拉·罗默尔,琼·艾伦","genres":"剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p524964016.jpg"}
,
{"id":"3011235","alt":"https://movie.douban.com/subject/3011235/","year":"2011","title":"哈利·波特与死亡圣器(下)","rating":"8.6","original_title":"Harry Potter and the Deathly Hallows: Part 2","directors":"大卫·叶茨","casts":"丹尼尔·雷德克里夫,艾玛·沃森,鲁伯特·格林特","genres":"剧情,悬疑,奇幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p917846733.jpg"}
,
{"id":"3072124","alt":"https://movie.douban.com/subject/3072124/","year":"2009","title":"玛丽和马克思","rating":"8.9","original_title":"Mary and Max","directors":"亚当·艾略特","casts":"托妮·科莱特,菲利普·塞默·霍夫曼,艾瑞克·巴纳","genres":"剧情,爱情,动画","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1820615077.jpg"}
,
{"id":"3073124","alt":"https://movie.douban.com/subject/3073124/","year":"2009","title":"月球","rating":"8.5","original_title":"Moon","directors":"邓肯·琼斯","casts":"山姆·洛克威尔,凯文·史派西,多米妮克·麦克艾丽戈特","genres":"剧情,科幻,悬疑","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p449399746.jpg"}
,
{"id":"3075287","alt":"https://movie.douban.com/subject/3075287/","year":"2011","title":"源代码","rating":"8.3","original_title":"Source Code","directors":"邓肯·琼斯","casts":"杰克·吉伦哈尔,维拉·法米加,米歇尔·莫纳汉","genres":"剧情,动作,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p988260245.jpg"}
,
{"id":"3157605","alt":"https://movie.douban.com/subject/3157605/","year":"2009","title":"巴黎淘气帮","rating":"8.6","original_title":"Le petit Nicolas","directors":"洛朗·蒂拉尔","casts":"马克西姆·戈达尔,瓦莱丽·勒梅西埃,凯德·麦拉德","genres":"儿童,喜剧,家庭","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p465446537.jpg"}
,
{"id":"3217169","alt":"https://movie.douban.com/subject/3217169/","year":"2011","title":"勇士","rating":"8.9","original_title":"Warrior","directors":"加文·欧康诺","casts":"汤姆·哈迪,乔尔·埃哲顿,尼克·诺特","genres":"剧情,运动,家庭","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1145536386.jpg"}
,
{"id":"3287562","alt":"https://movie.douban.com/subject/3287562/","year":"2010","title":"神偷奶爸","rating":"8.5","original_title":"Despicable Me","directors":"皮埃尔·科凡,克里斯·雷纳德","casts":"史蒂夫·卡瑞尔,杰森·席格尔,拉塞尔·布兰德","genres":"喜剧,动画,冒险","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p792776858.jpg"}
,
{"id":"3319755","alt":"https://movie.douban.com/subject/3319755/","year":"2010","title":"怦然心动","rating":"8.9","original_title":"Flipped","directors":"罗伯·莱纳","casts":"玛德琳·卡罗尔,卡兰·麦克奥利菲,瑞贝卡·德·莫妮","genres":"剧情,喜剧,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p663036666.jpg"}
,
{"id":"3395373","alt":"https://movie.douban.com/subject/3395373/","year":"2012","title":"蝙蝠侠：黑暗骑士崛起","rating":"8.5","original_title":"The Dark Knight Rises","directors":"克里斯托弗·诺兰","casts":"克里斯蒂安·贝尔,汤姆·哈迪,安妮·海瑟薇","genres":"剧情,动作,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1706428744.jpg"}
,
{"id":"3442220","alt":"https://movie.douban.com/subject/3442220/","year":"2009","title":"海豚湾","rating":"9.3","original_title":"The Cove","directors":"路易·西霍尤斯","casts":"John Chisholm,Mandy-Rae Cruikshank,Charles Hambleton","genres":"纪录片","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p455222172.jpg"}
,
{"id":"3443389","alt":"https://movie.douban.com/subject/3443389/","year":"2009","title":"海洋","rating":"9","original_title":"Océans","directors":"雅克·贝汉, 雅克·克鲁奥德","casts":"皮尔斯·布鲁斯南,雅克·贝汉,姜文","genres":"纪录片","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p497010372.jpg"}
,
{"id":"3541415","alt":"https://movie.douban.com/subject/3541415/","year":"2010","title":"盗梦空间","rating":"9.2","original_title":"Inception","directors":"克里斯托弗·诺兰","casts":"莱昂纳多·迪卡普里奥,约瑟夫·高登-莱维特,艾伦·佩吉","genres":"剧情,动作,科幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p513344864.jpg"}
,
{"id":"3742360","alt":"https://movie.douban.com/subject/3742360/","year":"2010","title":"让子弹飞","rating":"8.7","original_title":"让子弹飞","directors":"姜文","casts":"姜文,葛优,周润发","genres":"剧情,喜剧,动作","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1512562287.jpg"}
,
{"id":"3792799","alt":"https://movie.douban.com/subject/3792799/","year":"2010","title":"岁月神偷","rating":"8.6","original_title":"歲月神偷","directors":"罗启锐","casts":"吴君如,任达华,钟绍图","genres":"剧情,家庭","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p456666151.jpg"}
,
{"id":"3793023","alt":"https://movie.douban.com/subject/3793023/","year":"2009","title":"三傻大闹宝莱坞","rating":"9.1","original_title":"3 Idiots","directors":"拉吉库马尔·希拉尼","casts":"阿米尔·汗,卡琳娜·卡普尔,马达范","genres":"剧情,喜剧,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p579729551.jpg"}
,
{"id":"4023638","alt":"https://movie.douban.com/subject/4023638/","year":"2010","title":"国王的演讲","rating":"8.3","original_title":"The King's Speech","directors":"汤姆·霍珀","casts":"科林·费尔斯,杰弗里·拉什,海伦娜·伯翰·卡特","genres":"剧情,传记,历史","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p768879237.jpg"}
,
{"id":"4202302","alt":"https://movie.douban.com/subject/4202302/","year":"2010","title":"借东西的小人阿莉埃蒂","rating":"8.7","original_title":"借りぐらしのアリエッティ","directors":"米林宏昌","casts":"志田未来,神木隆之介,三浦友和","genres":"动画,奇幻,冒险","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p617533616.jpg"}
,
{"id":"4268598","alt":"https://movie.douban.com/subject/4268598/","year":"2010","title":"告白","rating":"8.7","original_title":"告白","directors":"中岛哲也","casts":"松隆子,冈田将生,木村佳乃","genres":"剧情,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p689520756.jpg"}
,
{"id":"4739952","alt":"https://movie.douban.com/subject/4739952/","year":"2010","title":"初恋这件小事","rating":"8.2","original_title":"สิ่งเล็กเล็กที่เรียกว่า...รัก","directors":"普特鹏·普罗萨卡·那·萨克那卡林,华森·波克彭","casts":"马里奥·毛瑞尔,平采娜·乐维瑟派布恩,苏达拉·布查蓬","genres":"喜剧,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1505312273.jpg"}
,
{"id":"4798888","alt":"https://movie.douban.com/subject/4798888/","year":"2008","title":"叫我第一名","rating":"8.6","original_title":"Front of the Class","directors":"彼得·维纳","casts":"詹姆斯·沃克,特里特·威廉斯,多米尼克·斯科特·凯伊","genres":"剧情,传记","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p496133870.jpg"}
,
{"id":"4917726","alt":"https://movie.douban.com/subject/4917726/","year":"2011","title":"阳光姐妹淘","rating":"8.8","original_title":"써니","directors":"姜炯哲","casts":"沈恩京,闵孝琳,姜素拉","genres":"剧情,喜剧","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1374786017.jpg"}
,
{"id":"5322596","alt":"https://movie.douban.com/subject/5322596/","year":"2011","title":"超脱","rating":"8.8","original_title":"Detachment","directors":"托尼·凯耶","casts":"艾德里安·布洛迪,克里斯蒂娜·亨德里克斯,詹姆斯·肯恩","genres":"剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1305562621.jpg"}
,
{"id":"5908478","alt":"https://movie.douban.com/subject/5908478/","year":"2011","title":"我爱你","rating":"9","original_title":"그대를 사랑합니다","directors":"秋昌旼","casts":"宋在浩,李顺载,尹秀晶","genres":"剧情,爱情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1075591188.jpg"}
,
{"id":"5912992","alt":"https://movie.douban.com/subject/5912992/","year":"2011","title":"熔炉","rating":"9.2","original_title":"도가니","directors":"黄东赫","casts":"孔侑,郑有美,金志英","genres":"剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1363250216.jpg"}
,
{"id":"5964718","alt":"https://movie.douban.com/subject/5964718/","year":"2011","title":"一次别离","rating":"8.7","original_title":"جدایی نادر از سیمین","directors":"阿斯哈·法哈蒂","casts":"佩曼·莫阿迪,蕾拉·哈塔米,萨瑞·巴亚特","genres":"剧情,家庭","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2189835254.jpg"}
,
{"id":"5989818","alt":"https://movie.douban.com/subject/5989818/","year":"2011","title":"萤火之森","rating":"8.7","original_title":"蛍火の杜へ","directors":"大森贵弘","casts":"佐仓绫音,内山昂辉","genres":"剧情,爱情,动画","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1272904657.jpg"}
,
{"id":"6146955","alt":"https://movie.douban.com/subject/6146955/","year":"2011","title":"寿司之神","rating":"8.8","original_title":"Jiro Dreams of Sushi","directors":"大卫·贾柏","casts":"小野二郎 ,小野祯一,小野隆","genres":"纪录片","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1528763106.jpg"}
,
{"id":"6307447","alt":"https://movie.douban.com/subject/6307447/","year":"2012","title":"被解救的姜戈","rating":"8.5","original_title":"Django Unchained","directors":"昆汀·塔伦蒂诺","casts":"杰米·福克斯,莱昂纳多·迪卡普里奥,克里斯托弗·瓦尔茨","genres":"剧情,动作,西部","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1959232369.jpg"}
,
{"id":"6534248","alt":"https://movie.douban.com/subject/6534248/","year":"2012","title":"无敌破坏王","rating":"8.6","original_title":"Wreck-It Ralph","directors":"瑞奇·摩尔","casts":"简·林奇,约翰·C·赖利,萨拉·西尔弗曼","genres":"喜剧,动画,冒险","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1735642656.jpg"}
,
{"id":"6786002","alt":"https://movie.douban.com/subject/6786002/","year":"2011","title":"触不可及","rating":"9.1","original_title":"Intouchables","directors":"奥利维埃·纳卡什,埃里克·托莱达诺","casts":"弗朗索瓦·克鲁塞,奥玛·希,安娜·勒尼","genres":"剧情,喜剧","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1454261925.jpg"}
,
{"id":"6874403","alt":"https://movie.douban.com/subject/6874403/","year":"2013","title":"再次出发之纽约遇见你","rating":"8.5","original_title":"Begin Again","directors":"约翰·卡尼","casts":"凯拉·奈特莉,马克·鲁弗洛,詹姆斯·柯登","genres":"喜剧,爱情,音乐","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2250287733.jpg"}
,
{"id":"6985810","alt":"https://movie.douban.com/subject/6985810/","year":"2012","title":"狩猎","rating":"9","original_title":"Jagten","directors":"托马斯·温特伯格","casts":"麦斯·米科尔森,托玛斯·博·拉森,安妮卡·韦德科普","genres":"剧情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1546987967.jpg"}
,
{"id":"10463953","alt":"https://movie.douban.com/subject/10463953/","year":"2014","title":"模仿游戏","rating":"8.5","original_title":"The Imitation Game","directors":"莫滕·泰杜姆","casts":"本尼迪克特·康伯巴奇,凯拉·奈特莉,马修·古迪","genres":"剧情,传记,战争","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2255040492.jpg"}
,
{"id":"10533913","alt":"https://movie.douban.com/subject/10533913/","year":"2015","title":"头脑特工队","rating":"8.7","original_title":"Inside Out","directors":"彼特·道格特,罗纳尔多·德尔·卡门","casts":"艾米·波勒,菲利丝·史密斯,理查德·坎德","genres":"喜剧,动画,冒险","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2266293606.jpg"}
,
{"id":"10577869","alt":"https://movie.douban.com/subject/10577869/","year":"2013","title":"时空恋旅人","rating":"8.6","original_title":"About Time","directors":"理查德·柯蒂斯","casts":"多姆纳尔·格里森,瑞秋·麦克亚当斯,比尔·奈伊","genres":"剧情,爱情,奇幻","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2070153774.jpg"}
,
{"id":"10777687","alt":"https://movie.douban.com/subject/10777687/","year":"2013","title":"7号房的礼物","rating":"8.6","original_title":"7번방의 선물","directors":"李焕庆","casts":"柳承龙,朴信惠,郑镇荣","genres":"剧情,喜剧,家庭","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1816276065.jpg"}
,
{"id":"10808442","alt":"https://movie.douban.com/subject/10808442/","year":"2013","title":"爱在午夜降临前","rating":"8.7","original_title":"Before Midnight","directors":"理查德·林克莱特","casts":"伊桑·霍克,朱莉·德尔佩,肖姆斯·戴维-菲茨帕特里克","genres":"剧情,爱情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2001069785.jpg"}
,
{"id":"11026735","alt":"https://movie.douban.com/subject/11026735/","year":"2014","title":"超能陆战队","rating":"8.6","original_title":"Big Hero 6","directors":"唐·霍尔,克里斯·威廉姆斯","casts":"斯科特·安第斯,瑞恩·波特,丹尼尔·海尼","genres":"喜剧,动作,科幻","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2224568669.jpg"}
,
{"id":"11525673","alt":"https://movie.douban.com/subject/11525673/","year":"2014","title":"布达佩斯大饭店","rating":"8.7","original_title":"The Grand Budapest Hotel","directors":"韦斯·安德森","casts":"拉尔夫·费因斯,托尼·雷沃罗利,艾德里安·布洛迪","genres":"剧情,喜剧","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2178872593.jpg"}
,
{"id":"21318488","alt":"https://movie.douban.com/subject/21318488/","year":"2014","title":"消失的爱人","rating":"8.7","original_title":"Gone Girl","directors":"大卫·芬奇","casts":"本·阿弗莱克,裴淳华,尼尔·帕特里克·哈里斯","genres":"剧情,犯罪,悬疑","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2221768894.jpg"}
,
{"id":"21360417","alt":"https://movie.douban.com/subject/21360417/","year":"2013","title":"恐怖直播","rating":"8.7","original_title":"더 테러 라이브","directors":"金秉祐","casts":"河正宇,李璟荣,全慧珍","genres":"剧情,犯罪,悬疑","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2016930906.jpg"}
,
{"id":"21937445","alt":"https://movie.douban.com/subject/21937445/","year":"2013","title":"辩护人","rating":"9.1","original_title":"변호인","directors":"杨宇硕","casts":"宋康昊,吴达洙,金英爱","genres":"剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2158166535.jpg"}
,
{"id":"21937452","alt":"https://movie.douban.com/subject/21937452/","year":"2013","title":"素媛","rating":"9.1","original_title":"소원","directors":"李濬益","casts":"薛耿求,严志媛,李来","genres":"剧情,家庭","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2118532944.jpg"}
,
{"id":"24750126","alt":"https://movie.douban.com/subject/24750126/","year":"2014","title":"荒蛮故事","rating":"8.7","original_title":"Relatos salvajes","directors":"达米安·斯兹弗隆","casts":"达里奥·格兰迪内蒂,玛丽娅·玛努尔,莫妮卡·比利亚","genres":"剧情,喜剧,犯罪","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2192834364.jpg"}
,
{"id":"25662329","alt":"https://movie.douban.com/subject/25662329/","year":"2016","title":"疯狂动物城","rating":"9.2","original_title":"Zootopia","directors":"拜伦·霍华德,瑞奇·摩尔,杰拉德·布什","casts":"金妮弗·古德温,杰森·贝特曼,伊德里斯·艾尔巴","genres":"喜剧,动作,动画","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2315672647.jpg"}
,
{"id":"25724855","alt":"https://movie.douban.com/subject/25724855/","year":"2015","title":"房间","rating":"8.8","original_title":"Room","directors":"伦尼·阿伯拉罕森","casts":"布丽·拉尔森,雅各布·特伦布莱,琼·艾伦","genres":"剧情,家庭","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2259715855.jpg"}
,
{"id":"25773932","alt":"https://movie.douban.com/subject/25773932/","year":"2014","title":"爆裂鼓手","rating":"8.6","original_title":"Whiplash","directors":"达米恩·查泽雷","casts":"迈尔斯·特勒,J·K·西蒙斯,保罗·雷瑟","genres":"剧情,音乐","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2220776342.jpg"}
,
{"id":"25807345","alt":"https://movie.douban.com/subject/25807345/","year":"2013","title":"彗星来的那一夜","rating":"8.4","original_title":"Coherence","directors":"詹姆斯·沃德·布柯特","casts":"艾米丽·芭尔多尼,莫瑞·史特林,尼古拉斯·布兰登","genres":"科幻,悬疑,惊悚","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2187896711.jpg"}
,
{"id":"25814705","alt":"https://movie.douban.com/subject/25814705/","year":"2014","title":"小森林 夏秋篇","rating":"8.9","original_title":"リトル・フォレスト 夏・秋","directors":"森淳一","casts":"桥本爱,三浦贵大,松冈茉优","genres":"剧情","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2221319641.jpg"}
,
{"id":"25814707","alt":"https://movie.douban.com/subject/25814707/","year":"2015","title":"小森林 冬春篇","rating":"8.9","original_title":"リトル・フォレスト 冬・春","directors":"森淳一","casts":"桥本爱,三浦贵大,松冈茉优","genres":"剧情","image":"https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2215147728.jpg"}
,
{"id":"25917973","alt":"https://movie.douban.com/subject/25917973/","year":"2014","title":"心迷宫","rating":"8.6","original_title":"心迷宫","directors":"忻钰坤","casts":"霍卫民,王笑天,罗芸","genres":"剧情,犯罪,悬疑","image":"https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2275298525.jpg"}

]
