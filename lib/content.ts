// 所有落地页文案集中管理 —— 改字只动这里。
// 结构对应 Moxt 设计骨架,内容替换为 Kernel 零食平台。

export const brand = {
  name: "Kernel",
  emoji: "🌰",
  tagline: "你的零食研发团队,就在 Kernel。",
};

// 扁平吉祥物图标(public/assets/mascots/*.png)—— 7 个坚果角色
export const mascots = [
  "green",
  "purple",
  "orange",
  "blue",
  "red",
  "teal",
  "yellow",
] as const;
export const mascot = (c: string) => `/assets/mascots/${c}.png`;

export const nav = {
  links: [
    { label: "能力", href: "#capabilities" },
    { label: "工作流", href: "#workflows" },
    { label: "定价", href: "#pricing" },
  ],
  cta: "免费开始",
};

export const hero = {
  titleLead: "你的",
  titleAccent: "零食研发团队",
  titleTail: ",就在 ",
  titleBrand: "Kernel",
  titleEnd: "。",
  subtitle:
    "AI 驱动的零食产品全链路助手——选品洞察、配方灵感、营销内容,从一颗想法到一款爆品,一个空间全搞定。",
  primaryCta: "立即开始",
  secondaryCta: "了解 Kernel",
};

// 「你的。」—— 能力气泡环绕吉祥物
export const capability = {
  heading: "你的。",
  sub: "Kernel 懂零食。懂你的品牌。",
  bubbles: [
    { label: "市场扫描", color: "sky", pos: { top: "6%", left: "50%" } },
    { label: "趋势洞察", color: "grass", pos: { top: "28%", left: "88%" } },
    { label: "配方知识", color: "tangerine", pos: { top: "72%", left: "88%" } },
    { label: "竞品分析", color: "grape", pos: { top: "94%", left: "50%" } },
    { label: "渠道规则", color: "rose", pos: { top: "72%", left: "12%" } },
    { label: "文案生成", color: "sky", pos: { top: "28%", left: "12%" } },
  ],
};

// 「每个品牌的。」
export const personal = {
  heading: "每个品牌的。",
  sub: "每个品牌都有专属的 Kernel——懂你的调性,记得你的偏好与禁忌词。",
};

// 「一个空间。」—— 工作流节点环
export const oneSpace = {
  heading: "一个空间。",
  sub: "三条工作流、所有 AI 节点,都在这里。一条流水线,一个空间。",
  workflows: [
    { label: "选品洞察", color: "#4ade80", nodes: ["意图澄清", "市场扫描", "机会评估"] },
    { label: "配方灵感", color: "#2dd4bf", nodes: ["灵感发散", "方案生成", "方案精炼"] },
    { label: "营销内容", color: "#fb923c", nodes: ["渠道适配", "质量校验", "多版本输出"] },
  ],
};

// 「认识 Kernel」—— 对话演示
export const chat = {
  heading: "认识 Kernel —— 你的专属 AI 研发助手。",
  sub: "在你的工作流里,随叫随到。不用写复杂指令。",
  user: {
    name: "Mia",
    time: "10:26",
    text: "帮我看看针对 Z 世代的健康零食,现在哪个品类有机会?预算偏中端。",
  },
  agent: {
    name: "Kernel · 选品洞察",
    time: "10:26",
    lines: [
      "收到。我按「Z 世代 / 健康 / 中端预算」帮你跑一轮选品洞察:",
      "1. 市场扫描——拉趋势、竞品、社交热度",
      "2. 机会评估——按热度 / 竞争 / 需求匹配 / 差异化 四维打分",
      "3. 方案生成——给你 Top 3–5 个方向 + 切入角度 + 风险提示",
      "约 20 秒。先开跑了 ✦",
    ],
  },
  // 团队其他角色的跟进消息(复刻 moxt 多人协作的消息流)
  followups: [
    {
      mascot: "orange",
      name: "Kernel · 配方灵感",
      time: "10:27",
      text: "等选品方向出来,我接着发散配方概念,给你 3 张概念卡。",
    },
    {
      mascot: "blue",
      name: "Kernel · 竞品监控",
      time: "10:27",
      text: "已盯上这几个赛道的头部竞品,定价和上新有动静随时同步。",
    },
  ],
};

