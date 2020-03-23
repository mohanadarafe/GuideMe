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
