#!/bin/bash
set -e

rm -rf releases dist
ncc -m build app.ts -C -o releases \
  -e react-native-sqlite-storage \
  -e mysql \
  -e mysql2 \
  -e oracledb \
  -e pg \
  -e pg-native \
  -e pg-query-stream \
  -e redis \
  -e ioredis \
  -e sqlite3 \
  -e sql.js \
  -e mssql \
  -e express \
  -e app-root-path \
  -e body-parser \
  -e kcors \
  -e cors
$(cp ./{package.json,compose.yml,variables.env,ecosystem.config.js} releases/ > /dev/null 2>&1) & \
echo ''
#tar -zcvf release.gz releases/
