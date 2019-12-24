var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Mgmtzones_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mgmt. zones",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Mgmtzones_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13717307.899825, 5622585.850740, -13716181.631727, 5623672.869617]
                            })
                        });
var lyr_NDVI7252019_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI (7/25/2019)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI7252019_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13717305.137550, 5622588.126122, -13716184.321589, 5623670.169245]
                            })
                        });
var format_Blocks_3 = new ol.format.GeoJSON();
var features_Blocks_3 = format_Blocks_3.readFeatures(json_Blocks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blocks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blocks_3.addFeatures(features_Blocks_3);
var lyr_Blocks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Blocks_3, 
                style: style_Blocks_3,
                interactive: true,
                title: '<img src="styles/legend/Blocks_3.png" /> Blocks'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Mgmtzones_1.setVisible(true);lyr_NDVI7252019_2.setVisible(true);lyr_Blocks_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Mgmtzones_1,lyr_NDVI7252019_2,lyr_Blocks_3];
lyr_Blocks_3.set('fieldAliases', {'Block': 'Block', });
lyr_Blocks_3.set('fieldImages', {'Block': 'TextEdit', });
lyr_Blocks_3.set('fieldLabels', {'Block': 'inline label', });
lyr_Blocks_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});