// 「看看 Kernel 能做什么」—— 卡片网格
export const agents = {
  heading: "看看 Kernel 能做什么。",
  cta: "了解更多能力",
  cards: [
    {
      icon: "compass",
      title: "选品洞察官",
      desc: "分析市场趋势、竞品动态、社交热度,给出 3–5 个选品方向 + 机会评分。",
    },
    {
      icon: "flask",
      title: "配方灵感师",
      desc: "跨品类组合发散,生成配方概念卡片,附差异化卖点与适用场景。",
    },
    {
      icon: "heart",
      title: "小红书写手",
      desc: "种草文案 + emoji + 话题标签,口语化、有真实感,不带硬广味。",
    },
    {
      icon: "bolt",
      title: "抖音脚本手",
      desc: "钩子开头 + 短句节奏 + 情绪化表达,适配短视频的高频内容。",
    },
    {
      icon: "radar",
      title: "竞品监控员",
      desc: "追踪竞品上新、定价变动、社媒声量,异常变化实时提醒。",
    },
    {
      icon: "chart",
      title: "趋势扫描员",
      desc: "实时品类趋势 + 关键词热度,给每个方向打机会分,辅助决策。",
    },
  ],
};

// 「从洞察到内容,一条流水线」—— 工作流可视化
export const pipeline = {
  heading: "不用东拼西凑。从洞察到内容,一条流水线。",
  sub: "结构化输入,可交付输出——不是一段聊天回复,是能导出、能改、能迭代的方案卡片。",
  stages: [
    { step: "01", title: "意图澄清", desc: "AI 反问 2–3 个问题,把模糊需求结构化。" },
    { step: "02", title: "市场 / 灵感", desc: "扫描趋势竞品,或跨品类发散创意。" },
    { step: "03", title: "评估精炼", desc: "多维打分排序,筛出最优方向。" },
    { step: "04", title: "方案交付", desc: "组装成可读卡片,2–3 个版本任你挑。" },
  ],
};

// 「用 Kernel 上新一款零食」—— 时间线
export const aDay = {
  heading: "用 Kernel 上新一款零食。",
  cards: [
    {
      time: "08:00",
      title: "选品晨扫",
      img: "/assets/scenes/insight.png",
      agent: "AGENT:",
      agentText: "隔夜的品类趋势、竞品上新、社媒热度全扫完了,5 个机会方向已排好。",
      you: "你:",
      youText: "看健康坚果那条。",
    },
    {
      time: "10:30",
      title: "配方打样",
      img: "/assets/scenes/recipe.png",
      agent: "AGENT:",
      agentText: "围绕「低糖高蛋白」发散 → 3 张配方概念卡 + 差异化卖点。",
      you: "你:",
      youText: "第一张展开。",
    },
    {
      time: "13:00",
      title: "营销文案",
      img: "/assets/scenes/content.png",
      agent: "AGENT:",
      agentText: "产品信息 → 小红书 / 抖音多版本文案 + 配图建议全出了。",
      you: "你:",
      youText: "小红书发这版。",
    },
    {
      time: "15:30",
      title: "产品包装",
      img: "/assets/scenes/product.png",
      agent: "AGENT:",
      agentText: "3 套包装视觉方向 + 卖点排版,已导出给设计。",
      you: "你:",
      youText: "走第二套。",
    },
    {
      time: "17:30",
      title: "上新冲刺",
      img: "/assets/scenes/launch.png",
      agent: "AGENT:",
      agentText: "选品 + 配方 + 文案 + 包装一套素材打包好,可一键上架。",
      you: "你:",
      youText: "上!",
    },
    {
      time: "20:00",
      title: "数据复盘",
      img: "/assets/scenes/memory.png",
      agent: "AGENT:",
      agentText: "今天三条 workflow 的转化都记下来了,你的偏好已更新。",
      you: "你:",
      youText: "收到。",
      dark: true,
    },
    {
      time: "23:30",
      title: "夜间值守",
      img: "/assets/scenes/focus.png",
      agent: "AGENT:",
      agentText: "竞品页面、定价变动、媒体声量,扫完归档。有异常凌晨提醒你。",
      you: "你:",
      youText: "睡了,辛苦。",
      dark: true,
    },
  ],
  loop: { time: "08:00", title: "循环继续" },
};

