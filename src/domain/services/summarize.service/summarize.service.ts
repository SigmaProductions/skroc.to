import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process'

@Injectable()
export class SummarizeService {
    Summarize(text: string): Promise<string> {
        let result :string
        let runPy = new Promise<string>((success, failure) =>{
            var pythonProc = spawn("python", ["src/domain/services/summarize.service/textrank.wrapper.py", text])
            pythonProc.stdout.on('data', (data)=>{
                // there's annoying \n when getting out of stdout
                var result = data.toString().trim('\n')
                success(result)
            })
        })
        return runPy
    }

}