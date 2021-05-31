#!/bin/bash
set -e
trap 'catch' ERR

catch () {
    echo '*** fatal error in run.bash'
    exit 1
}

set -x

target1=layer0
target2=container1
target3=hello

./buildgrammar.bash
m4 asc.grasem >_.grasem
../grasem/run.bash _.grasem >_.js
cat _.js foreign.js >_asc.js

node _asc.js <${target1}.asc
node _asc.js <${target2}.asc
node _asc.js <${target3}.asc
