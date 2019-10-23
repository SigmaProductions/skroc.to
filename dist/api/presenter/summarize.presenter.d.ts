import { SummarizeResponse } from '../../domain/dto/responses/summarize.response';
export declare class SummarizePresenter {
    Result: {
        "status": number;
        "body": string;
    };
    Handle(response: SummarizeResponse): void;
}
