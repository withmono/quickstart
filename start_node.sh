#!/bin/sh

cd frontend && ./start.sh & pids=$!
cd node && ./start.sh & pids+=" $!"

trap "kill $pids" SIGTERM SIGINT
wait $pids
