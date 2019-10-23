
export class SummarizeResponse{
    readonly Errors : string[];
    readonly SummarizedText : string ;

    readonly Success : boolean;
    
    constructor(summarizedText? : string, errors? : string[], success : boolean = false){
        this.Errors = errors
        this.SummarizedText = summarizedText
        this.Success = success
    }

}