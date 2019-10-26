import { Test, TestingModule } from '@nestjs/testing';
import { SummarizationController } from '../api/controllers/summarization.controller';
import { SummarizeTextRequest } from '../domain/dto/requests/summarize.text.request';
import { SummarizeTextUseCase } from '../domain/summarize.text.use.case';
import { SummarizePresenter } from '../api/presenter/summarize.presenter';
import { HttpStatus } from '@nestjs/common';
import { SummarizeService } from '../domain/services/summarize.service/summarize.service';

describe('AppController', () => {
  let appController: SummarizationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SummarizationController],
      providers: [SummarizeTextUseCase, SummarizePresenter, SummarizeService],
    }).compile();

    appController = app.get<SummarizationController>(SummarizationController);
  });

  describe('summarization controller summarize', () => {
    it('It should return successful response', () => {
      appController= new SummarizationController(new SummarizeTextUseCase(new SummarizeService()), 
        new SummarizePresenter());
      
      var request= new SummarizeTextRequest("test");

      var result =appController.Summarize(request)
      
      result.then(value=>{
        expect(value.status).resolves.toBe(HttpStatus.OK);
      })
    });
  });
});