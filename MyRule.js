// Last modified: 2026-10-17 01:47:26 (UTC+08:00)
// Clash Verge Rev extension script. Select it in the profile's script settings.
// DNS policies follow domain routing order.
// Process/IP rules resolve via direct-nameserver after DIRECT is selected.
// Explicit #group DNS routes follow that group; no plaintext/system DNS fallback.
// Keep subscription proxy groups so their saved selections remain available.
// Ports, mode, IPv6, TUN, and controller settings are managed by the app.

const customConfig = {
  "tcp-concurrent": true,
  "find-process-mode": "strict",
  "profile": {
    "store-selected": true,
    "store-fake-ip": true
  },
  "geodata-mode": true,
  "geodata-loader": "memconservative",
  "geo-auto-update": true,
  "geo-update-interval": 24,
  "geox-url": {
    "geoip": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat",
    "geosite": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat"
  },
  "dns": {
    "enable": true,
    "listen": "[::]:53",
    "ipv6": true,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-range6": "fdfe:dcba:9876::1/64",
    "fake-ip-filter-mode": "rule",
    "fake-ip-filter": [
      "RULE-SET,ads,fake-ip",
      "RULE-SET,Ad,fake-ip",
      "DOMAIN-SUFFIX,lan,real-ip",
      "DOMAIN-SUFFIX,local,real-ip",
      "DOMAIN-SUFFIX,arpa,real-ip",
      "DOMAIN,localhost,real-ip",
      "DOMAIN-SUFFIX,blip.net,real-ip",
      "RULE-SET,applications,real-ip",
      "DOMAIN,clash.razord.top,real-ip",
      "DOMAIN,yacd.haishan.me,real-ip",
      "RULE-SET,private,real-ip",
      "RULE-SET,icloud,real-ip",
      "RULE-SET,apple-direct,real-ip",
      "GEOSITE,private,real-ip",
      "DOMAIN,steamcdn-a.akamaihd.net,real-ip",
      "DOMAIN-SUFFIX,steamserver.net,real-ip",
      "DOMAIN-SUFFIX,steamcontent.com,real-ip",
      "RULE-SET,ai-cn,real-ip",
      "RULE-SET,ai-global,fake-ip",
      "RULE-SET,GitHub,fake-ip",
      "RULE-SET,OneDrive,fake-ip",
      "DOMAIN-SUFFIX,assrt.net,fake-ip",
      "RULE-SET,TikTok,fake-ip",
      "RULE-SET,apple,real-ip",
      "RULE-SET,Twitter,fake-ip",
      "RULE-SET,Telegram,fake-ip",
      "RULE-SET,direct,real-ip",
      "GEOSITE,CN,real-ip",
      "MATCH,fake-ip"
    ],
    "prefer-h3": false,
    "respect-rules": true,
    "use-hosts": true,
    "use-system-hosts": false,
    "default-nameserver": [
      "https://223.5.5.5/dns-query#DIRECT",
      "https://223.6.6.6/dns-query#DIRECT"
    ],
    "proxy-server-nameserver": [
      "https://dns.alidns.com/dns-query#DIRECT",
      "https://doh.pub/dns-query#DIRECT"
    ],
    "direct-nameserver": [
      "https://dns.alidns.com/dns-query#DIRECT",
      "https://doh.pub/dns-query#DIRECT"
    ],
    "direct-nameserver-follow-policy": false,
    "nameserver": [
      "https://1.1.1.1/dns-query#默认代理",
      "https://8.8.8.8/dns-query#默认代理"
    ],
    "nameserver-policy": {
      "rule-set:ads": [
        "https://dns.alidns.com/dns-query#广告拦截",
        "https://doh.pub/dns-query#广告拦截"
      ],
      "rule-set:Ad": [
        "https://dns.alidns.com/dns-query#广告拦截",
        "https://doh.pub/dns-query#广告拦截"
      ],
      "+.lan": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "+.local": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "+.arpa": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "localhost": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "+.blip.net": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "rule-set:applications": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "clash.razord.top": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "yacd.haishan.me": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "rule-set:private": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "rule-set:icloud": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "rule-set:apple-direct": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "geosite:private": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "steamcdn-a.akamaihd.net": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "+.steamserver.net": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "+.steamcontent.com": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "rule-set:ai-cn": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "rule-set:ai-global": [
        "https://1.1.1.1/dns-query#AI",
        "https://8.8.8.8/dns-query#AI"
      ],
      "rule-set:GitHub": [
        "https://1.1.1.1/dns-query#默认代理",
        "https://8.8.8.8/dns-query#默认代理"
      ],
      "rule-set:OneDrive": [
        "https://1.1.1.1/dns-query#默认代理",
        "https://8.8.8.8/dns-query#默认代理"
      ],
      "+.assrt.net": [
        "https://1.1.1.1/dns-query#默认代理",
        "https://8.8.8.8/dns-query#默认代理"
      ],
      "rule-set:TikTok": [
        "https://1.1.1.1/dns-query#TikTok",
        "https://8.8.8.8/dns-query#TikTok"
      ],
      "rule-set:apple": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "rule-set:Twitter": [
        "https://1.1.1.1/dns-query#社交媒体",
        "https://8.8.8.8/dns-query#社交媒体"
      ],
      "rule-set:Telegram": [
        "https://1.1.1.1/dns-query#社交媒体",
        "https://8.8.8.8/dns-query#社交媒体"
      ],
      "rule-set:direct": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ],
      "geosite:CN": [
        "https://dns.alidns.com/dns-query#DIRECT",
        "https://doh.pub/dns-query#DIRECT"
      ]
    }
  },
  // Mainland CDN mirrors; download rule providers directly.
  "rule-providers": {
    "ads": {
      "type": "http",
      "proxy": "DIRECT",
      "path": "./ruleset/ads.yaml",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/ads.yaml"
    },
    // Load the compiled domain set to reduce mobile startup memory.
    // A separate cache path prevents reusing the old text rules.
    "Ad": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "domain",
      "format": "mrs",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/Cats-Team/AdRules@main/adrules-mihomo.mrs",
      "path": "./ruleset/adrules.mrs"
    },
    "ai-cn": {
      "type": "http",
      "proxy": "DIRECT",
      "path": "./ruleset/ai-cn.yaml",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/VPSDance/ai-proxy-rules@main/rules/clash/cn.yaml"
    },
    "ai-global": {
      "type": "http",
      "proxy": "DIRECT",
      "path": "./ruleset/ai-global.yaml",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/VPSDance/ai-proxy-rules@main/rules/clash/global.yaml"
    },
    "apple": {
      "type": "http",
      "proxy": "DIRECT",
      "path": "./ruleset/apple.yaml",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/apple.yaml"
    },
    "direct": {
      "type": "http",
      "proxy": "DIRECT",
      "path": "./ruleset/direct.yaml",
      "behavior": "domain",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/Loyalsoldier/clash-rules@release/direct.txt"
    },
    "applications": {
      "type": "http",
      "proxy": "DIRECT",
      "path": "./ruleset/applications.yaml",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/Loyalsoldier/clash-rules@release/applications.txt"
    },
    "icloud": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "domain",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/Loyalsoldier/clash-rules@release/icloud.txt",
      "path": "./ruleset/icloud.yaml"
    },
    "apple-direct": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "domain",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/Loyalsoldier/clash-rules@release/apple.txt",
      "path": "./ruleset/apple-direct.yaml"
    },
    "private": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "domain",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/Loyalsoldier/clash-rules@release/private.txt",
      "path": "./ruleset/private.yaml"
    },
    "cncidr": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "ipcidr",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
      "path": "./ruleset/cncidr.yaml"
    },
    "lancidr": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "ipcidr",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
      "path": "./ruleset/lancidr.yaml"
    },
    "TikTok": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/blackmatrix7/ios_rule_script@master/rule/Clash/TikTok/TikTok.yaml",
      "path": "./ruleset/TikTok.yaml"
    },
    "Twitter": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Twitter/Twitter.yaml",
      "path": "./ruleset/Twitter.yaml"
    },
    "Telegram": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Telegram/Telegram.yaml",
      "path": "./ruleset/Telegram.yaml"
    },
    "GitHub": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GitHub/GitHub.yaml",
      "path": "./ruleset/GitHub.yaml"
    },
    "OneDrive": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdmirror.com/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OneDrive/OneDrive.yaml",
      "path": "./ruleset/OneDrive.yaml"
    }
  },
  "proxy-groups": [
    {
      "name": "默认代理",
      "type": "select",
      "icon": "https://cdn.jsdmirror.com/gh/Koolson/Qure@master/IconSet/Color/Proxy.png",
      "proxies": [
        "自动选择",
        "香港节点",
        "日本节点",
        "新加坡节点",
        "美国节点",
        "台湾节点",
        "其他地区"
      ]
    },
    {
      "name": "AI",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/AI.png",
      "proxies": [
        "美国节点",
        "日本节点",
        "新加坡节点",
        "香港节点",
        "台湾节点",
        "其他地区",
        "自动选择"
      ]
    },
    {
      "name": "TikTok",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/TikTok.png",
      "proxies": [
        "香港节点",
        "美国节点",
        "日本节点",
        "新加坡节点",
        "台湾节点",
        "其他地区",
        "自动选择"
      ]
    },
    {
      "name": "社交媒体",
      "type": "select",
      "icon": "https://img.icons8.com/color/96/conference-call.png",
      "proxies": [
        "香港节点",
        "日本节点",
        "新加坡节点",
        "美国节点",
        "台湾节点",
        "其他地区",
        "自动选择"
      ]
    },
    {
      "name": "自动选择",
      "type": "url-test",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Auto.png",
      "include-all": true,
      "empty-fallback": "REJECT",
      "exclude-type": "Direct",
      "exclude-filter": "(?i)^(?:\\[[^\\]]+\\]\\s*)?[\\p{P}\\p{S}\\s]*(?:官网|官網|流量|剩余|剩餘|到期|过期|套餐|订阅|(?:距离|距離)下次重置|下次重置|重置|过滤掉|traffic|expire|expired|subscription|reset|official|website)",
      "url": "https://cp.cloudflare.com/generate_204",
      "interval": 60,
      "tolerance": 50,
      "timeout": 3000,
      "max-failed-times": 1,
      "lazy": false
    },
    {
      "name": "香港节点",
      "type": "url-test",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png",
      "include-all": true,
      "empty-fallback": "REJECT",
      "filter": "(?i)香港|Hong[ -]?Kong|\\bHK\\b|🇭🇰",
      "exclude-filter": "(?i)^(?:\\[[^\\]]+\\]\\s*)?[\\p{P}\\p{S}\\s]*(?:官网|官網|流量|剩余|剩餘|到期|过期|套餐|订阅|(?:距离|距離)下次重置|下次重置|重置|过滤掉|traffic|expire|expired|subscription|reset|official|website)",
      "exclude-type": "Direct",
      "url": "https://cp.cloudflare.com/generate_204",
      "interval": 60,
      "tolerance": 50,
      "timeout": 3000,
      "max-failed-times": 1,
      "lazy": true
    },
    {
      "name": "日本节点",
      "type": "url-test",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png",
      "include-all": true,
      "empty-fallback": "REJECT",
      "filter": "(?i)日本|Japan|\\bJP\\b|🇯🇵",
      "exclude-filter": "(?i)^(?:\\[[^\\]]+\\]\\s*)?[\\p{P}\\p{S}\\s]*(?:官网|官網|流量|剩余|剩餘|到期|过期|套餐|订阅|(?:距离|距離)下次重置|下次重置|重置|过滤掉|traffic|expire|expired|subscription|reset|official|website)",
      "exclude-type": "Direct",
      "url": "https://cp.cloudflare.com/generate_204",
      "interval": 60,
      "tolerance": 50,
      "timeout": 3000,
      "max-failed-times": 1,
      "lazy": true
    },
    {
      "name": "新加坡节点",
      "type": "url-test",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png",
      "include-all": true,
      "empty-fallback": "REJECT",
      "filter": "(?i)新加坡|Singapore|\\bSG\\b|🇸🇬",
      "exclude-filter": "(?i)^(?:\\[[^\\]]+\\]\\s*)?[\\p{P}\\p{S}\\s]*(?:官网|官網|流量|剩余|剩餘|到期|过期|套餐|订阅|(?:距离|距離)下次重置|下次重置|重置|过滤掉|traffic|expire|expired|subscription|reset|official|website)",
      "exclude-type": "Direct",
      "url": "https://cp.cloudflare.com/generate_204",
      "interval": 60,
      "tolerance": 50,
      "timeout": 3000,
      "max-failed-times": 1,
      "lazy": true
    },
    {
      "name": "美国节点",
      "type": "url-test",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png",
      "include-all": true,
      "empty-fallback": "REJECT",
      "filter": "(?i)美国|美國|United[ -]?States|America|\\bUS\\b|🇺🇸",
      "exclude-filter": "(?i)^(?:\\[[^\\]]+\\]\\s*)?[\\p{P}\\p{S}\\s]*(?:官网|官網|流量|剩余|剩餘|到期|过期|套餐|订阅|(?:距离|距離)下次重置|下次重置|重置|过滤掉|traffic|expire|expired|subscription|reset|official|website)",
      "exclude-type": "Direct",
      "url": "https://cp.cloudflare.com/generate_204",
      "interval": 60,
      "tolerance": 50,
      "timeout": 3000,
      "max-failed-times": 1,
      "lazy": true
    },
    {
      "name": "台湾节点",
      "type": "url-test",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png",
      "include-all": true,
      "empty-fallback": "REJECT",
      "filter": "(?i)台湾|台灣|Taiwan|\\bTW\\b|🇹🇼",
      "exclude-filter": "(?i)^(?:\\[[^\\]]+\\]\\s*)?[\\p{P}\\p{S}\\s]*(?:官网|官網|流量|剩余|剩餘|到期|过期|套餐|订阅|(?:距离|距離)下次重置|下次重置|重置|过滤掉|traffic|expire|expired|subscription|reset|official|website)",
      "exclude-type": "Direct",
      "url": "https://cp.cloudflare.com/generate_204",
      "interval": 60,
      "tolerance": 50,
      "timeout": 3000,
      "max-failed-times": 1,
      "lazy": true
    },
    {
      "name": "其他地区",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_Nations.png",
      "include-all": true,
      "empty-fallback": "REJECT",
      "exclude-filter": "(?i)^(?:\\[[^\\]]+\\]\\s*)?[\\p{P}\\p{S}\\s]*(?:官网|官網|流量|剩余|剩餘|到期|过期|套餐|订阅|(?:距离|距離)下次重置|下次重置|重置|过滤掉|traffic|expire|expired|subscription|reset|official|website)|香港|Hong[ -]?Kong|\\bHK\\b|🇭🇰|日本|Japan|\\bJP\\b|🇯🇵|新加坡|Singapore|\\bSG\\b|🇸🇬|美国|美國|United[ -]?States|America|\\bUS\\b|🇺🇸|台湾|台灣|Taiwan|\\bTW\\b|🇹🇼",
      "exclude-type": "Direct"
    },
    {
      "name": "广告拦截",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Advertising.png",
      "proxies": [
        "REJECT",
        "DIRECT"
      ]
    },
    {
      "name": "订阅信息",
      "type": "select",
      "hidden": true,
      "include-all": true,
      "empty-fallback": "REJECT",
      "filter": "(?i)^(?:\\[[^\\]]+\\]\\s*)?[\\p{P}\\p{S}\\s]*(?:官网|官網|流量|剩余|剩餘|到期|过期|套餐|订阅|(?:距离|距離)下次重置|下次重置|重置|过滤掉|traffic|expire|expired|subscription|reset|official|website)"
    }
  ],
  "rules": [
    "RULE-SET,ads,广告拦截",
    "RULE-SET,Ad,广告拦截",
    "DOMAIN-SUFFIX,lan,DIRECT",
    "DOMAIN-SUFFIX,local,DIRECT",
    "DOMAIN-SUFFIX,arpa,DIRECT",
    "DOMAIN,localhost,DIRECT",
    "DOMAIN-SUFFIX,blip.net,DIRECT",
    "PROCESS-NAME,Blip.exe,DIRECT",
    "PROCESS-NAME,Blip,DIRECT",
    "PROCESS-NAME,net.blip.android,DIRECT",
    "RULE-SET,applications,DIRECT",
    "DOMAIN,clash.razord.top,DIRECT",
    "DOMAIN,yacd.haishan.me,DIRECT",
    "RULE-SET,private,DIRECT",
    "RULE-SET,icloud,DIRECT",
    "RULE-SET,apple-direct,DIRECT",
    "GEOSITE,private,DIRECT",
    "GEOIP,private,DIRECT,no-resolve",
    "RULE-SET,lancidr,DIRECT,no-resolve",
    "GEOIP,LAN,DIRECT,no-resolve",
    "DOMAIN,steamcdn-a.akamaihd.net,DIRECT",
    "DOMAIN-SUFFIX,steamserver.net,DIRECT",
    "DOMAIN-SUFFIX,steamcontent.com,DIRECT",
    "RULE-SET,ai-cn,DIRECT",
    "RULE-SET,ai-global,AI",
    "RULE-SET,GitHub,默认代理",
    "RULE-SET,OneDrive,默认代理",
    "DOMAIN-SUFFIX,assrt.net,默认代理",
    "RULE-SET,TikTok,TikTok",
    "RULE-SET,apple,DIRECT",
    "RULE-SET,Twitter,社交媒体",
    "RULE-SET,Telegram,社交媒体",
    "RULE-SET,direct,DIRECT",
    "GEOSITE,CN,DIRECT",
    "RULE-SET,cncidr,DIRECT,no-resolve",
    "GEOIP,CN,DIRECT,no-resolve",
    "MATCH,默认代理"
  ]
};

function main(config) {
  config = config || {};
  const customGroups = customConfig["proxy-groups"].map(group => ({
    ...group,
    ...(group.proxies ? { proxies: group.proxies.slice() } : {})
  }));
  const customNames = new Set(customGroups.map(group => group.name));
  const originalGroups = Array.isArray(config["proxy-groups"])
    ? config["proxy-groups"].filter(group => group && !customNames.has(group.name))
    : [];
  const originalPrimary = originalGroups.find(group =>
    group.type === "select" &&
    Array.isArray(group.proxies) &&
    group.proxies.length > 0 &&
    !group.proxies.includes("默认代理")
  );
  if (originalPrimary) {
    customGroups[0].proxies.unshift(originalPrimary.name);
  }
  for (const key in customConfig) {
    if (key === "proxy-groups") continue;
    config[key] = customConfig[key];
  }
  config["proxy-groups"] = customGroups.concat(originalGroups);
  config.rules = customConfig.rules.slice();
  return config;
}
