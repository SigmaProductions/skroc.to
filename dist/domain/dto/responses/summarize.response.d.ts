export declare class SummarizeResponse {
    readonly Errors: string[];
    readonly SummarizedText: string;
    readonly Success: boolean;
    constructor(summarizedText?: string, errors?: string[], success?: boolean);
}
