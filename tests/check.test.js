'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = __importDefault(require("chai"));
const chai_2 = require("chai");
const chai_http_1 = __importDefault(require("chai-http"));
const check_test_1 = __importStar(require("../src/helpers/check-test"));
const app_1 = __importDefault(require("../src/app"));
chai_1.default.use(chai_http_1.default);
(0, mocha_1.describe)('\n[APP]: GET /', () => {
    (0, mocha_1.it)('1. should return 200 status code', done => {
        chai_1.default
            .request(app_1.default)
            .get('/')
            .end((err, res) => {
            chai_1.default.assert.equal(res.status, 200);
            done();
        });
    });
});
(0, mocha_1.describe)('Suite de prueba', () => {
    (0, mocha_1.it)('1. should returns 2', () => {
        const va = (0, check_test_1.addA)(1, 1);
        chai_2.assert.equal(va, 2);
    });
    (0, mocha_1.it)('2. should returns 2', () => {
        const va = (0, check_test_1.default)(1, 2);
        chai_2.assert.equal(va, 3);
    });
});
//# sourceMappingURL=check.test.js.map