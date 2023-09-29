/* How I converted the table with data to a js object.
<button id="run">Convert!</button>

$('#run').click( function() {
 var table = $('#students').tableToJSON();
 alert(JSON.stringify(table));  
});*/

var seats = [{
    "title": "Almunge bgf  HV-gården",
    "Kommun": "Uppsala",
    "max_big": "110",
    "max_small": "60"
}, {
    "title": "Altunagården",
    "Kommun": "Enköping",
    "max_big": "150",
    "max_small": "25"
}, {
    "title": "Andersbo",
    "Kommun": "Östhammar",
    "max_big": "70",
    "max_small": "12"
}, {
    "title": "Bagarstugan Samfällighet",
    "Kommun": "Uppsala",
    "max_big": "40",
    "max_small": "35"
}, {
    "title": "Bergsbrunna title",
    "Kommun": "Uppsala",
    "max_big": "80",
    "max_small": "15"
}, {
    "title": "Bjurvalla",
    "Kommun": "Heby",
    "max_big": "100",
    "max_small": "15"
}, {
    "title": "Blå Wingen",
    "Kommun": "Knivsta",
    "max_big": "120",
    "max_small": "70"
}, {
    "title": "Boglösa",
    "Kommun": "Enköping",
    "max_big": "150",
    "max_small": "30"
}, {
    "title": "Brunnagården",
    "Kommun": "Enköping",
    "max_big": "120",
    "max_small": "30"
}, {
    "title": "Bälinge",
    "Kommun": "Uppsala",
    "max_big": "140",
    "max_small": "10"
}, {
    "title": "Börje Idrottsgård",
    "Kommun": "Uppsala",
    "max_big": "150",
    "max_small": "0"
}, {
    "title": "Dalby",
    "Kommun": "Uppsala",
    "max_big": "100",
    "max_small": "10"
}, {
    "title": "Danmark",
    "Kommun": "Uppsala",
    "max_big": "100",
    "max_small": "30"
}, {
    "title": "Dannemora",
    "Kommun": "Östhammar",
    "max_big": "100",
    "max_small": "20"
}, {
    "title": "Drakensalen",
    "Kommun": "Uppsala",
    "max_big": "60",
    "max_small": "36"
}, {
    "title": "Ekeby",
    "Kommun": "Östhammar",
    "max_big": "200",
    "max_small": "30"
}, {
    "title": "Enåker",
    "Kommun": "Heby",
    "max_big": "150",
    "max_small": "15"
}, {
    "title": "Fagerviken",
    "Kommun": "Tierp",
    "max_big": "200",
    "max_small": "35"
}, {
    "title": "Faringe",
    "Kommun": "Uppsala",
    "max_big": "80",
    "max_small": "40"
}, {
    "title": "Frösthult",
    "Kommun": "Enköping",
    "max_big": "100",
    "max_small": "15"
}, {
    "title": "Granhälla",
    "Kommun": "Östhammar",
    "max_big": "100",
    "max_small": "30"
}, {
    "title": "Hagby",
    "Kommun": "Uppsala",
    "max_big": "100",
    "max_small": "50"
}, {
    "title": "Hall 2000",
    "Kommun": "Uppsala",
    "max_big": "400",
    "max_small": "25"
}, {
    "title": "Hjälsta",
    "Kommun": "Enköping",
    "max_big": "150",
    "max_small": "40"
}, {
    "title": "Hållnäs",
    "Kommun": "Tierp",
    "max_big": "160",
    "max_small": "30"
}, {
    "title": "Hårsbäck",
    "Kommun": "Heby",
    "max_big": "70",
    "max_small": "18"
}, {
    "title": "Härnevi",
    "Kommun": "Enköping",
    "max_big": "150",
    "max_small": "0"
}, {
    "title": "Hökhuvud",
    "Kommun": "Östhammar",
    "max_big": "100",
    "max_small": "0"
}, {
    "title": "IK Fyris",
    "Kommun": "Uppsala",
    "max_big": "300",
    "max_small": "80"
}, {
    "title": "Jumkilsgården",
    "Kommun": "Uppsala",
    "max_big": "110",
    "max_small": "12"
}, {
    "title": "Järlåsa",
    "Kommun": "Uppsala",
    "max_big": "200",
    "max_small": "40"
}, {
    "title": "Jönninge",
    "Kommun": "Östhammar",
    "max_big": "40",
    "max_small": "20"
}, {
    "title": "Kelinge",
    "Kommun": "Östhammar",
    "max_big": "70",
    "max_small": "0"
}, {
    "title": "Kinsta skola",
    "Kommun": "Uppsala",
    "max_big": "50",
    "max_small": "10"
}, {
    "title": "Knutbygården",
    "Kommun": "Uppsala",
    "max_big": "150",
    "max_small": "20"
}, {
    "title": "Laggagården",
    "Kommun": "Knivsta",
    "max_big": "80",
    "max_small": "20"
}, {
    "title": "Litslena",
    "Kommun": "Enköping",
    "max_big": "200",
    "max_small": "40"
}, {
    "title": "Läbyvads hembygdsgård",
    "Kommun": "Uppsala",
    "max_big": "80",
    "max_small": "10"
}, {
    "title": "Lötgården",
    "Kommun": "Enköping",
    "max_big": "150",
    "max_small": "22"
}, {
    "title": "Lövstabruks bgf",
    "Kommun": "Tierp",
    "max_big": "100",
    "max_small": "20"
}, {
    "title": "Marma/Mehedeby",
    "Kommun": "Tierp",
    "max_big": "85",
    "max_small": "0"
}, {
    "title": "Morkarla",
    "Kommun": "Östhammar",
    "max_big": "150",
    "max_small": "25"
}, {
    "title": "Mälbygården",
    "Kommun": "Enköping",
    "max_big": "120",
    "max_small": "0"
}, {
    "title": "Norrboda",
    "Kommun": "Östhammar",
    "max_big": "90",
    "max_small": "25"
}, {
    "title": "Norrskedika",
    "Kommun": "Östhammar",
    "max_big": "50",
    "max_small": "0"
}, {
    "title": "Norrögården",
    "Kommun": "Östhammar",
    "max_big": "100",
    "max_small": "15"
}, {
    "title": "PRO Björklinge",
    "Kommun": "Uppsala",
    "max_big": "100",
    "max_small": "30"
}, {
    "title": "Ramhälls title",
    "Kommun": "Östhammar",
    "max_big": "70",
    "max_small": "20"
}, {
    "title": "Ramsta",
    "Kommun": "Uppsala",
    "max_big": "100",
    "max_small": "25"
}, {
    "title": "Rasbokils title",
    "Kommun": "Uppsala",
    "max_big": "100",
    "max_small": "20"
}, {
    "title": "Sanda",
    "Kommun": "Östhammar",
    "max_big": "60",
    "max_small": "20"
}, {
    "title": "Skokloster",
    "Kommun": "Håbo",
    "max_big": "80",
    "max_small": "0"
}, {
    "title": "Skuttunge",
    "Kommun": "Uppsala",
    "max_big": "110",
    "max_small": "50"
}, {
    "title": "Skyttorps",
    "Kommun": "Uppsala",
    "max_big": "100",
    "max_small": "0"
}, {
    "title": "Societetshuset Källör",
    "Kommun": "Östhammar",
    "max_big": "",
    "max_small": ""
}, {
    "title": "Societetshuset Öregrund",
    "Kommun": "Östhammar",
    "max_big": "100",
    "max_small": "20"
}, {
    "title": "Staffansgården",
    "Kommun": "Knivsta",
    "max_big": "60",
    "max_small": "0"
}, {
    "title": "Stavby",
    "Kommun": "Uppsala",
    "max_big": "100",
    "max_small": "30"
}, {
    "title": "Säfsta",
    "Kommun": "Enköping",
    "max_big": "150",
    "max_small": "30"
}, {
    "title": "Söderögården",
    "Kommun": "Östhammar",
    "max_big": "150",
    "max_small": "25"
}, {
    "title": "Södra  Åsunda",
    "Kommun": "Enköping",
    "max_big": "90",
    "max_small": "30"
}, {
    "title": "Tensta",
    "Kommun": "Uppsala",
    "max_big": "150",
    "max_small": "0"
}, {
    "title": "Trögdsgården",
    "Kommun": "Enköping",
    "max_big": "120",
    "max_small": "20"
}, {
    "title": "Tuna",
    "Kommun": "Uppsala",
    "max_big": "260",
    "max_small": "40"
}, {
    "title": "Uppsala näs",
    "Kommun": "Uppsala",
    "max_big": "60",
    "max_small": "0"
}, {
    "title": "Valegården",
    "Kommun": "Uppsala",
    "max_big": "30",
    "max_small": "30"
}, {
    "title": "Vansjö",
    "Kommun": "Heby",
    "max_big": "100",
    "max_small": ""
}, {
    "title": "Vassunda",
    "Kommun": "Knivsta",
    "max_big": "100",
    "max_small": "20"
}, {
    "title": "Vendel",
    "Kommun": "Tierp",
    "max_big": "150",
    "max_small": "20"
}, {
    "title": "Viksta",
    "Kommun": "Uppsala",
    "max_big": "130",
    "max_small": "70"
}, {
    "title": "Wattholma",
    "Kommun": "Uppsala",
    "max_big": "40",
    "max_small": "35"
}, {
    "title": "Åkerby",
    "Kommun": "Uppsala",
    "max_big": "70",
    "max_small": "12"
}, {
    "title": "Åkerlänna",
    "Kommun": "Uppsala",
    "max_big": "220",
    "max_small": "80"
}, {
    "title": "Ålands",
    "Kommun": "Uppsala",
    "max_big": "125",
    "max_small": "30"
}, {
    "title": "Ängsbolaget",
    "Kommun": "Tierp",
    "max_big": "80",
    "max_small": "25"
}, {
    "title": "Ärentuna",
    "Kommun": "Uppsala",
    "max_big": "80",
    "max_small": "25"
}, {
    "title": "Österlövstagården",
    "Kommun": "Tierp",
    "max_big": "220",
    "max_small": "30"
}, {
    "title": "Österunda",
    "Kommun": "Enköping",
    "max_big": "130",
    "max_small": "45"
}, {
    "title": "Östuna",
    "Kommun": "Knivsta",
    "max_big": "100",
    "max_small": "25"
}, {
    "title": "Övergransgården",
    "Kommun": "Håbo",
    "max_big": "100",
    "max_small": "20"
}, {
    "title": "Övre Jumkil",
    "Kommun": "Uppsala",
    "max_big": "60",
    "max_small": "0"
}]

