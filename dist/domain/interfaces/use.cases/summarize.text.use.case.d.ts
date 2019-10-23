import { SummarizeResponse } from "../../dto/responses/summarize.response";
import { SummarizeTextRequest } from "../../dto/requests/summarize.text.request";
import { OutputPort } from "../output.port";
export interface SummarizeTextUseCase {
    Handle(summarizeRequest: SummarizeTextRequest, outputPort: OutputPort<SummarizeResponse>): any;
}
