# 📦 ZIP販売パッケージ作成ガイド

このファイルは**鈴木様専用**の作業手順書です。ZIPには含めません。

---

## ✅ ZIPに含めるファイル

### 必須ファイル
```
百マス計算ジェネレーター/
├── index.html              ← メインファイル
├── HOW_TO_USE_JP.md       ← 日本語ガイド
├── HOW_TO_USE_EN.md       ← 英語ガイド
├── HOW_TO_USE_CN.md       ← 中国語ガイド
├── LICENSE.txt            ← ライセンス情報
├── VERSION.txt            ← バージョン情報
├── css/
│   └── style.css
└── js/
    ├── main.js
    └── translations.js
```

### 含めないファイル
```
❌ README.md（開発者用）
❌ GUMROAD_DESCRIPTION.md（商品ページ用）
❌ PACKAGING_GUIDE.md（このファイル）
❌ .git/（Gitリポジトリ情報）
❌ node_modules/（もしあれば）
```

---

## 🔨 ZIP作成手順

### 方法1：手動作成（推奨）

#### Windows
1. 必要なファイルを新しいフォルダにコピー
2. フォルダ名を「**100-Grid-Math-Generator-v2.0.1**」に変更
3. フォルダを右クリック → 「送る」 → 「圧縮（zip形式）フォルダー」

#### Mac
1. 必要なファイルを新しいフォルダにコピー
2. フォルダ名を「**100-Grid-Math-Generator-v2.0.1**」に変更
3. フォルダを右クリック → 「"フォルダ名"を圧縮」

---

### 方法2：コマンドライン

```bash
# フォルダに移動
cd /path/to/project

# ZIP作成（不要なファイルを除外）
zip -r 100-Grid-Math-Generator-v2.0.1.zip \
  index.html \
  HOW_TO_USE_JP.md \
  HOW_TO_USE_EN.md \
  HOW_TO_USE_CN.md \
  LICENSE.txt \
  VERSION.txt \
  css/ \
  js/ \
  -x "*.DS_Store" ".git/*" "README.md" "GUMROAD_DESCRIPTION.md" "PACKAGING_GUIDE.md"
```

---

## ✅ 検証チェックリスト

ZIPファイル作成後、以下を確認してください：

### 1. ファイル構造の確認
- [ ] フォルダ名が「100-Grid-Math-Generator-v2.0.1」
- [ ] index.htmlが最上位にある
- [ ] css/フォルダとjs/フォルダがある
- [ ] 3つの使い方ガイド（JP, EN, CN）がある
- [ ] LICENSE.txtとVERSION.txtがある

### 2. 動作確認
- [ ] ZIPを解凍
- [ ] index.htmlをブラウザで開く
- [ ] 言語切り替えが動作する
- [ ] 問題生成が動作する
- [ ] 印刷プレビューが正しい（1ページのみ）
- [ ] 全角数字の自動変換が動作する

### 3. ドキュメント確認
- [ ] HOW_TO_USE_JP.mdが読める
- [ ] HOW_TO_USE_EN.mdが読める
- [ ] HOW_TO_USE_CN.mdが読める
- [ ] LICENSE.txtが読める
- [ ] VERSION.txtが読める

### 4. ファイルサイズ確認
- [ ] ZIPファイルサイズが1MB以下
- [ ] 不要なファイルが含まれていない

---

## 📤 Gumroadアップロード手順

### 1. Gumroadにログイン
https://gumroad.com にアクセス

### 2. 新しい商品を作成
1. 「New Product」をクリック
2. 「Digital Product」を選択

### 3. 基本情報を入力

#### 商品名（日本語版）
```
百マス計算ジェネレーター | 10言語対応 | A4印刷最適化
```

#### 商品名（英語版）
```
100-Grid Math Generator | 10 Languages | A4 Print-Optimized
```

#### 短い説明
```
Generate customizable 100-grid math worksheets instantly! 
10 languages, 13 sizes, 4 operations. Perfect for teachers, tutors, and parents.
```

### 4. 価格設定

