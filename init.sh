#!/bin/bash

# create database
echo "CREATE DATABASE grid;" | psql
echo "CREATE EXTENSION IF NOT EXISTS PostGIS;" | psql --dbname grid

# create grid table and populate
echo "CREATE TABLE grid (
  id         SERIAL PRIMARY KEY,
  row        integer,
  col        integer,
  cellwidth  integer,
  centroid   text,
  geom       geometry(POLYGON,4326)
);" | psql --dbname grid

psql --dbname grid < pgsql/st_CreateFishnet.sql
psql --dbname grid < pgsql/populateGrid.sql

# create world table and populate
bash pgsql/world2postgis.sh
