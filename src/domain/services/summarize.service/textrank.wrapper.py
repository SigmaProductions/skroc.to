from summa.summarizer import summarize
import pickle
import sys

text = sys.argv[1]
result = summarize(text)
if(result == ""):
    result= "Input was probably too small to summarize"

print(result)
sys.stdout.flush()