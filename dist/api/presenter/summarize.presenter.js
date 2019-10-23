"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const json_serializer_1 = require("./json.serializer");
const content_result_1 = require("./content.result");
let SummarizePresenter = class SummarizePresenter {
    Handle(response) {
        this.Result = new content_result_1.ContentResult();
        this.Result.Status = response.Success ? common_1.HttpStatus.OK : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        this.Result.Content = json_serializer_1.JsonSerializer.SerializerObject(response.Success ? response.SummarizedText : response.Errors);
    }
};
SummarizePresenter = __decorate([
    common_1.Injectable()
], SummarizePresenter);
exports.SummarizePresenter = SummarizePresenter;
//# sourceMappingURL=summarize.presenter.js.map