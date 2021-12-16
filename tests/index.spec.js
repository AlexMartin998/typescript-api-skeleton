'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("../src/app"));
const src_1 = require("../src");
const api = (0, supertest_1.default)(app_1.default);
describe('[ AUTH ]: Auth Test Suite', () => {
    test('1. should return 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const resp = yield api.get('/').send();
        expect(resp.status).toBe(200);
    }));
});
afterAll(() => {
    mongoose_1.default.connection.close();
    src_1.server.close();
});
//# sourceMappingURL=index.spec.js.map