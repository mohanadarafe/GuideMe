/**
 * Implementation of Dijkstra's shortest path algorithm
 * @param {*} graph | graph of nodes (ClassGraph.js)
 * @param {*} start | starting node
 * @param {*} end | ending node
 */
export const dijkstra = (graph, start, end) => {
    // track the lowest cost to reach each node
    let costs = {};
    costs[end] = "Infinity";
    costs = Object.assign(costs, graph[start]);

    // track paths
    const parents = {end: null};
    for (let child in graph[start]) {
        parents[child] = start;
    }

    const processed = [];
    let node = lowestCostNode(costs, processed);

    while (node) {
        let cost = costs[node];
        let children = graph[node];
        for (let n in children) {
            if (String(n) !== String(start)) {
                let newCost = cost + children[n];
                if (!costs[n] || costs[n] > newCost) {
                    costs[n] = newCost;
                    parents[n] = node;
                }
            }
        }
        processed.push(node);
        node = lowestCostNode(costs, processed);
    }

    let optimalPath = [end];
    let parent = parents[end];
    while (parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }
    optimalPath.reverse();

    const results = {
        distance: costs[end],
        path: optimalPath
    };

    return results;
};

// Looks for cost of paths & goes with cheapest in cost
const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
};


/**
 * Get the floor number of a specific classroom. 
 * Ex: H829 returns 8
 * @param {*} name | classroom name
 */
export const getFloorNumber = (name) => {
    if (name) {
        if (name == "exit" || name == "elevator") {
            return name;
        }

        if (name.match(/\b[^\d\W]+\b/g)) {
            return name;
        }
        
        const num = name.match(/\d+/g).map(Number);
        
        if (name.includes("_")) {
            const room = num[0].toString();
            return room[0];
        }
        if(num.length > 1) {
            return num[0].toString();
        }
        if (num.toString().length == 3) {
            return num.toString().charAt(0)
        }
        if (num.toString().length == 4) {
            return num.toString().charAt(0) + num.toString().charAt(1);
        }   
    }
}

/**
 * Only used to fetch information from data
 * 
 * Change the classroom name to H8XX because our
 * data file stores uses associative arrays with H8XX as the key names. 
 * Ex: H529 returns H829
 * @param {*} name | classroom name
 */
export const ConvertToHall8Floor = (name) => {
    if (!name.includes(" ")) {
        if (name == "exit" || name == "elevator") {
            return name;
        }
        
        if (name) {
            const num = name.match(/\d+/g).map(Number);
            const numToString = num.toString();
            
            if(numToString.charAt(0) == 9) {
                return name;
            }
            else if (numToString.length == 3) {
                return name.replace(numToString.charAt(0), "8");
            }
            else if (numToString.length == 4) {
                return name.replace(numToString.substring(0,2), "8");
            }
        }
    }  
}

/**
 * The following function converts the point of interest
 * to the key value in the data file.
 * @param {*} name 
 */
export const ConvertPointOfInterest = (name) => {
    if (name) {
        switch (name) {
            case "Men's Washroom":
                return "men_washroom"
            case "Women's Washroom":
                return "women_washroom"
        }
    }
}

/**
 * The following function returns the shortest path to
 * the interest point requested by the user.
 * @param {*} graph | node graph
 * @param {*} from | from node
 * @param {*} to | to node
 */
export const shortestPathToInterest = (graph, from, to) => {
    if (to.includes("Washroom")) {
        var to = ConvertPointOfInterest(to);
        return {route: dijkstra(graph, from, to).path, to: to};
    }

    if (to.includes("Water")) {
        var costToNorth = dijkstra(graph, from, "water_foutain_N");
        var costToSouth = dijkstra(graph, from, "water_foutain_S");
        
        if (costToNorth.distance >= costToSouth.distance) {
            return {route: costToSouth.path, to: "water_foutain_S"}
        } else {
            return {route: costToNorth.path, to: "water_foutain_N"}
        }
    }
}
/**
 * The following function returns the coordinates for an arrow
 * to be drawn on the SVG map for a user to follow a direction.
 * @param {*} x1 | x1 coordinate
 * @param {*} y1 | y1 coordinate 
 * @param {*} x2 | x2 coordinate 
 * @param {*} y2 | y2 coordinate 
 */
export const getArrowCoordinates = (x1, y1, x2, y2) => {
    const LINE_DIF = 0.5;
    const THETA = 30;

    var arg1 = (x1 - x2)*Math.cos(THETA*Math.PI/180);
    var arg2 = (y1 - y2)*Math.sin(THETA*Math.PI/180);
    var x3 = (Number(x2) + Number((LINE_DIF*(arg1+arg2))));

    var arg3 = (y1 - y2)*Math.cos(THETA*Math.PI/180);
    var arg4 = (x1 - x2)*Math.sin(THETA*Math.PI/180);
    var y3 = (Number(y2) + Number((LINE_DIF*(arg3-arg4))));

    var x4 = (Number(x2) + Number((LINE_DIF*(arg1-arg2))));
    var y4 = (Number(y2) + Number((LINE_DIF*(arg3+arg4))));

    const results = {
        x3: x3,
        y3: y3,
        x4: x4,
        y4: y4
    };
    return results;
}
