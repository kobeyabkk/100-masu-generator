# 🐛 バグ修正レポート - v2.10.9

## 📅 修正日: 2025-11-17

このバージョンでは、外部からの詳細な分析に基づいて、重要なバグを5つ修正しました。

---

## ✅ 修正したバグ

### 🔴 #1: gridSizeプロパティが存在しない問題（最優先）

**重要度**: ★★★★★ 最高優先度

**問題の詳細**:
```javascript
// 問題のあったコード
const { gridSize } = currentData;  // ❌ gridSizeは存在しない！
saveScore({
    gridSize: gridSize,  // ❌ undefinedが保存される
});

// 成績履歴表示
${score.gridSize}×${score.gridSize}  // ❌ undefined×undefinedになる
```

**影響**:
- 採点時に`gridSize`が`undefined`になる
- 成績履歴に正しいサイズが保存されない
- 長方形グリッド（5×10など）の場合、表示が間違う
- 採点機能が完全に壊れる可能性

**修正内容**:
```javascript
// js/input-mode.js 629行目
const { rowSize, colSize } = currentData;  // ✅ 正しいプロパティを取得

// 674-675行目
saveScore({
    date: new Date().toISOString(),
    rowSize: rowSize,   // ✅ rowSizeを保存
    colSize: colSize,   // ✅ colSizeを保存
    operation: currentData.operation,
    // ...
});

// 736-738行目（後方互換性対応）
const displayRows = score.rowSize || score.gridSize || 'N/A';
const displayCols = score.colSize || score.gridSize || 'N/A';

item.innerHTML = `
    <span class="history-date">${date}</span>
    <span class="history-details">${displayRows}×${displayCols} ${operationName}</span>
    // ...
`;
```

**後方互換性**:
- 旧データ（`gridSize`のみ）も表示可能
- 新データ（`rowSize`/`colSize`）を優先

---

### ⚡ #2: iOS Safari画面サイズ取得のタイミング問題

**重要度**: ★★★★☆ 高優先度

**問題の詳細**:
```javascript
// 問題のあったコード
window.addEventListener('orientationchange', () => {
    setTimeout(detectDevice, 100);  // ❌ 100msでは不十分
});
```

**影響**:
- 画面回転時にテンキーが正しく表示/非表示されない
- 横持ち推奨メッセージが正しく表示されない
- iOS Safariでの画面サイズ更新が間に合わない

**修正内容**:
```javascript
// js/input-mode.js 94-104行目
// ウィンドウリサイズ時の処理（デバウンス付き）
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(detectDevice, 150);  // ✅ デバウンス追加
});

// 画面回転時の処理（iOS Safari対応）
window.addEventListener('orientationchange', () => {
    // iOS Safariでは画面サイズ更新に時間がかかるため、待機時間を延長
    setTimeout(detectDevice, 200);  // ✅ 100ms → 200ms
});
```

**改善点**:
- `resize`イベントにデバウンス追加（150ms）
- `orientationchange`の待機時間を200msに延長
- iOS Safariでの画面サイズ更新を確実に待つ

---

### 📱 #3: CSSの100dvhと100vhの混在

**重要度**: ★★★☆☆ 中優先度

**問題の詳細**:
```css
/* 問題のあったコード */
#inputGrid {
    max-height: calc(100dvh - 250px);  /* 175行目 */
}

/* タブレット・スマホ横向き */
@media screen and (min-width: 481px) and (max-width: 1023px) {
    #inputGrid {
        max-height: calc(100vh - 300px);  /* 671行目 ❌ 不一致 */
    }
}
```

**影響**:
- iOS Safariで画面サイズの計算が不正確
- `100dvh`はアドレスバーの高さを考慮、`100vh`は考慮しない
- 一貫性がない

**修正内容**:
```css
/* css/input-mode.css 671行目 */
#inputGrid {
    max-height: calc(100dvh - 300px);  /* ✅ 100vh → 100dvh */
    min-height: 300px;
}
```

**統一方針**:
- すべて`100dvh`に統一
- iOS Safari対応を優先

---

### 🛡️ #6: detectDevice()のnullチェック不足

