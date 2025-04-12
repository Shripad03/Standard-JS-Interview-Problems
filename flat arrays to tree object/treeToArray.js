function treeToFlatArray(tree) {
    let firstLevelArr = [];
    let secondLevelArr = [];
    let thirdLevelArr = [];
    let fourthLevelArr = [];



    Object.entries(tree.countries).forEach(([countryId, country]) => {
        firstLevelArr.push({ name: country.name, id: countryId })

        Object.entries(country.states).forEach(([stateId, state]) => {
            secondLevelArr.push({ name: state.name, parentId: countryId, id: stateId })

            Object.entries(state.districts).forEach(([district, districtId]) => {
                thirdLevelArr.push({ name: district.name, parentId: stateId, id: districtId })

                Object.entries(district.places || {}).forEach(([places, placeId]) => {
                    fourthLevelArr.push({ name: places, parentId: districtId, id: placeId })
                });
            });
        });
    });
    return { firstLevelArr, secondLevelArr, thirdLevelArr, fourthLevelArr }
}



const nestedTree = {
    "countries": {
        "1": {
            "name": "India",
            "states": {
                "s3": {
                    "name": "Maharashtra",
                    "districts": {
                        "d5": { "name": "Nashik" },
                        "d6": { "name": "Jalgoan" }
                    }
                },
                "s4": {
                    "name": "Tamilnadu",
                    "districts": {
                        "d7": { "name": "Ariyalur" },
                        "d8": { "name": "Chennai" }
                    }
                }
            }
        },
        "2": {
            "name": "Germany",
            "states": {
                "s1": {
                    "name": "Bavaria",
                    "districts": {
                        "d1": { "name": "Upper Bavaria" },
                        "d2": { "name": "Lower Bavaria" }
                    }
                },
                "s2": {
                    "name": "Berlin",
                    "districts": {
                        "d3": { "name": "Berlin-Mitte" },
                        "d4": { "name": "Kreuzberg" }
                    }
                }
            }
        }
    }
}



const array = treeToFlatArray(nestedTree);
console.log(array);

