#!/bin/bash
echo "CREATE DATABASE grid;" | psql
echo "CREATE EXTENSION IF NOT EXISTS PostGIS;" | psql --dbname grid
echo "CREATE TABLE grid (
  id         SERIAL PRIMARY KEY,
  row        integer,
  col        integer,
  cellwidth  integer,
  centroid   text,
  geom       geometry(POLYGON,4326)
);" | psql --dbname grid

psql --dbname grid < app/st_CreateFishnet.sql
psql --dbname grid < app/populateGrid.sql
