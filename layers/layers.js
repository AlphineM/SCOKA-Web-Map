ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([36.609363, -1.233111, 36.650424, -1.209483]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Route421Km_LunchRun_1 = new ol.format.GeoJSON();
var features_Route421Km_LunchRun_1 = format_Route421Km_LunchRun_1.readFeatures(json_Route421Km_LunchRun_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Route421Km_LunchRun_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route421Km_LunchRun_1.addFeatures(features_Route421Km_LunchRun_1);
var lyr_Route421Km_LunchRun_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route421Km_LunchRun_1, 
                style: style_Route421Km_LunchRun_1,
                popuplayertitle: 'Route 4 - 21 Km_Lunch Run',
                interactive: true,
                title: '<img src="styles/legend/Route421Km_LunchRun_1.png" /> Route 4 - 21 Km_Lunch Run'
            });
var format_Route310Km_AfternoonRun_2 = new ol.format.GeoJSON();
var features_Route310Km_AfternoonRun_2 = format_Route310Km_AfternoonRun_2.readFeatures(json_Route310Km_AfternoonRun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Route310Km_AfternoonRun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route310Km_AfternoonRun_2.addFeatures(features_Route310Km_AfternoonRun_2);
var lyr_Route310Km_AfternoonRun_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route310Km_AfternoonRun_2, 
                style: style_Route310Km_AfternoonRun_2,
                popuplayertitle: 'Route 3 - 10 Km_Afternoon Run',
                interactive: true,
                title: '<img src="styles/legend/Route310Km_AfternoonRun_2.png" /> Route 3 - 10 Km_Afternoon Run'
            });
var format_Route25Km_MorningRun_3 = new ol.format.GeoJSON();
var features_Route25Km_MorningRun_3 = format_Route25Km_MorningRun_3.readFeatures(json_Route25Km_MorningRun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Route25Km_MorningRun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route25Km_MorningRun_3.addFeatures(features_Route25Km_MorningRun_3);
var lyr_Route25Km_MorningRun_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route25Km_MorningRun_3, 
                style: style_Route25Km_MorningRun_3,
                popuplayertitle: 'Route 2 - 5 Km_Morning Run',
                interactive: true,
                title: '<img src="styles/legend/Route25Km_MorningRun_3.png" /> Route 2 - 5 Km_Morning Run'
            });
var format_Route13Km_MorningRun_4 = new ol.format.GeoJSON();
var features_Route13Km_MorningRun_4 = format_Route13Km_MorningRun_4.readFeatures(json_Route13Km_MorningRun_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Route13Km_MorningRun_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route13Km_MorningRun_4.addFeatures(features_Route13Km_MorningRun_4);
var lyr_Route13Km_MorningRun_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route13Km_MorningRun_4, 
                style: style_Route13Km_MorningRun_4,
                popuplayertitle: 'Route 1 - 3 Km_Morning Run',
                interactive: true,
                title: '<img src="styles/legend/Route13Km_MorningRun_4.png" /> Route 1 - 3 Km_Morning Run'
            });
