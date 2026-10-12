// Last modified: 2026-10-13 01:41:39 (UTC+08:00)
// FlClash Override Script
// Select this script in FlClash profile override settings.
// These sections mirror MyRule.yaml.

const customConfig = {
  "mixed-port": 7890,
  "allow-lan": false,
  "bind-address": "127.0.0.1",
  "mode": "rule",
  "log-level": "info",
  "external-controller": "127.0.0.1:9090",
  "unified-delay": true,
  "tcp-concurrent": true,
  "find-process-mode": "strict",
  "ipv6": false,
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
  "tun": {
    "enable": true,
    "stack": "mixed",
    "auto-route": true,
    "auto-detect-interface": true,
    "strict-route": true,
    "route-address": ["0.0.0.0/0"],
    "dns-hijack": ["any:53", "tcp://any:53"]
  },
  "dns": {
    "enable": true,
    "listen": "0.0.0.0:53",
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-range6": "fdfe:dcba:9876::1/64",
    "fake-ip-filter-mode": "blacklist",
    "prefer-h3": false,
    "respect-rules": true,
    "use-hosts": true,
    "use-system-hosts": false,
    "ipv6": false,
    "fake-ip-filter": [
      "*.lan", "*.arpa", "*.local", "geosite:private",
      "+.internal.corp.com", "+.market.xiaomi.com", "geosite:category-ntp",
      "geosite:geolocation-cn", "localhost.ptlogin2.qq.com", "geosite:connectivity-check"
    ],
    "default-nameserver": [
      "system", "223.5.5.5", "119.29.29.29",
      "180.76.76.76", "180.184.1.1", "114.114.114.114"
    ],
    "nameserver": [
      "https://doh.pub/dns-query", "https://dns.alidns.com/dns-query",
      "https://doh.360.cn/dns-query", "https://dns.google/dns-query",
      "https://cloudflare-dns.com/dns-query"
    ],
    "nameserver-policy": {
      "+.baidu.com": ["https://dns.alidns.com/dns-query"],
      "+.internal.corp.com": ["10.0.0.1"]
    }
  },
  "rule-providers": {
    "ads": {
      "type": "http",
      "proxy": "DIRECT",
      "path": "./ruleset/ads.yaml",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/ads.yaml"
    },
    "Ad": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "domain",
      "format": "text",
      "interval": 86400,
      "url": "https://raw.githubusercontent.com/Cats-Team/AdRules/main/adrules_domainset.txt",
      "path": "./ruleset/anti-ad-clash.yaml"
    },
    "ai-cn": {
      "type": "http",
      "proxy": "DIRECT",
      "path": "./ruleset/ai-cn.yaml",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://raw.githubusercontent.com/VPSDance/ai-proxy-rules/main/rules/clash/cn.yaml"
    },
    "ai-global": {
      "type": "http",
      "proxy": "DIRECT",
      "path": "./ruleset/ai-global.yaml",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/VPSDance/ai-proxy-rules@main/rules/clash/global.yaml"
    },
    "apple": {
      "type": "http",
      "proxy": "DIRECT",
      "path": "./ruleset/apple.yaml",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/apple.yaml"
    },
    "direct": {
      "type": "http",
      "proxy": "DIRECT",
      "path": "./ruleset/direct.yaml",
      "behavior": "domain",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
    },
    "applications": {
      "type": "http",
      "proxy": "DIRECT",
      "path": "./ruleset/applications.yaml",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt"
    },
    "icloud": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "domain",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
      "path": "./ruleset/icloud.yaml"
    },
    "apple-direct": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "domain",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
      "path": "./ruleset/apple-direct.yaml"
    },
    "private": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "domain",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
      "path": "./ruleset/private.yaml"
    },
    "cncidr": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "ipcidr",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
      "path": "./ruleset/cncidr.yaml"
    },
    "lancidr": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "ipcidr",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
      "path": "./ruleset/lancidr.yaml"
    },
    "TikTok": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/TikTok/TikTok.yaml",
      "path": "./ruleset/TikTok.yaml"
    },
    "Twitter": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Twitter/Twitter.yaml",
      "path": "./ruleset/Twitter.yaml"
    },
    "Telegram": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.yaml",
      "path": "./ruleset/Telegram.yaml"
    },
    "GitHub": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GitHub/GitHub.yaml",
      "path": "./ruleset/GitHub.yaml"
    },
    "OneDrive": {
      "type": "http",
      "proxy": "DIRECT",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OneDrive/OneDrive.yaml",
      "path": "./ruleset/OneDrive.yaml"
    }
  },
  "proxy-groups": [
    {
      "name": "漏网之鱼",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Final.png",
      "proxies": [
        "自动选择",
        "香港节点",
        "日本节点",
        "新加坡节点",
        "美国节点",
        "台湾节点",
        "其他地区",
        "DIRECT"
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
        "自动选择",
        "DIRECT"
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
        "自动选择",
        "DIRECT"
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
        "自动选择",
        "DIRECT"
      ]
    },
    {
      "name": "自动选择",
      "type": "url-test",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Auto.png",
      "include-all-proxies": true,
      "empty-fallback": "REJECT",
      "exclude-type": "Direct",
      "exclude-filter": "(?i)^(?:\\[[^\\]]+\\]\\s*)?[\\p{P}\\p{S}\\s]*(?:官网|官網|流量|剩余|剩餘|到期|过期|套餐|订阅|(?:距离|距離)下次重置|下次重置|重置|过滤掉|traffic|expire|expired|subscription|reset|official|website)",
      "url": "https://cp.cloudflare.com/generate_204",
      "interval": 60,
      "tolerance": 50,
      "timeout": 3000,
      "max-failed-times": 1,
      "lazy": true
    },
    {
      "name": "香港节点",
      "type": "url-test",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png",
      "include-all-proxies": true,
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
      "include-all-proxies": true,
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
      "include-all-proxies": true,
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
      "include-all-proxies": true,
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
      "include-all-proxies": true,
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
      "include-all-proxies": true,
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
      "include-all-proxies": true,
      "empty-fallback": "REJECT",
      "filter": "(?i)^(?:\\[[^\\]]+\\]\\s*)?[\\p{P}\\p{S}\\s]*(?:官网|官網|流量|剩余|剩餘|到期|过期|套餐|订阅|(?:距离|距離)下次重置|下次重置|重置|过滤掉|traffic|expire|expired|subscription|reset|official|website)"
    }
  ],
  "rules": [
    "RULE-SET,ads,广告拦截",
    "RULE-SET,Ad,广告拦截",
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
    "RULE-SET,GitHub,漏网之鱼",
    "RULE-SET,OneDrive,漏网之鱼",
    "DOMAIN-SUFFIX,assrt.net,漏网之鱼",
    "RULE-SET,TikTok,TikTok",
    "RULE-SET,apple,DIRECT",
    "RULE-SET,Twitter,社交媒体",
    "RULE-SET,Telegram,社交媒体",
    "RULE-SET,direct,DIRECT",
    "GEOSITE,CN,DIRECT",
    "RULE-SET,cncidr,DIRECT,no-resolve",
    "GEOIP,CN,DIRECT,no-resolve",
    "MATCH,漏网之鱼"
  ]
};

function main(config) {
  config = config || {};
  for (const key in customConfig) {
    config[key] = customConfig[key];
  }
  config.rules = customConfig.rules.slice();
  return config;
}
