# 画像配置ガイド

## 📁 画像の配置場所

/home/project'EOF' `public/` フォルダに配置してください。

```
karte-web-clone/
 public/
    ├── logo.png              # ヘッダーロゴ
    ├── hero-bg.jpg           # ヒーロー背景画像
    ├── candidate-1.jpg       # 候補者アイコン1
    ├── candidate-2.jpg       # 候補者アイコン2
    ├── candidate-3.jpg       # 候補者アイコン3
    └── client-logos/         # クライアントロゴフォルダ
```

---

## 🎨 主な画像配置箇所

### 1. ヘッダーロゴ (Header.tsx 23-46行目)
- 推奨サイズ: 280px × 80px
- フォーマット: PNG（透過背景）

### 2. ヒーロー背景画像 (HeroSection.tsx)
- 推奨サイズ: 1920px × 1080px
- フォーマット: JPG or WebP
- opacity-5 で薄く表示

### 3. 候補者アイコン (HeroSection.tsx)
- 推奨サイズ: 96px × 96px
- フォーマット: JPG or PNG
- 3枚必要

### 4. クライアントロゴ (ClientLogos.tsx)
- 推奨サイズ: 240px × 80px
- フォーマット: PNG（透過背景）

---

## コード内の画像BOX

cd /home/project && npm_config_yes=true cd karte-web-clone && git status 2>"Git  || /dev/nullBOXを用意しています：

```
/* ========================================
   画像BOX - ここに画像を配置
   1. public/に画像を配置
   2. コメントアウトを解除
======================================== */
```

cd /home/project && npm_config_yes=true cd karte-web-clone && git status 2>/dev/null || "Git not initialized"   echo