var format_StartandFinish_5 = new ol.format.GeoJSON();
var features_StartandFinish_5 = format_StartandFinish_5.readFeatures(json_StartandFinish_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_StartandFinish_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StartandFinish_5.addFeatures(features_StartandFinish_5);
var lyr_StartandFinish_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StartandFinish_5, 
                style: style_StartandFinish_5,
                popuplayertitle: 'Start and Finish',
                interactive: true,
    title: 'Start and Finish<br />\
    <img src="styles/legend/StartandFinish_5_0.png" /> Start<br />\
    <img src="styles/legend/StartandFinish_5_1.png" /> Finish<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Route421Km_LunchRun_1.setVisible(true);lyr_Route310Km_AfternoonRun_2.setVisible(true);lyr_Route25Km_MorningRun_3.setVisible(true);lyr_Route13Km_MorningRun_4.setVisible(true);lyr_StartandFinish_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Route421Km_LunchRun_1,lyr_Route310Km_AfternoonRun_2,lyr_Route25Km_MorningRun_3,lyr_Route13Km_MorningRun_4,lyr_StartandFinish_5];
lyr_Route421Km_LunchRun_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Distance (Km)': 'Distance (Km)', 'Moving time (min)': 'Moving time (min)', 'Pace (min/Km)': 'Pace (min/Km)', 'Time': 'Time', 'Date': 'Date', 'Day': 'Day', 'Location': 'Location', 'Run_Link': 'Run_Link', 'Run_Link_': 'Run_Link_', });
lyr_Route310Km_AfternoonRun_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'Distance (Km)': 'Distance (Km)', 'Moving time(min)': 'Moving time(min)', 'Pace (min/Km)': 'Pace (min/Km)', 'Time': 'Time', 'Date': 'Date', 'Day': 'Day', 'Location': 'Location', 'Run_Link': 'Run_Link', 'Run_Link_': 'Run_Link_', });
lyr_Route25Km_MorningRun_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'Distance (Km)': 'Distance (Km)', 'Moving time (min)': 'Moving time (min)', 'Pace (min/Km)': 'Pace (min/Km)', 'Time': 'Time', 'Date': 'Date', 'Day': 'Day', 'Location': 'Location', 'Run_Link': 'Run_Link', 'Run_Link_': 'Run_Link_', });
lyr_Route13Km_MorningRun_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'Distance (Km)': 'Distance (Km)', 'Moving time (min)': 'Moving time (min)', 'Pace (min/Km)': 'Pace (min/Km)', 'Time': 'Time', 'Date': 'Date', 'Day': 'Day', 'Location': 'Location', 'Run_Link': 'Run_Link', 'Run_Link_': 'Run_Link_', });
lyr_StartandFinish_5.set('fieldAliases', {'fid': 'fid', 'Marker Type': 'Marker Type', });
lyr_Route421Km_LunchRun_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Distance (Km)': 'TextEdit', 'Moving time (min)': 'TextEdit', 'Pace (min/Km)': 'TextEdit', 'Time': 'TextEdit', 'Date': 'DateTime', 'Day': 'TextEdit', 'Location': 'TextEdit', 'Run_Link': 'TextEdit', 'Run_Link_': '', });
lyr_Route310Km_AfternoonRun_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'Distance (Km)': 'TextEdit', 'Moving time(min)': 'TextEdit', 'Pace (min/Km)': 'TextEdit', 'Time': 'TextEdit', 'Date': 'DateTime', 'Day': 'TextEdit', 'Location': 'TextEdit', 'Run_Link': 'TextEdit', 'Run_Link_': '', });
lyr_Route25Km_MorningRun_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'Distance (Km)': 'TextEdit', 'Moving time (min)': 'TextEdit', 'Pace (min/Km)': 'TextEdit', 'Time': 'TextEdit', 'Date': 'DateTime', 'Day': 'TextEdit', 'Location': 'TextEdit', 'Run_Link': 'TextEdit', 'Run_Link_': '', });
lyr_Route13Km_MorningRun_4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'Distance (Km)': 'TextEdit', 'Moving time (min)': 'TextEdit', 'Pace (min/Km)': 'TextEdit', 'Time': 'TextEdit', 'Date': 'DateTime', 'Day': 'TextEdit', 'Location': 'TextEdit', 'Run_Link': 'TextEdit', 'Run_Link_': '', });
lyr_StartandFinish_5.set('fieldImages', {'fid': 'TextEdit', 'Marker Type': 'TextEdit', });
lyr_Route421Km_LunchRun_1.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Distance (Km)': 'inline label - visible with data', 'Moving time (min)': 'inline label - visible with data', 'Pace (min/Km)': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Day': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Run_Link': 'hidden field', 'Run_Link_': 'no label', });
lyr_Route310Km_AfternoonRun_2.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - visible with data', 'Distance (Km)': 'inline label - visible with data', 'Moving time(min)': 'inline label - visible with data', 'Pace (min/Km)': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Day': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Run_Link': 'hidden field', 'Run_Link_': 'no label', });
lyr_Route25Km_MorningRun_3.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - visible with data', 'Distance (Km)': 'inline label - visible with data', 'Moving time (min)': 'inline label - visible with data', 'Pace (min/Km)': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Day': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Run_Link': 'hidden field', 'Run_Link_': 'no label', });
lyr_Route13Km_MorningRun_4.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - visible with data', 'Distance (Km)': 'inline label - visible with data', 'Moving time (min)': 'inline label - visible with data', 'Pace (min/Km)': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Day': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Run_Link': 'hidden field', 'Run_Link_': 'no label', });
lyr_StartandFinish_5.set('fieldLabels', {'fid': 'hidden field', 'Marker Type': 'no label', });
lyr_StartandFinish_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});