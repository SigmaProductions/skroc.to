"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SummarizeResponse {
    constructor(summarizedText, errors, success = false) {
        this.Errors = errors;
        this.SummarizedText = summarizedText;
        this.Success = success;
    }
}
exports.SummarizeResponse = SummarizeResponse;
//# sourceMappingURL=summarize.response.js.map