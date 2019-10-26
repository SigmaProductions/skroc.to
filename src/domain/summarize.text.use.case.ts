import { Injectable, Controller } from '@nestjs/common';
import { SummarizeTextRequest } from './dto/requests/summarize.text.request';
import { SummarizeResponse } from './dto/responses/summarize.response';
import { OutputPort } from './interfaces/output.port';
import { SummarizeService } from './services/summarize.service/summarize.service';
import { SummarizeTextUseCase as SummarizeTextUseCaseInterface} from './interfaces/use.cases/summarize.text.use.case';

@Injectable()
export class SummarizeTextUseCase implements SummarizeTextUseCaseInterface {

    constructor(private readonly _summarizeService: SummarizeService) {
    }

    public async Handle(summarizeRequest: SummarizeTextRequest, outputPort: OutputPort<SummarizeResponse>) {
        try{
            var summarizedString = await this._summarizeService.Summarize(summarizeRequest.TextToSummarize)
        }
        catch(error){
            outputPort.Handle(new SummarizeResponse(undefined, ["error summarizing"], false))
            return 
        }
        
        outputPort.Handle(new SummarizeResponse(summarizedString, undefined, true))
    }
}