#!/bin/sh

echo "export const versions = [" > src/lib/components/changelogs/versions.ts
curl -s https://api.github.com/repos/TrueBrain/TrueGRF/releases | jq -c '.[] | {name: .name, body: .body}' | xargs -d'\n' -n 1 printf "%s,\n" >> src/lib/components/changelogs/versions.ts
echo "]" >> src/lib/components/changelogs/versions.ts
