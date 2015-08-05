#!/bin/bash
ogr2ogr -f PostgreSQL \
  PG:dbname=grid \
  -nln world \
  data/ne_110m_admin_0_countries.geojson
