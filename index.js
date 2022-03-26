// Problem 01
function anaToVori(ana) {
    let vori = ana / 16;
    return vori;
}
console.log(anaToVori(255));

// Problem 02
function pandaCost(sin, som, jil) {
    let singara = sin * 7;
    let somucha = som * 10;
    let jilapi = jil * 15;
    let totalCost = singara + somucha + jilapi;
    return totalCost;
}
console.log(pandaCost(2, 3, 4));

// Problem 03
function picnicBudget(num) {
    let totalBudget = 0;
    if (num <= 100) {
        totalBudget = num * 5000;
    } else if (num > 100 && num <= 200) {
        let first100 = 100 * 5000;
        let remaining = num - 100;
        totalBudget = first100 + remaining * 4000;
    } else if (num > 200) {
        let first100 = 100 * 5000;
        let second100 = 100 * 4000;
        let remaining2 = (num - 200) * 3000;
        totalBudget = first100 + second100 + remaining2;
    }
    return totalBudget;
}
console.log(picnicBudget(150));

// Problem 04
function oddFriend(names) {
    var oddName;

    for (var i = 0; i < names.length; i++) {
        if (names[i].length % 2 != 0) {
            oddName = names[i];
            break;
        }
    }
    return oddName;
}
var oddName = oddFriend(["joni", "badsha", "maruf", "Shanto", "Razikul"]);
console.log(oddName);
