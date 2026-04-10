import sys
import re

with open(sys.argv[1], 'rb') as f:
    text = f.read().decode('utf-8', errors='ignore')

matches = [m.start() for m in re.finditer(r'GlowCard', text)]
if matches:
    last_idx = matches[-1]
    # Get 7000 chars before and after
    start = max(0, last_idx - 7000)
    end = min(len(text), last_idx + 7000)
    print("MATCH FOUND IN A18E!")
    print(text[start:end])
else:
    print("No GlowCard matches in A18E")
