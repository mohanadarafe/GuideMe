export function HallXCoordinates () {
    var rooms = [];
    rooms["H803"] = {
        x: "281",
        y: "155",
        nearestPoint: {
            x: "279",
            y: "217"
        },
        next: ["H805"],
        prev: ["H863"]
    }
    rooms["H805"] = {
        x: "385",
        y: "155",
        nearestPoint: {
            x: "387",
            y: "216"
        },
        next: ["H807"],
        prev: ["H803"]
    }
    rooms["H806"] = {
        x: "493",
        y: "357",
        nearestPoint: {
            x: "553",
            y: "399"
        },
        next: ["H807"],
        prev: ["H832"]
    },
    rooms["H807"] = {
        x: "471",
        y: "155",
        nearestPoint: {
            x: "550",
            y: "216"
        },
        next: ["H811", "H820"],
        prev: ["H805"]
    },
    rooms["H811"] = {
        x: "654",
        y: "155",
        nearestPoint: {
            x: "654",
            y: "216"
        },
        next: ["H813"],
        prev: ["H807"]
    },
    rooms["H813"] = {
        x: "736",
        y: "155",
        nearestPoint: {
            x: "734",
            y: "216"
        },
        next: ["H815"],
        prev: ["H811"]
    },
    rooms["H815"] = {
        x: "820",
        y: "155",
        nearestPoint: {
            x: "845",
            y: "216"
        },
        next: ["H821"],
        prev: ["H813"]
    },
    rooms["H820"] = {
        x: "627",
        y: "468",
        nearestPoint: {
            x: "553",
            y: "399"
        },
        next: ["H862", "H832"],
        prev: ["H807"]
    },
    rooms["H821"] = {
        x: "899",
        y: "329",
        nearestPoint: {
            x: "848",
            y: "329"
        },
        next: ["H823"],
        prev: ["H815"]
    },
    rooms["H823"] = {
        x: "899",
        y: "427",
        nearestPoint: {
            x: "848",
            y: "424"
        },
        next: ["H825"],
        prev: ["H821"]
    },
    rooms["H825"] = {
        x: "899",
        y: "509",
        nearestPoint: {
            x: "850",
            y: "511"
        },
        next: ["H829"],
        prev: ["H823"]
    },
    rooms["H829"] = {
        x: "901",
        y: "799",
        nearestPoint: {
            x: "850",
            y: "802"
        },
        next: ["H851"],
        prev: ["H825"]
    },
    rooms["H832"] = {
        x: "627",
        y: "717",
        nearestPoint: {
            x: "559",
            y: "716"
        },
        next: ["H838"],
        prev: ["H820"]
    },
    rooms["H838"] = {
        x: "627",
        y: "717",
        nearestPoint: {
            x: "559",
            y: "799"
        },
        next: ["H851"],
        prev: ["H820", "H829"]
    },
    rooms["H851"] = {
        x: "134",
        y: "799",
        nearestPoint: {
            x: "183",
            y: "796"
        },
        next: ["H853"],
        prev: ["H829"]
    },
    rooms["H853"] = {
        x: "127",
        y: "691",
        nearestPoint: {
            x: "183",
            y: "691"
        },
        next: ["H855"],
        prev: ["H851"]
    },
    rooms["H855"] = {
        x: "127",
        y: "601",
        nearestPoint: {
            x: "183",
            y: "601"
        },
        next: ["H857"],
        prev: ["H853"]
    },
    rooms["H857"] = {
        x: "127",
        y: "512",
        nearestPoint: {
            x: "183",
            y: "512"
        },
        next: ["H859"],
        prev: ["H855"]
    },
    rooms["H859"] = {
        x: "127",
        y: "426",
        nearestPoint: {
            x: "183",
            y: "423"
        },
        next: ["H861", "H860"],
        prev: ["H857"]
    },
    rooms["H860"] = {
        x: "241",
        y: "447",
        nearestPoint: {
            x: "183",
            y: "399"
        },
        next: ["H862"],
        prev: ["H859"]
    },
    rooms["H861"] = {
        x: "127",
        y: "332",
        nearestPoint: {
            x: "183",
            y: "330"
        },
        next: ["H863"],
        prev: ["H859"]
    }
    rooms["H862"] = {
        x: "379",
        y: "445",
        nearestPoint: {
            x: "381",
            y: "399"
        },
        next: ["H860"],
        prev: ["H806"]
    },
    rooms["H863"] = {
        x: "127",
        y: "244",
        nearestPoint: {
            x: "183",
            y: "217"
        },
        next: ["H803"],
        prev: ["H861"]
    }
    return rooms;
}