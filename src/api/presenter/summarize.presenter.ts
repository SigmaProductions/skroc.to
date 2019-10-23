import { SummarizeResponse } from '../../domain/dto/responses/summarize.response'
import { Injectable, HttpCode, HttpStatus } from '@nestjs/common';
import { JsonSerializer } from './json.serializer';
import { Dictionary } from 'express-serve-static-core';

@Injectable()
export class SummarizePresenter {
    Result: {"status": number, "body": string}
    public Handle(response: SummarizeResponse) {
        this.Result = {
            "status" : response.Success ?  HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR,
            "body" : JsonSerializer.SerializerObject(response.Success? response.SummarizedText: response.Errors)}
    }
}