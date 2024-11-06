#!/usr/bin/env zsh

mkdir -p ./public/icons
cd ./public/icons

for (( i = 1; i < 45; i++ )); do
    if [ $i -lt 10 ]; then
      curl --request GET -L -O "https://developer.accuweather.com/sites/default/files/0$i-s.png"
    else
      curl --request GET -L -O "https://developer.accuweather.com/sites/default/files/$i-s.png"
    fi
done;