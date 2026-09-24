function main(config) {
  // 1. 定义规则集 (rule-providers)
  const ruleProviders = {
    "Apple": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Apple/Apple.yaml", interval: 86400, path: "./ruleset/Apple.yaml" },
    "ByteDance": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/ByteDance/ByteDance.yaml", interval: 86400, path: "./ruleset/ByteDance.yaml" },
    "Claude": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Claude/Claude.yaml", interval: 86400, path: "./ruleset/Claude.yaml" },
    "Discord": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Discord/Discord.yaml", interval: 86400, path: "./ruleset/Discord.yaml" },
    "Disney": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Disney/Disney.yaml", interval: 86400, path: "./ruleset/Disney.yaml" },
    "Facebook": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Facebook/Facebook.yaml", interval: 86400, path: "./ruleset/Facebook.yaml" },
    "Gemini": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Gemini/Gemini.yaml", interval: 86400, path: "./ruleset/Gemini.yaml" },
    "GitHub": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/GitHub/GitHub.yaml", interval: 86400, path: "./ruleset/GitHub.yaml" },
    "Google": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Google/Google.yaml", interval: 86400, path: "./ruleset/Google.yaml" },
    "HBO": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/HBO/HBO.yaml", interval: 86400, path: "./ruleset/HBO.yaml" },
    "Instagram": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Instagram/Instagram.yaml", interval: 86400, path: "./ruleset/Instagram.yaml" },
    "Netflix": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Netflix/Netflix.yaml", interval: 86400, path: "./ruleset/Netflix.yaml" },
    "OpenAI": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/OpenAI/OpenAI.yaml", interval: 86400, path: "./ruleset/OpenAI.yaml" },
    "Reddit": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Reddit/Reddit.yaml", interval: 86400, path: "./ruleset/Reddit.yaml" },
    "Spotify": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Spotify/Spotify.yaml", interval: 86400, path: "./ruleset/Spotify.yaml" },
    "Telegram": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Telegram/Telegram.yaml", interval: 86400, path: "./ruleset/Telegram.yaml" },
    "TikTok": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/TikTok/TikTok.yaml", interval: 86400, path: "./ruleset/TikTok.yaml" },
    "Twitch": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Twitch/Twitch.yaml", interval: 86400, path: "./ruleset/Twitch.yaml" },
    "Twitter": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Twitter/Twitter.yaml", interval: 86400, path: "./ruleset/Twitter.yaml" },
    "YouTube": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/YouTube/YouTube.yaml", interval: 86400, path: "./ruleset/YouTube.yaml" },
    "ProxyLite": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/ProxyLite/ProxyLite.yaml", interval: 86400, path: "./ruleset/ProxyLite.yaml" },
    "Package": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_for_me@master/rule/Clash/Proxy/Package.yaml", interval: 86400, path: "./ruleset/Package.yaml" },
    "Process": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_for_me@master/rule/Clash/Proxy/Process.yaml", interval: 86400, path: "./ruleset/Process.yaml" },
    "Proxy": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_for_me@master/rule/Clash/Proxy/Proxy.yaml", interval: 86400, path: "./ruleset/Proxy.yaml" },
    "Sex": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_for_me@master/rule/Clash/Proxy/Sex.yaml", interval: 86400, path: "./ruleset/Sex.yaml" },
    "Tool": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_for_me@master/rule/Clash/Proxy/Tool.yaml", interval: 86400, path: "./ruleset/Tool.yaml" },
    "Global": { type: "http", behavior: "classical", url: "https://cdn.jsdelivr.net/gh/niankuozheng/rule_script@master/rule/Clash/Global/Global_Classical.yaml", interval: 86400, path: "./ruleset/Global.yaml" }
  };

  config["rule-providers"] = Object.assign({}, config["rule-providers"], ruleProviders);

  const allProxies = config.proxies ? config.proxies.map(p => p.name) : [];
  if (allProxies.length === 0) return config;

  // 2. 节点过滤正则
  const regMaps = {
	"美国-自动": /(🇺🇸|United States)/i,
	"香港-自动": /(🇭🇰|HongKong)/i,
	"台湾-自动": /(🇹🇼|Taiwan)/i,
	"日本-自动": /(🇯🇵|Japan)/i,
	"韩国-自动": /(🇰🇷|Korea)/i,
	"新加坡-自动": /(🇸🇬|Singapore)/i,
	"英国-自动": /(🇬🇧|United Kingdom)/i,
	"德国-自动": /(🇩🇪|Germany)/i,
	"新西兰-自动": /(🇳🇱|Netherlands)/i,
	"其他-自动": /(🇮🇹|🇪🇸|🇹🇷|🇦🇺|🇦🇷|🇧🇷|🇨🇱|🇰🇷|🇮🇳|🇮🇱|🇹🇭|🇻🇳|🇲🇾|🇿🇦)/i
  };

  // 3. 创建地区自动选路策略组
  const regionGroups = [];
  regionGroups.push({
    name: "所有-自动", type: "url-test", url: "http://www.gstatic.com/generate_204", interval: 180, tolerance: 100,
    proxies: allProxies
  });

  for (const [key, reg] of Object.entries(regMaps)) {
    const matched = allProxies.filter(p => reg.test(p));
    regionGroups.push({
      name: key, type: "url-test", url: "http://www.gstatic.com/generate_204", interval: 180, tolerance: 100,
      proxies: matched.length > 0 ? matched : ["DIRECT"]
    });
  }

  // 4. 创建上层应用业务策略组
  const subGroupNames = ["所有-自动", ...Object.keys(regMaps)];
  const bizGroups = ["🤖 OpenAI", "👽 Claude", "👾 Gemini", "🗄️ GitHub", "☸️ Google", "🎨 ByteDance", "🎧 Spotify", "📩 Telegram", "📬 Discord", "📥 Facebook", "📰 Twitter", "👥 Reddit", "🤳 TikTok", "📷 Instagram", "📹 YouTube", "🎥 Twitch", "👯 Sex", "🎞 流媒体", "💾 App", "🔧 Tool", "🌐 Proxy", "🌐 代理", "🌏 全局", "🇨️🇳️ 国内"].map(name => ({
    name: name,
    type: "select",
    proxies: ["DIRECT", ...subGroupNames, "REJECT"]
  }));

  config["proxy-groups"] = [...bizGroups, ...regionGroups];

  // 5. 覆盖并生成最终路由规则
  config["rules"] = [
    "RULE-SET,OpenAI,🤖 OpenAI",
    "RULE-SET,Claude,👽 Claude",
    "RULE-SET,Gemini,👾 Gemini",
    "RULE-SET,GitHub,🗄️ GitHub",
    "RULE-SET,Google,☸️ Google",
    "RULE-SET,ByteDance,🎨 ByteDance",
    "RULE-SET,Spotify,🎧 Spotify",
    "RULE-SET,Telegram,📩 Telegram",
    "RULE-SET,Discord,📬 Discord",
    "RULE-SET,Facebook,📥 Facebook",
    "RULE-SET,Twitter,📰 Twitter",
    "RULE-SET,Reddit,👥 Reddit",
    "RULE-SET,TikTok,🤳 TikTok",
    "RULE-SET,Instagram,📷 Instagram",
    "RULE-SET,YouTube,📹 YouTube",
    "RULE-SET,Twitch,🎥 Twitch",
    "RULE-SET,Sex,👯 Sex",
    "RULE-SET,HBO,🎞 流媒体",
    "RULE-SET,Disney,🎞 流媒体",
    "RULE-SET,Netflix,🎞 流媒体",
    "RULE-SET,Package,💾 App",
    "RULE-SET,Process,💾 App",
    "RULE-SET,Tool,🔧 Tool",
    "RULE-SET,Proxy,🌐 Proxy",
    "RULE-SET,ProxyLite,🌐 代理",
    "RULE-SET,Global,🌏 全局",
    "MATCH,🇨️🇳️ 国内"
  ];
  
  // 6. DNS 分流配置
  config["dns"] = {
    "enable": true,
    "enhanced-mode": "fake-ip",
    "listen": "0.0.0.0:1053",
    "nameserver": [
      "https://dns.alicdn.com/dns-query",
      "https://doh.pub/dns-query"
    ],
    "nameserver-policy": {
      "https://dns.google/dns-query#香港-自动": ["https://dns.google/dns-query"],
      "https://1.1.1.1/dns-query#日本-自动": ["https://1.1.1.1/dns-query"],
      "https://1.0.0.1/dns-query#新加坡-自动": ["https://1.0.0.1/dns-query"],
      "https://dns.quad9.net/dns-query#美国-自动": ["https://dns.quad9.net/dns-query"],
      "geosite:geolocation-!cn": [
        "https://dns.google/dns-query#所有-自动",
        "https://1.1.1.1/dns-query#所有-自动"
      ]
    }
  };
  
  return config;
}