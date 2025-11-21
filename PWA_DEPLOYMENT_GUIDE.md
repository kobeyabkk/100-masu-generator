# 📱 PWA版 デプロイメントガイド

## 🎯 概要

このガイドは、百マス計算ジェネレーターのPWA（Progressive Web App）版をCloudflare Pagesにデプロイする手順を説明します。

---

## ✅ 完了事項

以下の実装が完了しています：

- [x] PWA manifest.json作成
- [x] Service Worker実装（オフライン対応）
- [x] アイコン作成（512x512, 192x192）
- [x] index.htmlにPWA対応コード追加
- [x] START.htmlにモバイル誘導文追加

---

## 📋 必要な準備

### 1. GitHubアカウント
- https://github.com でアカウント作成（無料）

### 2. Cloudflare アカウント  
- https://dash.cloudflare.com/sign-up でアカウント作成（無料）

---

## 🚀 デプロイ手順

### ステップ1: GitHubリポジトリ作成

1. **GitHubにログイン**
   - https://github.com にアクセス

2. **新しいリポジトリを作成**
   - 右上の「+」→「New repository」をクリック
   - Repository name: `100-grid-math-generator`
   - Private を選択（公開したくない場合）
   - 「Create repository」をクリック

3. **ローカルファイルをアップロード**
   
   以下のファイルをアップロードします：
   ```
   /index.html
   /manifest.json
   /service-worker.js
   /css/style.css
   /css/input-mode.css
   /js/main.js
   /js/input-mode.js
   /js/translations.js
   /pwa/icon-512.svg
   /pwa/icon-192.svg
   ```

   **方法A: Web UIでアップロード**
   - 「uploading an existing file」をクリック
   - 上記ファイルをドラッグ&ドロップ
   - 「Commit changes」をクリック

   **方法B: Git コマンドライン（上級者向け）**
   ```bash
   git init
   git add index.html manifest.json service-worker.js css/ js/ pwa/
   git commit -m "Initial PWA version"
   git remote add origin https://github.com/あなたのユーザー名/100-grid-math-generator.git
   git branch -M main
   git push -u origin main
   ```

---

### ステップ2: Cloudflare Pagesに接続

1. **Cloudflare Pagesにアクセス**
   - https://pages.cloudflare.com/ にアクセス
   - Cloudflareアカウントでログイン

2. **新しいプロジェクトを作成**
   - 「Create a project」をクリック
   - 「Connect to Git」を選択

3. **GitHubと連携**
   - 「Connect GitHub」をクリック
   - Cloudflare Pagesに権限を付与
   - 先ほど作成したリポジトリ `100-grid-math-generator` を選択

4. **ビルド設定**
   - Project name: `100-grid-math-generator`
   - Production branch: `main`
   - Build settings:
     - Framework preset: `None`
     - Build command: （空欄のまま）
     - Build output directory: `/`
   - 「Save and Deploy」をクリック

5. **デプロイ完了を待つ**
   - 1〜2分でデプロイ完了
   - 自動的にURLが発行されます
   - 例: `https://100-grid-math-generator.pages.dev`

---

### ステップ3: URLの更新

デプロイが完了したら、START.htmlのURLを更新します：

1. **発行されたURLをコピー**
   - Cloudflare Pagesの画面に表示されるURL

2. **START.htmlを更新**
   - LINE 352付近の以下の部分を修正：
   ```html
   <a href="https://your-domain.pages.dev/" ...>
   ```
   ↓
   ```html
   <a href="https://100-grid-math-generator.pages.dev/" ...>
   ```
   (実際に発行されたURLに置き換える)

3. **変更をGitHubにプッシュ**
   - GitHubのWebインターフェースでSTART.htmlを編集
   - または、ローカルで編集してpush

4. **Cloudflare Pagesが自動更新**
   - GitHubへのpush後、自動的に再デプロイ

---

## 🎉 完了！

### ユーザーの使い方

#### PC版（ZIP配布）
1. ZIPをダウンロード
2. 解凍
3. START.htmlを開く
4. 「アプリを起動する」ボタンをクリック

#### モバイル版（Web/PWA）
1. START.htmlの「スマホ・タブレット版を開く」リンクをクリック
2. または、直接URLにアクセス: `https://100-grid-math-generator.pages.dev/`
3. Safari/Chromeでページを開く
4. 「共有」→「ホーム画面に追加」でアプリ化（オプション）

---

## 🔄 アップデート方法

### ファイルを更新した場合

1. **GitHubリポジトリを更新**
   - Web UIで直接編集
   - または、ローカルで編集してpush

2. **Cloudflare Pagesが自動デプロイ**
   - GitHubにpushすると自動的に再デプロイ
   - 1〜2分で反映

3. **ユーザーには自動更新**
   - Service Workerが新しいバージョンを検出
   - 次回アクセス時に自動更新

### バージョン管理

service-worker.jsの以下の行を更新：
```javascript
const CACHE_NAME = '100-grid-math-v2.9.0'; // バージョン番号を変更
```

---

## 🛠️ トラブルシューティング

### PWAがインストールできない

**原因:** HTTPSが必要
**解決:** Cloudflare Pagesは自動的にHTTPSを提供（問題なし）

### オフラインで動作しない

**原因:** Service Workerが登録されていない
**確認方法:**
1. ブラウザの開発者ツールを開く（F12）
2. Console タブで「[PWA] Service Worker registered」が表示されるか確認

### アイコンが表示されない

**原因:** ファイルパスが間違っている
**解決:** 
1. pwa/フォルダがアップロードされているか確認
2. icon-512.svg, icon-192.svgが存在するか確認

---

## 📊 監視・分析（オプション）

### Cloudflare Analytics
- Cloudflare Pagesの管理画面で自動的に利用可能
- アクセス数、国別統計などが見れる

### Google Analytics（追加したい場合）
index.htmlの`<head>`内に追加：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 💰 費用

### 完全無料
- GitHub: 無料
- Cloudflare Pages: 無料
  - 月間リクエスト: 無制限
  - 帯域幅: 無制限
  - ビルド: 月500回まで

### 有料オプション（不要）
- カスタムドメイン: 年間1,000円〜
  - 例: `https://100-grid.kobeya-programming.com`

---

## 📞 サポート

### 質問がある場合
1. Cloudflare Pages ドキュメント: https://developers.cloudflare.com/pages/
2. GitHub ドキュメント: https://docs.github.com/

---

## 🎯 次のステップ（オプション）

### カスタムドメインの設定
1. ドメインを取得（お名前.com、ムームードメインなど）
2. Cloudflare Pagesの設定でカスタムドメイン追加
3. DNSレコードを設定

### プッシュ通知の実装
- service-worker.jsに実装済み（将来の拡張用）
- 必要に応じて有効化

### 多言語ページの作成
- START.htmlを各言語版に展開
- /en/index.html, /zh/index.html など

---

**デプロイ完了後、必ずモバイルデバイスでテストしてください！** 📱✨
