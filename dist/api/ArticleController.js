"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SummarizeUseCase_1 = require("../domain/SummarizeUseCase");
class ArticleController {
    constructor() {
        this._summarizeUseCase = new SummarizeUseCase_1.SummarizeUseCase();
    }
    Get(req, presenet) {
        return { summarized: req.Content };
    }
}
exports.ArticleController = ArticleController;
//# sourceMappingURL=ArticleController.js.map