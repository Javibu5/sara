#!/bin/sh
set -e

cd /etc/nginx/conf.d
for i in *.conf;
do
  envsubst < $i > temp
  mv temp $i
done

nginx -g 'daemon off;'
