function countSum(a, b) {
    var sum = a + b;
    if (typeof (a) == "number" && typeof (b) == "number")
    return sum; else return "wrong value";
}
function countMinus(a, b) {
    var minus = a - b;
    if (typeof (a) == "number" && typeof (b) == "number")
    return minus; else return "wrong value";
}
function countMulti(a, b) {
    var multi = a * b;
    if (typeof (a) == "number" && typeof (b) == "number")
    return multi; else return "wrong value";
}
function countDivis(a, b) {
    var divis = a / b;
    if (typeof (a) == "number" && typeof (b) == "number" && b!=0)
    return divis; else return "wrong value";
}
function countSquare(a) {
    if (typeof (a) == "number" && a>=0)
    return Math.sqrt(a); else return "wrong value";
}
function countPow(a, b) {
    if (typeof (a) == "number" && typeof (b) == "number")
    return Math.pow(a, b); else return "wrong value";
}