**重要度**: ★★☆☆☆ 中優先度

**問題の詳細**:
```javascript
// 問題のあったコード
function detectDevice() {
    numpad.style.display = 'none';  // ❌ numpadがnullの場合エラー
}
```

**影響**:
- DOM要素が読み込まれる前に実行されるとエラー
- `initInputMode()`の実行タイミングによってはエラーが発生

**修正内容**:
```javascript
// js/input-mode.js 117-120行目
function detectDevice() {
    // nullチェック
    if (!numpad) return;  // ✅ 追加
    
    isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    // ...
}
```

---

### 🛡️ #7: createInputGrid()のnullチェック不足

**重要度**: ★★☆☆☆ 中優先度

**問題の詳細**:
```javascript
// 問題のあったコード
const shouldSwap = swapOperandsCheckbox.checked;  // ❌ nullの場合エラー
```

**影響**:
- `swapOperandsCheckbox`がnullの場合、入力モードが動作しない

**修正内容**:
```javascript
// js/input-mode.js 295行目
const shouldSwap = swapOperandsCheckbox ? swapOperandsCheckbox.checked : false;  // ✅ nullチェック追加
```

---

## 📊 修正の影響範囲

| ファイル | 修正箇所 | 行数 |
|---------|---------|------|
| `js/input-mode.js` | gradeAnswers関数 | 629 |
| `js/input-mode.js` | saveScore呼び出し | 674-675 |
| `js/input-mode.js` | displayScoreHistory関数 | 736-738 |
| `js/input-mode.js` | イベントリスナー | 94-104 |
| `js/input-mode.js` | detectDevice関数 | 117-120 |
| `js/input-mode.js` | createInputGrid関数 | 295 |
| `css/input-mode.css` | メディアクエリ | 671 |
| `service-worker.js` | バージョン更新 | 2-4 |
| `README.md` | 変更履歴 | 443-468 |

---

## 🧪 テスト項目

### 必須テスト

1. **採点機能のテスト**:
   - ✅ 10×10のかけ算で採点
   - ✅ 5×10の長方形で採点
   - ✅ 成績履歴に正しいサイズが表示される

2. **iOS Safariでのテスト**:
   - ✅ 画面回転時にテンキーが正しく切り替わる
   - ✅ 横持ち推奨メッセージが正しく表示される

3. **後方互換性のテスト**:
   - ✅ 旧データ（gridSizeのみ）が正しく表示される
   - ✅ 新データ（rowSize/colSize）が正しく表示される

### 推奨テスト

4. **長方形グリッドのテスト**:
   - 5×10、8×12など
   - 採点後の成績履歴表示

5. **スマホでのテスト**:
   - 縦→横の回転
   - 横→縦の回転
   - テンキーの表示/非表示

---

## 📝 残りの問題（今回修正しなかった項目）

### 中優先度
- #4: `input`イベントの手動発火がiOS Safariで動作しない可能性
- #5: カーソル位置復元が不安定
- #8: 日付フォーマットが言語によって異なる

### 低優先度
- #9: Service Workerのパスが絶対パス
- #10: 浮動小数点数の比較が不正確

これらは次回以降のリリースで対応予定です。

---

## 🚀 デプロイ手順

1. **Publishタブからデプロイ**
2. **キャッシュクリア必須**:
   - PC: `Ctrl+Shift+R` (Win/Linux) / `Cmd+Shift+R` (Mac)
   - スマホ: ブラウザ設定 → 履歴 → 閲覧データを削除
3. **動作確認**:
   - 採点機能のテスト
   - 成績履歴の表示確認

---

## 💡 今回の教訓

1. **データ構造の一貫性**: `gridSize` vs `rowSize`/`colSize`
2. **後方互換性の重要性**: 旧データも表示可能にする
3. **iOS Safari特有の問題**: タイミングと画面サイズ取得
4. **nullチェックの徹底**: すべてのDOM操作で確認

---

**バージョン**: v2.10.9  
**修正日**: 2025-11-17  
**修正数**: 5件（重要3件、中程度2件）  
**影響**: 採点機能、成績履歴、iOS Safari対応
