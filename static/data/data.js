// this is how data is stored in our main data store
var day = {
    "day": "2020-03-10",
    "summary": {
        "total": 47,
        "confirmedCasesIndian": 31,
        "confirmedCasesForeign": 16,
        "discharged": 0,
        "deaths": 0,
        "confirmedButLocationUnidentified": 0
    },
    "regional": [
        {
            "loc": "Delhi",
            "confirmedCasesIndian": 4,
            "confirmedCasesForeign": 0,
            "discharged": 0,
            "deaths": 0,
            "totalConfirmed": 4
        },
        {
            "loc": "Haryana",
            "confirmedCasesIndian": 0,
            "confirmedCasesForeign": 14,
            "discharged": 0,
            "deaths": 0,
            "totalConfirmed": 14
        },
        {
            "loc": "Karnataka",
            "confirmedCasesIndian": 1,
            "confirmedCasesForeign": 0,
            "discharged": 0,
            "deaths": 0,
            "totalConfirmed": 1
        },
        {
            "loc": "Kerala",
            "confirmedCasesIndian": 9,
            "confirmedCasesForeign": 0,
            "discharged": 0,
            "deaths": 0,
            "totalConfirmed": 9
        },
        {
            "loc": "Maharashtra",
            "confirmedCasesIndian": 2,
            "confirmedCasesForeign": 0,
            "discharged": 0,
            "deaths": 0,
            "totalConfirmed": 2
        },
        {
            "loc": "Punjab",
            "confirmedCasesIndian": 1,
            "confirmedCasesForeign": 0,
            "discharged": 0,
            "deaths": 0,
            "totalConfirmed": 1
        },
        {
            "loc": "Rajasthan",
            "confirmedCasesIndian": 0,
            "confirmedCasesForeign": 2,
            "discharged": 0,
            "deaths": 0,
            "totalConfirmed": 2
        },
        {
            "loc": "Tamil Nadu",
            "confirmedCasesIndian": 1,
            "confirmedCasesForeign": 0,
            "discharged": 0,
            "deaths": 0,
            "totalConfirmed": 1
        },
        {
            "loc": "Telengana",
            "confirmedCasesIndian": 1,
            "confirmedCasesForeign": 0,
            "discharged": 0,
            "deaths": 0,
            "totalConfirmed": 1
        },
        {
            "loc": "Jammu and Kashmir",
            "confirmedCasesIndian": 1,
            "confirmedCasesForeign": 0,
            "discharged": 0,
            "deaths": 0,
            "totalConfirmed": 1
        },
        {
            "loc": "Ladakh",
            "confirmedCasesIndian": 2,
            "confirmedCasesForeign": 0,
            "discharged": 0,
            "deaths": 0,
            "totalConfirmed": 2
        },
        {
            "loc": "Uttar Pradesh",
            "confirmedCasesIndian": 9,
            "confirmedCasesForeign": 0,
            "discharged": 0,
            "deaths": 0,
            "totalConfirmed": 9
        }
    ]
}
var response = {
    'day': '2021-08-15',
    'summary': { 'total': 32192576, 'confirmedCasesIndian': 32192528, 'confirmedCasesForeign': 48, 'discharged': 31376015, 'deaths': 431225, 'confirmedButLocationUnidentified': 0 },
    'regional': [{ 'loc': 'Andaman and Nicobar Islands', 'confirmedCasesIndian': 7548, 'confirmedCasesForeign': 0, 'discharged': 7417, 'deaths': 129, 'totalConfirmed': 7548 }, { 'loc': 'Andhra Pradesh', 'confirmedCasesIndian': 1992191, 'confirmedCasesForeign': 0, 'discharged': 1960350, 'deaths': 13631, 'totalConfirmed': 1992191 }, { 'loc': 'Arunachal Pradesh', 'confirmedCasesIndian': 51300, 'confirmedCasesForeign': 0, 'discharged': 48921, 'deaths': 252, 'totalConfirmed': 51300 }, { 'loc': 'Assam', 'confirmedCasesIndian': 579488, 'confirmedCasesForeign': 0, 'discharged': 564230, 'deaths': 5482, 'totalConfirmed': 579488 }, { 'loc': 'Bihar', 'confirmedCasesIndian': 725455, 'confirmedCasesForeign': 0, 'discharged': 715555, 'deaths': 9649, 'totalConfirmed': 725455 }, { 'loc': 'Chandigarh', 'confirmedCasesIndian': 62028, 'confirmedCasesForeign': 0, 'discharged': 61173, 'deaths': 811, 'totalConfirmed': 62028 }, { 'loc': 'Chhattisgarh', 'confirmedCasesIndian': 1003697, 'confirmedCasesForeign': 0, 'discharged': 988790, 'deaths': 13546, 'totalConfirmed': 1003697 }, {
        'loc':
            'Dadra and Nagar Haveli and Daman and Diu', 'confirmedCasesIndian': 10655, 'confirmedCasesForeign': 0, 'discharged': 10648, 'deaths': 4, 'totalConfirmed': 10655
    }, {
        'loc': 'Delhi',
        'confirmedCasesIndian': 1437037, 'confirmedCasesForeign': 1, 'discharged': 1411491, 'deaths': 25069, 'totalConfirmed': 1437038
    }, { 'loc': 'Goa', 'confirmedCasesIndian': 172430, 'confirmedCasesForeign': 1, 'discharged': 168338, 'deaths': 3168, 'totalConfirmed': 172431 }, { 'loc': 'Gujarat', 'confirmedCasesIndian': 825165, 'confirmedCasesForeign': 1, 'discharged': 814903, 'deaths': 10078, 'totalConfirmed': 825166 }, { 'loc': 'Haryana', 'confirmedCasesIndian': 770172, 'confirmedCasesForeign': 14, 'discharged': 759875, 'deaths': 9657, 'totalConfirmed': 770186 }, { 'loc': 'Himachal Pradesh', 'confirmedCasesIndian': 209961, 'confirmedCasesForeign': 0, 'discharged': 203581, 'deaths': 3545, 'totalConfirmed': 209961 }, { 'loc': 'Jammu and Kashmir', 'confirmedCasesIndian': 323325, 'confirmedCasesForeign': 0, 'discharged': 317627, 'deaths': 4395, 'totalConfirmed': 323325 }, { 'loc': 'Jharkhand', 'confirmedCasesIndian': 347558, 'confirmedCasesForeign': 0, 'discharged': 342210, 'deaths': 5131, 'totalConfirmed': 347558 }, { 'loc': 'Karnataka', 'confirmedCasesIndian': 2928033, 'confirmedCasesForeign': 0, 'discharged': 2868351, 'deaths': 36958, 'totalConfirmed': 2928033 }, {
        'loc':
            'Kerala', 'confirmedCasesIndian': 3671533, 'confirmedCasesForeign': 8, 'discharged': 3472278, 'deaths': 18499, 'totalConfirmed': 3671541
    }, {
        'loc': 'Ladakh', 'confirmedCasesIndian': 20445, 'confirmedCasesForeign': 0, 'discharged': 20158, 'deaths': 207,
        'totalConfirmed': 20445
    }, { 'loc': 'Lakshadweep', 'confirmedCasesIndian': 10285, 'confirmedCasesForeign': 0, 'discharged': 10193, 'deaths': 51, 'totalConfirmed': 10285 }, {
        'loc': 'Madhya Pradesh', 'confirmedCasesIndian': 792023, 'confirmedCasesForeign':
            0, 'discharged': 781398, 'deaths': 10514, 'totalConfirmed': 792023
    }, { 'loc': 'Maharashtra', 'confirmedCasesIndian': 6387860, 'confirmedCasesForeign': 3, 'discharged': 6186223, 'deaths': 134909, 'totalConfirmed': 6387863 }, { 'loc': 'Manipur', 'confirmedCasesIndian': 107668, 'confirmedCasesForeign': 0, 'discharged': 99440, 'deaths': 1700, 'totalConfirmed': 107668 }, { 'loc': 'Meghalaya', 'confirmedCasesIndian': 71388, 'confirmedCasesForeign': 0, 'discharged': 66237, 'deaths': 1220, 'totalConfirmed': 71388 }, { 'loc': 'Mizoram', 'confirmedCasesIndian': 48462, 'confirmedCasesForeign': 0, 'discharged': 37626, 'deaths': 180, 'totalConfirmed': 48462 }, { 'loc': 'Nagaland', 'confirmedCasesIndian': 29097, 'confirmedCasesForeign': 0, 'discharged': 27222, 'deaths': 597, 'totalConfirmed': 29097 }, { 'loc': 'Odisha', 'confirmedCasesIndian': 993507, 'confirmedCasesForeign': 0, 'discharged': 977197, 'deaths': 6823, 'totalConfirmed': 993507 }, { 'loc': 'Puducherry', 'confirmedCasesIndian': 122203, 'confirmedCasesForeign': 0, 'discharged': 119463, 'deaths': 1804, 'totalConfirmed': 122203 }, { 'loc': 'Punjab', 'confirmedCasesIndian': 599896, 'confirmedCasesForeign': 0, 'discharged': 582984, 'deaths': 16340, 'totalConfirmed': 599896 }, { 'loc': 'Rajasthan', 'confirmedCasesIndian': 953923, 'confirmedCasesForeign': 2, 'discharged': 944763, 'deaths': 8954, 'totalConfirmed': 953925 }, { 'loc': 'Sikkim', 'confirmedCasesIndian': 28554, 'confirmedCasesForeign': 0, 'discharged': 25937, 'deaths': 361, 'totalConfirmed': 28554 }, { 'loc': 'Tamil Nadu', 'confirmedCasesIndian': 2586879, 'confirmedCasesForeign': 6, 'discharged': 2531962, 'deaths': 34496, 'totalConfirmed': 2586885 }, { 'loc': 'Telangana', 'confirmedCasesIndian': 652135, 'confirmedCasesForeign': 0, 'discharged': 640688, 'deaths': 3841, 'totalConfirmed': 652135 }, { 'loc': 'Tripura', 'confirmedCasesIndian': 81259, 'confirmedCasesForeign': 0, 'discharged': 78769, 'deaths': 780, 'totalConfirmed': 81259 }, { 'loc': 'Uttarakhand', 'confirmedCasesIndian': 342571, 'confirmedCasesForeign': 1, 'discharged': 334807, 'deaths': 7370, 'totalConfirmed': 342572 }, {
        'loc': 'Uttar Pradesh', 'confirmedCasesIndian':
            1708917, 'confirmedCasesForeign': 1, 'discharged': 1685689, 'deaths': 22783, 'totalConfirmed': 1708918
    }, { 'loc': 'West Bengal', 'confirmedCasesIndian': 1537890, 'confirmedCasesForeign': 0, 'discharged': 1509521, 'deaths': 18291, 'totalConfirmed': 1537890 }]
}

