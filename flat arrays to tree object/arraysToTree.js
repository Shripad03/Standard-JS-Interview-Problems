let firstLevelArr = [
    { id: "1", name: "India" },
    { id: "2", name: "Germany" }
];
let secondLevelArr = [
    { id: "s1", parentId: "2", name: "Bavaria" },
    { id: "s2", parentId: "2", name: "Berlin" },
    { id: "s3", parentId: "1", name: "Maharashtra" },
    { id: "s4", parentId: "1", name: "Tamilnadu" }
];
let thirdLevelArr = [
    { id: "d1", parentId: "s1", name: "Upper Bavaria" },
    { id: "d2", parentId: "s1", name: "Lower Bavaria" },
    { id: "d3", parentId: "s2", name: "Berlin-Mitte" },
    { id: "d4", parentId: "s2", name: "Kreuzberg" },
    { id: "d5", parentId: "s3", name: "Nashik" },
    { id: "d6", parentId: "s3", name: "Jalgoan" },
    { id: "d7", parentId: "s4", name: "Ariyalur" },
    { id: "d8", parentId: "s4", name: "Chennai" }
];
let fourthLevelArr = [
    { id: "p1", parentId: "d1", name: "Munich" },
    { id: "p2", parentId: "d1", name: "Erding" },
    { id: "p3", parentId: "d2", name: "Leipzig" },
    { id: "p4", parentId: "d2", name: "Landshut" },
    { id: "p5", parentId: "d3", name: "Passau" },
    { id: "p6", parentId: "d3", name: "Gesundbrunnen" },
    { id: "p7", parentId: "d4", name: "Frieburg" },
    { id: "p8", parentId: "d4", name: "Hamburg" },
    { id: "p9", parentId: "d6", name: "Raver" },
    { id: "p10", parentId: "d6", name: "Savda" },
    { id: "p11", parentId: "d5", name: "Ozar" },
    { id: "p12", parentId: "d5", name: "Manmad" },
    { id: "p13", parentId: "d7", name: "Thirumanur" },
    { id: "p14", parentId: "d7", name: "Sendurai" },
    { id: "p15", parentId: "d8", name: "New Chennai" },
    { id: "p16", parentId: "d8", name: "Old Chennai" }
]

let tree = {};


function buildTree(parents, children, childKey) {
    let tree = {};  // Create a local tree instead of modifying the global one

    parents.forEach(parent => {
        tree[parent.id] = { name: parent.name, [childKey]: {} };
    });

    children.forEach(child => {
        if (tree[child.parentId]) {
            tree[child.parentId][childKey][child.id] = { name: child.name };
        }
    });

    return tree;
}

function getTreeData() {
    let statesTree = buildTree(secondLevelArr, thirdLevelArr, 'districts');  
    let countriesTree = buildTree(firstLevelArr, secondLevelArr, 'states');  

    // Correctly nest states inside countries
    Object.keys(statesTree).forEach(stateId => {
        let parentId = secondLevelArr.find(state => state.id === stateId)?.parentId;
        if (parentId && countriesTree[parentId]?.states) {
            countriesTree[parentId].states[stateId] = { ...statesTree[stateId] };
        }
    });

    return { countries: countriesTree };
}

let finalTree = getTreeData();
console.log(finalTree);
