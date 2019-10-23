"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.json({
        hello: 1
    });
});
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
//# sourceMappingURL=index.js.map