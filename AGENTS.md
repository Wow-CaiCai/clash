# 配置文件修改时间

- 每次修改本项目的配置文件（包括 `Vpn.yaml`、`MyRule.yaml`、`MyRule.js`）后，必须在该文件第一行添加或更新修改时间戳。
- 使用实际完成修改时的北京时间（`Asia/Shanghai`，UTC+08:00），精确到秒，不得沿用旧时间或填写预计时间。
- YAML 文件首行格式：`# Last modified: YYYY-MM-DD HH:mm:ss (UTC+08:00)`。
- JavaScript 文件首行格式：`// Last modified: YYYY-MM-DD HH:mm:ss (UTC+08:00)`。
- 若首行已有时间戳，直接替换；只保留一条时间戳，不重复添加。
- 时间戳必须采用文件支持的注释语法，保持配置有效。只更新本次实际修改的文件。
- 由 AI 在修改时直接更新时间戳，无需创建或启动文件监听脚本、后台进程或定时任务。
