import { SummarizeService } from '../infrastructure/services/SummarizeService';
import { Injectable } from '@nestjs/common';
import { SummarizeRequest } from './model/SummarizeRequest';
import { SummarizePresenter } from '../api/presenter/SummarizePresenter';
import { SummarizeResponse } from './model/SummarizeResponse';

@Injectable()
export class SummarizeUseCase {
    constructor(private readonly _summarizeService: SummarizeService) {
    }

    public async Handle(summarizeRequest: SummarizeRequest, summarizePresenter: SummarizePresenter) {
        summarizePresenter.Handle( 
            new SummarizeResponse(
                this._summarizeService.Summarize()
            )
        )
    }
}