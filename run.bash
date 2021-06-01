#!/bin/bash
clear
set -e
trap 'catch' ERR

catch () {
    echo '*** fatal error in run.bash'
    exit 1
}

echo '*** DECLARE ***'

target1=layer0
target2=container1
target3=hello

./buildgrammar.bash
m4 asc.grasem >_.grasem
../grasem/run.bash _.grasem >_.js
cat _.js foreign.js >_asc.js

node _asc.js <${target1}.asc | ./trimFacts | ./fb2fbl >${target1}.fbl
cat ${target1}.fbl
#node _asc.js <${target2}.asc | ./trimFacts >${target2}.fbl
#node _asc.js <${target3}.asc | ./trimFacts >${target3}.fbl
