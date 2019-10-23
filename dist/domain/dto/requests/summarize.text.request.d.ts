import { UseCaseRequest } from '../../interfaces/use.case.request';
import { SummarizeResponse } from '../responses/summarize.response';
export declare class SummarizeTextRequest implements UseCaseRequest<SummarizeResponse> {
    TextToSummarize: string;
    constructor(textToSummarize: string);
}
