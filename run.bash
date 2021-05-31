#!/bin/bash
set -e
trap 'catch' ERR

catch () {
    echo '*** fatal error in run.bash'
    exit 1
}

set -x

target=layer0

./buildgrammar.bash
m4 asc.grasem >_.grasem
../grasem/run.bash _.grasem >_.js
cat _.js foreign.js >_asc.js
node _asc.js <${target}.asc
