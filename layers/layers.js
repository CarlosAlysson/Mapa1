var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Fortaleza_1 = new ol.format.GeoJSON();
var features_Fortaleza_1 = format_Fortaleza_1.readFeatures(json_Fortaleza_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fortaleza_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fortaleza_1.addFeatures(features_Fortaleza_1);
var lyr_Fortaleza_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fortaleza_1, 
                style: style_Fortaleza_1,
                popuplayertitle: 'Fortaleza',
                interactive: true,
                title: '<img src="styles/legend/Fortaleza_1.png" /> Fortaleza'
            });
var format_Camocim_2 = new ol.format.GeoJSON();
var features_Camocim_2 = format_Camocim_2.readFeatures(json_Camocim_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camocim_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camocim_2.addFeatures(features_Camocim_2);
var lyr_Camocim_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camocim_2, 
                style: style_Camocim_2,
                popuplayertitle: 'Camocim',
                interactive: true,
                title: '<img src="styles/legend/Camocim_2.png" /> Camocim'
            });
var format_Bitupit_3 = new ol.format.GeoJSON();
var features_Bitupit_3 = format_Bitupit_3.readFeatures(json_Bitupit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bitupit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bitupit_3.addFeatures(features_Bitupit_3);
var lyr_Bitupit_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bitupit_3, 
                style: style_Bitupit_3,
                popuplayertitle: 'Bitupitá',
                interactive: true,
                title: '<img src="styles/legend/Bitupit_3.png" /> Bitupitá'
            });
var format_CajueirodaPraia_4 = new ol.format.GeoJSON();
var features_CajueirodaPraia_4 = format_CajueirodaPraia_4.readFeatures(json_CajueirodaPraia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CajueirodaPraia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CajueirodaPraia_4.addFeatures(features_CajueirodaPraia_4);
var lyr_CajueirodaPraia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CajueirodaPraia_4, 
                style: style_CajueirodaPraia_4,
                popuplayertitle: 'Cajueiro da Praia',
                interactive: true,
                title: '<img src="styles/legend/CajueirodaPraia_4.png" /> Cajueiro da Praia'
            });
var format_parnaba_5 = new ol.format.GeoJSON();
var features_parnaba_5 = format_parnaba_5.readFeatures(json_parnaba_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parnaba_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parnaba_5.addFeatures(features_parnaba_5);
var lyr_parnaba_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parnaba_5, 
                style: style_parnaba_5,
                popuplayertitle: 'parnaíba',
                interactive: true,
                title: '<img src="styles/legend/parnaba_5.png" /> parnaíba'
            });
var format_IlhadoCaju_6 = new ol.format.GeoJSON();
var features_IlhadoCaju_6 = format_IlhadoCaju_6.readFeatures(json_IlhadoCaju_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IlhadoCaju_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IlhadoCaju_6.addFeatures(features_IlhadoCaju_6);
var lyr_IlhadoCaju_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IlhadoCaju_6, 
                style: style_IlhadoCaju_6,
                popuplayertitle: 'Ilha do Caju',
                interactive: true,
                title: '<img src="styles/legend/IlhadoCaju_6.png" /> Ilha do Caju'
            });
var format_DelimitaoDasilhas_7 = new ol.format.GeoJSON();
var features_DelimitaoDasilhas_7 = format_DelimitaoDasilhas_7.readFeatures(json_DelimitaoDasilhas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelimitaoDasilhas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaoDasilhas_7.addFeatures(features_DelimitaoDasilhas_7);
var lyr_DelimitaoDasilhas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaoDasilhas_7, 
                style: style_DelimitaoDasilhas_7,
                popuplayertitle: 'Delimitação Das ilhas',
                interactive: true,
                title: '<img src="styles/legend/DelimitaoDasilhas_7.png" /> Delimitação Das ilhas'
            });