var details = [{
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.8795,
            lng: 18.0484,
        },
        title: 'Almunge bgf  HV-gården',
        address: 'C/O AnnSofie Ahlund',
        postalCode: '74010',
        city: 'Almunge',
        phone: '070-6401771',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/almunge-bgf-hv-garden/',
        email: 'hv-almunge@hotmail.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.83613,
            lng: 16.92640,
        },
        title: 'Altunagården',
        address: 'Altuna Ådalen 6',
        postalCode: '74971',
        city: 'Fjärdhundra',
        phone: '073-6260079',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/altunagarden/',
        email: 'lisa@ekehult.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.29637,
            lng: 17.95778,
        },
        title: 'Andersbo',
        address: 'Kilen 131',
        postalCode: '74892',
        city: 'Österbybruk',
        phone: '073-8028659',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/andersbo/',
        email: 'mo@live.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.81630,
            lng: 17.72008,
        },
        title: 'Bergsbrunna title',
        address: 'Bergsbrunna Villaväg 24',
        postalCode: '75756',
        city: 'Uppsala',
        phone: '070-3501808',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/kamratgarden/',
        email: 'kontakt@bergsbrunnabygdegard.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.1659,
            lng: 17.086,
        },
        title: 'Bjurvalla',
        address: 'Bjurvalla',
        postalCode: '74046',
        city: 'Östervåla',
        phone: '0703489692',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/bjurvalla/',
        email: 'rita.bjurvalla@hotmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.75282,
            lng: 18.03549,
        },
        title: 'Blå Wingen',
        address: 'Vackerberga 35, Husby-Långhundra',
        postalCode: '74195',
        city: 'Knivsta',
        phone: '070-2149245',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/bla-wingen/',
        email: 'ingemar.ovike@telia.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.592,
            lng: 17.2074,
        },
        title: 'Boglösa',
        address: 'Boglösa Kärrby 8',
        postalCode: '74597',
        city: 'Enköping',
        phone: '0171-86090',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/boglosa/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.72126,
            lng: 17.43048,
        },
        title: 'Brunnagården',
        address: 'Kulla, Brunna',
        postalCode: '74962',
        city: 'Örsundsbro',
        phone: '070-5456838',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/brunnagarden/',
        email: 'info@brunnagarden.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.88,
            lng: 17.5325,
        },
        title: 'Börje Idrottsgård',
        address: 'Börje Gränby 43',
        postalCode: '75592',
        city: 'Uppsala',
        phone: '070 5303189',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/borje-idrottsgard/',
        email: 'idrottsgarden@gmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.76183,
            lng: 17.56455,
        },
        title: 'Dalby',
        address: 'Dalby Ekbacken',
        postalCode: '75591',
        city: 'Uppsala',
        phone: '070-2838005',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/dalby/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.83277,
            lng: 17.74292,
        },
        title: 'Danmark',
        address: 'Danmarksby 87',
        postalCode: '75598',
        city: 'Uppsala',
        phone: '076-8030805',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/danmark/',
        email: 'danmarks.bygdegard@telia.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.13768,
            lng: 17.78325,
        },
        title: 'Dannemora',
        address: 'Uddarby',
        postalCode: '74893',
        city: 'Österbybruk',
        phone: '070-5685870',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/dannemora/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.85727,
            lng: 17.64145,
        },
        title: 'Drakensalen',
        address: 'Kungsängsgatan 12',
        postalCode: '75322',
        city: 'Uppsala',
        phone: '018-102370',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/drakensalen/',
        email: 'helene.ohlsson@sv.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.06835,
            lng: 18.19353,
        },
        title: 'Ekeby',
        address: 'Rörby, Eriksberg',
        postalCode: '74792',
        city: 'Alunda',
        phone: '0174-31047',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/ekeby/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.53836,
            lng: 17.74153,
        },
        title: 'Fagerviken',
        address: 'Fagerviken Hamnvägen 10',
        postalCode: '81963',
        city: 'Hållnäs',
        phone: '',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/fagerviken/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.73671,
            lng: 16.94991,
        },
        title: 'Frösthult',
        address: 'Frösthult7',
        postalCode: '74971',
        city: 'Fjärdhundra',
        phone: '070-2656559',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/frosthult/',
        email: 'ulla.lansfors@gmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.68331,
            lng: 17.40538,
        },
        title: 'Hjälsta',
        address: '',
        postalCode: '74962',
        city: 'Örsundsbro',
        phone: '070-8286742',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/hjalsta/',
        email: 'bokning@hjalsta.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.5379,
            lng: 17.9082,
        },
        title: 'Hållnäs',
        address: 'Hjälmunge',
        postalCode: '81964',
        city: 'Hållnäs',
        phone: '073-0554893',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/hallnas/',
        email: 'persson.a.lasse@gmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.8818,
            lng: 16.9018,
        },
        title: 'Hårsbäck',
        address: 'c/o Sör Hårsbäck B Johansson',
        postalCode: '74491',
        city: 'Heby',
        phone: '070-6886073',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/harsback/',
        email: 'harsbacksbyalag@hotmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.72723,
            lng: 17.07518,
        },
        title: 'Härnevi',
        address: 'Härnevi 4',
        postalCode: '74596',
        city: 'Enköping',
        phone: '0171-410244',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/harnevi/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.23998,
            lng: 18.27988,
        },
        title: 'Hökhuvud',
        address: 'Uppskedika 328',
        postalCode: '74292',
        city: 'Östhammar',
        phone: '0173-16046',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/hokhuvud/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.95878,
            lng: 17.40313,
        },
        title: 'Jumkilsgården',
        address: 'Blackstalund 317',
        postalCode: '74386',
        city: 'Bälinge',
        phone: '070-6697423',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/jumkilsgarden/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.89853,
            lng: 17.20638,
        },
        title: 'Järlåsa',
        address: 'titleen',
        postalCode: '74496',
        city: 'Järlåsa',
        phone: '073-8138564',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/jarlasa/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.79607,
            lng: 17.83522,
        },
        title: 'Laggagården',
        address: 'Lagga 215',
        postalCode: '74193',
        city: 'Knivsta',
        phone: '070-9505775',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/laggagarden/',
        email: 'halsosyrran@hotmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.65747,
            lng: 17.25825,
        },
        title: 'Litslena',
        address: 'Litslena-Åby',
        postalCode: '74951',
        city: 'Grillby',
        phone: '070-8993716',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/litslena/',
        email: 'susannbergstrom@yahoo.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.8499,
            lng: 17.5326,
        },
        title: 'Läbyvads hembygdsgård',
        address: 'c/o M Kovaleff, Läbyvadsvägen 33',
        postalCode: '75592',
        city: 'Uppsala',
        phone: '0763901825',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/labyvads-hembygdsgard/',
        email: 'lennart.bernstrom@gmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.57360,
            lng: 17.32280,
        },
        title: 'Lötgården',
        address: 'Löt',
        postalCode: '74951',
        city: 'Grillby',
        phone: '070-8108003',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/lotgarden-2/',
        email: 'info@lotgarden.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.40803,
            lng: 17.87718,
        },
        title: 'Lövstabruks bgf',
        address: 'Stora Gatan 17',
        postalCode: '81966',
        city: 'Lövstabruk',
        phone: '070-0432020',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/lovstabruks-bgf/',
        email: 'hans.wallenberg@gmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.14185,
            lng: 17.90600,
        },
        title: 'Morkarla',
        address: 'c/o Eskilsson, Halvbygda 108',
        postalCode: '74891',
        city: 'Österbybruk',
        phone: '070-2827287',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/morkarla/',
        email: 'birgittaeskilsson@live.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.62613,
            lng: 16.95196,
        },
        title: 'Mälbygården',
        address: 'Tillinge',
        postalCode: '74594',
        city: 'Enköping',
        phone: '0171-448195',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/malbygarden/',
        email: 'solveig_hjalm@hotmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.46543,
            lng: 18.41268,
        },
        title: 'Norrboda',
        address: 'Norrboda 27, Gräsö',
        postalCode: '74297',
        city: 'Gräsö',
        phone: '070-4791150',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/norrboda/',
        email: 'aggi.petersson@gmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.09696,
            lng: 17.94089,
        },
        title: 'Ramhälls title',
        address: 'Ramhäll 106',
        postalCode: '74791',
        city: 'Alunda',
        phone: '073-6169422',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/ramhalls-bygdegard/',
        email: 'ingrid_johannes@hotmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.800638,
            lng: 17.439163,
        },
        title: 'Ramsta',
        address: 'c/o Gunilla Jakobsson-Borg',
        postalCode: '75591',
        city: 'Uppsala',
        phone: '076-0373330',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/ramsta/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.0005956,
            lng: 17.8614176,
        },
        title: 'Rasbokils title',
        address: 'Rasbokils-Tibble, 51',
        postalCode: '75595',
        city: 'Uppsala',
        phone: '076-3510076',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/rasbokils-bygdegard/',
        email: 'rasbokilsbygdegard@gmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.1049,
            lng: 18.4634,
        },
        title: 'Sanda',
        address: 'Sanda 438',
        postalCode: '74295',
        city: 'Hargshamn',
        phone: '070-5445410',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/sanda/',
        email: 'cattisahlinder@hotmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.7065,
            lng: 17.58998,
        },
        title: 'Skokloster',
        address: 'Ugglebovägen 6',
        postalCode: '74696',
        city: 'Skokloster',
        phone: '070-6502934',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/skokloster/',
        email: 'info@skoklosterbygdegard.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.99643,
            lng: 17.48797,
        },
        title: 'Skuttunge',
        address: 'Skuttungeby 260',
        postalCode: '74371',
        city: 'Björklinge',
        phone: '070-2111013',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/skuttunge/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.08670,
            lng: 17.74731,
        },
        title: 'Skyttorps',
        address: 'Knypplavägen 11, Skyttorp',
        postalCode: '74394',
        city: 'Skyttorp',
        phone: '0702397029',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/skyttorps/',
        email: 'mie.andersson@hotmail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.3413,
            lng: 18.4374,
        },
        title: 'Societetshuset Öregrund',
        address: 'Sjötullsgatan 3',
        postalCode: '74242',
        city: 'Öregrund',
        phone: '070-2987018',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/societetshuset-oregrund/',
        email: 'maud.westerberg@oregrund.nu'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.6745244,
            lng: 17.0578966,
        },
        title: 'Säfsta',
        address: 'Enköping Vårfrukyrka-Sävsta 1',
        postalCode: '74595',
        city: 'Enköping',
        phone: '070-5177104',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/safsta-bygdegard/',
        email: 'fia.lindeqvist@telia.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.26173,
            lng: 18.46744,
        },
        title: 'Söderögården',
        address: 'Långalma 515',
        postalCode: '74291',
        city: 'Östhammar',
        phone: '070-6932046',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/soderogarden/',
        email: 'margaretha.mattsson@telia.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.56007,
            lng: 17.01459,
        },
        title: 'Södra  Åsunda',
        address: 'Rävslösa 4',
        postalCode: '74592',
        city: 'Enköping',
        phone: '070-2702815',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/sodra-asunda/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.03657,
            lng: 17.67369,
        },
        title: 'Tensta',
        address: '',
        postalCode: '74393',
        city: 'Vattholma',
        phone: '',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/tensta/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.52294,
            lng: 17.32072,
        },
        title: 'Trögdsgården',
        address: 'Veckholm, Hedsta',
        postalCode: '74599',
        city: 'Enköping',
        phone: '072-393 57 75',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/trogdsgarden/',
        email: 'andershagelin@yahoo.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.00497,
            lng: 18.06539,
        },
        title: 'Tuna',
        address: 'Hammarbacken Tuna',
        postalCode: '74793',
        city: 'Alunda',
        phone: '070-3279542',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/tuna/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.70260,
            lng: 17.71902,
        },
        title: 'Vassunda',
        address: 'Vassunda-Örby 11',
        postalCode: '74191',
        city: 'Knivsta',
        phone: '070-3333454',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/vassunda/',
        email: 'catline@live.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.16472,
            lng: 17.59914,
        },
        title: 'Vendel',
        address: 'Husby 109',
        postalCode: '74895',
        city: 'Örbyhus',
        phone: '070-8322755',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/vendel/',
        email: 'ebba@ahlgront.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.0770834,
            lng: 17.632573999,
        },
        title: 'Viksta',
        address: 'c/o Eva Larsson, Risby 71',
        postalCode: '74373',
        city: 'Björklinge',
        phone: '070-6696596',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/viksta/',
        email: 'eva.larsson.6211@telia.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.0314,
            lng: 17.3602,
        },
        title: 'Åkerlänna',
        address: 'Bälinge-Berg 117',
        postalCode: '74371',
        city: 'Björklinge',
        phone: '076-8619941',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/akerlanna/',
        email: 'eandersson@mail.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.8736,
            lng: 17.2901,
        },
        title: 'Ålands',
        address: 'Ålands Bgd',
        postalCode: '74020',
        city: 'Vänge',
        phone: '070-4506734',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/alands/',
        email: 'gunilla.harbom@telia.com'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.95517,
            lng: 17.60338,
        },
        title: 'Ärentuna',
        address: 'Ärentuna 24',
        postalCode: '74391',
        city: 'Storvreta',
        phone: '018-367144',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/arentuna/',
        email: 'lillan1986@spray.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 60.41029,
            lng: 17.75966,
        },
        title: 'Österlövstagården',
        address: 'Åkerby 238',
        postalCode: '81961',
        city: 'Skärplinge',
        phone: '072-2323702',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/osterlovstagarden/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.81404,
            lng: 17.10387,
        },
        title: 'Österunda',
        address: 'Brunnsta',
        postalCode: '74972',
        city: 'Fjärdhundra',
        phone: '070-5127025',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/osterunda/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.76459,
            lng: 17.88007,
        },
        title: 'Östuna',
        address: '',
        postalCode: '74194',
        city: 'Knivsta',
        phone: '018-387256',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/ostuna/',
        email: ''
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.62976,
            lng: 17.49251,
        },
        title: 'Övergransgården',
        address: 'Övergran',
        postalCode: '74693',
        city: 'Bålsta',
        phone: '070-5458181',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/overgransgarden/',
        email: 'rubbestad@live.se'
    },
    {
        icon: 'https://bygdegardarna.se/wp-content/themes/bygdegardarna/dist/images/icons/marker_2f9e8f70.svg',
        position: {
            lat: 59.99437,
            lng: 17.23860,
        },
        title: 'Övre Jumkil',
        address: 'Stenforsbacka',
        postalCode: '74497',
        city: 'Järlåsa',
        phone: '070-3930212',
        permalink: 'https://bygdegardarna.se/hitta-bygdegard/ovre-jumkil/',
        email: 'arguz@telia.com'
    },
];



