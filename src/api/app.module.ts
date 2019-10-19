import { Module } from '@nestjs/common';
import { SerializationController } from './serialization.controller';
import { AppService } from '../infrastructure/services/app.service';
import { SummarizePresenter} from '../api/presenter/SummarizePresenter';

@Module({
  imports: [],
  controllers: [SerializationController],
  providers: [SummarizePresenter],
})
export class AppModule {}
