import { Test, TestingModule } from '@nestjs/testing';
import { SerializationController } from '../api/serialization.controller';
import { AppService } from '../infrastructure/services/app.service';

describe('AppController', () => {
  let appController: SerializationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SerializationController],
      providers: [AppService],
    }).compile();

    appController = app.get<SerializationController>(SerializationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.SerializationUseCase().).toBe('Hello World!');
    });
  });
});
