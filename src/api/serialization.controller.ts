import { Controller, Get } from '@nestjs/common';
import { SummarizeUseCase } from '../domain/SummarizeUseCase';
import { AppService } from '../infrastructure/services/app.service';
import { SummarizePresenter } from './presenter/SummarizePresenter';
import {SummarizeRequest} from '../domain/model/SummarizeRequest';

@Controller()
export class SerializationController {
  constructor(private readonly _summarizeUseCase: SummarizeUseCase,
    private readonly _summarizePresenter: SummarizePresenter) { }

  @Get()
  public async Get(summarizeRequest: SummarizeRequest) {
    this._summarizeUseCase.Handle(this.summarizeRequest, this._summarizePresenter)
      return this._summarizeUseCase.Handle();
    }
  }


}
