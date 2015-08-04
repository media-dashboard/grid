#!/bin/bash
echo "DROP DATABASE IF EXISTS grid;" | psql
bash init.sh
