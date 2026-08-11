#!/usr/bin/env bash
# Audit a single URL via Chrome DevTools Protocol (Chrome already running on :9234).
# Args: $1 = URL
# Output: JSON
URL="$1"
if [ -z "$URL" ]; then echo "usage: audit.sh URL"; exit 1; fi

echo "=== AUDIT: $URL"

# Create new tab
TAB_ID=$(curl -s -X POST http://127.0.0.1:9234/json/new?http://127.0.0.1:9234/json/version | python3 -c "import sys,json; print(json.load(sys.stdin)['id'])")
echo "TAB_ID=$TAB_ID"

# Navigate
curl -s -X POST "http://127.0.0.1:9234/json/$TAB_ID/page.navigate" \
  -H "Content-Type: application/json" \
  -d "{\"url\":\"$URL\"}" > /dev/null

# Wait for load
sleep 3

# Eval JS to collect audit data
OUT=$(curl -s -X POST "http://127.0.0.1:9234/json/$TAB_ID/page.evaluate" \
  -H "Content-Type: application/json" \
  -d "{\"expression\":\"$(python3 -c "import json,sys; print(json.dumps(open('/home/alan/vgate-fix/audit_eval.js').read()))")"}")
echo "$OUT" | python3 -c "
import sys,json
d=json.load(sys.stdin)
if 'result' in d:
    # result is {value: ...}
    val = d['result'].get('value', {})
    print(json.dumps(val, ensure_ascii=False, indent=2)[:4000])
else:
    print(d)
"

# Close tab
curl -s -X POST "http://127.0.0.1:9234/json/$TAB_ID/Page.close" -H "Content-Type: application/json" -d '{}' > /dev/null
