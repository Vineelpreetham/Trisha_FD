import sys
import os

target = b'1774861013'
conv_dir = '/Users/guduruashwithareddy/.gemini/antigravity/conversations'

for f_name in os.listdir(conv_dir):
    if not f_name.endswith('.pb'): continue
    path = os.path.join(conv_dir, f_name)
    with open(path, 'rb') as f:
        content = f.read()
        idx = content.find(target)
        if idx != -1:
            print(f"FOUND IN {f_name}")
            start = max(0, idx - 5000)
            end = min(len(content), idx + 5000)
            print(content[start:end].decode('utf-8', errors='ignore'))
            break
