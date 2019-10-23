"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const summarize_response_1 = require("./dto/responses/summarize.response");
let SummarizeTextUseCase = class SummarizeTextUseCase {
    constructor(_summarizeService) {
        this._summarizeService = _summarizeService;
    }
    Handle(summarizeRequest, outputPort) {
        try {
            var summarizedString = this._summarizeService.Summarize(summarizeRequest.TextToSummarize);
        }
        catch (error) {
            outputPort.Handle(new summarize_response_1.SummarizeResponse(undefined, ["error summarizing"], false));
            return;
        }
        outputPort.Handle(new summarize_response_1.SummarizeResponse(summarizedString, undefined, true));
    }
};
SummarizeTextUseCase = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], SummarizeTextUseCase);
exports.SummarizeTextUseCase = SummarizeTextUseCase;
//# sourceMappingURL=summarize.test.use.case.js.map