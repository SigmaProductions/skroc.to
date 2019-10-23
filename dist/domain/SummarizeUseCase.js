"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SummarizeService_1 = require("../infrastructure/services/SummarizeService");
class SummarizeUseCase {
    constructor() {
        this._summarizeService = new SummarizeService_1.SummarizeService();
    }
    async Handle() {
        this._summarizeService.Summarize();
    }
}
exports.SummarizeUseCase = SummarizeUseCase;
//# sourceMappingURL=SummarizeUseCase.js.map