var format_IlhadosGuars_8 = new ol.format.GeoJSON();
var features_IlhadosGuars_8 = format_IlhadosGuars_8.readFeatures(json_IlhadosGuars_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IlhadosGuars_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IlhadosGuars_8.addFeatures(features_IlhadosGuars_8);
var lyr_IlhadosGuars_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IlhadosGuars_8, 
                style: style_IlhadosGuars_8,
                popuplayertitle: 'Ilha dos Guarás',
                interactive: true,
                title: '<img src="styles/legend/IlhadosGuars_8.png" /> Ilha dos Guarás'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Fortaleza_1.setVisible(true);lyr_Camocim_2.setVisible(true);lyr_Bitupit_3.setVisible(true);lyr_CajueirodaPraia_4.setVisible(true);lyr_parnaba_5.setVisible(true);lyr_IlhadoCaju_6.setVisible(true);lyr_DelimitaoDasilhas_7.setVisible(true);lyr_IlhadosGuars_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Fortaleza_1,lyr_Camocim_2,lyr_Bitupit_3,lyr_CajueirodaPraia_4,lyr_parnaba_5,lyr_IlhadoCaju_6,lyr_DelimitaoDasilhas_7,lyr_IlhadosGuars_8];
lyr_Fortaleza_1.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_Camocim_2.set('fieldAliases', {'ID0': 'ID0', 'CODIGO_D1': 'CODIGO_D1', 'NOME_DO_2': 'NOME_DO_2', 'MUNICIPI3': 'MUNICIPI3', 'SEDE_MUN4': 'SEDE_MUN4', 'POPULACA5': 'POPULACA5', 'AREA_KM26': 'AREA_KM26', });
lyr_Bitupit_3.set('fieldAliases', {'ID0': 'ID0', 'CODIGO_D1': 'CODIGO_D1', 'NOME_DO_2': 'NOME_DO_2', 'MUNICIPI3': 'MUNICIPI3', 'SEDE_MUN4': 'SEDE_MUN4', 'POPULACA5': 'POPULACA5', 'AREA_KM26': 'AREA_KM26', });
lyr_CajueirodaPraia_4.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_parnaba_5.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_IlhadoCaju_6.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', });
lyr_DelimitaoDasilhas_7.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', });
lyr_IlhadosGuars_8.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', });
lyr_Fortaleza_1.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Camocim_2.set('fieldImages', {'ID0': 'TextEdit', 'CODIGO_D1': 'TextEdit', 'NOME_DO_2': 'TextEdit', 'MUNICIPI3': 'TextEdit', 'SEDE_MUN4': 'TextEdit', 'POPULACA5': 'TextEdit', 'AREA_KM26': 'TextEdit', });
lyr_Bitupit_3.set('fieldImages', {'ID0': 'TextEdit', 'CODIGO_D1': 'TextEdit', 'NOME_DO_2': 'TextEdit', 'MUNICIPI3': 'TextEdit', 'SEDE_MUN4': 'TextEdit', 'POPULACA5': 'TextEdit', 'AREA_KM26': 'TextEdit', });
lyr_CajueirodaPraia_4.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_parnaba_5.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_IlhadoCaju_6.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_DelimitaoDasilhas_7.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_IlhadosGuars_8.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Fortaleza_1.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_Camocim_2.set('fieldLabels', {'ID0': 'no label', 'CODIGO_D1': 'no label', 'NOME_DO_2': 'no label', 'MUNICIPI3': 'no label', 'SEDE_MUN4': 'no label', 'POPULACA5': 'no label', 'AREA_KM26': 'no label', });
lyr_Bitupit_3.set('fieldLabels', {'ID0': 'no label', 'CODIGO_D1': 'no label', 'NOME_DO_2': 'no label', 'MUNICIPI3': 'no label', 'SEDE_MUN4': 'no label', 'POPULACA5': 'no label', 'AREA_KM26': 'no label', });
lyr_CajueirodaPraia_4.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_parnaba_5.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_IlhadoCaju_6.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', });
lyr_DelimitaoDasilhas_7.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', });
lyr_IlhadosGuars_8.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', });
lyr_IlhadosGuars_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});