var complement = [
    {
        "title": "Bagarstugan Samfällighet",
        "Kommun": "Uppsala",
        "max_big": "40",
        "max_small": "35",
        "position": {lat: 60.019684, lng:17.731057}
    },
    {
        "title": "Bälinge",
        "Kommun": "Uppsala",
        "max_big": "140",
        "max_small": "10",
        "position": {lat: 59.946912, lng:17.542795}
    },
    {
        "title": "Enåker",
        "Kommun": "Heby",
        "max_big": "150",
        "max_small": "15",
        "position": {lat: 60.027493, lng:16.813215}
    },
    {
        "title": "Faringe",
        "Kommun": "Uppsala",
        "max_big": "80",
        "max_small": "40",
        "position": {lat: 59.981788, lng:18.171227}
    },
    {
        "title": "Granhälla",
        "Kommun": "Östhammar",
        "max_big": "100",
        "max_small": "30"
    },
    {
        "title": "Hagby",
        "Kommun": "Uppsala",
        "max_big": "100",
        "max_small": "50",
        "position": {lat: 59.801324, lng:17.376979}
    },
    {
        "title": "Hall 2000",
        "Kommun": "Uppsala",
        "max_big": "400",
        "max_small": "25",
        "position": {lat: 59.946312, lng:17.876904}
    },
    {	//OBS! VERKAR INTE FINNAS!
        "title": "IK Fyris",
        "Kommun": "Uppsala",
        "max_big": "300",
        "max_small": "80"
    },
    {
        "title": "Jönninge",
        "Kommun": "Östhammar",
        "max_big": "40",
        "max_small": "20"
    },
    {
        "title": "Kelinge",
        "Kommun": "Östhammar",
        "max_big": "70",
        "max_small": "0"
    },
    {
        "title": "Kinnsta skola",
        "Kommun": "Uppsala",
        "max_big": "50",
        "max_small": "10",
        "position": {lat: 59.843117, lng:17.977145}
    },
    {
        "title": "Knutbygården",
        "Kommun": "Uppsala",
        "max_big": "150",
        "max_small": "20",
        "position": {lat: 59.903062, lng:18.253534}
    },
    {
        "title": "Marma/Mehedeby",
        "Kommun": "Tierp",
        "max_big": "85",
        "max_small": "0"
    },
    {
        "title": "Norrskedika",
        "Kommun": "Östhammar",
        "max_big": "50",
        "max_small": "0"
    },
    {
        "title": "Norrögården",
        "Kommun": "Östhammar",
        "max_big": "100",
        "max_small": "15"
    },
    {
        "title": "PRO Björklinge",
        "Kommun": "Uppsala",
        "max_big": "100",
        "max_small": "30",
        "position": {lat: 60.031365, lng:17.551598}
    },
    {
        "title": "Societetshuset Källör",
        "Kommun": "Östhammar",
        "max_big": "",
        "max_small": ""
    },
    {
        "title": "Staffansgården",
        "Kommun": "Knivsta",
        "max_big": "60",
        "max_small": "0",
        "position": {lat: 59.728077, lng:17.794612}
    },
    {
        "title": "Stavby",
        "Kommun": "Uppsala",
        "max_big": "100",
        "max_small": "30",
        "position": {lat: 60.010056, lng:17.964809}
    },
    {
        "title": "Uppsala näs",
        "Kommun": "Uppsala",
        "max_big": "60",
        "max_small": "0",
        "position": {lat: 59.794295, lng:17.557623}
    },
    {
        "title": "Valegården",
        "Kommun": "Uppsala",
        "max_big": "30",
        "max_small": "30",
        "position": {lat: 59.855703, lng:17.653711}
    },
    {
        "title": "Vansjö",
        "Kommun": "Heby",
        "max_big": "100",
        "max_small": "",
        "position": {lat: 59.969976, lng:16.970134}
    },
    {
        "title": "Wattholma", //OBS! SAMMA SOM BAGARSTUGAN
        "Kommun": "Uppsala",
        "max_big": "40",
        "max_small": "35"
    },
    {
        "title": "Åkerby",
        "Kommun": "Uppsala",
        "max_big": "70",
        "max_small": "12",
        "position": {lat: 59.922513, lng:17.496449}
    },
    {
        "title": "Ängsbolaget",
        "Kommun": "Tierp",
        "max_big": "80",
        "max_small": "25"
    }
]