// 「为零食品牌原生设计」—— 三张特性卡
export const native = {
  headingLead: "为",
  headingAccent: "零食品牌",
  headingTail: "原生设计的",
  headingSecond: "AI 助手",
  cards: [
    {
      title: "全链路覆盖。",
      mascot: "green",
      tint: "bg-grass-50",
      desc: "选品 → 配方 → 营销,一个空间打通三个环节。不用在调研、研发、内容工具之间反复横跳。",
    },
    {
      title: "越用越懂你。",
      mascot: "purple",
      tint: "bg-violet-50",
      desc: "记住你的品牌调性、口味偏好、禁忌词。用得越久,每次输出越贴合你的品牌,不用从头解释。",
    },
    {
      title: "给选择权,不给标准答案。",
      mascot: "orange",
      tint: "bg-amber-50",
      desc: "每个任务输出 2–3 个方案,你来挑。因为你不信任唯一解,但信任「我自己挑的那个」。",
    },
  ],
};

// 「它们都能用,但…」—— 竞品对比
export const compare = {
  headingLead: "它们都能用,",
  headingTail: "但…",
  brandCard: {
    title: "而 Kernel…",
    desc: "为零食全链路设计的 AI 助手,不是通用工具临时拼凑。",
  },
  cards: [
    {
      title: "市场调研公司",
      like: "你喜欢它…",
      likeText: "报告专业、全面、有方法论。",
      but: "但…",
      butText: "月度报告 vs 实时趋势,信息滞后;一份报告动辄数万,试错成本高。",
    },
    {
      title: "通用 ChatGPT",
      like: "你喜欢它…",
      likeText: "随问随答,什么都能聊。",
      but: "但…",
      butText: "不懂零食行业,输出泛泛;给不出结构化、可交付的方案。",
    },
    {
      title: "创意代理商",
      like: "你喜欢它…",
      likeText: "创意强,执行专业。",
      but: "但…",
      butText: "单次 Campaign 2–4 周,跟不上渠道铺设速度;预算高,小团队扛不住。",
    },
  ],
};

// 集成网格
export const integrations = {
  heading: "接入你已有的渠道与工具。",
  sub: "Kernel 输出直接适配你在用的平台,不用二次搬运。",
  items: [
    { label: "小红书", glyph: "📕" },
    { label: "抖音", glyph: "🎵" },
    { label: "微信公众号", glyph: "💬" },
    { label: "电商详情", glyph: "🛒" },
    { label: "Excel / CSV", glyph: "📊" },
    { label: "飞书", glyph: "🐦" },
    { label: "Notion", glyph: "📝" },
    { label: "Web Search", glyph: "🔍" },
    { label: "Markdown", glyph: "⌘" },
  ],
};

export const finalCta = {
  heading: "现在就组建你的 AI 零食团队。",
  cta: "免费开始",
};

export const pricing = {
  heading: "简单定价。",
  sub: "按需升级,随时取消。",
  plans: [
    {
      name: "探索",
      price: "免费",
      period: "",
      desc: "适合个人研发者试水",
      features: ["3 次工作流体验", "选品洞察 workflow", "基础内容导出"],
      cta: "免费开始",
      highlight: false,
    },
    {
      name: "专业",
      price: "¥599",
      period: "/月",
      desc: "适合独立品牌与小团队",
      features: ["无限工作流运行", "全部三条 workflow", "多版本内容导出", "优先响应支持"],
      cta: "立即体验",
      highlight: true,
    },
    {
      name: "团队",
      price: "联系我们",
      period: "",
      desc: "适合中大型食品企业",
      features: ["多账号协作", "私有数据接入", "定制 workflow", "专属客户成功"],
      cta: "预约演示",
      highlight: false,
    },
  ],
};

export const footer = {
  tagline: "From Kernel to Shelf.",
  copyright: "© 2026 Kernel. 版权所有。",
  social: [
    { label: "小红书", glyph: "📕" },
    { label: "抖音", glyph: "🎵" },
    { label: "微信公众号", glyph: "💬" },
    { label: "B站", glyph: "📺" },
  ],
  columns: [
    {
      title: "产品",
      links: ["能力", "工作流", "定价"],
    },
    {
      title: "资源",
      links: ["使用文档", "更新日志", "联系我们"],
    },
    {
      title: "法律",
      links: ["隐私政策", "Cookie 政策", "服务条款"],
    },
  ],
};
