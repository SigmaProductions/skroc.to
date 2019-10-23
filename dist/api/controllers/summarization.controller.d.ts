import { SummarizeTextUseCase } from '../../domain/summarize.text.use.case';
import { SummarizePresenter } from '../presenter/summarize.presenter';
import { SummarizeTextRequest } from '../../domain/dto/requests/summarize.text.request';
import { Response } from 'express';
export declare class SummarizationController {
    private readonly _summarizeUseCase;
    private readonly _summarizePresenter;
    constructor(_summarizeUseCase: SummarizeTextUseCase, _summarizePresenter: SummarizePresenter);
    Summarize(summarizeRequest: SummarizeTextRequest, res: Response): void;
}
