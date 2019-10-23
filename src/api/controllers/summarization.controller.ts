import { SummarizeTextUseCase } from '../../domain/summarize.text.use.case';
import { SummarizePresenter } from '../presenter/summarize.presenter';
import { Controller, Get, Post, Body, Res, HttpStatus} from '@nestjs/common';
import { SummarizeTextRequest } from '../../domain/dto/requests/summarize.text.request';
import {Response} from 'express';

@Controller()
export class SummarizationController {

  constructor(
    private readonly _summarizeUseCase: SummarizeTextUseCase,
    private readonly _summarizePresenter: SummarizePresenter) { }

  @Post("summarize")
  public  Summarize(@Body() summarizeRequest: SummarizeTextRequest)   
  {
    this._summarizeUseCase.Handle(summarizeRequest, this._summarizePresenter)
    return this._summarizePresenter.Result

  }


}
