
export class SummarizeResponse{
    readonly SummarizedText : string

    constructor(summarizedText:string) {
        this.SummarizedText= summarizedText
    }
}