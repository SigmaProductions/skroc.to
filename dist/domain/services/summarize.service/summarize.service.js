"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const child_process_1 = require("child_process");
let SummarizeService = class SummarizeService {
    Summarize(text) {
        let result;
        let runPy = new Promise((success, failure) => {
            var pythonProc = child_process_1.spawn("python", ["src/domain/services/summarize.service/textrank.wrapper.py", text]);
            pythonProc.stdout.on('data', (data) => {
                console.log(data.toString());
                success(data.toString());
            });
        });
        return runPy;
    }
};
SummarizeService = __decorate([
    common_1.Injectable()
], SummarizeService);
exports.SummarizeService = SummarizeService;
//# sourceMappingURL=summarize.service.js.map