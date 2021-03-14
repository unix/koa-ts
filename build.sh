#!/bin/bash
set -e

rm -rf releases dist
ttsc -P tsconfig.json
$(cp ./{package.json,compose.yml,variables.env,ecosystem.config.js} releases/ > /dev/null 2>&1) & \
echo ''
