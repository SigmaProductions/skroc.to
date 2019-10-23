import { UseCaseRequest } from '../../interfaces/use.case.request';
import { SummarizeResponse } from '../responses/summarize.response';
import { ApiModelProperty } from '@nestjs/swagger';

export class SummarizeTextRequest implements UseCaseRequest <SummarizeResponse>{
    @ApiModelProperty()
    public TextToSummarize : string;

    constructor (textToSummarize:string){
        this.TextToSummarize= textToSummarize
    }
}