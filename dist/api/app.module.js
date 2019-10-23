"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const summarization_controller_1 = require("./controllers/summarization.controller");
const summarize_presenter_1 = require("./presenter/summarize.presenter");
const summarize_text_use_case_1 = require("../domain/summarize.text.use.case");
const summarize_service_1 = require("../domain/services/summarize.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [summarization_controller_1.SummarizationController],
        providers: [summarize_presenter_1.SummarizePresenter, summarize_text_use_case_1.SummarizeTextUseCase, summarize_service_1.SummarizeService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map