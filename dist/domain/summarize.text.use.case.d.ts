import { SummarizeTextRequest } from './dto/requests/summarize.text.request';
import { SummarizeResponse } from './dto/responses/summarize.response';
import { OutputPort } from './interfaces/output.port';
import { SummarizeService } from './services/summarize.service';
import { SummarizeTextUseCase as SummarizeTextUseCaseInterface } from './interfaces/use.cases/summarize.text.use.case';
export declare class SummarizeTextUseCase implements SummarizeTextUseCaseInterface {
    private readonly _summarizeService;
    constructor(_summarizeService: SummarizeService);
    Handle(summarizeRequest: SummarizeTextRequest, outputPort: OutputPort<SummarizeResponse>): void;
}
