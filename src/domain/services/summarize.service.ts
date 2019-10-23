import { Injectable } from '@nestjs/common';

@Injectable()
export class SummarizeService {
    Summarize(text: string): string {
        return text;
    }

}