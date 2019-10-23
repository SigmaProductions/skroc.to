import { Module } from '@nestjs/common';
import { SummarizationController } from './controllers/summarization.controller';
import { SummarizePresenter} from './presenter/summarize.presenter';
import { SummarizeTextUseCase } from '../domain/summarize.text.use.case';
import { SummarizeService } from '../domain/services/summarize.service';

@Module({
  imports: [],
  controllers: [SummarizationController],
  providers: [SummarizePresenter, SummarizeTextUseCase, SummarizeService],
})
export class AppModule {}
