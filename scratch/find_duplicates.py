import re
from collections import defaultdict

def find_duplicate_keys(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find blocks like "pt: { ... }", "en: { ... }"
    blocks = re.findall(r'(\w+): \{([^}]*)\}', content, re.DOTALL)
    
    for lang, block_content in blocks:
        keys = re.findall(r'"([^"]+)":', block_content)
        key_counts = defaultdict(list)
        for i, key in enumerate(keys):
            key_counts[key].append(i)
        
        duplicates = {key: counts for key, counts in key_counts.items() if len(counts) > 1}
        if duplicates:
            print(f"Duplicates in {lang}:")
            for key, counts in duplicates.items():
                print(f"  - {key}: {len(counts)} times")

if __name__ == "__main__":
    find_duplicate_keys('src/hooks/useTranslation.tsx')
