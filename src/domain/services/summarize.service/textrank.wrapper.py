from summa.summarizer import summarize
import sys

text = sys.argv[0]

print(summarize(text))
sys.stdout.flush()