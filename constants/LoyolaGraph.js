/**
 * Function that returns the indoor plan of buildings in Loyola.
 */
export function LoyolaGraph () {
    const graph = {
        VL103: { exit: 1 },
        exit: { VL103: 1 }
    };
    return graph;
}
