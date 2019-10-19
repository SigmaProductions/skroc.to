import { SummarizeResponse } from '../../domain/model/SummarizeResponse'
import { Injectable } from '@nestjs/common';

@Injectable()
export class SummarizePresenter {
    JsonResult : JSON

    public Handle(response: SummarizeResponse) {

    }
}

class ContentResult {
    
}