var canvas = {"type": "line",
"data": {
  "labels": [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug"
  ],
  "datasets": [
    {
      "label": "Earnings",
      "fill": true,
      "data": [
        "0",
        "10000",
        "5000",
        "15000",
        "10000",
        "20000",
        "15000",
        "25000"
      ],
      "backgroundColor": "rgba(78, 115, 223, 0.05)",
      "borderColor": "rgba(78, 115, 223, 1)"
    }
  ]
},
"options": {
  "maintainAspectRatio": false,
  "legend": {
    "display": false,
    "labels": {
      "fontStyle": "normal"
    }
  },
  "title": {
    "fontStyle": "normal"
  },
  "scales": {
    "xAxes": [
      {
        "gridLines": {
          "color": "rgb(234, 236, 244)",
          "zeroLineColor": "rgb(234, 236, 244)",
          "drawBorder": false,
          "drawTicks": false,
          "borderDash": [
            "2"
          ],
          "zeroLineBorderDash": [
            "2"
          ],
          "drawOnChartArea": false
        },
        "ticks": {
          "fontColor": "#858796",
          "padding": 20
        }
      }
    ],
    "yAxes": [
      {
        "gridLines": {
          "color": "rgb(234, 236, 244)",
          "zeroLineColor": "rgb(234, 236, 244)",
          "drawBorder": false,
          "drawTicks": false,
          "borderDash": [
            "2"
          ],
          "zeroLineBorderDash": [
            "2"
          ]
        },
        "ticks": {
          "fontColor": "#858796",
          "padding": 20
        }
      }
    ]
  }
}
}