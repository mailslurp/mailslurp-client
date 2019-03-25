"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = __importDefault(require("./index"));
test("that import was successful", function () {
    expect(index_1.MailSlurp).not.toBeNull();
    expect(index_2.default).not.toBeNull();
});
