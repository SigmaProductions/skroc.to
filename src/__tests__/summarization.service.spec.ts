import { Test, TestingModule } from '@nestjs/testing';
import { SummarizeService } from '../domain/services/summarize.service/summarize.service'

describe("summarization service", () =>
{
    let summarizeService: SummarizeService
    beforeEach(()=>{
        summarizeService = new SummarizeService()
    })

    describe("summarize",() =>{
        it("should summarize acording to an example", ()=>{
            let summarizedText = "Automatic summarization is the process of reducing a text document with a computer "+
                "program in order to create a summary that retains the most important points of the "+
                "original document."
            let text = "Automatic summarization is the process of reducing a text document with a "+
                        "computer program in order to create a summary that retains the most important points "+
                        "of the original document. As the problem of information overload has grown, and as "+
                        "the quantity of data has increased, so has interest in automatic summarization. "+
                        "Technologies that can make a coherent summary take into account variables such as "+
                        "length, writing style and syntax. An example of the use of summarization technology "+
                        "is search engines such as Google. Document summarization is another."
            return summarizeService.Summarize(text).then(value=>{
                expect(value).toBe(summarizedText)
            })
        })
        it("should return error string on small input", ()=>{
            return summarizeService.Summarize("test").then(value=>{
                expect(value).toBe("Input was probably too small to summarize")
            })
        })
    })
})