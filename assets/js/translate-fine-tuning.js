translate.language.setUrlParamControl('lang'); //根据URL传参控制以何种语种显示
translate.selectLanguageTag.show = false //设置不显示语言选择的select下拉框
translate.language.setLocal('chinese_simplified'); //设置本地语种为简体中文
translate.language.translateLanguagesRange = ['chinese_simplified']; //只翻译简体中文
translate.nomenclature.append('chinese_simplified', 'english', `
	戴=Day
	阿戴=Jimday
	小戴米铺=Jimday's Domains
	欲买桂花同载酒，终不似，少年游。=I want to buy osmanthus to go drinking,but after all, I don’t have the traveling spirit at youth.
	我的站点=My Web Sites
	个=Sites
	网站地图=Sitemap
`); //自定义翻译术语
translate.ignore.text.push('中文'); //翻译时忽略指定的文字不翻译
translate.ignore.text.push('English'); //翻译时忽略指定的文字不翻译
