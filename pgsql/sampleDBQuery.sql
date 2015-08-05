SELECT grid.id, grid.row, grid.col, grid.cellwidth, grid.centroid, grid.geom,
    world.admin
  FROM grid
  INNER JOIN world
  ON ST_Within(ST_Centroid(grid.geom), world.wkb_geometry)
