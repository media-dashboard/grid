var fs = require('fs');
// var R = require('ramda');
var _ = require('underscore');
var turf = require('turf');

// var extent = [minX, minY, maxX, maxY];
var extent = [-20, -20, 20, 20],
    startCellWidth = 500;

var midPoint = function(min, max){
  return min + ((max - min)/2);
};

var quarterBbox = function(cell, params){
  params = params || {};
  var bbox = turf.extent(cell),
      xmin = bbox[0],
      xmax = bbox[2],
      xmid = midPoint(xmin, xmax),
      ymin = bbox[1],
      ymax = bbox[3],
      ymid = midPoint(ymin, ymax);

  var features = [
    // turf.bboxPolygon([xmin, ymin, xmax, ymax])
    turf.bboxPolygon([xmin, ymid, xmid, ymax]),
    turf.bboxPolygon([xmin, ymin, xmid, ymid]),
    turf.bboxPolygon([xmid, ymin, xmax, ymid]),
    turf.bboxPolygon([xmid, ymid, xmax, ymax])
  ];

  return turf.featurecollection(_.map(features, function(feature){
    return feature["properties"] = params;
  }));
};

var polygonSpatialJoin = function(source, target, sourceAttr, targetAttr){
  // join attributes from source on to target, calculated at target's centroid
    // takes attribute from source[sourceAttr] and adds to target[targetAttr], overwriting if already exists
    // source is a feature collection, and target is a single polygon
  var centroid = turf.centroid(target);
  var joinedPoint = turf.tag(turf.featurecollection(centroid), source, sourceAttr, targetAttr);
  // CHECK: can turf.tag take a Point, as well as a featureCollection, for it's first arg?
  target['properties'] = _.extend(target["properties"], joinedPoint['features'][0][properties]);
  return target;
};

var filterFeatureCollection = function(collection, fn){
  return _.filter(collection['features'], function(f){
    return fn(f);
  });
};

// module.exports = _.reduce(_.range(1,3), function(features, gridIdx){
//   var grid = turf.squareGrid(extent, startCellWidth/gridIdx, 'kilometers');
//   return mergeFeatureCollection(features, grid);
// }, {"type:", "FeatureCollection": features: []});


_.each(_.range(1,3), function(features, gridIdx){
  var pointGrid = turf.pointGrid(extent, startCellWidth/gridIdx, 'kilometers');

  var world = fs.readFileSync(__dirname + '/data/ne_110m_admin_0_countries.geojson');

  var pointGridAdmin = turf.tag(pointGrid, world, 'admin', 'admin');
  
  fs.writeFile('grid_z' + gridIdx + '.geojson', JSON.stringify(grids), function(err){
    if(err){ console.log('Error writing file: ', err); }
  });
});




