/**
 * Function that returns the coordinates of the different classes & 
 * points of interest on the 8th floor of the Hall building
 * @param {*} floorNumber 
 */
export function HallXCoordinates (floorNumber) {
    const rooms = {
        "elevator": {
            x: "361",
            y: "365",
            nearestPoint: {
                x: "362",
                y: "415"
            }
        },
        "exit": {
            x: "555",
            y: "70",
            nearestPoint: {
                x: "555",
                y: "120"
            }
        },
        "H801": {
            x: "195",
            y: "175",
            nearestPoint: {
                x: "195",
                y: "217"
            }
        },
        "H803": {
            x: "281",
            y: "155",
            nearestPoint: {
                x: "281",
                y: "217"
            }
        },
        "H805": {
            x: "385",
            y: "155",
            nearestPoint: {
                x: "385",
                y: "217"
            }
        },
        "women_washroom": {
            x: "385",
            y: "267",
            nearestPoint: {
                x: "385",
                y: "217"
            }
        },
        "H807": {
            x: "471",
            y: "155",
            nearestPoint: {
                x: "472",
                y: "217"
            }
        },
        "checkpoint1": {
            x: "",
            y: "",
            nearestPoint: {
                x: "550",
                y: "217"
            }
        },
        "H806": {
            x: "493",
            y: "314",
            nearestPoint: {
                x: "553",
                y: "309"
            }
        },
        "H811": {
            x: "654",
            y: "155",
            nearestPoint: {
                x: "654",
                y: "216"
            }
        },
        "men_washroom": {
            x: "654",
            y: "256",
            nearestPoint: {
                x: "654",
                y: "216"
            }
        },
        "H813": {
            x: "736",
            y: "155",
            nearestPoint: {
                x: "736",
                y: "216"
            }
        },
        "H815": {
            x: "840",
            y: "155",
            nearestPoint: {
                x: "840",
                y: "216"
            }
        },
        "H817": {
            x: "891",
            y: "169",
            nearestPoint: {
                x: "840",
                y: "216"
            }
        },
        "H819": {
            x: "894",
            y: "216",
            nearestPoint: {
                x: "840",
                y: "216"
            }
        },
        "H820": {
            x: "627",
            y: "468",
            nearestPoint: {
                x: "840",
                y: "468"
            }
        },
        "H822": {
            x: "804",
            y: "617",
            nearestPoint: {
                x: "840",
                y: "617"
            }
        },
        "H821": {
            x: "899",
            y: "329",
            nearestPoint: {
                x: "848",
                y: "329"
            }
        },
        "H823": {
            x: "899",
            y: "427",
            nearestPoint: {
                x: "848",
                y: "427"
            }
        },
        "H825": {
            x: "899",
            y: "511",
            nearestPoint: {
                x: "850",
                y: "511"
            }
        },
        "H827": {
            x: "899",
            y: "606",
            nearestPoint: {
                x: "850",
                y: "606"
            }
        },
        "H828": {
            x: "899",
            y: "692",
            nearestPoint: {
                x: "850",
                y: "692"
            }
        },
        "H829": {
            x: "901",
            y: "799",
            nearestPoint: {
                x: "850",
                y: "802"
            }
        },
        "H831": {
            x: "891",
            y: "844",
            nearestPoint: {
                x: "850",
                y: "802"
            }
        },
        "H833": {
            x: "833",
            y: "844",
            nearestPoint: {
                x: "850",
                y: "802"
            }
        },
        "H835": {
            x: "737",
            y: "844",
            nearestPoint: {
                x: "737",
                y: "802"
            }
        },
        "H837": {
            x: "648",
            y: "866",
            nearestPoint: {
                x: "646",
                y: "802"
            }
        },
        "H832": {
            x: "648",
            y: "717",
            nearestPoint: {
                x: "648",
                y: "802"
            }
        },
        "H838": {
            x: "627",
            y: "717",
            nearestPoint: {
                x: "646",
                y: "799"
            }
        },
        "checkpoint2": {
            x: "",
            y: "",
            nearestPoint: {
                x: "557",
                y: "804"
            }
        },
        "H841": {
            x: "472",
            y: "845",
            nearestPoint: {
                x: "472",
                y: "802"
            }
        },
        "H843": {
            x: "380",
            y: "845",
            nearestPoint: {
                x: "380",
                y: "802"
            }
        },
        "H845": {
            x: "287",
            y: "845",
            nearestPoint: {
                x: "287",
                y: "802"
            }
        },
        "H847": {
            x: "197",
            y: "845",
            nearestPoint: {
                x: "200",
                y: "802"
            }
        },
        "H849": {
            x: "128",
            y: "845",
            nearestPoint: {
                x: "183",
                y: "802"
            }
        },
        "H851": {
            x: "77",
            y: "808",
            nearestPoint: {
                x: "183",
                y: "802"
            }
        },
        "H853": {
            x: "127",
            y: "691",
            nearestPoint: {
                x: "183",
                y: "691"
            }
        },
        "H854": {
            x: "227",
            y: "598",
            nearestPoint: {
                x: "183",
                y: "598"
            }
        },
        "H855": {
            x: "127",
            y: "601",
            nearestPoint: {
                x: "183",
                y: "601"
            }
        },
        "H857": {
            x: "127",
            y: "512",
            nearestPoint: {
                x: "183",
                y: "512"
            }
        },
        "H859": {
            x: "127",
            y: "426",
            nearestPoint: {
                x: "183",
                y: "415"
            }
        },
        "checkpoint3": {
            x: "",
            y: "",
            nearestPoint: {
                x: "183",
                y: "410"
            }
        },
        "H860": {
            x: "241",
            y: "447",
            nearestPoint: {
                x: "274",
                y: "399"
            }
        },
        "H861": {
            x: "127",
            y: "332",
            nearestPoint: {
                x: "183",
                y: "330"
            }
        },
        "H862": {
            x: "379",
            y: "445",
            nearestPoint: {
                x: "381",
                y: "399"
            }
        },
        "H863": {
            x: "127",
            y: "244",
            nearestPoint: {
                x: "183",
                y: "217"
            }
        },
        "H867": {
            x: "122",
            y: "128",
            nearestPoint: {
                x: "180",
                y: "215"
            }
        },
        "checkpoint4": {
            x: "",
            y: "",
            nearestPoint: {
                x: "553",
                y: "401"
            }
        },
        "water_foutain_S": {
            x: "622",
            y: "252",
            nearestPoint: {
                x: "622",
                y: "216"
            }
        },
        "water_foutain_N": {
            x: "784",
            y: "760",
            nearestPoint: {
                x: "784",
                y: "802"
            }
        },
        "stairs_NE": {
            x: "306",
            y: "757",
            nearestPoint: {
                x: "306",
                y: "802"
            }
        },
        "stairs_NW": {
            x: "722",
            y: "757",
            nearestPoint: {
                x: "722",
                y: "802"
            }
        },
        "stairs_SE": {
            x: "269",
            y: "362",
            nearestPoint: {
                x: "269",
                y: "410"
            }
        },
        "stairs_SW": {
            x: "722",
            y: "258",
            nearestPoint: {
                x: "722",
                y: "216"
            }
        },
        "escalator": {
            x: "486",
            y: "528",
            nearestPoint: {
                x: "555",
                y: "528"
            }
        },

    };
    return rooms;
}



