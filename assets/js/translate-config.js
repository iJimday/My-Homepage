translate.language.setUrlParamControl('lang'); //根据URL传参控制以何种语种显示
translate.selectLanguageTag.show = false //设置不显示语言选择的select下拉框
translate.service.use('client.edge'); //设置使用的翻译服务
translate.listener.start(); //监控页面动态渲染的文本进行自动翻译
translate.language.setLocal('chinese_simplified'); //设置本地语种为简体中文
translate.language.translateLanguagesRange = ['chinese_simplified']; //只翻译简体中文
translate.nomenclature.append('chinese_simplified', 'english', `
	戴=Dai
	阿戴=Mr.Dai
	小戴=Jimday
	小戴米铺=Jimday's Domains
	欲买桂花同载酒，终不似，少年游。=I want to buy osmanthus to go drinking,but after all, I don’t have the traveling spirit at youth.
	我的站点=My Websites
	6个 =6 Sites
	我 =Me
	我的=My
	菜 =Cai
	小趴菜=Little Pacai
	米 =Mish
	米市=Domains Shop
	小戴米市=Jimday's Domains Shop
	铺 =Mipu
	店 =Shop
	链 =URL
	合 =Tool
	合集=Collection
	短链接=Link Shortener
	豆包=Doubao
	微微微微微微微微微微微微微微微调=Fine-tuning code
	本站模板源自 caonb.cn 原版魔改优化，由豆包负责疯狂的微微微微微微微微微微微微微微微调，Jimday 匠心打磨设计，仅限个人玩耍使用，未经允许严禁转载、拿去商用哦🈲！=This template is modified and optimized based on the original version from caonb.cn. It has been endlessly tweaked and finely adjusted by Doubao. Exquisitely designed and polished by Jimday. For personal use only. Unauthorized reproduction and commercial use are strictly prohibited 🚫!
	明白明白=Got it, got it.
	网站地图=Sitemap
	我的工具=My Tools
	测 =IP
	试 =Test
	测试=test
	4个 =4 Tools
`); //自定义翻译术语
translate.ignore.text.push('中文'); //翻译时忽略指定的文字不翻译
translate.ignore.text.push('English'); //翻译时忽略指定的文字不翻译