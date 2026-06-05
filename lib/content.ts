// 所有落地页文案集中管理 —— 改字只动这里。
// 结构对应 Moxt 设计骨架,内容替换为 Kernel 零食平台。

export const brand = {
  name: "Kernel",
  emoji: "🌰",
  tagline: "你的零食研发团队,就在 Kernel。",
};

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
    { label: "市场扫描", color: "sky", pos: { top: "6%", left: "52%" } },
    { label: "趋势洞察", color: "grass", pos: { top: "30%", left: "84%" } },
    { label: "配方知识", color: "tangerine", pos: { top: "62%", left: "82%" } },
    { label: "竞品分析", color: "grape", pos: { top: "82%", left: "50%" } },
    { label: "渠道规则", color: "rose", pos: { top: "62%", left: "8%" } },
    { label: "文案生成", color: "sky", pos: { top: "30%", left: "6%" } },
    { label: "合规校验", color: "grass", pos: { top: "2%", left: "18%" } },
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
  nodes: [
    "意图澄清",
    "市场扫描",
    "机会评估",
    "方案生成",
    "质量校验",
    "灵感发散",
    "方案精炼",
    "渠道适配",
    "多版本输出",
    "趋势分析",
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
      time: "09:00",
      title: "选品洞察",
      agent: "AGENT:",
      agentText: "输入「Z 世代健康零食」→ 5 个选品方向 + 机会评分已就绪。",
      you: "你:",
      youText: "看第二个方向。",
    },
    {
      time: "10:30",
      title: "配方灵感",
      agent: "AGENT:",
      agentText: "围绕选定方向 → 3 张配方概念卡 + 差异化卖点。",
      you: "你:",
      youText: "第一张展开。",
    },
    {
      time: "14:00",
      title: "营销内容",
      agent: "AGENT:",
      agentText: "产品信息 → 小红书 / 抖音多版本文案 + 配图建议。",
      you: "你:",
      youText: "小红书发这版。",
    },
    {
      time: "16:00",
      title: "一键就绪",
      agent: "AGENT:",
      agentText: "选品 + 配方 + 文案一套素材全部打包,可导出。",
      you: "你:",
      youText: "搞定,上架。",
    },
  ],
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
      desc: "选品 → 配方 → 营销,一个空间打通三个环节。不用在调研、研发、内容工具之间反复横跳。",
    },
    {
      title: "越用越懂你。",
      desc: "记住你的品牌调性、口味偏好、禁忌词。用得越久,每次输出越贴合你的品牌,不用从头解释。",
    },
    {
      title: "给选择权,不给标准答案。",
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

export const footer = {
  tagline: "From Kernel to Shelf.",
  copyright: "© 2026 Kernel. 版权所有。",
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
