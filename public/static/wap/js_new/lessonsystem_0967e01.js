define("desktop:widget/wzcl-lessons/lessonSystem.js", function (e) {
    window.$ = window.jQuery = e("common:widget/jquery/1.11.3/jquery.js");
    var s = e("common:widget/tool/utils.js"), c = e("common:widget/tool/env.js"), n = s.listenerScrollInView();
    $(function () {
        var e = [{
            name: "小学",
            enname: "xiaoxue",
            subjects: [{
                name: "数学",
                ensubname: "shuxue",
                contents: [{
                    score: "0-60分",
                    describe: ["1.数学学习兴趣养成", "2.数学基本知识掌握", "3.基础计算能力提升", "4.基础专题答疑解惑"]
                }, {score: "60-70分", describe: ["1.课本基础例题讲解", "2.知识概念强化理解", "3.习题答疑，提升能力"]}, {
                    score: "70-80分",
                    describe: ["1.数值计算、应用题、图形专题专项突破", "2.考点集中训练，各类题型解题策略解析", "3.结合生活，提升数学运用能力"]
                }, {
                    score: "80-90分",
                    describe: ["1.小升初专题提前预学", "2.基本数学思维拓展训练", "3.期末考点系统训练", "4.单元易错题集中讲解"]
                }, {
                    score: "90-100分",
                    describe: ["1.选择题、填空题、计算题分题型轰炸训练", "2.历年小升初难题选讲", "3.小升初典型压轴题对应专项抽解", "4.考前心理疏导"]
                }]
            }, {
                name: "英语",
                ensubname: "yingyu",
                contents: [{
                    score: "0-60分",
                    describe: ["1.音标掌握扎实自然拼读流畅", "2.词汇发音准确拼写汉译正确", "3.课文朗读无误内容理解正确"]
                }, {score: "60-70分", describe: ["1.基础词汇短语强化巩固", "2.基础语法知识讲练结合", "3.基础词汇语法专项练习"]}, {
                    score: "70-80分",
                    describe: ["1.重难点词组强化巩固", "2.完形阅读等专项练习", "3.写作题型归纳和技巧", "4.兴趣提升多口语培养"]
                }, {
                    score: "80-90分",
                    describe: ["1.完形阅读技巧讲解归纳", "2.写作范文模板解析拓展", "3.听力专题训练强化技巧", "4.听说读写综合潜力培养"]
                }, {score: "90-100分", describe: ["1.难点语法解析&突破", "2.考点难题解析&突破", "3.学习阶段规划&指导"]}]
            }, {
                name: "语文",
                ensubname: "yuwen",
                contents: [{
                    score: "0-60分",
                    describe: ["1.学习习惯养成", "2.字音字形巩固", "3.认识病句类型", "4.课内知识梳理", "5.能够连贯写事"]
                }, {
                    score: "60-70分",
                    describe: ["1.学习兴趣培养", "2.多音字、易错字专题精炼", "3.辨析病句原因", "4.激发阅读兴趣", "5.写作语言准确完整"]
                }, {
                    score: "70-80分",
                    describe: ["1.正确使用标点符号", "2.成语、俗语、谚语等汇总", "3.修改病句技巧传授", "4.阅读题策略总结", "5.写作语言生动"]
                }, {
                    score: "80-90分",
                    describe: ["1.专题预习领先一步", "2.古诗词基础积累", "3.阅读易错题突破", "4.课外阅读拓展提升", "5.熟练写出常用文体"]
                }, {
                    score: "90-100分",
                    describe: ["1.小升初复习规划", "2.小升初考点、重难点梳理", "3.小升初基础知识满分技巧", "4.小升初阅读题型精练", "5.小升初写作技巧"]
                }]
            }]
        }, {
            name: "初一/初二",
            enname: "chuyi_chuer",
            subjects: [{
                name: "数学",
                ensubname: "shuxue",
                contents: [{
                    score: "0-60分",
                    describe: ["1.有理数、实数、勾股定理、方程、一次函数、三角形等基本概念的巩固", "2.对应知识点基础专题答疑"]
                }, {score: "60-72分", describe: ["1.初一、初二各年级对应基础例题讲解", "2.各类习题答疑提升"]}, {
                    score: "72-90分",
                    describe: ["1.代数、几何、函数、统计四大专题查漏补缺", "2.选取数学典型考点集中训练", "3.各类题型解题策略提点"]
                }, {
                    score: "90-110分",
                    describe: ["1.中考专题提前预习", "2.数学思维拓展训练", "3.期末考点轰炸训练", "4.单元易错易混题，集中讲解"]
                }, {score: "110-120分", describe: ["1.选择题、填空题、计算题等专题轰炸训练", "2.历年考题难题选讲"]}]
            }, {
                name: "英语",
                ensubname: "yingyu",
                contents: [{
                    score: "0-60分",
                    describe: ["1.基础词汇短语强化巩固", "2.基础语法知识讲练结合", "3.基础词汇语法专项练习"]
                }, {score: "60-72分", describe: ["1.词汇语法快速提高", "2.选择语法等专项训练", "3.语篇理解强化&提高"]}, {
                    score: "72-90分",
                    describe: ["1.重难点词组强化巩固", "2.完形阅读等专项练习", "3.写作题型归纳和技巧"]
                }, {
                    score: "90-110分",
                    describe: ["1.中考专题提前预习", "2.英语思维拓展训练", "3.期末考点轰炸训练", "4.单元易错易混题，集中讲解"]
                }, {score: "110-120分", describe: ["1.完形阅读等技巧讲解归纳", "2.写作范文模板解析&拓展", "3.历年中考真题选讲&详解"]}]
            }, {
                name: "语文",
                ensubname: "yuwen",
                contents: [{
                    score: "0-60分",
                    describe: ["1.字音字形辨析", "2.古诗句默写通关", "3.病句辨析修改", "4.语言表达创新", "5.作文准确审题"]
                }, {
                    score: "60-72分",
                    describe: ["1.名著阅读与文化文学常识积累", "2.综合性学习题型归纳", "3.文言文实词虚词各个击破", "4.现代文阅读文体知识总结", "5.作文结构梳理"]
                }, {
                    score: "72-90分",
                    describe: ["1.修辞方式灵活运用", "2.诗词鉴赏题型归纳", "3.常用文言词语及句式总结", "4.现代文快速阅读技巧", "5.作文语言锦上添花"]
                }, {
                    score: "90-110分",
                    describe: ["1.中考专题提前掌握", "2.综合性学习答题技巧", "3.文言文翻译技巧", "4.现代文阅读常考试题归纳", "5.作文思路拨云见日"]
                }, {
                    score: "110-120分",
                    describe: ["1.中考真题选讲", "2.课外诗词积累练习", "3.课外文言文拓展训练", "4.现代文阅读答题技巧", "5.作文写作技巧指导"]
                }]
            }, {
                name: "物理",
                ensubname: "wuli",
                contents: [{score: "0-60分", describe: ["1.概念理论巩固", "2.基础知识提炼"]}, {
                    score: "60-70分",
                    describe: ["1.基础例题精析", "2.题型归纳总结", "3.激发物理兴趣"]
                }, {score: "70-80分", describe: ["1.声、光、力专题查漏", "2.典型考点提升"]}, {
                    score: "80-90分",
                    describe: ["1.中考专题训练", "2.物理思维拓展", "3.期末考点轰炸"]
                }, {score: "90-100分", describe: ["1.专题疯狂磨杀", "2.中考真题精讲", "3.经典压轴抽解"]}]
            }]
        }, {
            name: "初三",
            enname: "chusan",
            subjects: [{
                name: "数学",
                ensubname: "shuxue",
                contents: [{score: "0-60分", describe: ["1.初中阶段数学知识全面梳理", "2.中考数学考点基础习题答疑"]}, {
                    score: "60-72分",
                    describe: ["1.中考数学典型例题讲解", "2.函数、几何疑难点攻破延伸", "3.中考考点知识细节温故", "4.各章节知识点串联"]
                }, {
                    score: "72-90分",
                    describe: ["1.专题全面检测", "2.疑难专题狂补", "3.各类型题解题策略总结", "4.逆向思维题训练"]
                }, {
                    score: "90-110分",
                    describe: ["1.代数、函数、几何难点突破", "2.各类型题目解题技巧补充", "3.历年易错易混题专项讲解", "4.中考数学十大解题方法盘点", "5.冲刺阶段规划指点"]
                }, {
                    score: "110-120分",
                    describe: ["1.中考新题小题难题集中轰炸", "2.历年中考模拟题、真题压轴题讲解", "3.中考考前经验传授全面解决知识、技能、心态，决胜中考"]
                }]
            }, {
                name: "英语",
                ensubname: "yingyu",
                contents: [{score: "0-60分", describe: ["1.考纲词汇精讲", "2.难点语法精讲", "3.基础专项练习"]}, {
                    score: "60-72分",
                    describe: ["1.难点词组强化提高", "2.情景对话分类精讲", "3.易错难题解答类比"]
                }, {score: "72-90分", describe: ["1.重点难点突破", "2.专项查漏补缺", "3.写作句型强化", "4.听力技巧强化"]}, {
                    score: "90-110分",
                    describe: ["1.完形技巧快速突破", "2.阅读技巧快速提升", "3.写作技巧满分训练", "4.冲刺阶段规划梳理"]
                }, {
                    score: "110-120分",
                    describe: ["1.中考难点解析&突破", "2.真题易错&易混专题", "3.考前经验传授知识，技巧，心态，决胜中考", "4.考前名师压题&预测"]
                }]
            }, {
                name: "语文",
                ensubname: "yuwen",
                contents: [{
                    score: "0-60分",
                    describe: ["1.字音字形巩固", "2.诗句默写高频总结", "3.病句类型分析", "4.语言表达突破", "5.作文材料积累"]
                }, {
                    score: "60-72分",
                    describe: ["1.诗词鉴赏答题技巧", "2.病句答题技巧总结", "3.文言文实词虚词巩固", "4.现代文阅读题型攻破", "5.考场作文结构解析"]
                }, {
                    score: "72-90分",
                    describe: ["1.基础积累提升训练", "2.综合性学习题型解读", "3.文言文高频实词总结", "4.现代文阅读答题技巧", "5.作文分类写作"]
                }, {
                    score: "90-110分",
                    describe: ["1.综合性学习能力提升", "2.文言文重点题型突破", "3.阅读经典例题解析", "4.写作模板总结", "5.中考真题模拟试题演练"]
                }, {score: "110-120分", describe: ["1.中考难题专题讲解", "2.课外文言文扩充", "3.现代文题型预测", "4.作文押题", "5.考前经验传授"]}]
            }, {
                name: "物理",
                ensubname: "wuli",
                contents: [{score: "0-60分", describe: ["1.知识全面梳理", "2.考点基础答疑"]}, {
                    score: "60-70分",
                    describe: ["1.中考例题解剖", "2.声、光、力、电难点突破", "3.物理实验专题强练"]
                }, {score: "70-80分", describe: ["1.专题全面检测", "2.疑难专题狂补", "3.解题策略刷新"]}, {
                    score: "80-90分",
                    describe: ["1.解题技巧补充", "2.易错易混题攻破", "3.中考专题冲刺", "4.中考真题模拟试题演练"]
                }, {score: "90-100分", describe: ["1.中考压轴轰炸", "2.考前经验传授", "3.决胜中考攻略"]}]
            }, {
                name: "化学",
                ensubname: "huaxue",
                contents: [{score: "0-60分", describe: ["1.基础知识全面梳理", "2.中考化学考点基础练"]}, {
                    score: "60-70分",
                    describe: ["1.各考点典型例题讲解", "2.常见物质的性质及相互转化关系的梳理", "3.实验基本操作及实验注意事项的突破"]
                }, {
                    score: "70-80分",
                    describe: ["1.专题全面检测", "2.物质的检验、鉴别与分离提纯专项提升", "3.实验、图像、计算答题策略总结", "4.答题技巧与限时训练"]
                }, {
                    score: "80-90分",
                    describe: ["1.实验探究、物质推断等难点突破", "2.各种类型题目解题技巧", "3.历年真题、易错、易混专项讲解", "4.冲刺阶段规划指点"]
                }, {score: "90-100分", describe: ["1.中考化学新题难题集中轰炸", "2.压轴题的强化训练", "3.中考考前心态调整技巧", "4.基础知识与易错题的回顾"]}]
            }]
        }, {
            name: "高一/高二",
            enname: "gaoyi_gaoer",
            subjects: [{
                name: "数学",
                ensubname: "shuxue",
                contents: [{
                    score: "0-60分",
                    describe: ["1.基本初等函数、三角函数、数列、立体几何、解析几何等基本概念的巩固", "2.对应知识点基础专题答疑"]
                }, {score: "60-90分", describe: ["1.高一、高二各年级对应基础例题讲解", "2.各类习题答疑提升"]}, {
                    score: "90-110分",
                    describe: ["1.函数、数列、概率、解几、立几五大专题查漏补缺。", "2.典型考点训练", "3.解题策略提点"]
                }, {
                    score: "110-130分",
                    describe: ["1.不等式、平面几何、参数方程等选学考点提前预习", "2.期末考点轰炸训练", "3.单元易错集中讲解"]
                }, {score: "130-150分", describe: ["1.选填小题轰炸", "2.历年难题选讲", "3.典型压轴题讲解"]}]
            }, {
                name: "英语",
                ensubname: "yingyu",
                contents: [{
                    score: "0-60分",
                    describe: ["1.基础词汇短语强化巩固", "2.基础语法知识讲练结合", "3.基础词汇语法专项练习"]
                }, {score: "60-90分", describe: ["1.从句非谓语快速提高", "2.选择语法等专项训练", "3.语篇理解强化&提高"]}, {
                    score: "90-110分",
                    describe: ["1.重难点词组强化巩固", "2.完形阅读等专项练习", "3.写作题型归纳和技巧"]
                }, {
                    score: "110-130分",
                    describe: ["1.完形阅读等技巧讲解归纳", "2.写作范文模板解析&拓展", "3.历年高考真题选讲&详解"]
                }, {score: "130-150分", describe: ["1.难点语法解析&突破", "2.考点难题解析&突破", "3.学习阶段规划&指导"]}]
            }, {
                name: "语文",
                ensubname: "yuwen",
                contents: [{
                    score: "0-60分",
                    describe: ["1.夯实课内基础知识", "2.文言文考法梳理", "3.古诗词常识巩固", "4.记叙文阅读剖析", "5.审清题意写作不跑题"]
                }, {
                    score: "60-90分",
                    describe: ["1.合理规划知识体系", "2.妙识文言实词、虚词", "3.古诗词阅读整体规划", "4.散文阅读剖析", "5.写作素材收集串联"]
                }, {
                    score: "90-110分",
                    describe: ["1.专题预习领先一步", "2.文言语法点拨", "3.古诗词鉴赏策略总结", "4.小说主旨阅读", "5.作文结构创新技法"]
                }, {
                    score: "110-130分",
                    describe: ["1.各类题型技巧公式", "2.文言阅读高效提升", "3.古诗词真题分类精讲", "4.社科文高效突破", "5.写作思维拓展训练"]
                }, {
                    score: "130-150分",
                    describe: ["1.语言运用历年真题选讲", "2.三遍阅读法攻克文言", "3.考点重点拔高", "4.现代文题干阅读高分法", "5.写作高分模板点金"]
                }]
            }, {
                name: "物理",
                ensubname: "wuli",
                contents: [{score: "0-60分", describe: ["1.课本知识梳理", "2.基础题型讲解"]}, {
                    score: "60-70分",
                    describe: ["1.受力分析全解读", "2.电场物理量串联", "3.动能定理巩固"]
                }, {score: "70-80分", describe: ["1.解题速度提升", "2.力学图像题专项", "3.能量守恒观建立"]}, {
                    score: "80-90分",
                    describe: ["1.力学四大模型精讲", "2.电磁难题突破", "3.失误点深度剖析"]
                }, {score: "90-100分", describe: ["1.知识漏洞补缺", "2.易错题总结", "3.自招题型选讲"]}]
            }, {
                name: "化学",
                ensubname: "huaxue",
                contents: [{score: "0-60分", describe: ["1.化学方程式书写", "2.基础知识梳理", "3.基础习题答疑"]}, {
                    score: "60-70分",
                    describe: ["1.无机、有机、实验等基础巩固提升", "2.常考典型例题归类及解析方法", "3.培养化学学习兴趣及学习技巧"]
                }, {
                    score: "70-80分",
                    describe: ["1.基础知识查漏补缺", "2.化工原理与实验等重难点专项突破", "3.常考雷区与陷阱归纳", "4.计算技巧训练"]
                }, {
                    score: "80-90分",
                    describe: ["1.重难点强化训练", "2.高考真题选讲", "3.单元易错题讲解", "4.化学思维拓展与知识网络构建"]
                }, {score: "90-100分", describe: ["1.高考压轴题讲解", "2.易错题讲解", "3.竞赛拓展"]}]
            }, {
                name: "生物",
                ensubname: "shengwu",
                contents: [{
                    score: "0-60分",
                    describe: ["1.细胞的分子与组成基础知识讲解", "2.纯合子杂合子等概念的理解", "3.基础习题训练"]
                }, {score: "60-70分", describe: ["1.光合，呼吸等重点知识的讲解", "2.基础例题的掌握", "3.加深对基础知识点的理解"]}, {
                    score: "70-80分",
                    describe: ["1.典型例题讲解", "2.熟悉知识点的常见考查方式", "3.把握主干知识、明晰基本知识点"]
                }, {
                    score: "80-90分",
                    describe: ["1.把分散的知识点联系起来，构建知识网络", "2.单元易错题讲解", "3.重点难点考试题型的训练"]
                }, {score: "90-100分", describe: ["1.小题轰炸", "2.建立知识模块之间的联系", "3.期中期末易错题训练", "4.高考理综题选讲"]}]
            }]
        }, {
            name: "高三",
            enname: "gaosan",
            subjects: [{
                name: "数学",
                ensubname: "shuxue",
                contents: [{score: "0-60分", describe: ["1.高中阶段数学知识全面梳理", "2.高中数学考点基础习题答疑"]}, {
                    score: "60-90分",
                    describe: ["1.基础知识查漏补缺", "2.前后知识串联复习提升", "3.典型例题讲解", "4.疑难点攻破延伸"]
                }, {
                    score: "90-110分",
                    describe: ["1.函数、数列、概率、解几、立几五大专题全面检测", "2.疑难专题狂补", "3.解题策略总结", "4.逆向思维训练"]
                }, {
                    score: "110-130分",
                    describe: ["1.函数、数列、概率、解几、立几五大专题重点拔高", "2.解题技巧补充", "3.高考真题狂练", "4.高考方法盘点"]
                }, {
                    score: "130-150分",
                    describe: ["1.真题难题新题轰炸", "2.函数、数列、概率、解几、立几五大专题压轴题突破", "3.高考模卷考核", "4.高分考生心经", "5.考前经验传授"]
                }]
            }, {
                name: "英语",
                ensubname: "yingyu",
                contents: [{score: "0-60分", describe: ["1.考纲词汇精讲", "2.难点语法精讲", "3.基础专项练习"]}, {
                    score: "60-90分",
                    describe: ["1.难点词组强化提高", "2.情景对话分类精讲", "3.易错难题解答类比"]
                }, {score: "90-110分", describe: ["1.重点难点突破", "2.专项查漏补缺", "3.写作句型强化", "4.听力技巧强化"]}, {
                    score: "110-130分",
                    describe: ["1.完形技巧快速突破", "2.阅读技巧快速提升", "3.写作技巧满分训练", "4.冲刺阶段规划梳理"]
                }, {score: "130-150分", describe: ["1.高考难点解析&突破", "2.真题易错&易混专题", "3.考前经验传授知识，技巧，心态，决胜高考"]}]
            }, {
                name: "语文",
                ensubname: "yuwen",
                contents: [{
                    score: "0-60分",
                    describe: ["1.学习方法设计", "2.基础知识专项训练", "3.阅读题型回顾", "4.实词虚词查漏补缺", "5.快速构思，示范作文"]
                }, {
                    score: "60-90分",
                    describe: ["1.把脉命题走向", "2.语言运用技巧讲解", "3.快速阅读三步法", "4.文言语法、句式、翻译", "5.理性立意，深度写作"]
                }, {
                    score: "90-110分",
                    describe: ["1.应试技巧点拨", "2.基础知识小题精练", "3.文本阅读分类解析", "4.文言阅读进阶训练", "5.精炼语言，百变素材"]
                }, {
                    score: "110-130分",
                    describe: ["1.冲刺阶段规划", "2.基础知识综合运用", "3.阅读失分题突破", "4.文言真题详解", "5.作文预测，洞悉命题"]
                }, {score: "130-150分", describe: ["1.临考经验传授", "2.基础知识满分法则", "3.阅读真题狂练", "4.状元文言阅读心得", "5.满分作文，名师点评"]}]
            }, {
                name: "物理",
                ensubname: "wuli",
                contents: [{score: "0-60分", describe: ["1.受力分析体系建立", "2.必考基础题细讲"]}, {
                    score: "60-70分",
                    describe: ["1.整体法应用提升", "2.静电场解题总结", "3.变压器原理透析"]
                }, {score: "70-80分", describe: ["1.专题全面检测", "2.薄弱点补遗", "3.提分策略传授"]}, {
                    score: "80-90分",
                    describe: ["1.必考考点拔高", "2.电学实验题狂补", "3.高考考题预测"]
                }, {score: "90-100分", describe: ["1.电磁应用延伸", "2.高考压轴讲解", "3.一题双解拓展", "4.考前心理疏导"]}]
            }, {
                name: "化学",
                ensubname: "huaxue",
                contents: [{score: "0-60分", describe: ["1.化学方程式总结归纳", "2.知识点习题式归纳", "3.高考基础题练习"]}, {
                    score: "60-70分",
                    describe: ["1.高考高频考点讲解分析", "2.高考经典例题剖析", "3.构建化学知识网络"]
                }, {
                    score: "70-80分",
                    describe: ["1.知识点查漏补缺", "2.化学与技术、原理、实验重难点突破", "3.实验方案的设计与评价策略", "4.各类型题答题技巧"]
                }, {
                    score: "80-90分",
                    describe: ["1.化学计算", "2.历年易错题分析归纳", "3.答题策略与限时训练", "4.高考压轴题分析与狂练"]
                }, {score: "90-100分", describe: ["1.总结高考趋势，命题方向", "2.名师押题预测", "3.高分考生心经", "4.考前心理疏导"]}]
            }, {
                name: "生物",
                ensubname: "shengwu",
                contents: [{
                    score: "0-60分",
                    describe: ["1.必修基础知识的巩固，捋清各知识点", "2.遗传，光合等重点知识的掌握", "3.基础习题答疑"]
                }, {score: "60-70分", describe: ["1.基础知识查缺补漏", "2.典型例题的讲解", "3.弄清光合与呼吸等知识间的内在联系"]}, {
                    score: "70-80分",
                    describe: ["1.容易出错的知识板块进行加强", "2.重点难点知识查缺补漏", "3.孟德尔计算解题技巧掌握"]
                }, {
                    score: "80-90分",
                    describe: ["1.基础知识的综合、应用", "2.进一步理解和理顺实验原则和实验设计的方法", "3.图表题、曲线题等题型解题技巧补充"]
                }, {
                    score: "90-100分",
                    describe: ["1.对整个知识体系有完整认识，提高运用能力", "2.重视实验图表题分析能力和做题技巧", "3.高考压轴题讲解", "4.大题书写规范、术语准确严谨。"]
                }]
            }]
        }];
        !function () {
            function s(e) {
                e instanceof $ && (this.box = e, this.gradeIndex = 0, this.subjectIndex = 0, this.init())
            }

            s.prototype.init = function () {
                var s = "";
                $.each(e, function (e, c) {
                    s += "<li>" + c.name + "</li>"
                }), this.box.find(".gradeList").html(s), this.box.find(".gradeList li").eq(e.length - 1).addClass("last"), this.bindEvent(), this.box.find(".gradeList li").eq(0).trigger("mouseover")
            }, s.prototype.bindEvent = function () {
                var s = this;
                this.box.find(".gradeList li").on("mouseover", function () {
                    var c = "";
                    s.gradeIndex = $(this).index(), $(this).addClass("active").siblings().removeClass("active");
                    for (var n = 0; n < e[s.gradeIndex].subjects.length; n++) {
                        var r = e[s.gradeIndex].subjects[n];
                        r && (c += "<li >" + e[s.gradeIndex].subjects[n].name + "</li>")
                    }
                    s.box.find(".subjects").css("opacity", 0), s.box.find(".subjects").html(c), s.box.find(".subjects").animate({opacity: "1"}, 500), s.box.find(".subjects li").on("mouseover", function () {
                        s.subjectIndex = $(this).index(), $(this).addClass("active").siblings().removeClass("active"), s.fillContents()
                    }), s.box.find(".subjects li").eq(0).trigger("mouseover")
                })
            }, s.prototype.getGradeIndex = function () {
                return this.gradeIndex
            }, s.prototype.getSubejectIndex = function () {
                return this.subjectIndex
            }, s.prototype.fillContents = function () {
                var s = this, c = this.getGradeIndex(), n = this.getSubejectIndex(), r = e[c].subjects[n].contents;
                $.each(r, function (e, c) {
                    var n = s.box.find(".lv").eq(e), r = "";
                    $.each(c.describe, function (e, s) {
                        r += "<p>" + s + "</p>"
                    }), r += '<div class="triangle"></div>', n.find(".score").html(c.score), n.find(".content").html($(r)), n.find(".content p").css("opacity", 0), n.find(".content p").animate({opacity: "1"}, 1e3)
                })
            }, new s($("#lessonSystem"))
        }(), function () {
            function e() {
                c.CSS_SUPPORT.ANIMATE && c.CSS_SUPPORT.TRANSFORM ? ($("#lessonSystem .lv.lv1").find(".content").css("height", "185px"), $("#lessonSystem .lv.lv2").find(".content").css("height", "222px"), $("#lessonSystem .lv.lv3").find(".content").css("height", "272px"), $("#lessonSystem .lv.lv4").find(".content").css("height", "321px"), $("#lessonSystem .lv.lv5").find(".content").css("height", "370px"), $("#lessonSystem .lv").find("h3.level").css("top", "0"), $("#lessonSystem .lv").find(".score").css("top", "0")) : ($("#lessonSystem .lv.lv1").find(".content").animate({height: "185px"}, 300), $("#lessonSystem .lv.lv2").find(".content").animate({height: "222px"}, 300), $("#lessonSystem .lv.lv3").find(".content").animate({height: "272px"}, 300), $("#lessonSystem .lv.lv4").find(".content").animate({height: "321px"}, 300), $("#lessonSystem .lv.lv5").find(".content").animate({height: "370px"}, 300), $("#lessonSystem .lv").find("h3.level").animate({top: "0"}, 300), $("#lessonSystem .lv").find(".score").animate({top: "0"}, 300))
            }

            var s = "lessonSystem", r = $("#lessonSystem .poshelper");
            n.add({
                key: s, $el: r, margin: 0, callback: function () {
                    e(), n.remove(s)
                }
            })
        }()
    })
});