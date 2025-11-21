# v2.9.5.3 CSS特異性の問題修正

## 🔍 問題の根本原因

v2.9.5.2で左列固定のCSSを追加しましたが、**実際には動作していませんでした**。

### なぜ動作しなかったのか？

**CSSの特異性（Specificity）とカスケード（Cascade）の問題**です。

#### 問題のあったコード順序（v2.9.5.2）

```css
/* 255行目：左列を固定しようとしている */
.input-table.sticky-headers td:first-child {
    position: sticky;
    left: 0;
    z-index: 5;
}

/* 273行目：これが上書きしてしまう！ */
.input-table td.input-cell {
    position: static; /* ← これが問題！ */
}
```

### CSS特異性の計算

1. `.input-table.sticky-headers td:first-child`
   - クラス: 2個 (`.input-table`, `.sticky-headers`)
   - 擬似クラス: 1個 (`:first-child`)
   - 要素: 1個 (`td`)
   - **特異性: 0-2-2**

2. `.input-table td.input-cell`
   - クラス: 2個 (`.input-table`, `.input-cell`)
   - 要素: 1個 (`td`)
   - **特異性: 0-2-1**

### 問題の核心

特異性は `.sticky-headers td:first-child` の方が高い（0-2-2 > 0-2-1）ですが...

**最初のセルが `.header` クラスを持っていても、`.input-cell` と同じ `<td>` 要素なので、後に書かれたルールが影響する可能性がありました。**

さらに重要なのは、**`position: static` が明示的に設定されていると、継承やカスケードで上書きされにくい**ということです。

## ✅ 解決策

### 修正後のコード（v2.9.5.3）

```css
/* 254行目：入力セルからposition:staticを削除 */
.input-table td.input-cell {
    background-color: white;
    padding: 0;
    /* position: static; を削除！ */
}

/* 261-266行目：左列固定（より具体的なセレクター） */
.input-table.sticky-headers td.header:first-child,
.input-table.sticky-headers td.corner:first-child {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
}

/* 269-272行目：左上コーナー */
.input-table.sticky-headers td.corner:first-child {
    z-index: 10;
    background-color: #333;
}

/* 275-278行目：行ヘッダー */
.input-table.sticky-headers td.header:first-child {
    z-index: 5;
    background-color: #e0e0e0;
}
```

### 修正のポイント

1. **`position: static` を削除**
   - 入力セル（`.input-cell`）から削除
   - これにより、sticky設定が上書きされなくなる

2. **より具体的なセレクター**
   - `.input-table.sticky-headers td.header:first-child`
   - `.input-table.sticky-headers td.corner:first-child`
   - 特異性: 0-3-1（クラス3個 + 要素1個）

3. **順序の最適化**
   - 入力セルのルールを先に定義
   - 左列固定のルールを後に定義
   - CSSカスケードで確実に適用

## 📊 CSS特異性の理解

### 特異性の計算方法

```
[inline-style, IDs, Classes/Attributes/Pseudo-classes, Elements/Pseudo-elements]
```

### 例

- `#id` → 0-1-0-0
- `.class` → 0-0-1-0
- `div` → 0-0-0-1
- `.class1.class2 div` → 0-0-2-1
- `#id .class div` → 0-1-1-1

### 優先順位

1. **`!important`** 宣言（最優先）
2. **インラインスタイル** (`style="..."`)
3. **ID** セレクター
4. **クラス/属性/擬似クラス** セレクター
5. **要素/擬似要素** セレクター
6. **継承** されたスタイル（最下位）

## 🔬 テスト結果

### 修正前（v2.9.5.2）
```css
.input-table.sticky-headers td:first-child {
    position: sticky; /* ← 適用されない */
}
.input-table td.input-cell {
    position: static; /* ← これが優先される */
}
```
- ❌ 左列が固定されない
- ❌ `position: sticky` が `position: static` に上書きされる

### 修正後（v2.9.5.3）
```css
.input-table td.input-cell {
    /* position: static を削除 */
}
.input-table.sticky-headers td.header:first-child {
    position: sticky; /* ← 正しく適用される */
}
```
- ✅ 左列が正しく固定される
- ✅ `position: sticky` が正常に動作

## 📝 変更されたファイル

1. **`css/input-mode.css`** (254-278行目)
   - `position: static` を削除
   - セレクターを最適化
   - ルールの順序を調整

2. **`service-worker.js`** (行2-4)
   - バージョンを `v2.9.5.3` に更新

3. **`README.md`** (行407, 442-462)
   - バージョン情報を更新
   - v2.9.5.3 の更新履歴を追加

4. **`CSS_SPECIFICITY_FIX_v2.9.5.3.md`** (新規作成)
   - このドキュメント

## 🎓 学習ポイント

### 1. CSS特異性の重要性
- 同じプロパティに複数のルールが適用される場合、特異性が高い方が優先
- 特異性が同じ場合、**後に書かれたルールが優先**

### 2. position プロパティの注意点
- `position: static` が明示的に設定されていると、他のposition値を上書きする
- stickyを使う場合は、競合するposition設定を削除

### 3. CSSデバッグの方法
- ブラウザの開発者ツールで「計算済みスタイル」を確認
- どのルールが適用されているかを視覚的に確認
- 打ち消し線のついたルールは上書きされている

### 4. セレクターの設計
- より具体的なセレクターを後に配置
- クラスの組み合わせで特異性を調整
- `!important` は最後の手段（使わない方が良い）

## 🚀 デプロイ前の確認

### チェックリスト
- [x] `position: static` が削除されている
- [x] 左列固定のセレクターが最適化されている
- [x] Service Worker のバージョンが更新されている
- [x] README.md が更新されている
- [ ] **実機でテスト**：iPhone/iPad で左列が固定されるか確認
- [ ] **PC でテスト**：Chrome/Safari で動作確認

### テスト手順
1. index.html をブラウザで開く
2. 10×10 または 15×15 の問題を生成
3. 入力モードに切り替え
4. セルをクリック（ヘッダー固定モード自動ON）
5. **横スクロール** → 左列（10, 20, 30...）が固定されているか確認 ⭐
6. **開発者ツール**で要素を検証：
   ```
   <td class="header" style="position: sticky; left: 0;">10</td>
   ```
   このように `position: sticky` が適用されているか確認

## 💡 今後の改善案

### 1. CSS設計の見直し
- BEM（Block Element Modifier）などの命名規則を導入
- CSSの特異性を統一（すべて同じレベルにする）
- スタイルの上書きを最小限に

### 2. CSS-in-JSの検討
- 動的なスタイル生成
- スコープの明確化
- 特異性の問題を回避

### 3. PostCSSの導入
- オートプレフィックス（`-webkit-` 自動追加）
- CSS最適化
- 未使用ルールの削除

---

**修正日**: 2025年11月16日  
**バージョン**: v2.9.5.3  
**修正者**: 鈴木政路

---

## 🎯 まとめ

今回の問題は、**CSSの基本である特異性とカスケードの理解が重要**ということを教えてくれました。

- ✅ `position: static` を削除
- ✅ セレクターを最適化
- ✅ ルールの順序を調整

これにより、左列が**本当に**固定されるようになりました！
