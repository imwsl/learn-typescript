// null, undefined, void, never
//
// return null
function return_null(x) {
    if (x < 10) {
        return x;
    }
    return null;
}
// return undefined
function return_undefined() {
    return undefined;
}
// return void
function return_void() {
    var a = 2 + 2;
    var b = a + 2;
}
// return never
function return_never() {
    throw TypeError("I always error");
}
// return never
function return_never2() {
    while (true) {
        // do something
    }
}
