const { areaCircle,
    areaSquar,
    areaTraingle,
    areaPentagon,
    areaHexagon,
    areaTrapezium
} = require("./index.node")

console.log("areaCircle",		areaCircle(4));
console.log("areaSquar",		areaSquar(3, 2));
console.log("areaTraingle",		areaTraingle(2, 3, 4));
console.log("areaTrapezium",	areaTrapezium(3, 4, 5));
console.log("areaPentagon",		areaPentagon(1));
console.log("areaHexagon",		areaHexagon(8));
console.log("areaTrapezium",	areaTrapezium(3, 4, 5));