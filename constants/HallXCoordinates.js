export function HallXCoordinates () {
    var rooms = [];
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
        next: ["H861"],
        prev: ["H857"]
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
    rooms["H803"] = {
        x: "281",
        y: "155",
        nearestPoint: {
            x: "279",
            y: "217"
        },
        next: [""],
        prev: ["H861"]
    }
    return rooms;
}