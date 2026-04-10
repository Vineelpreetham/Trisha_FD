import sys
import re

with open(sys.argv[1], 'rb') as f:
    text = f.read().decode('utf-8', errors='ignore')

# Find occurrences of CollectionCard or mix-blend-difference
matches = [m.start() for m in re.finditer(r'export default function CollectionsPage', text)]
if matches:
    last_idx = matches[-1]
    # Get 2000 chars before and after
    start = max(0, last_idx - 3000)
    end = min(len(text), last_idx + 3000)
    print("MATCH FOUND:")
    print(text[start:end])
else:
    print("No matches")
