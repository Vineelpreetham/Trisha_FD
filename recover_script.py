import os, sys

def search_files(dirs):
    latest_code = ""
    latest_time = 0
    for directory in dirs:
        for root, dirs, files in os.walk(directory):
            for file in files:
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                        text = f.read()
                        if "export default function CollectionsPage" in text and "Bridging the gap" in text:
                            # It's an exact match!
                            # Let's extract the block
                            idx = text.rfind("export default function CollectionsPage")
                            # Go back to the start of the file or imports
                            start_idx = text.rfind("\"use client\"", 0, idx)
                            if start_idx == -1: start_idx = max(0, idx - 2000)
                            end_idx = text.find("}", idx) + 1
                            if end_idx < len(text):
                                while end_idx < len(text) and text[end_idx] == '}':
                                    end_idx += 1
                                    
                            mtime = os.path.getmtime(filepath)
                            if mtime > latest_time:
                                latest_time = mtime
                                latest_code = text[start_idx:start_idx+8000] # just grab enough bytes
                except Exception:
                    pass
    return latest_code

path1 = os.path.expanduser("~/Library/Application Support/Antigravity")
path2 = os.path.expanduser("~/.gemini")

code = search_files([path1, path2])
if code:
    with open("recovered_collections.tsx", "w") as f:
        f.write(code)
    print("Recovered!")
else:
    print("Not found")
