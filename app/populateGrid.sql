-- http://gis.stackexchange.com/questions/16374/how-to-create-a-regular-polygon-grid-in-postgis
\set cellwidth '1'
\set ymin '-60'
\set ymax '85'
\set xmin '-180'
\set xmax '180'

INSERT INTO grid
  SELECT row_number() over () as id, 
    row, 
    col,
    :cellwidth as cellwidth,
    ST_AsEWKT(ST_Centroid(geom)) as centroid,
    ST_SetSRID(geom, 4326) as geom
     --ST_CreateFishnet(nrow, ncol, xstep, ystep [, xmin, ymin]) 
  FROM ST_CreateFishnet((:ymax - :ymin)/:cellwidth, (:xmax - :xmin)/:cellwidth, :cellwidth, :cellwidth, :xmin, :ymin);
