# 🔴 重大なバグ修正 - v2.10.5

## 問題の概要

**入力モードタブをクリックしても何も起こらない**

## 根本原因

### CSSの構造
```css
/* style.css */
.print-area {
    display: none; /* デフォルトで非表示 */
}

.print-area.active {
    display: block; /* .activeがあれば表示 */
}

/* input-mode.css */
.mode-hidden {
    display: none !important; /* 強制非表示 */
}
```

### 問題のあったコード (修正前)
```javascript
function switchMode(mode) {
    if (mode === 'print') {
        printArea.classList.remove('mode-hidden'); // ❌ .activeがないと表示されない！
        inputArea.style.display = 'none';
    } else {
        printArea.classList.add('mode-hidden'); // ✅ これは正しい
        inputArea.style.display = 'block'; // ❌ inputAreaがnullの可能性
    }
}
```

**問題点**:
1. 印刷モード → 入力モード: `.mode-hidden`追加するが`.active`はそのまま
2. 入力モード → 印刷モード: `.mode-hidden`削除するが`.active`がないので表示されない！

## 修正内容

### 1. `.active`クラスの適切な管理

```javascript
function switchMode(mode) {
    if (mode === 'print') {
        // 印刷モード
        if (printArea) {
            printArea.classList.remove('mode-hidden'); // 強制非表示を解除
            printArea.classList.add('active'); // ✅ 表示するために.activeを追加
        }
        if (inputArea) {
            inputArea.style.display = 'none';
        }
    } else {
        // 入力モード
        if (printArea) {
            printArea.classList.add('mode-hidden'); // 強制非表示
            // ✅ .activeは残す（印刷モードに戻った時のため）
        }
        if (inputArea) {
            inputArea.style.display = 'block';
        }
        // ...
    }
}
```

### 2. printAreaのグローバル変数宣言

```javascript
// input-mode.js (修正前)
// printAreaはmain.jsでグローバル宣言済みと仮定

// input-mode.js (修正後)
let printModeTab, inputModeTab, inputArea, printArea; // ✅ printAreaを明示的に宣言

function initInputMode() {
    printArea = document.getElementById('printArea'); // ✅ 取得
    
    // nullチェック
    if (!printArea || !inputArea) {
        console.error('[initInputMode] 重要な要素が見つかりません');
        return;
    }
}
```

### 3. nullチェックの追加

すべてのDOM操作で`if (element)`チェックを追加:
- `if (printArea)`
- `if (inputArea)`
- `if (toggleStickyBtn)`

## 影響範囲

**修正ファイル**:
- `js/input-mode.js` (204-250行目 switchMode関数、27-50行目 initInputMode関数)
- `service-worker.js` (バージョンをv2.10.5に更新)
- `README.md` (変更履歴追加)

## テスト項目

1. ✅ 印刷モードタブをクリック → 印刷エリアが表示される
2. ✅ 入力モードタブをクリック → 入力エリアが表示される
3. ✅ 印刷モード ⇄ 入力モードを繰り返し切り替え → 正常に動作
4. ✅ 問題が生成されていない状態で入力モード → メッセージが表示される
5. ✅ PCとスマホ両方で動作確認

## デバッグ方法

もし動作しない場合:

1. **ブラウザのコンソールを開く** (F12)
2. **エラーメッセージを確認**:
   ```
   [initInputMode] 重要な要素が見つかりません
   ```
3. **要素の存在確認**:
   ```javascript
   console.log(document.getElementById('printArea'));
   console.log(document.getElementById('inputArea'));
   ```
4. **クラスの状態確認**:
   ```javascript
   console.log(printArea.classList);
   ```

## まとめ

この修正により、**入力モードタブが確実に動作**するようになります。

**キーポイント**:
- `.active`と`.mode-hidden`の**両方**を管理する
- DOM要素の**nullチェック**を必ず行う
- printAreaを**明示的に宣言・取得**する

---

**バージョン**: v2.10.5  
**修正日**: 2025-11-17  
**修正者**: AI Assistant
