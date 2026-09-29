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
    "ai": {
      "type": "http",
      "behavior": "classical",
      "format": "yaml",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/n0de-sudo/Perfect-Rules@main/Clash/rules/ai.yaml"
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
      "format": "text",
      "interval": 86400,
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
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
      "name": "漏网之鱼 [自选]",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Final.png",
      "proxies": [
        "自动选择 [系统]",
        "香港节点 [系统]",
        "日本节点 [系统]",
        "新加坡节点 [系统]",
        "美国节点 [系统]",
        "台湾节点 [系统]",
        "其他地区 [系统]",
        "全部节点 [系统]",
        "DIRECT"
      ]
    },
    {
      "name": "AI服务 [自选]",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/AI.png",
      "proxies": [
        "美国节点 [系统]",
        "日本节点 [系统]",
        "新加坡节点 [系统]",
        "香港节点 [系统]",
        "台湾节点 [系统]",
        "其他地区 [系统]",
        "全部节点 [系统]",
        "DIRECT"
      ]
    },
    {
      "name": "Gemini [自选]",
      "type": "select",
      "icon": "https://cdn.jsdelivr.net/gh/guaishouxiaoqi/icons@master/Color/Gemini.png",
      "proxies": [
        "美国节点 [系统]",
        "日本节点 [系统]",
        "新加坡节点 [系统]",
        "香港节点 [系统]",
        "台湾节点 [系统]",
        "其他地区 [系统]",
        "全部节点 [系统]",
        "DIRECT"
      ]
    },
    {
      "name": "油管专用 [自选]",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/YouTube.png",
      "proxies": [
        "香港节点 [系统]",
        "美国节点 [系统]",
        "日本节点 [系统]",
        "新加坡节点 [系统]",
        "台湾节点 [系统]",
        "其他地区 [系统]",
        "全部节点 [系统]",
        "DIRECT"
      ]
    },
    {
      "name": "Steam 社区 [自选]",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Steam.png",
      "proxies": [
        "香港节点 [系统]",
        "日本节点 [系统]",
        "新加坡节点 [系统]",
        "美国节点 [系统]",
        "台湾节点 [系统]",
        "其他地区 [系统]",
        "全部节点 [系统]",
        "DIRECT"
      ]
    },
    {
      "name": "Steam 下载 [自选]",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Steam.png",
      "proxies": [
        "香港节点 [系统]",
        "日本节点 [系统]",
        "新加坡节点 [系统]",
        "美国节点 [系统]",
        "台湾节点 [系统]",
        "其他地区 [系统]",
        "全部节点 [系统]",
        "DIRECT"
      ]
    },
    {
      "name": "苹果服务 [自选]",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Apple.png",
      "proxies": [
        "香港节点 [系统]",
        "日本节点 [系统]",
        "新加坡节点 [系统]",
        "美国节点 [系统]",
        "台湾节点 [系统]",
        "其他地区 [系统]",
        "全部节点 [系统]",
        "DIRECT"
      ]
    },
    {
      "name": "谷歌服务 [自选]",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Google_Search.png",
      "proxies": [
        "美国节点 [系统]",
        "日本节点 [系统]",
        "新加坡节点 [系统]",
        "香港节点 [系统]",
        "台湾节点 [系统]",
        "其他地区 [系统]",
        "全部节点 [系统]",
        "DIRECT"
      ]
    },
    {
      "name": "Pixiv [自选]",
      "type": "select",
      "icon": "https://img.icons8.com/color/48/pixiv.png",
      "proxies": [
        "香港节点 [系统]",
        "日本节点 [系统]",
        "新加坡节点 [系统]",
        "美国节点 [系统]",
        "台湾节点 [系统]",
        "其他地区 [系统]",
        "全部节点 [系统]",
        "DIRECT"
      ]
    },
    {
      "name": "微软服务 [自选]",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Microsoft.png",
      "proxies": [
        "香港节点 [系统]",
        "日本节点 [系统]",
        "新加坡节点 [系统]",
        "美国节点 [系统]",
        "台湾节点 [系统]",
        "其他地区 [系统]",
        "全部节点 [系统]",
        "DIRECT"
      ]
    },
    {
      "name": "全部节点 [系统]",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Global.png",
      "include-all-proxies": true,
      "exclude-type": "Direct"
    },
    {
      "name": "自动选择 [系统]",
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
      "name": "香港节点 [系统]",
      "type": "url-test",
      "hidden": true,
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png",
      "include-all-proxies": true,
      "filter": "(?i)🇭🇰|香港|港|\\bHK\\b|\\bHKG\\b|Hong[ -]?Kong",
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
      "name": "日本节点 [系统]",
      "type": "url-test",
      "hidden": true,
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png",
      "include-all-proxies": true,
      "filter": "(?i)🇯🇵|日本|日|\\bJP\\b|\\bJPN\\b|Japan|Tokyo|Osaka",
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
      "name": "新加坡节点 [系统]",
      "type": "url-test",
      "hidden": true,
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png",
      "include-all-proxies": true,
      "filter": "(?i)🇸🇬|新加坡|新国|\\bSG\\b|\\bSGP\\b|Singapore",
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
      "name": "美国节点 [系统]",
      "type": "url-test",
      "hidden": true,
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png",
      "include-all-proxies": true,
      "filter": "(?i)🇺🇸|美国|美|\\bUS\\b|\\bUSA\\b|United[ -]?States|America|Los[ -]?Angeles|New[ -]?York|San[ -]?Francisco",
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
      "name": "台湾节点 [系统]",
      "type": "url-test",
      "hidden": true,
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png",
      "include-all-proxies": true,
      "filter": "(?i)🇹🇼|台湾|台|\\bTW\\b|\\bTWN\\b|Taiwan|Taipei",
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
      "name": "其他地区 [系统]",
      "type": "select",
      "hidden": true,
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_Nations.png",
      "include-all-proxies": true,
      "filter": "(?i)^(?!.*(?:🇭🇰|🇯🇵|🇸🇬|🇺🇸|🇹🇼|香港|日本|新加坡|美国|台湾|\\bHK\\b|\\bHKG\\b|\\bJP\\b|\\bJPN\\b|\\bSG\\b|\\bSGP\\b|\\bUS\\b|\\bUSA\\b|\\bTW\\b|\\bTWN\\b|Hong[ -]?Kong|Japan|Tokyo|Osaka|Singapore|United[ -]?States|America|Los[ -]?Angeles|New[ -]?York|San[ -]?Francisco|Taiwan|Taipei)).*",
      "exclude-filter": "(?i)官网|流量|剩余|到期|过期|套餐|订阅|重置|traffic|expire|expired|subscription|reset|official|website",
      "exclude-type": "Direct"
    },
    {
      "name": "广告拦截 [系统]",
      "type": "select",
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Advertising.png",
      "proxies": [
        "REJECT",
        "DIRECT"
      ]
    }
  ],
  "rules": [
    "RULE-SET,ads,广告拦截 [系统]",
    "RULE-SET,Ad,广告拦截 [系统]",
    "GEOSITE,private,DIRECT",
    "GEOIP,private,DIRECT,no-resolve",
    "DOMAIN,steamcdn-a.akamaihd.net,Steam 下载 [自选]",
    "DOMAIN-SUFFIX,steamserver.net,Steam 下载 [自选]",
    "DOMAIN-SUFFIX,steamcontent.com,Steam 下载 [自选]",
    "DOMAIN-SUFFIX,steamstatic.com,Steam 下载 [自选]",
    "DOMAIN-SUFFIX,steamusercontent.com,Steam 下载 [自选]",
    "DOMAIN-SUFFIX,pixiv.net,Pixiv [自选]",
    "DOMAIN-SUFFIX,pximg.net,Pixiv [自选]",
    "DOMAIN-SUFFIX,pixivision.net,Pixiv [自选]",
    "DOMAIN-SUFFIX,gemini.google.com,Gemini [自选]",
    "DOMAIN-SUFFIX,gemini.google,Gemini [自选]",
    "DOMAIN-SUFFIX,bard.google.com,Gemini [自选]",
    "DOMAIN-SUFFIX,gemini.gstatic.com,Gemini [自选]",
    "DOMAIN-SUFFIX,ai.google.dev,Gemini [自选]",
    "DOMAIN-SUFFIX,aistudio.google.com,Gemini [自选]",
    "DOMAIN-SUFFIX,makersuite.google.com,Gemini [自选]",
    "DOMAIN-SUFFIX,generativelanguage.googleapis.com,Gemini [自选]",
    "DOMAIN,alkalimakersuite-pa.clients6.google.com,Gemini [自选]",
    "DOMAIN,webchannel-alkalimakersuite-pa.clients6.google.com,Gemini [自选]",
    "DOMAIN,geller-pa.googleapis.com,Gemini [自选]",
    "DOMAIN,proactivebackend-pa.googleapis.com,Gemini [自选]",
    "RULE-SET,ai,AI服务 [自选]",
    "RULE-SET,Bing,微软服务 [自选]",
    "GEOSITE,microsoft@cn,DIRECT",
    "RULE-SET,MicrosoftAPPs,DIRECT",
    "RULE-SET,Microsoft,微软服务 [自选]",
    "DOMAIN,api.assrt.net,漏网之鱼 [自选]",
    "RULE-SET,youtube,油管专用 [自选]",
    "DOMAIN-SUFFIX,store.steampowered.com,Steam 社区 [自选]",
    "DOMAIN-SUFFIX,steamcommunity.com,Steam 社区 [自选]",
    "RULE-SET,apple,苹果服务 [自选]",
    "RULE-SET,google,谷歌服务 [自选]",
    "RULE-SET,direct,DIRECT",
    "GEOSITE,CN,DIRECT",
    "GEOIP,CN,DIRECT,no-resolve",
    "MATCH,漏网之鱼 [自选]"
  ]
};

function main(config) {
  config = config || {};
  config["rule-providers"] = customConfig["rule-providers"];
  config["proxy-groups"] = customConfig["proxy-groups"];
  config.rules = customConfig.rules.slice();
  return config;
}
