import os
filepath = os.path.expanduser("~/Library/Application Support/Antigravity/logs/20260329T135857/window1/exthost/google.antigravity/Antigravity.log")
with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Find all occurrences of "Bridging the gap"
indices = []
idx = text.find("Bridging the gap")
while idx != -1:
    indices.append(idx)
    idx = text.find("Bridging the gap", idx + 1)

for i, idx in enumerate(indices):
    # Find start of code block
    start_idx = text.rfind("\"use client\"", max(0, idx - 5000), idx)
    end_idx = text.find("export default function CollectionsPage", idx)
    if end_idx == -1: end_idx = idx + 2000
    else: end_idx = end_idx + 3000
    
    # Try to find exactly what the AI proposed
    if start_idx != -1:
        with open(f"extracted_version_{i}.tsx", "w") as out:
            out.write(text[start_idx:end_idx])
print(f"Extracted {len(indices)} versions from March 29th log.")
        
