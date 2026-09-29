// FlClash Override Script
// Select this script in FlClash profile override settings.
// These sections mirror MyRule.yaml.

const customConfig = {
  "rule-providers": {
    "ads": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/ads.yaml"
    },
    "Ad": {
      "type": "http",
      "behavior": "domain",
      "format": "text",
      "interval": 86400,
      "url": "https://raw.githubusercontent.com/Cats-Team/AdRules/main/adrules_domainset.txt",
      "path": "./ruleset/anti-ad-clash.yaml"
    },
    "chatgpt": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/VPSDance/ai-proxy-rules@main/rules/clash/openai.yaml"
    },
    "google-ai": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/VPSDance/ai-proxy-rules@main/rules/clash/google-ai.yaml"
    },
    "ai-cn": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/VPSDance/ai-proxy-rules@main/rules/clash/cn.yaml"
    },
    "ai-global": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/VPSDance/ai-proxy-rules@main/rules/clash/global.yaml"
    },
    "youtube": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/youtube.yaml"
    },
    "apple": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/apple.yaml"
    },
    "google": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/google.yaml"
    },
    "direct": {
      "type": "http",
      "behavior": "domain",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
    },
    "applications": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt"
    },
    "icloud": {
      "type": "http",
      "behavior": "domain",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
      "path": "./ruleset/icloud.yaml"
    },
    "apple-direct": {
      "type": "http",
      "behavior": "domain",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
      "path": "./ruleset/apple-direct.yaml"
    },
    "private": {
      "type": "http",
      "behavior": "domain",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
      "path": "./ruleset/private.yaml"
    },
    "cncidr": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
      "path": "./ruleset/cncidr.yaml"
    },
    "lancidr": {
      "type": "http",
      "behavior": "ipcidr",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
      "path": "./ruleset/lancidr.yaml"
    },
    "Bing": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Bing/Bing.yaml",
      "path": "./ruleset/Bing.yaml"
    },
    "MicrosoftAPPs": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/MicrosoftAPPs/MicrosoftAPPs.yaml",
      "path": "./ruleset/MicrosoftAPPs.yaml"
    },
    "Microsoft": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Microsoft/Microsoft.yaml",
      "path": "./ruleset/Microsoft.yaml"
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
        "全部节点",
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
        "全部节点",
        "DIRECT"
      ]
    },
    {
      "name": "ChatGPT",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/ChatGPT.png",
      "proxies": [
        "美国节点",
        "日本节点",
        "新加坡节点",
        "香港节点",
        "台湾节点",
        "其他地区",
        "全部节点",
        "DIRECT"
      ]
    },
    {
      "name": "Gemini",
      "type": "select",
      "icon": "https://cdn.jsdelivr.net/gh/guaishouxiaoqi/icons@master/Color/Gemini.png",
      "proxies": [
        "美国节点",
        "日本节点",
        "新加坡节点",
        "香港节点",
        "台湾节点",
        "其他地区",
        "全部节点",
        "DIRECT"
      ]
    },
    {
      "name": "Youtube",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/YouTube.png",
      "proxies": [
        "香港节点",
        "美国节点",
        "日本节点",
        "新加坡节点",
        "台湾节点",
        "其他地区",
        "全部节点",
        "DIRECT"
      ]
    },
    {
      "name": "Steam",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Steam.png",
      "proxies": [
        "香港节点",
        "日本节点",
        "新加坡节点",
        "美国节点",
        "台湾节点",
        "其他地区",
        "全部节点",
        "DIRECT"
      ]
    },
    {
      "name": "Google",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Google_Search.png",
      "proxies": [
        "美国节点",
        "日本节点",
        "新加坡节点",
        "香港节点",
        "台湾节点",
        "其他地区",
        "全部节点",
        "DIRECT"
      ]
    },
    {
      "name": "Pixiv",
      "type": "select",
      "icon": "https://img.icons8.com/color/48/pixiv.png",
      "proxies": [
        "香港节点",
        "日本节点",
        "新加坡节点",
        "美国节点",
        "台湾节点",
        "其他地区",
        "全部节点",
        "DIRECT"
      ]
    },
    {
      "name": "Microsoft",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Microsoft.png",
      "proxies": [
        "香港节点",
        "日本节点",
        "新加坡节点",
        "美国节点",
        "台湾节点",
        "其他地区",
        "全部节点",
        "DIRECT"
      ]
    },
    {
      "name": "全部节点",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png",
      "include-all-proxies": true,
      "exclude-type": "Direct"
    },
    {
      "name": "自动选择",
      "type": "url-test",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Auto.png",
      "include-all-proxies": true,
      "exclude-type": "Direct",
      "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
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
      "hidden": true,
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png",
      "include-all-proxies": true,
      "filter": "^(?:🇭🇰)?香港",
      "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
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
      "hidden": true,
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png",
      "include-all-proxies": true,
      "filter": "^(?:🇯🇵)?日本",
      "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
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
      "hidden": true,
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png",
      "include-all-proxies": true,
      "filter": "^(?:🇸🇬)?新加坡",
      "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
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
      "hidden": true,
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png",
      "include-all-proxies": true,
      "filter": "^(?:🇺🇸)?美国",
      "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
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
      "hidden": true,
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png",
      "include-all-proxies": true,
      "filter": "^(?:🇨🇳|🇹🇼)?台湾",
      "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
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
      "hidden": true,
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_Nations.png",
      "include-all-proxies": true,
      "filter": "^(?!(?:(?:🇭🇰)?香港|(?:🇯🇵)?日本|(?:🇸🇬)?新加坡|(?:🇺🇸)?美国|(?:🇨🇳|🇹🇼)?台湾)).+",
      "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
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
    }
  ],
  "rules": [
    "RULE-SET,ads,广告拦截",
    "RULE-SET,Ad,广告拦截",
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
    "DOMAIN-SUFFIX,steamstatic.com,DIRECT",
    "DOMAIN-SUFFIX,steamusercontent.com,DIRECT",
    "DOMAIN-SUFFIX,pixiv.net,Pixiv",
    "DOMAIN-SUFFIX,pximg.net,Pixiv",
    "DOMAIN-SUFFIX,pixivision.net,Pixiv",
    "RULE-SET,chatgpt,ChatGPT",
    "RULE-SET,google-ai,Gemini",
    "RULE-SET,ai-cn,DIRECT",
    "RULE-SET,ai-global,AI",
    "RULE-SET,Bing,Microsoft",
    "GEOSITE,microsoft@cn,DIRECT",
    "RULE-SET,MicrosoftAPPs,DIRECT",
    "RULE-SET,Microsoft,Microsoft",
    "DOMAIN,api.assrt.net,漏网之鱼",
    "RULE-SET,youtube,Youtube",
    "DOMAIN-SUFFIX,store.steampowered.com,Steam",
    "DOMAIN-SUFFIX,steamcommunity.com,Steam",
    "RULE-SET,apple,DIRECT",
    "RULE-SET,google,Google",
    "RULE-SET,direct,DIRECT",
    "GEOSITE,CN,DIRECT",
    "RULE-SET,cncidr,DIRECT,no-resolve",
    "GEOIP,CN,DIRECT,no-resolve",
    "MATCH,漏网之鱼"
  ]
};

function main(config) {
  config = config || {};
  config["rule-providers"] = customConfig["rule-providers"];
  config["proxy-groups"] = customConfig["proxy-groups"];
  config.rules = customConfig.rules.slice();
  return config;
}
