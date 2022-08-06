var language;
(function (language) {
    language[language["English"] = 0] = "English";
    language[language["Spanish"] = 1] = "Spanish";
    language[language["Russian"] = 2] = "Russian";
})(language || (language = {}));
var Color;
(function (Color) {
    Color["Red"] = "#c10000";
    Color["Blue"] = "#007ac1";
    Color[Color["Pink"] = 12648528] = "Pink";
    Color[Color["White"] = 255] = "White";
})(Color || (Color = {}));
var red = Color.Red;
console.log(typeof red);
