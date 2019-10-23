import { UseCaseRequest } from "../../interfaces/use.case.request";
import { SummarizeResponse } from "../responses/summarize.response";
import { Url } from "url";
import { ApiModelProperty } from "@nestjs/swagger";

export class SummarizeArticleRequest implements UseCaseRequest <SummarizeResponse>{
    @ApiModelProperty()
    readonly ArticleURL : Url;
}