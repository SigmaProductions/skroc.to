import { Injectable } from "@nestjs/common";

@Injectable()
export class JsonSerializer{
    static SerializerObject(obj : any): string{
        return JSON.stringify(obj);
    }
}