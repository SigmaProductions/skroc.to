import { SummarizeResponse } from '../../domain/dto/responses/summarize.response';
import { ContentResult } from './content.result';
export declare class SummarizePresenter {
    Result: ContentResult;
    Handle(response: SummarizeResponse): void;
}
