/// <reference types="node" />
import { UseCaseRequest } from "../../interfaces/use.case.request";
import { SummarizeResponse } from "../responses/summarize.response";
import { Url } from "url";
export declare class SummarizeArticleRequest implements UseCaseRequest<SummarizeResponse> {
    readonly ArticleURL: Url;
}
