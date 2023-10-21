"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.items = [];
    }
    ArrayList.prototype.add = function (item) {
        this.items.push(item);
    };
    ArrayList.prototype.get = function (index) {
        var item = this.items.filter(function (x, i) {
            return i === index;
        });
        if (item.length === 0) {
            return null;
        }
        else {
            return item[0];
        }
    };
    ArrayList.prototype.creatFerom = function (value) {
        this.items = __spreadArray([], value, true);
    };
    ArrayList.prototype.getAll = function () {
        return this.items;
    };
    return ArrayList;
}());
var Expenses = /** @class */ (function () {
    function Expenses() {
    }
    return Expenses;
}());
