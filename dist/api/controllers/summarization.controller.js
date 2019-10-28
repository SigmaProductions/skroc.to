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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const summarize_text_use_case_1 = require("../../domain/summarize.text.use.case");
const summarize_presenter_1 = require("../presenter/summarize.presenter");
const common_1 = require("@nestjs/common");
const summarize_text_request_1 = require("../../domain/dto/requests/summarize.text.request");
let SummarizationController = class SummarizationController {
    constructor(_summarizeUseCase, _summarizePresenter) {
        this._summarizeUseCase = _summarizeUseCase;
        this._summarizePresenter = _summarizePresenter;
    }
    async Summarize(summarizeRequest) {
        await this._summarizeUseCase.Handle(summarizeRequest, this._summarizePresenter);
        return this._summarizePresenter.Result;
    }
};
__decorate([
    common_1.Post("summarize"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [summarize_text_request_1.SummarizeTextRequest]),
    __metadata("design:returntype", Promise)
], SummarizationController.prototype, "Summarize", null);
SummarizationController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [summarize_text_use_case_1.SummarizeTextUseCase,
        summarize_presenter_1.SummarizePresenter])
], SummarizationController);
exports.SummarizationController = SummarizationController;
//# sourceMappingURL=summarization.controller.js.map