import os
import requests
import time

# Lista de URLs extraídas do blog do Duolingo
urls = [
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2026/03/cover_Behind-the-scenes-How-do-our-favorite-shows-and-movies-get-their-subtitles.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/12/cover_esptDDletters_blue.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2026/03/cover_What-is-a-lingua-franca-and-how-does-it-improve-communication-1.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/07/cover_how-duolingo-uses-ai-in-video-call-2.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/07/cover_6-times-duolingo-employees-went-above-and-beyond-to-save-their-streak.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/06/cover_USPlaceNames.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/06/cover_canadian-english.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/06/cover_how-to-say-ouch.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/06/cover_duolingoUpdates.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/06/cover_How-to-use-polite-language-in-Japanese.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/05/cover_Covering-all-the-bases-Duolingos-approach-to-reading-skills-1.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/05/cover_germanPlurals2.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/05/cover_enLearnerStories-1.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/05/cover_enTravelPhrasesForUK-1.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/05/cover_academic-english.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/05/cover_Why-dont-some-languages-have-a-word-for-blue.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/04/cover_Through-adversity-and-resilience-A-brief-history-of-AfroLatino-and-AfroIndigenous-languages-1.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2024/08/cover_Can-you-learn-two-languages-at-the-same-time-1.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/03/cover_esptDDletters_pink.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/05/cover_body-parts-en--1-.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/04/cover_hello-in-english.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/04/cover_enVerbsParticiples--1-.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/04/cover_enVerbsHub.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/04/cover_enVerbsAuxiliaries.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/04/cover_enVerbsRegVsIrreg.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/04/cover_enVerbsFuture--1-.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/04/cover_enVerbsPresProgressive--1-.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/04/cover_enSimplePresent--1-.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/04/cover_enVerbsInfinitives--1-.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/04/cover_hangul-101-1.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/04/cover_duoradioALLUIs-3.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/03/cover_enHomophones.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/03/cover_Sticking-with-it-Tips-for-staying-motivated-1.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/03/cover_jaTravelPhrases.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/02/cover_esptDDletters_gold-1.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/02/cover_enFillerWords.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/02/cover_tips-for-english-emails-2.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2024/08/cover_duolingo-101-how-to-learn-a-language-on-duolingo-1.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/02/cover_animal-names-in-en--1-.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/02/cover_fruit-EN-1.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/02/cover_10-surprising-words-we-added-to-our-travel-vocabulary.png",
    "https://storage.ghost.io/c/7a/33/7a33d0f4-927d-4fe8-a6bf-96131b5e76d4/content/images/2025/01/cover_esptDDmailbox_gold--1-.png"
]

target_dir = "public/images"
os.makedirs(target_dir, exist_ok=True)

print(f"Iniciando download de {len(urls)} imagens...")

for i, url in enumerate(urls, 1):
    try:
        # Tenta descobrir a extensão original
        ext = url.split(".")[-1].lower()
        if ext not in ["png", "jpg", "jpeg", "svg", "webp"]:
            ext = "png" # Fallback para png se não conseguir identificar
            
        filename = f"duolingo{i}.{ext}"
        filepath = os.path.join(target_dir, filename)
        
        print(f"Baixando {filename}...", end="\r")
        
        response = requests.get(url, stream=True, timeout=10)
        if response.status_code == 200:
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
        else:
            print(f"\nErro ao baixar {url}: Status {response.status_code}")
            
    except Exception as e:
        print(f"\nErro processando {url}: {e}")

print("\nDownload concluído com sucesso! Verifique a pasta public/images.")