#### 推奨価格
- 日本市場：¥2,980
- 英語市場：$14.99
- 中国市場：¥59（人民元）

#### Gumroadでの設定
- Base Price: $14.99（USDで設定）
- 「Purchasing Power Parity」を有効化（地域別価格自動調整）

### 5. ZIPファイルをアップロード
1. 「Content」セクションで「Add file」
2. 作成したZIPファイルを選択
3. ファイル名を確認：「100-Grid-Math-Generator-v2.0.1.zip」

### 6. 商品画像をアップロード
- サイズ：1400×1400px 以上
- 形式：JPG または PNG
- 内容：アプリのスクリーンショット + テキスト

### 7. 商品説明を入力
GUMROAD_DESCRIPTION.mdの内容をコピー＆ペースト

### 8. カテゴリーとタグ設定

#### カテゴリー
- Education
- Software

#### タグ
```
math, education, worksheet, teaching, homeschool, 
multiplication, addition, subtraction, division,
japanese, multilingual, printable
```

### 9. プレビューと公開
1. 「Preview」で確認
2. 問題なければ「Publish」

---

## 🎯 マーケティング素材

### 必要な画像（作成推奨）

#### 1. 商品サムネイル（1400×1400px）
```
内容案：
- 背景：明るいグラデーション
- 中央：アプリのスクリーンショット
- テキスト：「百マス計算ジェネレーター」
- サブテキスト：「10言語対応」「A4印刷」
- 価格表示：「¥2,980」
```

#### 2. スクリーンショット（5枚）
1. メイン画面（日本語）
2. 問題生成画面
3. 印刷プレビュー
4. 言語選択メニュー
5. 多言語対応の様子（英語・中国語）

#### 3. デモ動画（60秒）
```
構成案：
0:00-0:10 オープニング「たった30秒で百マス計算を作成」
0:10-0:20 ファイルを開く
0:20-0:40 設定を選んで生成
0:40-0:50 印刷プレビュー
0:50-1:00 「今すぐダウンロード」CTA
```

---

## 📊 販売開始後の確認事項

### 最初の24時間
- [ ] 購入者からのダウンロード報告を確認
- [ ] エラー報告がないか確認
- [ ] SNSでの反応をチェック

### 最初の1週間
- [ ] 売上を確認
- [ ] レビューを確認
- [ ] 問い合わせに対応
- [ ] 必要に応じて商品ページを改善

### 定期的に
- [ ] Gumroadの売上レポートを確認
- [ ] 購入者からのフィードバックを収集
- [ ] アップデートの必要性を検討

---

## 🔄 アップデート時の手順

新しいバージョンをリリースする場合：

1. VERSION.txtを更新
2. HOW_TO_USE_*.mdのバージョン番号を更新
3. 新しいZIPファイルを作成
4. Gumroadで「Replace file」
5. 既存購入者に通知メールを送信

---

## 💡 トラブルシューティング

### Q: ZIPファイルが大きすぎる

**A**: 以下を確認
- 画像ファイルが含まれていないか
- node_modules/が含まれていないか
- .gitフォルダが含まれていないか

### Q: 購入者から「開けない」と報告

**A**: 
1. ZIP解凍方法を案内
2. index.htmlをブラウザで開く方法を説明
3. 必要に応じてサポート動画を作成

### Q: 特定のブラウザで動作しない

**A**:
- Chrome、Safari、Edge、Firefoxを推奨
- 古いブラウザの場合はアップデートを推奨

---

## 📞 サポート体制

### 問い合わせ対応
- Gumroad購入ページのメッセージ機能を使用
- 24時間以内の返信を目標に

### よくある質問（FAQ）を準備
1. ファイルの開き方
2. 印刷方法
3. カスタマイズ方法
4. アップデート方法

---

## 🎉 完了！

これで販売準備は完了です！

**次のステップ**：
1. ZIPファイルを作成
2. Gumroadにアップロード
3. 商品ページを公開
4. SNSで告知
5. プログラミングのKOBEYAで案内

頑張ってください！ 🚀

---

**作成日**：2025年11月10日
**バージョン**：2.0.1
