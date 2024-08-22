var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_NamaKecamatan_1 = new ol.format.GeoJSON();
var features_NamaKecamatan_1 = format_NamaKecamatan_1.readFeatures(json_NamaKecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NamaKecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NamaKecamatan_1.addFeatures(features_NamaKecamatan_1);
var lyr_NamaKecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NamaKecamatan_1, 
                style: style_NamaKecamatan_1,
                popuplayertitle: "Nama Kecamatan",
                interactive: true,
    title: 'Nama Kecamatan<br />\
    <img src="styles/legend/NamaKecamatan_1_0.png" /> Andir<br />\
    <img src="styles/legend/NamaKecamatan_1_1.png" /> Antapani<br />\
    <img src="styles/legend/NamaKecamatan_1_2.png" /> Arcamanik<br />\
    <img src="styles/legend/NamaKecamatan_1_3.png" /> Astana Anyar<br />\
    <img src="styles/legend/NamaKecamatan_1_4.png" /> Babakan Ciparay<br />\
    <img src="styles/legend/NamaKecamatan_1_5.png" /> Bandung Kidul<br />\
    <img src="styles/legend/NamaKecamatan_1_6.png" /> Bandung Kulon<br />\
    <img src="styles/legend/NamaKecamatan_1_7.png" /> Bandung Wetan<br />\
    <img src="styles/legend/NamaKecamatan_1_8.png" /> Batununggal<br />\
    <img src="styles/legend/NamaKecamatan_1_9.png" /> Bojong Soang<br />\
    <img src="styles/legend/NamaKecamatan_1_10.png" /> Bojongloa Kaler<br />\
    <img src="styles/legend/NamaKecamatan_1_11.png" /> Bojongloa Kidul<br />\
    <img src="styles/legend/NamaKecamatan_1_12.png" /> Buahbatu<br />\
    <img src="styles/legend/NamaKecamatan_1_13.png" /> Cibeunying Kaler<br />\
    <img src="styles/legend/NamaKecamatan_1_14.png" /> Cibeunying Kidul<br />\
    <img src="styles/legend/NamaKecamatan_1_15.png" /> Cibiru<br />\
    <img src="styles/legend/NamaKecamatan_1_16.png" /> Cicendo<br />\
    <img src="styles/legend/NamaKecamatan_1_17.png" /> Cidadap<br />\
    <img src="styles/legend/NamaKecamatan_1_18.png" /> Cilengkrang<br />\
    <img src="styles/legend/NamaKecamatan_1_19.png" /> Cileunyi<br />\
    <img src="styles/legend/NamaKecamatan_1_20.png" /> Cimahi Selatan<br />\
    <img src="styles/legend/NamaKecamatan_1_21.png" /> Cimahi Tengah<br />\
    <img src="styles/legend/NamaKecamatan_1_22.png" /> Cimahi Utara<br />\
    <img src="styles/legend/NamaKecamatan_1_23.png" /> Cimenyan<br />\
    <img src="styles/legend/NamaKecamatan_1_24.png" /> Cinambo<br />\
    <img src="styles/legend/NamaKecamatan_1_25.png" /> Coblong<br />\
    <img src="styles/legend/NamaKecamatan_1_26.png" /> Dayeuh Kolot<br />\
    <img src="styles/legend/NamaKecamatan_1_27.png" /> Gedebage<br />\
    <img src="styles/legend/NamaKecamatan_1_28.png" /> Kiaracondong<br />\
    <img src="styles/legend/NamaKecamatan_1_29.png" /> Lembang<br />\
    <img src="styles/legend/NamaKecamatan_1_30.png" /> Lengkong<br />\
    <img src="styles/legend/NamaKecamatan_1_31.png" /> Mandalajati<br />\
    <img src="styles/legend/NamaKecamatan_1_32.png" /> Margaasih<br />\
    <img src="styles/legend/NamaKecamatan_1_33.png" /> Margahayu<br />\
    <img src="styles/legend/NamaKecamatan_1_34.png" /> Panyileukan<br />\
    <img src="styles/legend/NamaKecamatan_1_35.png" /> Parongpong<br />\
    <img src="styles/legend/NamaKecamatan_1_36.png" /> Rancasari<br />\
    <img src="styles/legend/NamaKecamatan_1_37.png" /> Regol<br />\
    <img src="styles/legend/NamaKecamatan_1_38.png" /> Sukajadi<br />\
    <img src="styles/legend/NamaKecamatan_1_39.png" /> Sukasari<br />\
    <img src="styles/legend/NamaKecamatan_1_40.png" /> Sumur Bandung<br />\
    <img src="styles/legend/NamaKecamatan_1_41.png" /> Ujungberung<br />\
    <img src="styles/legend/NamaKecamatan_1_42.png" /> <br />'
        });
var format_Museum_2 = new ol.format.GeoJSON();
var features_Museum_2 = format_Museum_2.readFeatures(json_Museum_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Museum_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Museum_2.addFeatures(features_Museum_2);
var lyr_Museum_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Museum_2, 
                style: style_Museum_2,
                popuplayertitle: "Museum",
                interactive: true,
                title: '<img src="styles/legend/Museum_2.png" /> Museum'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_NamaKecamatan_1.setVisible(true);lyr_Museum_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_NamaKecamatan_1,lyr_Museum_2];
lyr_NamaKecamatan_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Museum_2.set('fieldAliases', {'Nama Tempat': 'Nama Tempat', 'x': 'x', 'y': 'y', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', });
lyr_NamaKecamatan_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Museum_2.set('fieldImages', {'Nama Tempat': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', });
lyr_NamaKecamatan_1.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'no label', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Museum_2.set('fieldLabels', {'Nama Tempat': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', });
lyr_Museum_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});