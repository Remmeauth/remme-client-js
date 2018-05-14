"use strict";
exports.__esModule = true;
var JsonObject = /** @class */ (function () {
    function JsonObject() {
    }
    JsonObject.fromJson = function (jsonString) {
        var jsonObject = JSON.parse(jsonString);
        var object = new this();
        for (var prop in jsonObject) {
            if (!jsonObject.hasOwnProperty(prop)) {
                continue;
            }
            object[prop] = jsonObject[prop];
        }
        return object;
    };
    return JsonObject;
}());
exports.JsonObject = JsonObject;
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getVame = function () {
        return this.vame;
    };
    return User;
}());
var json = {
    vame: null
};
var user = Object.assign(new User(), json);
console.log(user);
