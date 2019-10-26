import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process'

@Injectable()
export class SummarizeService {
    async Summarize(text: string): Promise<string> {
        let result :string
        let runPy = new Promise<string>((success, failure) =>{
            var pythonProc = spawn("python", ["text.wrapper.py", text])
            let result : string

            pythonProc.stdout.on('data', (data)=>{
                success(data)
            })
        })
        return runPy
    }

}