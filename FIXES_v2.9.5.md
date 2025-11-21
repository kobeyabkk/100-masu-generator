# v2.9.5 修正内容：iOS Safari sticky表示バグ

## 問題の概要

iPhoneのSafariで入力モードを使用した際、**3行目以降が表示されない（2行目までしか見えない）**という重大なバグが発生していました。

## 原因分析

Claude、Gemini、ChatGPT、Gensparkの4つのAIアシスタントによる協力分析により、以下の複合的な原因が特定されました：

### 1. iOS Safariの既知バグ
- `border-collapse: collapse` と `position: sticky` の組み合わせで、テーブルの描画が途中で切れる
- これはiOS Safari特有の問題で、AndroidやPCのブラウザでは発生しない

### 2. レイアウト計算の問題
- `#inputGrid` に `display: inline-block` を使用していたため、`max-height` との相互作用で意図しない高さ制限が発生
- テーブルの自然な高さ計算が正しく行われなかった

### 3. スクロールコンテキストの競合
- テーブルの高さ計算と親要素の `max-height` 制約、そして `position: sticky` の組み合わせがレンダリングエンジンで競合

## 修正内容

### CSS の修正（`css/input-mode.css`）

#### 1. スクロールコンテナの最適化
```css
#inputGrid {
    display: block; /* inline-blockからblockに変更 */
    overflow: auto;
    max-height: calc(100vh - 250px);
    min-height: 400px; /* 最小高さを確保 */
    position: relative; /* stickyの基準点を明確に */
    -webkit-overflow-scrolling: touch; /* iOS用スムーススクロール */
}
```

#### 2. テーブルレイアウトの変更
```css
/* 通常モード */
.input-table:not(.sticky-headers) {
    border-collapse: collapse;
}

/* Stickyモード - iOS Safari対策 */
.input-table.sticky-headers {
    border-collapse: separate; /* ★ 重要な変更 */
    border-spacing: 0; /* セル間の隙間をなくす */
}
```

#### 3. Safariベンダープレフィックスの追加
```css
.input-table.sticky-headers td.corner {
    position: -webkit-sticky; /* Safari対応 */
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10; /* より高い値に */
    background-color: #333; /* 背景色を再指定（重要） */
}

.input-table.sticky-headers tr:first-child td.header {
    position: -webkit-sticky; /* Safari対応 */
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: #e0e0e0; /* 背景色を再指定（重要） */
}

.input-table.sticky-headers td.header:first-child {
    position: -webkit-sticky; /* Safari対応 */
    position: sticky;
    left: 0;
    z-index: 5;
    background-color: #e0e0e0; /* 背景色を再指定（重要） */
}
```

#### 4. ボーダーの調整（二重線防止）
```css
/* Stickyモードの時は二重線を防ぐ */
.input-table.sticky-headers td {
    border-right-width: 1px;
    border-bottom-width: 1px;
}

.input-table.sticky-headers td:last-child {
    border-right-width: 2px;
}

.input-table.sticky-headers tr:last-child td {
    border-bottom-width: 2px;
}
```

### JavaScript の修正（`js/input-mode.js`）

#### デバッグログの追加
```javascript
// デバッグログ：テーブルの状態確認
console.log('=== Input Grid Created ===');
console.log('Table dimensions:', {
    rows: rowCount + 1,
    cols: colCount + 1,
    totalRows: table.querySelectorAll('tr').length,
    totalCells: table.querySelectorAll('td').length
});
console.log('Table height:', table.offsetHeight, 'px');
console.log('Grid container height:', inputGrid.offsetHeight, 'px');
console.log('Grid scroll height:', inputGrid.scrollHeight, 'px');
console.log('Sticky mode:', stickyHeaderMode ? 'ON' : 'OFF');
```

## 修正のポイント

### 最も重要な変更
**`border-collapse: separate` への変更**がこの問題の決定的な解決策でした。これは：
- iOS Safariの `position: sticky` バグを回避
- `border-spacing: 0` で見た目は `collapse` と同じに
- セルの境界を明確にして、stickyの計算を安定化

### その他の重要な変更
1. **`display: block`**: 高さ計算の安定化
2. **`-webkit-sticky`**: Safari対応のベンダープレフィックス
3. **`-webkit-overflow-scrolling: touch`**: iOS でのスムーススクロール
4. **z-index の適切な設定**: 要素の重なり順を明確化
5. **背景色の再指定**: sticky 要素の透過防止

## テスト結果

### 修正前
- ❌ iPhoneで2行目までしか表示されない
- ❌ スクロールしても3行目以降が現れない
- ❌ グリッド全体の高さが正しく計算されていない

### 修正後
- ✅ すべての行が正しく表示される
- ✅ スクロールがスムーズに動作
- ✅ ヘッダー固定機能が安定動作
- ✅ すべてのグリッドサイズ（3×3～15×15）で正常動作
- ✅ iPhone、iPad、PC、Androidすべてで正常動作

## 参考資料

この問題の解決には、以下のAIアシスタントの分析が役立ちました：

1. **Claude**: `border-collapse: collapse` と `position: sticky` の相性問題を特定
2. **Gemini**: iOS Safari の既知バグとして詳細な解説
3. **ChatGPT**: 実践的な解決策と実装例を提供
4. **Genspark**: 包括的な原因分析と段階的な解決策

## 今後の注意点

- テーブルで `position: sticky` を使用する場合は、必ず `border-collapse: separate` を使用
- iOS Safari でのテストを必ず実施
- z-index と背景色を明示的に指定
- スクロールコンテナは `display: block` を推奨

---

**修正日**: 2025年11月16日  
**バージョン**: v2.9.5  
**修正者**: 鈴木政路 + AI協力チーム（Claude, Gemini, ChatGPT, Genspark）
