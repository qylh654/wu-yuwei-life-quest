(() => {
  "use strict";

  const SAVE_KEY = "wu-yuwei-life-quest-v1";
  const STAGE_ACTION_LIMIT = 4;

  const STAGES = [
    {
      id: "security",
      chapter: "第 1 章",
      kicker: "毕业后的第一个月",
      title: "没有 offer 的夏天",
      location: "海星物业 · 保安亭",
      role: "夜班保安",
      quote: "先把今晚熬过去，才有资格谈理想。",
      scene: "security",
      goalText: "积蓄达到 ¥9,000 · 技术达到 18",
      goalHint: "先解决生存，再寻找向上的缝隙。两次值岗、一次学习，是最稳妥的开局。",
      goal: (stats) => stats.money >= 9000 && stats.tech >= 18,
      intro: "毕业证还热着，招聘网站却已经学会了沉默。投出去的简历像丢进湖里的石子，连一圈像样的波纹都没有。为了不让房租和饭钱同时见底，吴钰伟接下了海星物业的夜班保安岗。",
      badge: "熬过毕业季",
      actions: [
        {
          icon: "岗",
          title: "守好每一班岗",
          description: "巡楼、登记、处理突发情况。先把眼前的生活稳住。",
          effects: { money: 3900, reputation: 2, energy: -5, peak: 1 },
          result: "吴钰伟把巡逻路线背得比毕业设计提纲还熟。工资不多，但银行卡终于不再只出不进。"
        },
        {
          icon: "码",
          title: "凌晨自学前端",
          description: "保安亭的灯亮着，浏览器里的教程也在播放。",
          effects: { tech: 8, energy: -10, money: -150, reputation: 1 },
          result: "凌晨三点，第一次独立做出可交互页面。屏幕很小，世界却突然大了一点。"
        },
        {
          icon: "修",
          title: "帮业主修电脑",
          description: "顺手解决蓝屏、断网、数据恢复，积累真实口碑。",
          effects: { tech: 3, reputation: 6, money: 350, energy: -6 },
          result: "一栋楼的居民开始知道：物业新来的小吴，计算机是真的学过。"
        },
        {
          icon: "投",
          title: "再去投一轮简历",
          description: "修改项目经历，继续向技术岗位敲门。",
          effects: { tech: 2, reputation: 4, money: -200, energy: -8, peak: 1 },
          result: "这一轮仍然没有理想 offer，但有两家公司愿意看作品集。门缝已经出现了。"
        }
      ],
      breakthrough: {
        kicker: "关键事件 · 雨夜",
        title: "孩子明天要考试，网断了",
        body: "凌晨两点，一位业主打来电话，说孩子明早有线上考试，家里的网络却怎么都连不上。物业规定：非紧急维修应等早班处理。但电话那头能听见翻书和叹气的声音。",
        choices: [
          {
            label: "立刻上门，工时之后再补",
            detail: "多做一件职责边缘的事，可能会被看见，也可能只是白忙。",
            effects: { reputation: 7, tech: 2, energy: -8, money: 300 },
            tag: "被看见的人",
            log: "吴钰伟拎着工具袋上楼，二十分钟后网络恢复。第二天，业主把感谢信发到了物业群。"
          },
          {
            label: "按流程登记，等早班处理",
            detail: "保护自己的边界，也许比逞强更重要。",
            effects: { energy: 4, reputation: -4 },
            tag: "守规矩",
            log: "他照规矩做完登记，却整晚没睡踏实。边界守住了，心里却留下一点刺。"
          },
          {
            label: "先远程指导，十分钟解决",
            detail: "用技术缩短距离，但未必能换来同等的认可。",
            effects: { tech: 5, reputation: 4, energy: -4 },
            tag: "远程救火",
            log: "吴钰伟让对方重启光猫并修改 DNS。十分钟后网络恢复，技术第一次跑赢了流程。"
          }
        ]
      }
    },
    {
      id: "intern",
      chapter: "第 2 章",
      kicker: "半年后",
      title: "代码不是护身符",
      location: "星河软件 · 实习工位",
      role: "技术实习生",
      quote: "会写几行代码不等于能解决问题。",
      scene: "intern",
      goalText: "技术达到 32 · 声望达到 18",
      goalHint: "实习期没有标准答案。真实项目、靠谱交付和别人愿意为你说话，都算能力。",
      goal: (stats) => stats.tech >= 32 && stats.reputation >= 18,
      intro: "靠着一份夜班时做出来的管理系统，吴钰伟拿到星河软件的技术实习。工位比保安亭宽，压力却像天花板一样压下来：老代码、临时需求、没人教，还有随时可能被终止的实习期。",
      badge: "成为程序员",
      actions: [
        {
          icon: "旧",
          title: "接下没人愿改的老项目",
          description: "代码没有注释，原作者已经离职。你先把它跑起来。",
          effects: { tech: 8, reputation: 5, energy: -11, money: 4200 },
          result: "吴钰伟顺着日志一路追到十年前的接口。项目没变漂亮，但终于能稳定交付。"
        },
        {
          icon: "需",
          title: "跟师傅做真实需求",
          description: "从用户一句话里，拆出能落地的功能和边界。",
          effects: { tech: 7, reputation: 6, energy: -9, money: 3800 },
          result: "第一次有人指出他只会写功能、不会理解业务。难受了一晚，第二天他把需求访谈做了三页。"
        },
        {
          icon: "包",
          title: "周末接外包网页",
          description: "用额外收入补装备，也逼迫自己独立交付。",
          effects: { tech: 5, reputation: 2, energy: -13, money: 6200 },
          result: "两天做完官网，客户临时加了七个需求。吴钰伟学会了下一次先写清楚验收标准。"
        },
        {
          icon: "兼",
          title: "保留保安岗兼职",
          description: "安全感与时间的交换，至少短期内有效。",
          effects: { money: 2600, reputation: 1, energy: -7, peak: 1 },
          result: "周末替老同事值两班。制服还在，但他知道这不是终点，而是一层备用安全网。"
        }
      ],
      breakthrough: {
        kicker: "关键事件 · 转正答辩",
        title: "十分钟，修还是不修？",
        body: "转正答辩前十分钟，测试环境突然报错，技术总监就在会议室。你可以直接改线上配置赌一把，也可以按流程回滚，或者请师傅一起排查。",
        choices: [
          {
            label: "直接改线上配置，先让演示跑通",
            detail: "快，但风险和收益都不可控。",
            effects: { tech: 7, reputation: 4, energy: -8 },
            conditional: (stats) => stats.tech < 30 ? { tech: -6, reputation: -9 } : { peak: 2 },
            tag: "敢担风险",
            log: "配置改完，页面恢复。过程惊险，结果救场，但这种胜利不值得复制。"
          },
          {
            label: "立即回滚，再定位根因",
            detail: "放弃短跑式的漂亮，选择可解释的稳定。",
            effects: { tech: 4, reputation: 9, energy: -10 },
            tag: "稳定交付",
            log: "回滚只用了两分钟，根因在下午被彻底定位。总监说：能控制风险的人，才配碰核心系统。"
          },
          {
            label: "拉师傅一起求助",
            detail: "承认不会并不丢脸，耽误团队才丢脸。",
            effects: { tech: 3, reputation: 3, energy: -4 },
            tag: "会求助",
            log: "师傅一眼看出环境变量错了。吴钰伟把排查步骤记进笔记，下一次独自解决。"
          }
        ]
      }
    },
    {
      id: "engineer",
      chapter: "第 3 章",
      kicker: "正式入职后的第 2 年",
      title: "第一次真正上线",
      location: "云栈科技 · 开发大厅",
      role: "研发工程师",
      quote: "代码上线那一刻，责任才真正开始。",
      scene: "engineer",
      goalText: "技术达到 46 · 声望达到 30",
      goalHint: "从“完成任务”走向“对结果负责”。系统、协作、业务价值都会写进职业履历。",
      goal: (stats) => stats.tech >= 46 && stats.reputation >= 30,
      intro: "转正后，吴钰伟跳槽到云栈科技。这里没有保安亭，也没有师傅全程兜底。支付、监控、流量和 AI 一起压上来，每一次发布都可能影响成千上万的用户。",
      badge: "事故终结者",
      actions: [
        {
          icon: "付",
          title: "啃下支付系统",
          description: "最复杂、最不能出错，也最能建立技术护城河。",
          effects: { tech: 8, reputation: 5, energy: -11, money: 9000 },
          result: "他把支付链路画满一整面墙。别人眼里的黑盒，逐渐变成可以拆解、验证和改进的系统。"
        },
        {
          icon: "守",
          title: "主动值守发布夜",
          description: "站在结果发生的地方，而不是只提交一段代码。",
          effects: { tech: 6, reputation: 7, energy: -13, money: 6500 },
          result: "凌晨一点，灰度指标异常。吴钰伟三分钟切流，第二天邮件里第一次出现“建议由他牵头”。"
        },
        {
          icon: "智",
          title: "系统学习 AI 工程",
          description: "把新技术变成产品能力，而不是简历上的关键词。",
          effects: { tech: 10, energy: -9, money: -500 },
          result: "他做了三个失败的小模型，也终于知道模型、数据、推理服务之间真正难在哪里。"
        },
        {
          icon: "产",
          title: "给产品经理做原型",
          description: "用工程思维理解用户，用产品思维解释技术。",
          effects: { tech: 5, reputation: 6, energy: -8, money: 5000 },
          result: "原型让一场争了三周的会议十分钟结束。技术不只是实现，也可以定义问题。"
        }
      ],
      breakthrough: {
        kicker: "关键事件 · 线上事故",
        title: "故障正在扩大，谁来拍板？",
        body: "核心服务延迟飙升，客服系统开始涌入投诉。监控显示可能与刚发布的模块有关，但还不能完全确认。上级要求你给出下一步动作。",
        choices: [
          {
            label: "先止血，再做完整复盘",
            detail: "控制影响范围永远排在证明自己正确之前。",
            effects: { tech: 7, reputation: 6, energy: -8 },
            tag: "故障处理者",
            log: "吴钰伟先关闭新功能入口，延迟在八分钟内回落。复盘会上，他没有再为代码辩解。"
          },
          {
            label: "先写事故报告，等负责人审批",
            detail: "流程正确，但黄金处理窗口可能正在消失。",
            effects: { tech: 4, reputation: -4, energy: -4 },
            tag: "流程优先",
            log: "报告写得很完整，故障却多持续了半小时。正确和及时，有时是两回事。"
          },
          {
            label: "通宵补自动化监控与告警",
            detail: "用一次疲惫，换下一次更快发现和定位。",
            effects: { tech: 10, reputation: 3, energy: -14 },
            tag: "自动化信徒",
            log: "天亮前，新的链路监控上线。没人看见他熬红的眼睛，但系统下一次会更早发出声音。"
          }
        ]
      }
    },
    {
      id: "lead",
      chapter: "第 4 章",
      kicker: "职业第 5 年",
      title: "从写代码到带人",
      location: "云栈科技 · 项目作战室",
      role: "技术负责人",
      quote: "以前解决 bug，现在要解决让团队产生 bug 的土壤。",
      scene: "lead",
      goalText: "技术达到 59 · 声望达到 43",
      goalHint: "个人能力开始变成组织能力。带人、分享、攻难、做取舍，缺一项都很难再向上。",
      goal: (stats) => stats.tech >= 59 && stats.reputation >= 43,
      intro: "云栈的核心项目失败过两次，第三次交给了吴钰伟。他从一个人写代码，变成要对目标、节奏、人员和结果负责。最难的不是系统架构，而是让每个人愿意把后背交给队友。",
      badge: "技术负责人",
      actions: [
        {
          icon: "带",
          title: "带新人完成第一个模块",
          description: "把经验拆成方法，而不是替对方把活做完。",
          effects: { reputation: 10, tech: 4, energy: -10, money: 17000 },
          result: "新人第一次独立上线。吴钰伟忍住没有接管代码，只在关键路径上做了两次把关。"
        },
        {
          icon: "攻",
          title: "攻克核心性能难题",
          description: "亲自下场，证明负责人的技术判断没有失速。",
          effects: { tech: 11, reputation: 5, energy: -14, money: 10000 },
          result: "核心接口响应从 840ms 降到 96ms。更重要的是，团队看见了他为什么能带队。"
        },
        {
          icon: "讲",
          title: "去行业沙龙做分享",
          description: "把真实项目讲清楚，让能力被行业看见。",
          effects: { tech: 4, reputation: 9, energy: -8, money: 3000 },
          result: "演讲没有炫技，只讲故障与取舍。会后有三家公司来交换名片，也有人开始记住他的名字。"
        },
        {
          icon: "留",
          title: "拒绝挖角，继续带队",
          description: "高薪很诱人，但有些成果需要完整周期。",
          effects: { reputation: 6, tech: 7, energy: -6, money: 22000 },
          tag: "长期主义者",
          log: "他把猎头的 offer 放进抽屉，继续完成下一代平台。错过一个价格，选择了一条曲线。"
        }
      ],
      breakthrough: {
        kicker: "关键事件 · 十字路口",
        title: "大厂履历，还是从零造一艘船？",
        body: "大厂给出高薪技术专家 offer，创业朋友邀请你做 CTO，团队里也有人希望你带着大家单干。三条路都向上，但它们通往的不是同一种人生。",
        choices: [
          {
            label: "去大厂，补齐平台与管理视野",
            detail: "站在更大的系统里，快速积累资源和确定性。",
            effects: { money: 90000, reputation: 9, tech: 6, energy: -5 },
            tag: "大厂履历",
            flag: (state) => { state.flags.path = "corporate"; },
            log: "吴钰伟大厂报到第一天，通讯录里有一万人。他提醒自己：平台的光，不等于自己的光。"
          },
          {
            label: "加入创业团队，做 CTO",
            detail: "从第一天就决定产品架构，也承担全部不确定性。",
            effects: { money: 30000, reputation: 8, tech: 9, energy: -11 },
            tag: "初创合伙人",
            flag: (state) => { state.flags.path = "startup"; },
            log: "工位只有十二个，会议室没有窗户。他把“公司能活多久”拆成了接下来三个月的技术路线。"
          },
          {
            label: "自己拉队伍，从零创业",
            detail: "最难，也最接近他心中那件真正想做的事。",
            effects: { money: -15000, reputation: 12, tech: 6, energy: -13 },
            tag: "从零创业",
            flag: (state) => { state.flags.path = "founder"; },
            log: "他在一张白板上写下：逆风智能。团队的第一张合照里，只有五个人和一箱泡面。"
          }
        ]
      }
    },
    {
      id: "startup",
      chapter: "第 5 章",
      kicker: "创业第 2 年",
      title: "把代码变成事业",
      location: "逆风智能 · 临时办公室",
      role: "创始人 / 技术负责人",
      quote: "产品只有被人真正需要，技术才有商业坐标。",
      scene: "startup",
      goalText: "技术达到 72 · 声望达到 57 · 积蓄达到 ¥160,000",
      goalHint: "技术、客户与现金流必须同时转动。只埋头写代码，公司活不过下个季度。",
      goal: (stats) => stats.tech >= 72 && stats.reputation >= 57 && stats.money >= 160000,
      intro: "逆风智能做出第一个 AI 客服原型，也烧掉了第一笔启动资金。团队只有九个人，客户、融资、招聘和产品文档都挤在一间没有窗的办公室里。吴钰伟第一次发现，创业不是把代码写得更多，而是不断决定什么不该做。",
      badge: "公司创始人",
      actions: [
        {
          icon: "品",
          title: "打磨 AI 产品 MVP",
          description: "砍掉炫技功能，只留下客户愿意付费的核心闭环。",
          effects: { tech: 9, reputation: 6, energy: -14, money: -22000 },
          result: "版本从 27 个功能砍到 6 个，留存反而上升。吴钰伟第一次承认：少，也是一种技术判断。"
        },
        {
          icon: "客",
          title: "拜访 30 家客户",
          description: "亲自坐下听抱怨，让需求从会议室走进现场。",
          effects: { reputation: 10, tech: 2, energy: -12, money: 90000 },
          result: "第 24 家客户终于签下合同。对方说：不是因为你讲得最好，是因为你听得最认真。"
        },
        {
          icon: "同",
          title: "说服老同学加入",
          description: "用愿景聚人，也用透明面对风险。",
          effects: { reputation: 7, tech: 5, energy: -9, money: -8000 },
          tag: "同学合伙人",
          log: "两位老同学加入团队。没有画大饼，只有一页现金流、一页路线图和一句“工资会晚，但承诺不会”。"
        },
        {
          icon: "融",
          title: "完成一轮融资路演",
          description: "面向资本讲述未来，同时守住产品底线。",
          effects: { money: 220000, reputation: 6, tech: 2, energy: -16 },
          result: "第 18 次路演后，第一份投资意向书来了。数字令人兴奋，条款也提醒他：每笔钱都有代价。"
        }
      ],
      breakthrough: {
        kicker: "关键事件 · 融资谈判",
        title: "投资人想要更大的控制权",
        body: "投资人愿意加大投资，但要求拥有一票否决权，并派人接管部分经营。资本能让公司跑得更快，也可能让团队失去方向。",
        choices: [
          {
            label: "接受条款，换取快速扩张",
            detail: "现金流和资源优先，创始人的控制权暂时后退。",
            effects: { money: 260000, reputation: 8, energy: 5 },
            tag: "资本助推",
            flag: (state) => { state.flags.capital = "aggressive"; },
            log: "资金到账，招聘和投放同时提速。吴钰伟开始学习另一套语法：组织、治理和权力边界。"
          },
          {
            label: "拒绝控制权，靠产品自理",
            detail: "慢一些，但关键决策仍然留在团队手里。",
            effects: { tech: 11, reputation: 4, energy: -10 },
            tag: "产品主权",
            flag: (state) => { state.flags.capital = "independent"; },
            log: "他拒绝了两家机构，也砍掉一半预算。团队靠客户回款多走了八个月，产品终于站稳。"
          },
          {
            label: "引入顾问委员会，接受折中方案",
            detail: "用更复杂的治理，换取资本与独立性之间的平衡。",
            effects: { money: 130000, reputation: 6, tech: 5, energy: -5 },
            tag: "稳健创业者",
            flag: (state) => { state.flags.capital = "balanced"; },
            log: "协议改到第 11 版，双方都保留了退路。不是最痛快的结果，却是团队最能承受的结果。"
          }
        ]
      }
    },
    {
      id: "peak",
      chapter: "终章",
      kicker: "创业第 7 年",
      title: "站上山顶之后",
      location: "逆风智能 · 城市天台",
      role: "行业领航者",
      quote: "真正的巅峰，不是站得最高，而是终于有能力决定往哪里走。",
      scene: "peak",
      goalText: "技术达到 82 · 声望达到 72 · 积蓄达到 ¥400,000 · 精力达到 35",
      goalHint: "最后一段路不再只考验速度。影响力、财富、健康和初心，都要有自己的位置。",
      goal: (stats) => stats.tech >= 82 && stats.reputation >= 72 && stats.money >= 400000 && stats.energy >= 35,
      intro: "逆风智能的产品进入全球五十个城市，吴钰伟也从保安亭走到了行业峰会的聚光灯下。新总部顶楼的风很大，城市灯火却比任何时候都清晰。他终于有能力选择：下一程，究竟要把自己带去哪里。",
      badge: "人生巅峰",
      actions: [
        {
          icon: "发",
          title: "发布行业级 AI 平台",
          description: "把多年积累沉淀成真正影响行业的基础能力。",
          effects: { tech: 9, reputation: 12, energy: -15, money: 500000 },
          result: "发布会只有二十分钟，背后是七年架构、失败和一次次重写。平台开放当天，数千名开发者接入。"
        },
        {
          icon: "校",
          title: "回母校设立奖学金",
          description: "让那个曾经找不到工作的自己，变成后来者的台阶。",
          effects: { reputation: 13, tech: 2, energy: -7, money: -80000 },
          tag: "回馈母校",
          once: true,
          log: "吴钰伟回到长春电子科技学院。他没有讲成功学，只把第一份失败简历投屏给大家看。"
        },
        {
          icon: "海",
          title: "推动公司与产品出海",
          description: "去更复杂的市场，接受不同语言和规则的检验。",
          effects: { reputation: 9, tech: 6, energy: -13, money: 700000 },
          result: "海外第一站并不顺利。第二次本地化重构后，产品终于跨越了文化与时区的边界。"
        },
        {
          icon: "家",
          title: "把周末真正还给自己",
          description: "巅峰不是把精力全部花光，而是能长期站在这里。",
          effects: { energy: 18, reputation: 7, tech: 2 },
          tag: "生活掌舵人",
          log: "他关掉工作群提醒，陪家人走了很久。公司没有倒下，世界也没有少一块。"
        }
      ],
      breakthrough: {
        kicker: "最终抉择 · 山顶",
        title: "下一座山，为什么而爬？",
        body: "三十岁生日那天，你独自站上新总部天台。手机里同时亮着三条消息：行业协会邀请你制定标准，母校希望你长期授课，家人问你周末能不能不再缺席。",
        choices: [
          {
            label: "成为行业标准的制定者",
            detail: "把个人经验写进行业规则，影响更多后来者。",
            effects: { tech: 10, reputation: 10, peak: 12 },
            tag: "行业灯塔",
            log: "他接下标准委员会的工作。最难的不是写规则，而是让规则对创新保持善意。"
          },
          {
            label: "回到母校长期授课",
            detail: "把来之不易的坐标，交给下一届年轻人。",
            effects: { reputation: 15, tech: 4, money: -50000, peak: 12 },
            tag: "回馈教育",
            log: "每周五下午，他都会出现在长春电子科技学院的实验室。第一堂课叫：从保安亭到服务器。"
          },
          {
            label: "把生活也活成答案",
            detail: "减少公开露面，让事业与健康进入更长的周期。",
            effects: { energy: 30, reputation: 8, peak: 10 },
            tag: "长期主义",
            log: "他把公司交给更成熟的团队，只保留产品和技术方向的最终判断。山顶不再是终点，而是长期生活的起点。"
          }
        ]
      }
    }
  ];

  const sceneHelpers = {
    windows: (items) => items.map((item) => {
      const [x, y, w, h, opacity] = item;
      return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#ffd36a" opacity="${opacity}"/>`;
    }).join(""),
    rain: (count, color) => Array.from({ length: count }, (_, index) => {
      const x = (index * 89 + 27) % 940 - 20;
      const y = (index * 53) % 520 - 70;
      const length = 25 + (index % 4) * 9;
      const duration = 0.7 + (index % 5) * 0.12;
      const delay = -(index % 7) * 0.19;
      return `<line x1="${x}" y1="${y}" x2="${x - 16}" y2="${y + length}" stroke="${color}" stroke-width="1.5" stroke-linecap="round" opacity="0.36" style="animation:rain-fall ${duration}s linear ${delay}s infinite"/>`;
    }).join("")
  };

  function sceneSecurity() {
    const windows = sceneHelpers.windows([
      [35, 150, 9, 8, 0.35], [51, 150, 9, 8, 0.12], [116, 204, 11, 8, 0.4], [137, 204, 11, 8, 0.15],
      [222, 116, 13, 10, 0.42], [242, 116, 13, 10, 0.12], [225, 139, 13, 10, 0.24], [612, 180, 12, 10, 0.5],
      [636, 180, 12, 10, 0.16], [679, 124, 10, 8, 0.35], [696, 124, 10, 8, 0.2], [730, 241, 12, 9, 0.4],
      [749, 241, 12, 9, 0.12], [813, 170, 11, 9, 0.33], [831, 170, 11, 9, 0.1]
    ]);
    return `
      <svg class="scene-svg" viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice" role="img" aria-label="深夜雨中，吴钰伟在保安亭值班">
        <defs>
          <linearGradient id="security-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#101a35"/>
            <stop offset="0.58" stop-color="#1d3453"/>
            <stop offset="1" stop-color="#0a1528"/>
          </linearGradient>
          <linearGradient id="security-ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#13243b"/>
            <stop offset="1" stop-color="#07101c"/>
          </linearGradient>
          <linearGradient id="booth-glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#77d8dd" stop-opacity="0.28"/>
            <stop offset="0.5" stop-color="#d8fdff" stop-opacity="0.08"/>
            <stop offset="1" stop-color="#4699ab" stop-opacity="0.2"/>
          </linearGradient>
          <filter id="security-glow"><feGaussianBlur stdDeviation="14"/></filter>
        </defs>
        <rect width="900" height="560" fill="url(#security-sky)"/>
        <circle cx="735" cy="90" r="42" fill="#e9f2df" opacity="0.86"/>
        <circle cx="747" cy="78" r="46" fill="#152543"/>
        <circle cx="139" cy="86" r="2" fill="#fff" opacity="0.7"/>
        <circle cx="336" cy="61" r="2" fill="#fff" opacity="0.45"/>
        <circle cx="575" cy="112" r="2" fill="#fff" opacity="0.6"/>
        <rect x="0" y="246" width="900" height="314" fill="#14243a"/>
        <g opacity="0.95">
          <rect x="0" y="132" width="180" height="310" fill="#172a43"/>
          <rect x="184" y="193" width="124" height="249" fill="#122238"/>
          <rect x="314" y="96" width="96" height="346" fill="#1a304b"/>
          <rect x="558" y="154" width="148" height="288" fill="#152940"/>
          <rect x="711" y="101" width="80" height="341" fill="#1b2f48"/>
          <rect x="797" y="218" width="103" height="224" fill="#13243a"/>
        </g>
        ${windows}
        <path d="M0 430 C190 410 262 451 421 432 C598 411 706 451 900 426 L900 560 L0 560Z" fill="url(#security-ground)"/>
        <path d="M0 476 C176 462 355 493 520 476 C699 457 780 490 900 472" fill="none" stroke="#28455e" stroke-width="2" opacity="0.55"/>
        <ellipse cx="425" cy="394" rx="214" ry="17" fill="#05101c" opacity="0.48"/>
        <g transform="translate(285 226)">
          <rect x="-9" y="-4" width="296" height="184" rx="13" fill="#102139" stroke="#557087" stroke-width="3"/>
          <rect x="14" y="18" width="250" height="126" rx="6" fill="url(#booth-glass)" stroke="#6c8797" stroke-width="2"/>
          <path d="M139 20 L139 142 M14 81 L264 81" stroke="#85a3ae" stroke-width="2" opacity="0.7"/>
          <path d="M-24 -16 L162 -37 L343 -15 L316 17 L21 18Z" fill="#273b50" stroke="#6d8192" stroke-width="3"/>
          <rect x="219" y="35" width="34" height="66" rx="4" fill="#0a1728" stroke="#6a8498"/>
          <rect x="226" y="43" width="20" height="5" rx="2" fill="#64d5dc"/>
          <rect x="226" y="53" width="13" height="4" rx="2" fill="#5a7ba2" opacity="0.8"/>
          <rect x="226" y="62" width="18" height="4" rx="2" fill="#5a7ba2" opacity="0.55"/>
          <circle cx="239" cy="116" r="5" fill="#ffca4c"/>
          <circle cx="239" cy="116" r="18" fill="#ffca4c" opacity="0.14" filter="url(#security-glow)"/>
          <g transform="translate(49 37)">
            <circle cx="43" cy="27" r="20" fill="#d49a73"/>
            <path d="M23 28 Q22 2 47 4 Q66 6 64 29 Q54 16 27 20Z" fill="#142135"/>
            <path d="M15 57 Q43 41 72 57 L80 118 L8 118Z" fill="#213c5e"/>
            <path d="M43 55 L43 108" stroke="#ffca4c" stroke-width="3" opacity="0.75"/>
            <rect x="30" y="69" width="27" height="23" rx="4" fill="none" stroke="#ffca4c" stroke-width="2" opacity="0.65"/>
          </g>
        </g>
        <g transform="translate(88 349)">
          <path d="M0 48 L55 30 L111 49 L56 68Z" fill="#1e354e"/>
          <path d="M55 30 L55 2 L112 20 L112 49Z" fill="#263d54"/>
          <path d="M55 2 L0 20 L0 48 L55 30Z" fill="#334e63"/>
          <path d="M78 25 L103 33 L103 47 L78 39Z" fill="#ffca4c" opacity="0.65"/>
        </g>
        ${sceneHelpers.rain(34, "#b5d9f0")}
        <rect x="0" y="522" width="900" height="38" fill="#07101c" opacity="0.9"/>
      </svg>`;
  }

  function sceneIntern() {
    const lines = Array.from({ length: 15 }, (_, index) => {
      const y = 271 + index * 6;
      const width = 55 + ((index * 31) % 170);
      return `<rect x="${488 + (index % 2) * 8}" y="${y}" width="${width}" height="2" rx="1" fill="${index % 3 === 0 ? '#ffc94a' : '#6ce0df'}" opacity="${index % 3 === 0 ? 0.9 : 0.45}"/>`;
    }).join("");
    return `
      <svg class="scene-svg" viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice" role="img" aria-label="吴钰伟在深夜写下第一行项目代码">
        <defs>
          <linearGradient id="intern-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#17243b"/>
            <stop offset="1" stop-color="#0b1527"/>
          </linearGradient>
          <linearGradient id="screen-glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#173c59"/>
            <stop offset="1" stop-color="#081a2b"/>
          </linearGradient>
          <filter id="blue-glow"><feGaussianBlur stdDeviation="18"/></filter>
        </defs>
        <rect width="900" height="560" fill="url(#intern-bg)"/>
        <ellipse cx="455" cy="292" rx="260" ry="125" fill="#55d7df" opacity="0.09" filter="url(#blue-glow)"/>
        <rect x="0" y="430" width="900" height="130" fill="#080f1b"/>
        <path d="M0 455 L900 407 L900 560 L0 560Z" fill="#111c2c"/>
        <g transform="translate(449 104)">
          <rect x="-6" y="-5" width="270" height="185" rx="12" fill="#0a1524" stroke="#344e68" stroke-width="4"/>
          <rect x="8" y="9" width="242" height="157" rx="6" fill="url(#screen-glow)"/>
          <rect x="0" y="40" width="4" height="26" fill="#ffc94a" opacity="0.72"/>
          ${lines}
        </g>
        <g transform="translate(72 113)">
          <rect width="222" height="173" rx="10" fill="#0a1524" stroke="#344e68" stroke-width="3"/>
          <rect x="10" y="10" width="202" height="129" rx="5" fill="#112a40"/>
          <path d="M28 28 L96 92 L52 118 L35 102 L71 84 L16 45Z" fill="#64d7dc" opacity="0.62"/>
          <rect x="126" y="38" width="61" height="5" rx="2" fill="#ffc94a" opacity="0.8"/>
          <rect x="126" y="55" width="42" height="4" rx="2" fill="#8bb2ce" opacity="0.42"/>
          <rect x="126" y="69" width="53" height="4" rx="2" fill="#8bb2ce" opacity="0.32"/>
          <rect x="17" y="151" width="188" height="7" rx="3" fill="#253c52"/>
        </g>
        <g transform="translate(377 -30)">
          <path d="M0 382 Q45 330 89 381 L96 527 L-5 527Z" fill="#172b45"/>
          <path d="M12 374 Q48 332 79 378 L83 517 L8 517Z" fill="#1e3d60"/>
          <circle cx="46" cy="328" r="32" fill="#d79d73"/>
          <path d="M13 330 Q13 289 47 291 Q79 293 78 334 Q61 315 21 318Z" fill="#111c2f"/>
          <path d="M18 316 Q47 299 79 320" fill="none" stroke="#273f5d" stroke-width="7" stroke-linecap="round"/>
          <circle cx="37" cy="331" r="2.5" fill="#1a2333"/>
          <circle cx="59" cy="331" r="2.5" fill="#1a2333"/>
          <path d="M34 347 Q47 355 61 346" fill="none" stroke="#8f5b48" stroke-width="2" stroke-linecap="round"/>
          <path d="M16 379 Q-24 405 -50 457" fill="none" stroke="#1e3d60" stroke-width="18" stroke-linecap="round"/>
          <path d="M76 379 Q112 401 136 446" fill="none" stroke="#1e3d60" stroke-width="18" stroke-linecap="round"/>
        </g>
        <g transform="translate(142 354)">
          <path d="M0 26 Q84 -7 176 25 L176 106 L0 106Z" fill="#14304a"/>
          <path d="M17 32 Q89 6 158 31" fill="none" stroke="#6ce0df" stroke-width="3" opacity="0.42"/>
          <rect x="36" y="52" width="60" height="8" rx="4" fill="#253e58"/>
          <rect x="105" y="68" width="41" height="5" rx="2" fill="#253e58"/>
          <path d="M14 106 L20 153 M159 106 L153 153" stroke="#23354a" stroke-width="9"/>
        </g>
        <g transform="translate(770 32)" opacity="0.34">
          <rect width="76" height="440" fill="#12243a"/>
          <rect x="17" y="42" width="42" height="12" rx="3" fill="#57c6cf"/>
          <rect x="17" y="105" width="42" height="12" rx="3" fill="#ffc94a"/>
          <rect x="17" y="180" width="42" height="12" rx="3" fill="#57c6cf" opacity="0.6"/>
          <rect x="17" y="257" width="42" height="12" rx="3" fill="#57c6cf" opacity="0.85"/>
          <rect x="17" y="343" width="42" height="12" rx="3" fill="#ffc94a" opacity="0.7"/>
        </g>
        <path d="M0 524 L900 524" stroke="#70d6a2" stroke-width="2" opacity="0.3"/>
      </svg>`;
  }

  function sceneEngineer() {
    const bars = Array.from({ length: 9 }, (_, index) => {
      const height = 18 + ((index * 31) % 68);
      return `<rect x="${548 + index * 30}" y="${167 - height}" width="14" height="${height}" rx="3" fill="${index === 7 ? '#ffc94a' : '#54d6dc'}" opacity="${index === 7 ? 1 : 0.58}"/>`;
    }).join("");
    return `
      <svg class="scene-svg" viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice" role="img" aria-label="吴钰伟在开发大厅值守线上系统发布">
        <defs>
          <linearGradient id="engineer-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#162b44"/>
            <stop offset="1" stop-color="#091422"/>
          </linearGradient>
          <linearGradient id="engineer-wall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#203b54"/>
            <stop offset="1" stop-color="#13283f"/>
          </linearGradient>
          <filter id="engineer-glow"><feGaussianBlur stdDeviation="14"/></filter>
        </defs>
        <rect width="900" height="560" fill="url(#engineer-bg)"/>
        <rect x="0" y="70" width="900" height="352" fill="url(#engineer-wall)"/>
        <path d="M0 420 L900 420 L900 560 L0 560Z" fill="#0a1421"/>
        <path d="M0 164 L900 164 M0 275 L900 275" stroke="#6fa1b7" stroke-width="1" opacity="0.11"/>
        <g transform="translate(490 70)">
          <rect width="326" height="205" rx="9" fill="#081524" stroke="#446277" stroke-width="4"/>
          <rect x="14" y="14" width="298" height="176" rx="5" fill="#10263d"/>
          <rect x="30" y="28" width="99" height="10" rx="4" fill="#6fcbd2" opacity="0.7"/>
          <rect x="30" y="51" width="160" height="5" rx="2" fill="#7b9db4" opacity="0.3"/>
          <path d="M31 145 C63 83 84 136 112 92 C143 46 176 122 204 81 C230 48 255 95 296 43" fill="none" stroke="#54d6dc" stroke-width="4" stroke-linecap="round"/>
          ${bars}
          <rect x="22" y="193" width="52" height="5" rx="2" fill="#ffc94a" opacity="0.42"/>
        </g>
        <g transform="translate(54 83)">
          <rect width="286" height="178" rx="9" fill="#081524" stroke="#37556d" stroke-width="3"/>
          <rect x="13" y="14" width="260" height="150" rx="5" fill="#0d2034"/>
          <path d="M29 42 L47 60 L29 78 M64 82 L107 82" fill="none" stroke="#54d6dc" stroke-width="3" stroke-linecap="round"/>
          <path d="M139 37 L174 37 L174 71 L139 71Z M190 37 L235 37 L235 50 L190 50Z" fill="#ffc94a" opacity="0.55"/>
          <path d="M139 90 L179 90 L179 125 L139 125Z M193 89 L244 89 L244 115 L193 115Z" fill="#55aec3" opacity="0.45"/>
          <path d="M28 106 L89 106 L89 124 L28 124Z" fill="#487e96" opacity="0.34"/>
        </g>
        <g transform="translate(25 0)">
          <rect x="0" y="126" width="56" height="307" rx="7" fill="#0b192a" stroke="#314d65" stroke-width="2"/>
          <rect x="11" y="145" width="34" height="20" rx="3" fill="#16364e"/>
          <rect x="11" y="188" width="34" height="20" rx="3" fill="#16364e"/>
          <rect x="11" y="231" width="34" height="20" rx="3" fill="#16364e"/>
          <rect x="11" y="274" width="34" height="20" rx="3" fill="#16364e"/>
          <circle cx="44" cy="153" r="2.5" fill="#70d6a2"/>
          <circle cx="44" cy="196" r="2.5" fill="#ffc94a"/>
          <circle cx="44" cy="239" r="2.5" fill="#70d6a2"/>
          <circle cx="44" cy="282" r="2.5" fill="#70d6a2"/>
        </g>
        <g transform="translate(814 105)">
          <rect width="58" height="328" rx="7" fill="#0b192a" stroke="#314d65" stroke-width="2"/>
          <rect x="11" y="27" width="36" height="20" rx="3" fill="#16364e"/>
          <rect x="11" y="72" width="36" height="20" rx="3" fill="#16364e"/>
          <rect x="11" y="117" width="36" height="20" rx="3" fill="#16364e"/>
          <rect x="11" y="162" width="36" height="20" rx="3" fill="#16364e"/>
          <circle cx="43" cy="36" r="2.5" fill="#70d6a2"/>
          <circle cx="43" cy="81" r="2.5" fill="#54d6dc"/>
          <circle cx="43" cy="126" r="2.5" fill="#70d6a2"/>
          <circle cx="43" cy="171" r="2.5" fill="#ffc94a"/>
        </g>
        <g transform="translate(340 283)">
          <path d="M0 149 Q26 72 105 73 Q190 75 217 149Z" fill="#1b3858"/>
          <circle cx="108" cy="42" r="35" fill="#d89b73"/>
          <path d="M73 43 Q73 -1 109 0 Q145 2 144 47 Q121 24 84 29Z" fill="#111c30"/>
          <path d="M96 10 Q109 -20 127 4" fill="none" stroke="#273e5d" stroke-width="8" stroke-linecap="round"/>
          <circle cx="96" cy="44" r="2.7" fill="#172033"/>
          <circle cx="120" cy="44" r="2.7" fill="#172033"/>
          <path d="M94 61 Q108 69 122 59" fill="none" stroke="#8f5746" stroke-width="2.3" stroke-linecap="round"/>
          <path d="M27 109 Q-32 111 -69 144" fill="none" stroke="#1b3858" stroke-width="20" stroke-linecap="round"/>
          <path d="M184 109 Q235 117 267 95" fill="none" stroke="#1b3858" stroke-width="20" stroke-linecap="round"/>
        </g>
        <rect x="0" y="502" width="900" height="58" fill="#07111e"/>
        <path d="M67 502 L833 502" stroke="#54d6dc" stroke-width="2" opacity="0.25"/>
      </svg>`;
  }

  function sceneLead() {
    const people = [
      { x: 166, color: "#26476b", y: 329 },
      { x: 310, color: "#b07b4e", y: 335 },
      { x: 637, color: "#376b66", y: 331 },
      { x: 774, color: "#584b77", y: 337 }
    ].map((person, index) => `
      <g transform="translate(${person.x} ${person.y})">
        <circle cx="0" cy="0" r="${28 - index % 2 * 3}" fill="#d69a72"/>
        <path d="M-${30 - index} 1 Q-8 -31 27 -7 Q36 6 18 16 Q-5 -15 -30 1Z" fill="#121e31"/>
        <path d="M-35 75 Q-14 35 0 34 Q20 35 40 75 L47 133 L-47 133Z" fill="${person.color}"/>
      </g>`).join("");
    return `
      <svg class="scene-svg" viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice" role="img" aria-label="吴钰伟在作战室和团队讨论技术方案">
        <defs>
          <linearGradient id="lead-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#172d46"/>
            <stop offset="1" stop-color="#0a1524"/>
          </linearGradient>
          <linearGradient id="lead-screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#12364c"/>
            <stop offset="1" stop-color="#0a1d31"/>
          </linearGradient>
          <filter id="lead-glow"><feGaussianBlur stdDeviation="16"/></filter>
        </defs>
        <rect width="900" height="560" fill="url(#lead-bg)"/>
        <ellipse cx="452" cy="185" rx="315" ry="148" fill="#54d6dc" opacity="0.08" filter="url(#lead-glow)"/>
        <rect x="0" y="453" width="900" height="107" fill="#08121e"/>
        <path d="M0 472 L900 438 L900 560 L0 560Z" fill="#111f30"/>
        <g transform="translate(179 51)">
          <rect width="542" height="239" rx="10" fill="#071523" stroke="#47677a" stroke-width="5"/>
          <rect x="14" y="14" width="514" height="210" rx="5" fill="url(#lead-screen)"/>
          <text x="36" y="48" fill="#b9d3df" font-size="14" font-family="Arial, sans-serif" opacity="0.7">PROJECT / NORTH STAR</text>
          <path d="M42 179 C93 148 107 70 164 109 C221 149 250 60 316 92 C376 121 405 51 476 65" fill="none" stroke="#54d6dc" stroke-width="4" stroke-linecap="round"/>
          <path d="M42 180 C96 174 118 204 176 178 C242 149 285 193 345 155 C415 112 448 167 478 117" fill="none" stroke="#ffc94a" stroke-width="3" stroke-linecap="round" opacity="0.72"/>
          <circle cx="478" cy="117" r="7" fill="#ffc94a"/>
          <circle cx="478" cy="117" r="19" fill="none" stroke="#ffc94a" opacity="0.25"/>
          <g transform="translate(35 72)">
            <rect width="112" height="51" rx="6" fill="#17344a"/>
            <rect x="13" y="12" width="55" height="5" rx="2" fill="#54d6dc" opacity="0.65"/>
            <rect x="13" y="28" width="81" height="4" rx="2" fill="#7193aa" opacity="0.38"/>
          </g>
          <g transform="translate(369 160)">
            <rect width="126" height="47" rx="6" fill="#17344a"/>
            <rect x="13" y="12" width="56" height="5" rx="2" fill="#ffc94a" opacity="0.72"/>
            <rect x="13" y="28" width="91" height="4" rx="2" fill="#7193aa" opacity="0.38"/>
          </g>
        </g>
        <g transform="translate(158 318)" opacity="0.5">
          <rect width="184" height="112" rx="7" fill="#112a40" stroke="#36556d"/>
          <path d="M21 27 L81 27 M21 47 L139 47 M21 67 L106 67 M21 87 L124 87" stroke="#73a8bb" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
        </g>
        ${people}
        <g transform="translate(451 346)">
          <path d="M-6 122 Q15 52 0 25 Q28 63 29 122Z" fill="#183653"/>
          <path d="M57 122 Q28 45 50 10 Q75 60 79 122Z" fill="#183653"/>
          <circle cx="0" cy="2" r="31" fill="#d89b72"/>
          <path d="M-30 4 Q-30 -33 0 -31 Q31 -29 30 6 Q14 -12 -20 -8Z" fill="#121d31"/>
          <path d="M-5 -35 Q-7 -67 15 -48" fill="none" stroke="#273e5b" stroke-width="8" stroke-linecap="round"/>
          <circle cx="-11" cy="4" r="2.6" fill="#172033"/>
          <circle cx="11" cy="4" r="2.6" fill="#172033"/>
          <path d="M-12 20 Q0 28 13 18" fill="none" stroke="#8e5746" stroke-width="2.3" stroke-linecap="round"/>
          <path d="M-11 34 Q-52 63 -66 111" fill="none" stroke="#1b3c5b" stroke-width="18" stroke-linecap="round"/>
          <path d="M40 42 Q89 26 117 55" fill="none" stroke="#1b3c5b" stroke-width="18" stroke-linecap="round"/>
        </g>
        <path d="M0 496 C150 482 286 508 451 491 C626 473 770 501 900 480" fill="none" stroke="#28455e" stroke-width="2" opacity="0.42"/>
      </svg>`;
  }

  function sceneStartup() {
    return `
      <svg class="scene-svg" viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice" role="img" aria-label="吴钰伟在临时办公室里带领小团队创业">
        <defs>
          <linearGradient id="startup-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#28425b"/>
            <stop offset="1" stop-color="#0d1727"/>
          </linearGradient>
          <linearGradient id="startup-board" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#f1eee2"/>
            <stop offset="1" stop-color="#d8e1e4"/>
          </linearGradient>
          <linearGradient id="startup-sun" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#ffd563"/>
            <stop offset="1" stop-color="#ee8e48"/>
          </linearGradient>
          <filter id="startup-glow"><feGaussianBlur stdDeviation="17"/></filter>
        </defs>
        <rect width="900" height="560" fill="url(#startup-bg)"/>
        <ellipse cx="727" cy="119" rx="105" ry="78" fill="#ffba4b" opacity="0.17" filter="url(#startup-glow)"/>
        <rect x="0" y="420" width="900" height="140" fill="#0a1421"/>
        <path d="M0 444 L900 415 L900 560 L0 560Z" fill="#152335"/>
        <g transform="translate(51 47)">
          <rect width="359" height="258" rx="9" fill="#bfc9cb"/>
          <rect x="13" y="13" width="333" height="232" rx="4" fill="url(#startup-board)"/>
          <path d="M51 81 L142 26 L230 91 L148 151Z" fill="#163d5a" opacity="0.9"/>
          <path d="M181 47 L229 91 L148 151 L181 47Z" fill="#54d6dc" opacity="0.42"/>
          <path d="M148 151 L181 47" stroke="#ffc94a" stroke-width="5" stroke-linecap="round"/>
          <path d="M181 47 Q228 27 257 30 Q256 61 229 91" fill="none" stroke="#e2764b" stroke-width="13" stroke-linecap="round"/>
          <circle cx="182" cy="49" r="7" fill="#ffc94a"/>
          <path d="M149 153 Q125 184 115 205 M180 151 Q197 184 207 207" fill="none" stroke="#e2764b" stroke-width="10" stroke-linecap="round"/>
          <path d="M268 72 Q310 70 325 113 Q301 119 275 97" fill="#ffc94a"/>
          <rect x="41" y="188" width="118" height="6" rx="3" fill="#58758a" opacity="0.45"/>
          <rect x="41" y="204" width="78" height="6" rx="3" fill="#58758a" opacity="0.35"/>
          <text x="250" y="203" fill="#24445d" font-size="20" font-family="Arial, sans-serif" font-weight="700">AI + SaaS</text>
        </g>
        <g transform="translate(578 74)">
          <rect width="269" height="193" rx="9" fill="#091725" stroke="#3e5e75" stroke-width="4"/>
          <rect x="13" y="13" width="243" height="165" rx="5" fill="#0e2b40"/>
          <rect x="30" y="34" width="80" height="9" rx="4" fill="#54d6dc" opacity="0.75"/>
          <rect x="30" y="58" width="131" height="5" rx="2" fill="#86a9b9" opacity="0.32"/>
          <path d="M30 139 L68 102 L99 124 L141 72 L181 100 L227 56" fill="none" stroke="#ffc94a" stroke-width="4" stroke-linecap="round"/>
          <circle cx="227" cy="56" r="6" fill="#ffc94a"/>
          <text x="29" y="88" fill="#e8f2f6" font-size="27" font-family="Arial, sans-serif" font-weight="700">MVP</text>
        </g>
        <g transform="translate(118 336)">
          <path d="M0 84 Q57 32 137 34 Q214 37 250 86Z" fill="#183b57"/>
          <rect x="19" y="87" width="202" height="106" rx="8" fill="#23445c"/>
          <rect x="47" y="104" width="62" height="34" rx="4" fill="#0f2335"/>
          <rect x="122" y="104" width="63" height="34" rx="4" fill="#0f2335"/>
          <path d="M55 115 L78 115 M55 126 L91 126 M132 115 L169 115 M145 126 L177 126" stroke="#54d6dc" stroke-width="3" opacity="0.7"/>
        </g>
        <g transform="translate(407 322)">
          <path d="M0 130 Q27 48 105 48 Q186 48 214 130Z" fill="#244b67"/>
          <circle cx="106" cy="16" r="36" fill="#d69c73"/>
          <path d="M68 17 Q68 -27 106 -24 Q143 -20 143 21 Q120 -1 81 4Z" fill="#121f31"/>
          <circle cx="94" cy="17" r="2.8" fill="#172033"/>
          <circle cx="119" cy="17" r="2.8" fill="#172033"/>
          <path d="M92 35 Q107 44 121 33" fill="none" stroke="#8f5746" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M30 82 Q-20 88 -50 133" fill="none" stroke="#244b67" stroke-width="20" stroke-linecap="round"/>
          <path d="M184 82 Q236 76 264 105" fill="none" stroke="#244b67" stroke-width="20" stroke-linecap="round"/>
        </g>
        <g transform="translate(713 294)">
          <circle cx="25" cy="8" r="29" fill="#d89d74"/>
          <path d="M-4 10 Q-5 -25 26 -27 Q57 -26 56 13 Q37 -6 9 -1Z" fill="#111d30"/>
          <path d="M-31 91 Q-8 42 25 43 Q56 44 77 91 L86 137 L-42 137Z" fill="#4e5a7a"/>
        </g>
        <g transform="translate(32 420)" opacity="0.64">
          <rect width="170" height="70" rx="6" fill="#1c354c"/>
          <circle cx="29" cy="35" r="13" fill="#ffc94a" opacity="0.7"/>
          <path d="M53 29 L146 29 M53 43 L119 43" stroke="#95b0bf" stroke-width="4" stroke-linecap="round" opacity="0.44"/>
        </g>
        <path d="M0 494 L900 457" stroke="#54d6dc" stroke-width="2" opacity="0.2"/>
      </svg>`;
  }

  function scenePeak() {
    const windows = sceneHelpers.windows([
      [31, 326, 9, 7, 0.35], [49, 326, 9, 7, 0.1], [91, 290, 10, 8, 0.45], [112, 290, 10, 8, 0.12],
      [182, 348, 10, 8, 0.38], [204, 348, 10, 8, 0.1], [278, 307, 12, 9, 0.44], [302, 307, 12, 9, 0.14],
      [397, 347, 10, 8, 0.36], [420, 347, 10, 8, 0.12], [565, 300, 11, 9, 0.45], [589, 300, 11, 9, 0.13],
      [678, 336, 10, 8, 0.35], [701, 336, 10, 8, 0.1], [788, 285, 11, 9, 0.42], [812, 285, 11, 9, 0.14]
    ]);
    return `
      <svg class="scene-svg" viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice" role="img" aria-label="吴钰伟站在城市高处迎接日出">
        <defs>
          <linearGradient id="peak-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#152340"/>
            <stop offset="0.5" stop-color="#496078"/>
            <stop offset="1" stop-color="#e48b58"/>
          </linearGradient>
          <linearGradient id="peak-city" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#18273c"/>
            <stop offset="1" stop-color="#26334a"/>
          </linearGradient>
          <filter id="peak-glow"><feGaussianBlur stdDeviation="24"/></filter>
        </defs>
        <rect width="900" height="560" fill="url(#peak-sky)"/>
        <circle cx="697" cy="286" r="82" fill="#ffd164" opacity="0.84"/>
        <circle cx="697" cy="286" r="124" fill="#ffb14e" opacity="0.16" filter="url(#peak-glow)"/>
        <circle cx="147" cy="89" r="2" fill="#fff" opacity="0.64"/>
        <circle cx="283" cy="63" r="2" fill="#fff" opacity="0.35"/>
        <circle cx="427" cy="121" r="2" fill="#fff" opacity="0.45"/>
        <path d="M0 392 L71 392 L71 304 L123 304 L123 361 L173 361 L173 264 L231 264 L231 395 L302 395 L302 332 L350 332 L350 374 L413 374 L413 237 L468 237 L468 371 L529 371 L529 292 L589 292 L589 356 L651 356 L651 253 L715 253 L715 389 L779 389 L779 315 L836 315 L836 366 L900 366 L900 560 L0 560Z" fill="url(#peak-city)"/>
        <path d="M0 421 L900 421 L900 560 L0 560Z" fill="#0c1624"/>
        ${windows}
        <path d="M0 430 C157 414 257 447 426 431 C579 416 735 447 900 423 L900 560 L0 560Z" fill="#111c2b"/>
        <path d="M0 463 L900 447" stroke="#5e7486" stroke-width="2" opacity="0.28"/>
        <g transform="translate(62 449)">
          <path d="M0 0 L776 0 L776 111 L0 111Z" fill="#182435" opacity="0.88"/>
          <path d="M0 0 L776 0" stroke="#7c8794" stroke-width="4"/>
          <path d="M52 0 L52 48 M739 0 L739 48" stroke="#66798b" stroke-width="2"/>
          <path d="M25 48 L751 48" stroke="#465b6e" stroke-width="2"/>
        </g>
        <g transform="translate(387 236)">
          <path d="M35 252 Q54 141 111 129 Q169 142 190 252Z" fill="#142b44"/>
          <circle cx="112" cy="91" r="37" fill="#d89c73"/>
          <path d="M73 94 Q71 47 111 48 Q152 50 151 98 Q126 75 86 78Z" fill="#121e30"/>
          <path d="M100 56 Q103 22 126 40" fill="none" stroke="#243b58" stroke-width="9" stroke-linecap="round"/>
          <circle cx="100" cy="94" r="2.8" fill="#172033"/>
          <circle cx="126" cy="94" r="2.8" fill="#172033"/>
          <path d="M99 112 Q112 119 127 109" fill="none" stroke="#8d5646" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M45 167 Q-2 190 -20 240" fill="none" stroke="#142b44" stroke-width="21" stroke-linecap="round"/>
          <path d="M178 164 Q220 181 241 147" fill="none" stroke="#142b44" stroke-width="21" stroke-linecap="round"/>
          <path d="M110 133 L110 252" stroke="#58d3d8" stroke-width="4" opacity="0.66"/>
        </g>
        <g transform="translate(318 163)" opacity="0.52">
          <path d="M0 85 L61 0 L122 85Z" fill="#293b52"/>
          <rect x="38" y="84" width="44" height="67" fill="#1b2c42"/>
        </g>
        <g transform="translate(272 127)" opacity="0.35">
          <path d="M0 70 L51 0 L102 70Z" fill="#33465b"/>
          <rect x="32" y="70" width="37" height="56" fill="#22344a"/>
        </g>
        <path d="M0 520 L900 507" stroke="#ffc94a" stroke-width="2" opacity="0.24"/>
      </svg>`;
  }

  const SCENE_RENDERERS = {
    security: sceneSecurity,
    intern: sceneIntern,
    engineer: sceneEngineer,
    lead: sceneLead,
    startup: sceneStartup,
    peak: scenePeak
  };

  const ROADMAP_LABELS = ["低谷", "转型", "研发", "带队", "创业", "登顶"];
  const EFFECT_LABELS = {
    tech: "技术",
    reputation: "声望",
    energy: "精力",
    money: "积蓄",
    peak: "巅峰值"
  };

  const refs = {
    app: document.getElementById("app"),
    startScreen: document.getElementById("startScreen"),
    startButton: document.getElementById("startButton"),
    saveState: document.getElementById("saveState"),
    restartButton: document.getElementById("restartButton"),
    roadmapTrack: document.getElementById("roadmapTrack"),
    sceneFrame: document.getElementById("sceneFrame"),
    sceneLocation: document.getElementById("sceneLocation"),
    sceneIndex: document.getElementById("sceneIndex"),
    sceneKicker: document.getElementById("sceneKicker"),
    sceneTitle: document.getElementById("sceneTitle"),
    sceneQuote: document.getElementById("sceneQuote"),
    levelChip: document.getElementById("levelChip"),
    avatar: document.getElementById("avatar"),
    roleLabel: document.querySelector(".profile-copy strong"),
    techValue: document.getElementById("techValue"),
    repValue: document.getElementById("repValue"),
    energyValue: document.getElementById("energyValue"),
    moneyValue: document.getElementById("moneyValue"),
    moneyNote: document.getElementById("moneyNote"),
    techBar: document.getElementById("techBar"),
    repBar: document.getElementById("repBar"),
    energyBar: document.getElementById("energyBar"),
    goalCard: document.getElementById("goalCard"),
    goalStatus: document.getElementById("goalStatus"),
    goalText: document.getElementById("goalText"),
    goalHint: document.getElementById("goalHint"),
    tagCount: document.getElementById("tagCount"),
    tagList: document.getElementById("tagList"),
    storyTitle: document.getElementById("storyTitle"),
    storyCopy: document.getElementById("storyCopy"),
    chapterChip: document.getElementById("chapterChip"),
    logList: document.getElementById("logList"),
    actionCounter: document.getElementById("actionCounter"),
    actionGrid: document.getElementById("actionGrid"),
    turnTip: document.getElementById("turnTip"),
    modal: document.getElementById("modal"),
    modalKicker: document.getElementById("modalKicker"),
    modalTitle: document.getElementById("modalTitle"),
    modalBody: document.getElementById("modalBody"),
    modalEffects: document.getElementById("modalEffects"),
    modalChoices: document.getElementById("modalChoices"),
    toast: document.getElementById("toast")
  };

  function createInitialState() {
    return {
      version: 1,
      started: true,
      completed: false,
      stage: 0,
      actionsTaken: 0,
      actionUses: {},
      stats: {
        tech: 14,
        reputation: 8,
        energy: 78,
        money: 2600,
        peak: 0
      },
      tags: [],
      flags: {
        path: "undecided",
        capital: "none"
      },
      logs: [
        {
          time: "毕业第 1 个月",
          text: "吴钰伟把三方协议的空文件夹收进抽屉，接下了第一份工作：海星物业夜班保安。",
          type: "warn"
        }
      ],
      ending: null
    };
  }

  let state = createInitialState();
  let activeModal = null;
  let toastTimer = 0;
  let inputLocked = false;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const getActionKey = (stage, index) => stage.id + ":" + index;
  const currentStage = () => STAGES[state.stage];
  const isModalOpen = () => !refs.modal.hidden;

  function formatMoney(value) {
    const number = Math.round(Number(value) || 0);
    const sign = number < 0 ? "-" : "";
    const absolute = Math.abs(number);
    if (absolute >= 100000000) {
      return `${sign}¥${(absolute / 100000000).toFixed(absolute >= 1000000000 ? 0 : 1)}亿`;
    }
    if (absolute >= 10000) {
      return `${sign}¥${(absolute / 10000).toFixed(absolute < 100000 ? 1 : 0)}万`;
    }
    return `${sign}¥${absolute.toLocaleString("zh-CN")}`;
  }

  function effectSummary(effects) {
    return Object.entries(effects || {}).map(([key, rawValue]) => {
      const value = Number(rawValue);
      if (!value || !EFFECT_LABELS[key]) return "";
      if (key === "money") {
        return `${value > 0 ? "+" : "-"}${formatMoney(Math.abs(value))}`;
      }
      return `${EFFECT_LABELS[key]} ${value > 0 ? "+" : ""}${value}`;
    }).filter(Boolean).join(" · ");
  }

  function scaleRepeatedEffects(action, index) {
    const previousUses = state.actionUses[getActionKey(currentStage(), index)] || 0;
    const multipliers = [1, 0.72, 0.48, 0.3];
    const multiplier = multipliers[Math.min(previousUses, multipliers.length - 1)];
    if (previousUses === 0) return { ...action.effects };

    return Object.fromEntries(Object.entries(action.effects).map(([key, value]) => {
      if (value > 0 && key !== "peak") {
        return [key, Math.max(1, Math.round(value * multiplier))];
      }
      return [key, value];
    }));
  }

  function applyEffects(effects) {
    const changes = [];
    Object.entries(effects || {}).forEach(([key, rawValue]) => {
      const value = Number(rawValue) || 0;
      if (!value || !(key in EFFECT_LABELS)) return;
      const before = state.stats[key];
      if (key === "tech" || key === "reputation" || key === "energy") {
        state.stats[key] = clamp(before + value, 0, 100);
      } else if (key === "money") {
        state.stats[key] = Math.max(0, before + value);
      } else {
        state.stats[key] = before + value;
      }
      const applied = state.stats[key] - before;
      if (applied) changes.push({ key, value: applied });
    });
    return changes;
  }

  function addTag(tag) {
    if (!tag || state.tags.includes(tag)) return false;
    state.tags.push(tag);
    return true;
  }

  function addLog(text, type = "normal", time = currentStage().kicker) {
    state.logs.push({ time, text, type });
    if (state.logs.length > 48) state.logs = state.logs.slice(-48);
  }

  function burnout() {
    if (state.stats.energy > 0) return;
    state.stats.energy = 42;
    state.stats.tech = clamp(state.stats.tech - 4, 0, 100);
    state.stats.reputation = clamp(state.stats.reputation - 2, 0, 100);
    state.stats.money = Math.max(0, state.stats.money - Math.min(2000, state.stats.money));
    addLog("长期透支把身体按下了暂停键。休息、看病、恢复，能力与声望都付出了代价。", "warn");
    showToast("精力归零触发透支：状态已恢复至 42，但能力与声望下降。");
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    refs.toast.textContent = message;
    refs.toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => refs.toast.classList.remove("is-visible"), 3200);
  }

  function saveGame() {
    try {
      window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
      refs.saveState.innerHTML = '<span class="pulse-dot"></span> 已自动存档';
    } catch (error) {
      refs.saveState.innerHTML = '<span class="pulse-dot"></span> 浏览器未允许存档';
    }
  }

  function loadGame() {
    try {
      const raw = window.localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== 1 || !parsed.stats || !Array.isArray(parsed.logs)) return null;
      parsed.stage = clamp(Number(parsed.stage) || 0, 0, STAGES.length - 1);
      parsed.actionsTaken = clamp(Number(parsed.actionsTaken) || 0, 0, STAGE_ACTION_LIMIT);
      parsed.actionUses = parsed.actionUses || {};
      parsed.tags = Array.isArray(parsed.tags) ? parsed.tags : [];
      parsed.flags = { path: "undecided", capital: "none", ...(parsed.flags || {}) };
      return parsed;
    } catch (error) {
      return null;
    }
  }

  function renderRoadmap() {
    const rawProgress = state.completed ? STAGES.length : state.stage + state.actionsTaken / STAGE_ACTION_LIMIT;
    const progress = clamp((rawProgress / STAGES.length) * 100, 0, 100);
    document.documentElement.style.setProperty("--roadmap-progress", `${progress}%`);
    refs.roadmapTrack.innerHTML = STAGES.map((stage, index) => {
      const done = state.completed || index < state.stage;
      const current = !state.completed && index === state.stage;
      return `
        <div class="roadmap-step ${done ? "is-done" : ""} ${current ? "is-current" : ""}">
          <div class="roadmap-node">${done ? "✓" : index + 1}</div>
          <span>${ROADMAP_LABELS[index]}</span>
        </div>`;
    }).join("");
  }

  function renderScene() {
    const stage = currentStage();
    const renderer = SCENE_RENDERERS[stage.scene] || SCENE_RENDERERS.security;
    refs.sceneFrame.innerHTML = renderer();
    refs.sceneLocation.textContent = stage.location;
    refs.sceneIndex.textContent = `${String(state.stage + 1).padStart(2, "0")} / ${String(STAGES.length).padStart(2, "0")}`;
    refs.sceneKicker.textContent = stage.kicker;
    refs.sceneTitle.textContent = stage.title;
    refs.sceneQuote.textContent = stage.quote;
    refs.app.dataset.stage = stage.id;
    refs.avatar.textContent = stage.role.slice(0, 1);
  }

  function renderStats() {
    const { stats } = state;
    refs.levelChip.textContent = `LEVEL ${state.stage + 1}`;
    refs.roleLabel.textContent = currentStage().role;
    refs.techValue.textContent = stats.tech;
    refs.repValue.textContent = stats.reputation;
    refs.energyValue.textContent = stats.energy;
    refs.moneyValue.textContent = formatMoney(stats.money);
    refs.techBar.style.width = `${stats.tech}%`;
    refs.repBar.style.width = `${stats.reputation}%`;
    refs.energyBar.style.width = `${stats.energy}%`;
    refs.energyBar.parentElement.parentElement.classList.toggle("is-low", stats.energy <= 30);

    if (stats.money < 5000) {
      refs.moneyNote.textContent = "房租和饭钱正在同时逼近";
    } else if (stats.money < 50000) {
      refs.moneyNote.textContent = "刚有一层薄薄的安全垫";
    } else if (stats.money < 200000) {
      refs.moneyNote.textContent = "开始能够承担一次试错";
    } else if (stats.money < 1000000) {
      refs.moneyNote.textContent = "第一次拥有真正的选择权";
    } else {
      refs.moneyNote.textContent = "数字不再是唯一的目标";
    }
  }

  function renderGoal() {
    const stage = currentStage();
    const ready = stage.goal(state.stats, state);
    refs.goalText.textContent = stage.goalText;
    refs.goalHint.textContent = stage.goalHint;
    refs.goalCard.classList.toggle("is-ready", ready && state.actionsTaken < STAGE_ACTION_LIMIT);
    refs.goalCard.classList.toggle("is-missed", state.actionsTaken >= STAGE_ACTION_LIMIT && !ready);

    if (state.completed) {
      refs.goalStatus.textContent = "已登顶";
    } else if (state.actionsTaken >= STAGE_ACTION_LIMIT) {
      refs.goalStatus.textContent = ready ? "目标已达成" : "待结算";
    } else if (ready) {
      refs.goalStatus.textContent = "已达标";
    } else {
      refs.goalStatus.textContent = `${state.actionsTaken} / ${STAGE_ACTION_LIMIT}`;
    }
  }

  function renderTags() {
    refs.tagCount.textContent = state.tags.length;
    if (!state.tags.length) {
      refs.tagList.innerHTML = '<span class="empty-tag">还没有留下任何标签</span>';
      return;
    }
    refs.tagList.innerHTML = state.tags.map((tag) => `<span class="life-tag">${tag}</span>`).join("");
  }

  function renderStory() {
    const stage = currentStage();
    refs.storyTitle.textContent = stage.title;
    refs.storyCopy.textContent = stage.intro;
    refs.chapterChip.textContent = stage.chapter;
    refs.logList.innerHTML = state.logs.map((entry) => `
      <article class="log-entry ${entry.type === "good" ? "is-good" : entry.type === "warn" ? "is-warn" : ""}">
        <time>${entry.time}</time>
        <p>${entry.text}</p>
      </article>`).join("");
    refs.logList.scrollTop = refs.logList.scrollHeight;
  }

  function renderActions() {
    const stage = currentStage();
    const remaining = Math.max(0, STAGE_ACTION_LIMIT - state.actionsTaken);
    refs.actionCounter.innerHTML = `<strong>${remaining}</strong> 次行动机会`;
    refs.actionGrid.innerHTML = stage.actions.map((action, index) => {
      const used = state.actionUses[getActionKey(stage, index)] || 0;
      const disabled = state.completed || isModalOpen() || inputLocked || remaining <= 0 || (action.once && used > 0);
      return `
        <button class="action-card" type="button" data-index="${index}" data-number="${String(index + 1).padStart(2, "0")}" ${disabled ? "disabled" : ""}>
          <span class="action-cost">${action.once ? "仅限一次" : used ? `已做 ${used} 次` : "可执行"}</span>
          <span class="action-icon">${action.icon}</span>
          <h3>${action.title}</h3>
          <p>${action.description}</p>
        </button>`;
    }).join("");

    if (state.completed) {
      refs.turnTip.textContent = "这一段人生已经完成，可以重新开始或查看结局。";
    } else if (remaining > 0) {
      refs.turnTip.textContent = `还有 ${remaining} 次行动机会。重复做同一件事，收益会逐渐变低。`;
    } else {
      refs.turnTip.textContent = "本阶段行动结束，正在等待关键抉择。";
    }
  }

  function renderModalEffects(effects) {
    const entries = Object.entries(effects || {}).filter(([, value]) => Number(value));
    refs.modalEffects.innerHTML = entries.map(([key, value]) => {
      const number = Number(value);
      if (key === "money") {
        return `<div class="effect-pill ${number > 0 ? "is-positive" : "is-negative"}">${EFFECT_LABELS[key]} <strong>${number > 0 ? "+" : "-"}${formatMoney(Math.abs(number))}</strong></div>`;
      }
      return `<div class="effect-pill ${number > 0 ? "is-positive" : "is-negative"}">${EFFECT_LABELS[key]} <strong>${number > 0 ? "+" : ""}${number}</strong></div>`;
    }).join("");
  }

  function showModal(config) {
    activeModal = config;
    refs.modalKicker.textContent = config.kicker || "关键事件";
    refs.modalTitle.textContent = config.title || "";
    refs.modalBody.innerHTML = config.body || "";
    renderModalEffects(config.effects || {});
    refs.modalChoices.innerHTML = (config.choices || []).map((choice, index) => {
      const preview = choice.preview || effectSummary(choice.effects);
      return `
        <button class="choice-button" type="button" data-choice-index="${index}">
          <span class="choice-index">${String(index + 1).padStart(2, "0")}</span>
          <span>
            <strong>${choice.label}</strong>
            <small>${choice.detail || ""}${preview ? ` · ${preview}` : ""}</small>
          </span>
        </button>`;
    }).join("");
    refs.modal.hidden = false;
    renderActions();
    window.setTimeout(() => {
      const firstChoice = refs.modalChoices.querySelector("button");
      if (firstChoice) firstChoice.focus();
    }, 30);
  }

  function closeModal() {
    activeModal = null;
    refs.modal.hidden = true;
    renderActions();
  }

  function handleModalChoice(index) {
    if (!activeModal || !activeModal.choices || !activeModal.choices[index]) return;
    const choice = activeModal.choices[index];
    refs.modalChoices.querySelectorAll("button").forEach((button) => { button.disabled = true; });
    if (typeof choice.onSelect === "function") {
      choice.onSelect(choice);
    }
  }

  function performAction(index) {
    if (state.completed || isModalOpen() || inputLocked || state.actionsTaken >= STAGE_ACTION_LIMIT) return;
    const stage = currentStage();
    const action = stage.actions[index];
    if (!action || (action.once && state.actionUses[getActionKey(stage, index)])) return;

    inputLocked = true;
    const actionKey = getActionKey(stage, index);
    const previousUses = state.actionUses[actionKey] || 0;
    const effects = scaleRepeatedEffects(action, index);
    applyEffects(effects);
    state.actionUses[actionKey] = previousUses + 1;
    state.actionsTaken += 1;
    addLog(action.result, "good");
    burnout();
    saveGame();
    inputLocked = false;
    render();

    if (state.actionsTaken >= STAGE_ACTION_LIMIT) {
      window.setTimeout(() => showBreakthrough(), 420);
    }
  }

  function showBreakthrough() {
    if (state.completed || isModalOpen()) return;
    const stage = currentStage();
    const event = stage.breakthrough;
    showModal({
      kicker: event.kicker,
      title: event.title,
      body: event.body,
      choices: event.choices.map((choice, index) => ({
        ...choice,
        onSelect: () => resolveBreakthrough(choice, index)
      }))
    });
  }

  function resolveBreakthrough(choice) {
    const applied = applyEffects(choice.effects || {});
    let conditionalEffects = {};
    if (typeof choice.conditional === "function") {
      conditionalEffects = choice.conditional(state.stats, state) || {};
      applyEffects(conditionalEffects);
    }
    addTag(choice.tag);
    if (typeof choice.flag === "function") choice.flag(state);
    addLog(choice.log || `吴钰伟选择了：${choice.label}`, "warn");
    burnout();
    saveGame();
    render();

    const allEffects = { ...(choice.effects || {}) };
    Object.entries(conditionalEffects).forEach(([key, value]) => {
      allEffects[key] = (allEffects[key] || 0) + value;
    });

    window.setTimeout(() => completeStage(allEffects), 420);
  }

  function completeStage(extraEffects = {}) {
    const stage = currentStage();
    const passed = stage.goal(state.stats, state);
    const completionEffects = passed
      ? { peak: 10, reputation: 2, energy: 6 }
      : { peak: 4, energy: -6, reputation: -2, money: -Math.min(2000, state.stats.money) };

    applyEffects(completionEffects);
    addTag(stage.badge);
    burnout();

    if (passed) {
      addLog(`完成「${stage.badge}」：这一章的突破条件全部达成。`, "good");
    } else {
      addLog(`「${stage.badge}」没有完全达标。你带着疲惫和代价，继续向上。`, "warn");
    }
    saveGame();
    render();

    const combinedEffects = { ...extraEffects };
    Object.entries(completionEffects).forEach(([key, value]) => {
      combinedEffects[key] = (combinedEffects[key] || 0) + value;
    });

    if (state.stage === STAGES.length - 1) {
      showEnding(passed, combinedEffects);
      return;
    }

    const nextStage = STAGES[state.stage + 1];
    showModal({
      kicker: passed ? "CHAPTER CLEAR" : "CHAPTER SURVIVED",
      title: passed ? `突破完成：${stage.badge}` : "跌跌撞撞，也走到了下一站",
      body: passed
        ? `目标达成。吴钰伟把这一章的挫败和进步一起装进行李。工资、能力、人脉与眼界都发生了变化，下一站是：${nextStage.title}。`
        : `严格来说，这一章没有完全达标。现实不会因此暂停，你仍然可以继续，但需要付出精力、声望或积蓄作为代价。下一站是：${nextStage.title}。`,
      effects: combinedEffects,
      choices: [
        {
          label: `进入${nextStage.chapter}：${nextStage.title}`,
          detail: "保留当前能力、标签与财富。进入下一段人生。",
          preview: "状态恢复 +12 精力",
          onSelect: () => {
            closeModal();
            advanceStage();
          }
        }
      ]
    });
  }

  function advanceStage() {
    state.stage += 1;
    state.actionsTaken = 0;
    state.actionUses = {};
    state.stats.energy = clamp(state.stats.energy + 12, 0, 100);
    addLog(`进入${currentStage().chapter}：${currentStage().title}。`, "good", currentStage().kicker);
    saveGame();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function chooseEnding() {
    const { tech, reputation, money, energy } = state.stats;
    const tags = state.tags;

    if (tags.includes("回馈教育") && reputation >= 85) {
      return {
        title: "把坐标留给后来者",
        rank: "人生巅峰 · 教育灯塔",
        body: "吴钰伟没有把成功停留在公司估值里。他把真实项目带进课堂，把失败简历留给学弟学妹当教材。多年以后，长春电子科技学院的实验室里，越来越多年轻人说出同一句话：我也想去更大的世界试试。"
      };
    }
    if (tags.includes("行业灯塔") && tech >= 90 && reputation >= 80) {
      return {
        title: "行业坐标系",
        rank: "人生巅峰 · 行业领航者",
        body: "从保安亭到标准委员会，吴钰伟走了一条没人替他铺好的路。他参与制定的技术标准被全球团队采用，最难的需求也不再只是代码问题，而是如何让技术对更多人保持善意。"
      };
    }
    if (money >= 1500000 && state.flags.capital === "aggressive") {
      return {
        title: "商业领袖的清晨",
        rank: "人生巅峰 · 产业创业者",
        body: "逆风智能成为行业里的关键力量，资本、团队和市场都把吴钰伟推到更高的位置。他学会了做取舍，也给自己立下一条规矩：再大的增长，也不能让技术失去对人的尊重。"
      };
    }
    if (energy >= 75 && reputation >= 75) {
      return {
        title: "清醒的登顶者",
        rank: "人生巅峰 · 长期主义者",
        body: "公司仍然向上，吴钰伟却不再把每一分钟都塞满。他把周末留给家人，把判断留给真正重要的决策。所谓巅峰，不是燃烧殆尽的那一秒，而是多年以后还能清楚地选择方向。"
      };
    }
    return {
      title: "向上生长的人",
      rank: "人生巅峰 · 逆风登顶者",
      body: "吴钰伟没有变成传说里无所不能的人。他只是每一次跌到低处时，都多学了一点、多走了一步。保安制服早已收进衣柜，但那段夜班教会他的东西，仍然支撑着每一个重要决定。"
    };
  }

  function showEnding(passed, finalEffects) {
    state.completed = true;
    const ending = chooseEnding();
    state.ending = ending.rank;
    addLog(`人生结算：${ending.rank}。`, "good", "终章");
    saveGame();
    render();

    const timeline = STAGES.map((stage, index) => `
      <div class="effect-pill ${state.tags.includes(stage.badge) ? "is-positive" : ""}">
        ${String(index + 1).padStart(2, "0")} <strong>${stage.badge}</strong>
      </div>`).join("");

    showModal({
      kicker: "LIFE ACHIEVEMENT",
      title: ending.title,
      body: `
        <p style="margin:0 0 12px">${ending.body}</p>
        <p style="margin:0;color:#ffc94a;font-weight:800">最终称号：${ending.rank}</p>
        <p style="margin:14px 0 0;color:#8fa0b7">技术 ${state.stats.tech} · 声望 ${state.stats.reputation} · 精力 ${state.stats.energy} · 积蓄 ${formatMoney(state.stats.money)} · 巅峰值 ${state.stats.peak}${passed ? "" : " · 本章留有遗憾"}</p>`,
      effects: finalEffects,
      choices: [
        {
          label: "再走一次这条路",
          detail: "重新开始，尝试另一种选择与结局。",
          preview: "清空当前存档",
          onSelect: () => restartGame(true)
        },
        {
          label: "把这段人生留在当前页面",
          detail: "保留最终状态和人生标签，关闭结局窗口。",
          preview: "存档保留",
          onSelect: closeModal
        }
      ]
    });
  }

  function render() {
    renderRoadmap();
    renderScene();
    renderStats();
    renderGoal();
    renderTags();
    renderStory();
    renderActions();
  }

  function startNewGame() {
    try {
      window.localStorage.removeItem(SAVE_KEY);
    } catch (error) {
      // Ignore storage restrictions.
    }
    state = createInitialState();
    refs.startScreen.hidden = true;
    closeModal();
    saveGame();
    render();
    showToast("人生已重新开始：先站稳，再向上。");
  }

  function restartGame(fromEnding = false) {
    if (!fromEnding && !window.confirm("确定要清空当前进度，重新开始吗？")) return;
    startNewGame();
  }

  function initializeStartScreen() {
    const saved = loadGame();
    if (saved && !saved.completed) {
      state = saved;
      refs.startButton.innerHTML = '继续上次的人生 <span>→</span>';
      refs.startScreen.querySelector(".start-hint").textContent = "检测到自动存档。你将从上一次行动之后继续。";
      render();
    } else if (saved && saved.completed) {
      state = saved;
      refs.startButton.innerHTML = '回顾最终人生 <span>→</span>';
      refs.startScreen.querySelector(".start-hint").textContent = "上一段人生已经登顶，也可以点击“重新开始”体验新的选择。";
      render();
    } else {
      state = createInitialState();
      render();
    }
  }

  refs.startButton.addEventListener("click", () => {
    refs.startScreen.hidden = true;
    if (state.completed) {
      const ending = chooseEnding();
      showModal({
        kicker: "LIFE ACHIEVEMENT",
        title: ending.title,
        body: `<p style="margin:0 0 12px">${ending.body}</p><p style="margin:0;color:#ffc94a;font-weight:800">最终称号：${ending.rank}</p>`,
        effects: { peak: state.stats.peak },
        choices: [
          { label: "重新开始", detail: "清空当前存档，体验另一种选择。", onSelect: () => restartGame(true) },
          { label: "回到人生档案", detail: "关闭窗口，查看已经完成的状态。", onSelect: closeModal }
        ]
      });
      return;
    }
    saveGame();
    render();
  });

  refs.actionGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".action-card");
    if (!button) return;
    performAction(Number(button.dataset.index));
  });

  refs.modalChoices.addEventListener("click", (event) => {
    const button = event.target.closest(".choice-button");
    if (!button) return;
    handleModalChoice(Number(button.dataset.choiceIndex));
  });

  refs.restartButton.addEventListener("click", () => restartGame(false));

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeModal && activeModal.choices && state.completed) {
      closeModal();
    }
  });

  initializeStartScreen();
})();



