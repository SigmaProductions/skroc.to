"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ArticleController_1 = require("./ArticleController");
const SummarizeRequest_1 = require("./model/SummarizeRequest");
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.json({
        test: 1
    });
});
app.get('/summarize', (req, res) => {
    var controller = new ArticleController_1.ArticleController();
    var model = controller.Get(new SummarizeRequest_1.SummarizeRequest(req.query.text));
    var contentResult = new Presenter().Handle(model);
    res.status(contentResult.status)
        .json(contentResult.content);
});
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
//# sourceMappingURL=index.js.map