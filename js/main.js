// グローバル変数
let currentData = null;

// DOM要素（グローバルスコープで宣言）
let operationSelect, rowSizeSelect, colSizeSelect, firstMinInput, firstMaxInput;
let secondMinInput, secondMaxInput, useFixedNumbersCheckbox, fixedNumbersPanel;
let fixedFirstNumbers, fixedSecondNumbers, generateBtn, printBtn, printArea;
let firstNumberLabel, secondNumberLabel, fixedFirstLabel, fixedSecondLabel;
let languageSelect, swapOperandsCheckbox, allowNegativeCheckbox;
let randomNegativeCheckbox, randomNegativeInline;
let randomShuffleCheckbox, randomShuffleInline;
let divisionPresetPanel, divisionPresetRadios;

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    // DOM要素の取得
    operationSelect = document.getElementById('operation');
    rowSizeSelect = document.getElementById('rowSize');
    colSizeSelect = document.getElementById('colSize');
    firstMinInput = document.getElementById('firstMin');
    firstMaxInput = document.getElementById('firstMax');
    secondMinInput = document.getElementById('secondMin');
    secondMaxInput = document.getElementById('secondMax');
    useFixedNumbersCheckbox = document.getElementById('useFixedNumbers');
    fixedNumbersPanel = document.getElementById('fixedNumbersPanel');
    fixedFirstNumbers = document.getElementById('fixedFirstNumbers');
    fixedSecondNumbers = document.getElementById('fixedSecondNumbers');
    generateBtn = document.getElementById('generateBtn');
    printBtn = document.getElementById('printBtn');
    printArea = document.getElementById('printArea');
    
    // ラベル要素
    firstNumberLabel = document.getElementById('firstNumberLabel');
    secondNumberLabel = document.getElementById('secondNumberLabel');
    fixedFirstLabel = document.getElementById('fixedFirstLabel');
    fixedSecondLabel = document.getElementById('fixedSecondLabel');
    
    // 言語選択の要素
    languageSelect = document.getElementById('languageSelect');
    swapOperandsCheckbox = document.getElementById('swapOperands');
    allowNegativeCheckbox = document.getElementById('allowNegative');
    randomNegativeCheckbox = document.getElementById('randomNegative');
    randomNegativeInline = document.getElementById('randomNegativeInline');
    randomShuffleCheckbox = document.getElementById('randomShuffle');
    randomShuffleInline = document.getElementById('randomShuffleInline');
    
    // 割り算プリセット要素
    divisionPresetPanel = document.getElementById('divisionPresetPanel');
    divisionPresetRadios = document.querySelectorAll('input[name="divisionPreset"]');
    
    // イベントリスナーの設定
    operationSelect.addEventListener('change', () => {
        updateLabelsAndDefaults();
        toggleDivisionPresetPanel();
    });
    useFixedNumbersCheckbox.addEventListener('change', () => {
        toggleFixedNumbersPanel();
        toggleRandomShuffleInline();
        // 固定数値モードが切り替わったら、行数・列数の調整をトリガー
        if (!useFixedNumbersCheckbox.checked) {
            autoAdjustGridSize();
        }
    });
    generateBtn.addEventListener('click', generateProblem);
    printBtn.addEventListener('click', () => window.print());
    languageSelect.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });
    
    // 筆算形式チェックボックスの変更をlocalStorageに保存
    swapOperandsCheckbox.addEventListener('change', () => {
        localStorage.setItem('swapOperands', swapOperandsCheckbox.checked);
    });
    
    // 負の数チェックボックスの変更処理
    allowNegativeCheckbox.addEventListener('change', () => {
        updateNumberInputMinValues();
        toggleRandomNegativeInline();
        localStorage.setItem('allowNegative', allowNegativeCheckbox.checked);
    });
    
    // ランダム負の数チェックボックスの変更処理
    randomNegativeCheckbox.addEventListener('change', () => {
        localStorage.setItem('randomNegative', randomNegativeCheckbox.checked);
    });
    
    // ランダム配置チェックボックスの変更処理
    randomShuffleCheckbox.addEventListener('change', () => {
        localStorage.setItem('randomShuffle', randomShuffleCheckbox.checked);
    });
    
    // 数値範囲が変更されたら行数・列数を自動調整
    firstMinInput.addEventListener('change', autoAdjustGridSize);
    firstMaxInput.addEventListener('change', autoAdjustGridSize);
    secondMinInput.addEventListener('change', autoAdjustGridSize);
    secondMaxInput.addEventListener('change', autoAdjustGridSize);
    
    // 行数・列数が変更されたら数値範囲を自動調整
    rowSizeSelect.addEventListener('change', autoAdjustNumberRanges);
    colSizeSelect.addEventListener('change', () => {
        autoAdjustNumberRanges();
        // わり算プリセット使用時は列数に応じて除数範囲を再調整
        if (operationSelect.value === 'division') {
            const selectedPreset = document.querySelector('input[name="divisionPreset"]:checked');
            if (selectedPreset && selectedPreset.value !== 'custom') {
                applyDivisionPreset();
            }
        }
    });
    
    // 割り算プリセットのラジオボタン変更処理
    divisionPresetRadios.forEach(radio => {
        radio.addEventListener('change', applyDivisionPreset);
    });
    
    // 固定数値入力フィールドの自動変換（リアルタイム）
    if (fixedFirstNumbers) {
        fixedFirstNumbers.addEventListener('input', function(e) {
            normalizeInputValue(this);
        });
        fixedFirstNumbers.addEventListener('compositionend', function(e) {
            normalizeInputValue(this);
        });
    }
    
    if (fixedSecondNumbers) {
        fixedSecondNumbers.addEventListener('input', function(e) {
            normalizeInputValue(this);
        });
        fixedSecondNumbers.addEventListener('compositionend', function(e) {
            normalizeInputValue(this);
        });
    }
    
    // 言語設定の読み込み
    loadSavedLanguage();
    languageSelect.value = currentLanguage;
    updateUILanguage();
    
    // 筆算形式設定の読み込み
    const savedSwapOperands = localStorage.getItem('swapOperands');
    if (savedSwapOperands !== null) {
        swapOperandsCheckbox.checked = savedSwapOperands === 'true';
    }
    
    // 負の数設定の読み込み
    const savedAllowNegative = localStorage.getItem('allowNegative');
    if (savedAllowNegative !== null) {
        allowNegativeCheckbox.checked = savedAllowNegative === 'true';
    }
    
    // ランダム負の数設定の読み込み
    const savedRandomNegative = localStorage.getItem('randomNegative');
    if (savedRandomNegative !== null) {
        randomNegativeCheckbox.checked = savedRandomNegative === 'true';
    }
    
    // ランダム配置設定の読み込み
    const savedRandomShuffle = localStorage.getItem('randomShuffle');
    if (savedRandomShuffle !== null) {
        randomShuffleCheckbox.checked = savedRandomShuffle === 'true';
    }
    
    // 割り算プリセット設定の読み込み
    const savedDivisionPreset = localStorage.getItem('divisionPreset');
    if (savedDivisionPreset) {
        const presetRadio = document.querySelector(`input[name="divisionPreset"][value="${savedDivisionPreset}"]`);
        if (presetRadio) {
            presetRadio.checked = true;
        }
    }
    
    // 初期のmin値とインライン表示を設定
    updateNumberInputMinValues();
    toggleRandomNegativeInline();
    toggleRandomShuffleInline();
    toggleDivisionPresetPanel();
    
    // 前回の設定を読み込む（updateLabelsAndDefaults()の前にデフォルト値が設定されないように注意）
    loadSavedSettings();
    
    // アコーディオンの初期化
    initAccordion();
    
    // 入力モードの初期化
    initInputMode();
});

/**
 * UIの言語を更新
 */
function updateUILanguage() {
    // ページタイトル
    document.getElementById('pageTitle').textContent = t('pageTitle');
    document.title = t('pageTitle');
    
    // クイックスタートボタン
    document.getElementById('quickStartMultiplicationLabel').textContent = t('quickStartMultiplication');
    document.getElementById('quickStartAdditionLabel').textContent = t('quickStartAddition');
    document.getElementById('quickStartSubtractionLabel').textContent = t('quickStartSubtraction');
    
    // ラベル
    document.getElementById('operationLabel').textContent = t('operation');
    document.getElementById('rowSizeLabel').textContent = t('rowSize');
    document.getElementById('colSizeLabel').textContent = t('colSize');
    document.getElementById('useFixedNumbersLabel').textContent = t('useFixedNumbers');
    document.getElementById('swapOperandsLabel').textContent = t('swapOperands');
    document.getElementById('allowNegativeLabel').textContent = t('allowNegative');
    document.getElementById('randomNegativeLabel').textContent = t('randomNegative');
    document.getElementById('randomShuffleLabel').textContent = t('randomShuffle');
    
    // 演算の選択肢
    const operationOptions = document.querySelectorAll('#operation option');
    operationOptions[0].textContent = t('addition');
    operationOptions[1].textContent = t('subtraction');
    operationOptions[2].textContent = t('multiplication');
    operationOptions[3].textContent = t('division');
    
    // ボタン
    document.getElementById('generateBtn').textContent = t('generateButton');
    document.getElementById('printBtn').textContent = t('printButton');
    
    // プレースホルダーとヒント
    document.getElementById('fixedFirstNumbers').placeholder = t('fixedNumbersPlaceholder');
    document.getElementById('fixedSecondNumbers').placeholder = t('fixedNumbersPlaceholder');
    document.getElementById('fixedNumbersHint1').textContent = t('fixedNumbersHint');
    document.getElementById('fixedNumbersHint2').textContent = t('fixedNumbersHint');
    
    // 演算に応じたラベルを更新
    updateLabelsAndDefaults();
    
    // アコーディオンラベルの翻訳
    const advancedSettingsLabel = document.getElementById('advancedSettingsLabel');
    if (advancedSettingsLabel) advancedSettingsLabel.textContent = t('advancedSettings');
    
    // 横持ちメッセージの翻訳
    const rotateDeviceTitle = document.getElementById('rotateDeviceTitle');
    const rotateDeviceVerticalOK = document.getElementById('rotateDeviceVerticalOK');
    const rotateDeviceTraining = document.getElementById('rotateDeviceTraining');
    if (rotateDeviceTitle) rotateDeviceTitle.textContent = t('rotateDevice');
    if (rotateDeviceVerticalOK) rotateDeviceVerticalOK.textContent = t('rotateDeviceVerticalOK');
    if (rotateDeviceTraining) rotateDeviceTraining.textContent = t('rotateDeviceTraining');
    
    // 入力モードの言語を更新
    if (typeof updateInputModeLanguage === 'function') {
        updateInputModeLanguage();
    }
}

/**
 * 数値範囲に応じて行数・列数を自動調整
 */
function autoAdjustGridSize() {
    // 固定数値モードの場合は調整しない
    if (useFixedNumbersCheckbox.checked) {
        return;
    }
    
    const firstMin = parseInt(firstMinInput.value, 10);
    const firstMax = parseInt(firstMaxInput.value, 10);
    const secondMin = parseInt(secondMinInput.value, 10);
    const secondMax = parseInt(secondMaxInput.value, 10);
    
    // 入力値が有効かチェック
    if (isNaN(firstMin) || isNaN(firstMax) || isNaN(secondMin) || isNaN(secondMax)) {
        return;
    }
    
    if (firstMin > firstMax || secondMin > secondMax) {
        return;
    }
    
    // 数値範囲から個数を計算
    const firstRange = firstMax - firstMin + 1;
    const secondRange = secondMax - secondMin + 1;
    
    // 現在の行数・列数
    const currentRowSize = parseInt(rowSizeSelect.value, 10);
    const currentColSize = parseInt(colSizeSelect.value, 10);
    
    // 行数が範囲を超えている場合は調整
    if (currentRowSize > firstRange) {
        // 範囲内の最大値に設定（3～15の範囲内）
        const newRowSize = Math.max(3, Math.min(15, firstRange));
        rowSizeSelect.value = newRowSize;
    }
    
    // 列数が範囲を超えている場合は調整
    if (currentColSize > secondRange) {
        // 範囲内の最大値に設定（3～15の範囲内）
        const newColSize = Math.max(3, Math.min(15, secondRange));
        colSizeSelect.value = newColSize;
    }
}

/**
 * 行数・列数に応じて数値範囲を自動調整
 */
function autoAdjustNumberRanges() {
    // 固定数値モードの場合は調整しない
    if (useFixedNumbersCheckbox.checked) {
        return;
    }
    
    const rowSize = parseInt(rowSizeSelect.value, 10);
    const colSize = parseInt(colSizeSelect.value, 10);
    
    const firstMin = parseInt(firstMinInput.value, 10);
    const firstMax = parseInt(firstMaxInput.value, 10);
    const secondMin = parseInt(secondMinInput.value, 10);
    const secondMax = parseInt(secondMaxInput.value, 10);
    
    // 入力値が有効かチェック
    if (isNaN(firstMin) || isNaN(firstMax) || isNaN(secondMin) || isNaN(secondMax)) {
        return;
    }
    
    // 数値範囲から個数を計算
    const firstRange = firstMax - firstMin + 1;
    const secondRange = secondMax - secondMin + 1;
    
    // 行数に対して範囲が不足している場合は拡大
    if (firstRange < rowSize) {
        const neededRange = rowSize - firstRange;
        // 最大値を拡大（負の数を許可している場合は最小値も調整）
        if (allowNegativeCheckbox.checked && firstMin > -999) {
            // 下方向に拡大
            firstMinInput.value = Math.max(-999, firstMin - Math.ceil(neededRange / 2));
            // 上方向にも拡大
            firstMaxInput.value = Math.min(999, firstMax + Math.floor(neededRange / 2));
        } else {
            // 上方向のみ拡大
            firstMaxInput.value = Math.min(999, firstMax + neededRange);
        }
    }
    
    // 列数に対して範囲が不足している場合は拡大
    if (secondRange < colSize) {
        const neededRange = colSize - secondRange;
        // 最大値を拡大
        if (allowNegativeCheckbox.checked && secondMin > -999) {
            // 下方向に拡大
            secondMinInput.value = Math.max(-999, secondMin - Math.ceil(neededRange / 2));
            // 上方向にも拡大
            secondMaxInput.value = Math.min(999, secondMax + Math.floor(neededRange / 2));
        } else {
            // 上方向のみ拡大
            secondMaxInput.value = Math.min(999, secondMax + neededRange);
        }
    }
}

/**
 * 演算の種類に応じてラベルとデフォルト値を更新
 */
function updateLabelsAndDefaults() {
    const operation = operationSelect.value;
    
    // 多言語対応のラベル設定
    firstNumberLabel.textContent = t(`firstNumber.${operation}`);
    secondNumberLabel.textContent = t(`secondNumber.${operation}`);
    fixedFirstLabel.textContent = t(`fixedFirst.${operation}`);
    fixedSecondLabel.textContent = t(`fixedSecond.${operation}`);
    
    // デフォルト値の設定
    switch(operation) {
        case 'addition':
        case 'subtraction':
        case 'division':
            firstMinInput.value = 21;
            firstMaxInput.value = 30;
            secondMinInput.value = 1;
            secondMaxInput.value = 10;
            break;
        case 'multiplication':
            firstMinInput.value = 1;
            firstMaxInput.value = 10;
            secondMinInput.value = 1;
            secondMaxInput.value = 10;
            break;
    }
}

/**
 * 全角数字・カンマ・読点・スペースを半角に変換
 */
function convertToHalfWidth(str) {
    if (!str) return str;
    
    return str
        // 全角数字を半角に変換
        .replace(/[０-９]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        })
        // 全角カンマを半角カンマに変換
        .replace(/，/g, ',')
        // 読点を半角カンマに変換（日本語入力で「、」が入力される）
        .replace(/、/g, ',')
        // 全角スペースを半角スペースに変換
        .replace(/　/g, ' ')
        // 全角マイナスを半角マイナスに変換
        .replace(/－/g, '-');
}

/**
 * 入力フィールドの値を自動的に半角に変換
 */
function normalizeInputValue(inputElement) {
    const originalValue = inputElement.value;
    const normalizedValue = convertToHalfWidth(originalValue);
    
    if (originalValue !== normalizedValue) {
        // カーソル位置を保持
        const cursorPosition = inputElement.selectionStart;
        
        // 値を更新
        inputElement.value = normalizedValue;
        
        // カーソル位置を計算（全角文字が半角になっても同じ位置）
        const newCursorPosition = cursorPosition;
        
        // カーソル位置を復元（次のフレームで実行して確実に適用）
        setTimeout(() => {
            inputElement.setSelectionRange(newCursorPosition, newCursorPosition);
        }, 0);
    }
}

/**
 * 固定数値パネルの表示切り替え
 */
function toggleFixedNumbersPanel() {
    if (useFixedNumbersCheckbox.checked) {
        fixedNumbersPanel.style.display = 'block';
    } else {
        fixedNumbersPanel.style.display = 'none';
    }
}

/**
 * 割り算プリセットパネルの表示切り替え
 */
function toggleDivisionPresetPanel() {
    if (operationSelect.value === 'division') {
        divisionPresetPanel.style.display = 'flex';
    } else {
        divisionPresetPanel.style.display = 'none';
    }
}

/**
 * 割り算プリセットの適用
 */
function applyDivisionPreset() {
    const selectedPreset = document.querySelector('input[name="divisionPreset"]:checked');
    if (!selectedPreset) return;
    
    const preset = selectedPreset.value;
    const colSize = parseInt(colSizeSelect.value, 10);
    
    // 列数に応じて除数範囲を決定（重複を避けるため）
    let divisorMin, divisorMax;
    if (colSize <= 8) {
        // 8列以下: 2～9（8個）
        divisorMin = 2;
        divisorMax = 9;
    } else if (colSize === 9) {
        // 9列: 1～9（9個）
        divisorMin = 1;
        divisorMax = 9;
    } else {
        // 10列以上: 1～10（10個）
        divisorMin = 1;
        divisorMax = 10;
    }
    
    // プリセットに応じて数値範囲を設定
    switch(preset) {
        case 'easy':
            // 簡単（2桁÷1桁）
            firstMinInput.value = 10;
            firstMaxInput.value = 99;
            secondMinInput.value = divisorMin;
            secondMaxInput.value = divisorMax;
            break;
        case 'normal':
            // 普通（3桁÷1桁）
            firstMinInput.value = 100;
            firstMaxInput.value = 999;
            secondMinInput.value = divisorMin;
            secondMaxInput.value = divisorMax;
            break;
        case 'hard':
            // 難しい（3桁÷2桁）
            firstMinInput.value = 100;
            firstMaxInput.value = 999;
            secondMinInput.value = 10;
            secondMaxInput.value = 99;
            break;
        case 'custom':
            // カスタム: デフォルト値を設定（ユーザーが手動で変更可能）
            firstMinInput.value = 21;
            firstMaxInput.value = 30;
            secondMinInput.value = 1;
            secondMaxInput.value = 10;
            break;
    }
    
    // プリセット選択をlocalStorageに保存
    localStorage.setItem('divisionPreset', preset);
    
    // 数値範囲変更に伴い行数・列数を自動調整
    autoAdjustGridSize();
}

/**
 * 数値入力フィールドのmin属性を更新
 */
function updateNumberInputMinValues() {
    const minValue = allowNegativeCheckbox.checked ? -999 : 0;
    
    firstMinInput.min = minValue;
    firstMaxInput.min = minValue;
    secondMinInput.min = minValue;
    secondMaxInput.min = minValue;
}

/**
 * ランダム負の数インライン表示の切り替え
 */
function toggleRandomNegativeInline() {
    if (allowNegativeCheckbox.checked) {
        randomNegativeInline.style.display = 'inline';
    } else {
        randomNegativeInline.style.display = 'none';
        randomNegativeCheckbox.checked = false;
    }
}

/**
 * ランダム配置インライン表示の切り替え
 */
function toggleRandomShuffleInline() {
    if (useFixedNumbersCheckbox.checked) {
        randomShuffleInline.style.display = 'inline';
    } else {
        randomShuffleInline.style.display = 'none';
        randomShuffleCheckbox.checked = false;
    }
}

/**
 * 指定範囲内のランダムな整数を生成
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * ランダムな数値配列を生成（重複なし）
 * 範囲内の数値をシャッフルして取得
 */
function generateRandomNumbers(min, max, count) {
    const range = max - min + 1;
    
    // 範囲内のすべての数値を配列に格納
    const allNumbers = [];
    for (let i = min; i <= max; i++) {
        allNumbers.push(i);
    }
    
    // Fisher-Yatesシャッフルアルゴリズム
    for (let i = allNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
    }
    
    // 必要な数だけ取得
    return allNumbers.slice(0, count);
}

/**
 * 配列の数値をランダムに負の数に変換（約50%の確率）
 */
function applyRandomNegative(numbers) {
    return numbers.map(num => {
        // 50%の確率で符号を反転
        if (Math.random() < 0.5) {
            return -Math.abs(num);
        }
        return Math.abs(num);
    });
}

/**
 * 配列をシャッフル（Fisher-Yatesアルゴリズム）
 */
function shuffleArray(array) {
    const shuffled = [...array]; // 配列のコピーを作成
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * 割り切れる数値ペアを生成（被除数、除数）
 * @param {number} dividendMin - 被除数の最小値
 * @param {number} dividendMax - 被除数の最大値
 * @param {number} divisorMin - 除数の最小値
 * @param {number} divisorMax - 除数の最大値
 * @returns {Object} {dividend: number, divisor: number}
 */
function generateDivisiblePair(dividendMin, dividendMax, divisorMin, divisorMax) {
    // 除数をランダムに選択（0は除外）
    let divisor;
    if (divisorMin <= 0 && divisorMax >= 0) {
        // 範囲に0が含まれる場合、0を避ける
        const validDivisors = [];
        for (let i = divisorMin; i <= divisorMax; i++) {
            if (i !== 0) validDivisors.push(i);
        }
        divisor = validDivisors[Math.floor(Math.random() * validDivisors.length)];
    } else {
        divisor = Math.floor(Math.random() * (divisorMax - divisorMin + 1)) + divisorMin;
    }
    
    // 被除数の範囲内で、divisorで割り切れる最小・最大の倍数を計算
    const minMultiplier = Math.ceil(dividendMin / divisor);
    const maxMultiplier = Math.floor(dividendMax / divisor);
    
    // 範囲内に有効な倍数がない場合、範囲の中央値を使用
    if (minMultiplier > maxMultiplier) {
        const dividend = Math.floor((dividendMin + dividendMax) / 2);
        return { dividend, divisor };
    }
    
    // ランダムな倍数を選択
    const multiplier = Math.floor(Math.random() * (maxMultiplier - minMultiplier + 1)) + minMultiplier;
    const dividend = divisor * multiplier;
    
    return { dividend, divisor };
}

/**
 * 割り算プリセット用の数値を生成（完全重複排除版）
 * @param {number} dividendMin - 被除数の最小値
 * @param {number} dividendMax - 被除数の最大値
 * @param {number} divisorMin - 除数の最小値
 * @param {number} divisorMax - 除数の最大値
 * @param {number} rowSize - 行数
 * @param {number} colSize - 列数
 * @param {number} integerRatio - 整数解の目標割合（60, 70, 80）
 * @returns {Object} {rowNumbers: number[], colNumbers: number[]}
 */
function generateDivisionNumbersWithRatio(dividendMin, dividendMax, divisorMin, divisorMax, rowSize, colSize, integerRatio) {
    // ステップ1: 除数を重複なしで生成（generateRandomNumbers使用）
    const colNumbers = generateRandomNumbers(divisorMin, divisorMax, colSize);
    
    // ステップ2: 各列（除数）が最低1回は使われることを保証
    // まず各列に対応する被除数を1つずつ生成
    const rowNumbers = [];
    const usedDividends = new Set();
    const targetIntegerRatio = integerRatio / 100;
    
    // 各列（除数）について、最低1つの被除数を生成
    for (let j = 0; j < colSize && j < rowSize; j++) {
        const divisor = colNumbers[j];
        const absDivisor = Math.abs(divisor);
        
        // この除数で割り切れる被除数を生成
        const minMultiplier = Math.ceil(dividendMin / absDivisor);
        const maxMultiplier = Math.floor(dividendMax / absDivisor);
        
        let dividend;
        if (minMultiplier <= maxMultiplier) {
            // 範囲内で倍数を生成（重複を避ける）
            let attempts = 0;
            do {
                const multiplier = Math.floor(Math.random() * (maxMultiplier - minMultiplier + 1)) + minMultiplier;
                dividend = divisor * multiplier;
                attempts++;
            } while (usedDividends.has(dividend) && attempts < 50);
        } else {
            // 範囲内に倍数がない場合はランダム
            dividend = Math.floor(Math.random() * (dividendMax - dividendMin + 1)) + dividendMin;
        }
        
        usedDividends.add(dividend);
        rowNumbers.push(dividend);
    }
    
    // ステップ3: 残りの被除数を生成（各行が最低1つの列で割り切れる）
    for (let i = rowNumbers.length; i < rowSize; i++) {
        // この被除数が割り切れる除数をランダムに選択
        const numDivisibleBy = Math.max(1, Math.round(colSize * targetIntegerRatio));
        const divisibleByIndices = [];
        
        // ランダムにいくつかの除数を選ぶ
        const shuffledIndices = shuffleArray([...Array(colSize).keys()]);
        for (let j = 0; j < numDivisibleBy && j < shuffledIndices.length; j++) {
            divisibleByIndices.push(shuffledIndices[j]);
        }
        
        // 選ばれた除数のいずれかの倍数として被除数を生成
        const baseDivisor = colNumbers[divisibleByIndices[Math.floor(Math.random() * divisibleByIndices.length)]];
        const absDivisor = Math.abs(baseDivisor);
        
        // 被除数範囲内で倍数を計算
        const minMultiplier = Math.ceil(dividendMin / absDivisor);
        const maxMultiplier = Math.floor(dividendMax / absDivisor);
        
        let dividend;
        if (minMultiplier <= maxMultiplier) {
            const multiplier = Math.floor(Math.random() * (maxMultiplier - minMultiplier + 1)) + minMultiplier;
            dividend = baseDivisor * multiplier;
        } else {
            // 範囲内に倍数がない場合はランダム
            dividend = Math.floor(Math.random() * (dividendMax - dividendMin + 1)) + dividendMin;
        }
        
        rowNumbers.push(dividend);
    }
    
    // ステップ4: 被除数を重複なしにシャッフル（重複がある場合は置き換え）
    const uniqueRowNumbers = [];
    const finalUsedDividends = new Set();
    
    for (let i = 0; i < rowNumbers.length; i++) {
        let dividend = rowNumbers[i];
        let attempts = 0;
        
        // 重複している場合は別の数を探す
        while (finalUsedDividends.has(dividend) && attempts < 100) {
            // 除数のいずれかの倍数として再生成
            const baseDivisor = colNumbers[Math.floor(Math.random() * colNumbers.length)];
            const absDivisor = Math.abs(baseDivisor);
            const minMult = Math.ceil(dividendMin / absDivisor);
            const maxMult = Math.floor(dividendMax / absDivisor);
            
            if (minMult <= maxMult) {
                const mult = Math.floor(Math.random() * (maxMult - minMult + 1)) + minMult;
                dividend = baseDivisor * mult;
            } else {
                dividend = Math.floor(Math.random() * (dividendMax - dividendMin + 1)) + dividendMin;
            }
            attempts++;
        }
        
        finalUsedDividends.add(dividend);
        uniqueRowNumbers.push(dividend);
    }
    
    return {
        rowNumbers: uniqueRowNumbers,
        colNumbers: colNumbers
    };
}

/**
 * 固定数値の解析
 */
function parseFixedNumbers(input, count) {
    if (!input || input.trim() === '') {
        return null;
    }
    
    // 全角を半角に変換してから処理
    const normalizedInput = convertToHalfWidth(input);
    
    const numbers = normalizedInput.split(',')
        .map(n => n.trim())
        .filter(n => n !== '')
        .map(n => parseInt(n, 10))
        .filter(n => !isNaN(n));
    
    if (numbers.length === 0) {
        return null;
    }
    
    // 指定された数が足りない場合は繰り返す
    while (numbers.length < count) {
        numbers.push(...numbers.slice(0, Math.min(numbers.length, count - numbers.length)));
    }
    
    let result = numbers.slice(0, count);
    
    // ランダムに配置する機能が有効な場合
    if (randomShuffleCheckbox.checked) {
        result = shuffleArray(result);
    }
    
    return result;
}

/**
 * 計算を実行
 */
function calculate(operation, a, b) {
    switch(operation) {
        case 'addition':
            return a + b;
        case 'subtraction':
            return a - b;
        case 'multiplication':
            return a * b;
        case 'division':
            return a % b === 0 ? a / b : null;
        default:
            return null;
    }
}

/**
 * 演算記号を取得
 */
function getOperationSymbol(operation) {
    switch(operation) {
        case 'addition':
            return '+';
        case 'subtraction':
            return '-';
        case 'multiplication':
            return '×';
        case 'division':
            return '÷';
        default:
            return '';
    }
}

/**
 * 百マス計算の表を生成
 */
function createTable(data, showAnswers = false, swapOperands = false) {
    const { rowSize, colSize, rowNumbers, colNumbers, operation } = data;
    const table = document.createElement('table');
    // CSSクラスは最大サイズを使用
    const maxSize = Math.max(rowSize, colSize);
    table.className = `calculation-table size-${maxSize}`;
    
    // 筆算形式の場合は数値を入れ替える
    // 筆算形式: 上(列)に足される数/引かれる数など、左(行)に足す数/引く数など
    // 標準形式: 上(列)に足す数/引く数など、左(行)に足される数/引かれる数など
    const topNumbers = swapOperands ? rowNumbers : colNumbers;
    const leftNumbers = swapOperands ? colNumbers : rowNumbers;
    const colCount = swapOperands ? rowSize : colSize;
    const rowCount = swapOperands ? colSize : rowSize;
    
    // ヘッダー行を作成
    const headerRow = document.createElement('tr');
    
    // 左上のセル（演算記号を表示）
    const cornerCell = document.createElement('td');
    cornerCell.className = 'corner';
    cornerCell.textContent = getOperationSymbol(operation);
    cornerCell.style.color = 'white';
    cornerCell.style.fontWeight = 'bold';
    headerRow.appendChild(cornerCell);
    
    // 列ヘッダー（上の数値）
    for (let j = 0; j < colCount; j++) {
        const cell = document.createElement('td');
        cell.className = 'header';
        cell.textContent = topNumbers[j];
        headerRow.appendChild(cell);
    }
    table.appendChild(headerRow);
    
    // データ行を作成
    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement('tr');
        
        // 行ヘッダー（左の数値）
        const headerCell = document.createElement('td');
        headerCell.className = 'header';
        headerCell.textContent = leftNumbers[i];
        row.appendChild(headerCell);
        
        // データセル
        for (let j = 0; j < colCount; j++) {
            const cell = document.createElement('td');
            
            // 筆算形式の場合: calculate(operation, 上の数値, 左の数値)
            // 標準形式の場合: calculate(operation, 左の数値, 上の数値)
            const firstOperand = swapOperands ? topNumbers[j] : leftNumbers[i];
            const secondOperand = swapOperands ? leftNumbers[i] : topNumbers[j];
            const answer = calculate(operation, firstOperand, secondOperand);
            
            if (answer === null) {
                cell.className = 'cell disabled';
                if (showAnswers) {
                    cell.textContent = '';
                }
            } else {
                cell.className = 'cell';
                if (showAnswers) {
                    cell.textContent = answer;
                }
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    return table;
}

/**
 * クイックスタート：よく使う設定で即座に問題を生成
 */
function quickStart(operation) {
    // 演算の種類を設定
    operationSelect.value = operation;
    
    // サイズは常に10×10
    rowSizeSelect.value = '10';
    colSizeSelect.value = '10';
    
    // 演算ごとの数値範囲を設定
    switch(operation) {
        case 'multiplication':
            // かけ算: 1～10 × 1～10
            firstMinInput.value = '1';
            firstMaxInput.value = '10';
            secondMinInput.value = '1';
            secondMaxInput.value = '10';
            break;
        case 'addition':
            // たし算: 1～10 + 1～10
            firstMinInput.value = '1';
            firstMaxInput.value = '10';
            secondMinInput.value = '1';
            secondMaxInput.value = '10';
            break;
        case 'subtraction':
            // ひき算: 11～20 - 1～10
            firstMinInput.value = '11';
            firstMaxInput.value = '20';
            secondMinInput.value = '1';
            secondMaxInput.value = '10';
            break;
    }
    
    // ラベルとデフォルト値を更新
    updateLabelsAndDefaults();
    
    // 問題を生成
    generateProblem();
    
    // 印刷モードに切り替え（入力モードにいた場合）
    if (typeof switchMode === 'function' && typeof currentMode !== 'undefined' && currentMode === 'input') {
        switchMode('print');
    }
}

/**
 * 問題を生成
 */
function generateProblem() {
    // 入力値の取得
    const operation = operationSelect.value;
    const rowSize = parseInt(rowSizeSelect.value, 10);
    const colSize = parseInt(colSizeSelect.value, 10);
    const firstMin = parseInt(firstMinInput.value, 10);
    const firstMax = parseInt(firstMaxInput.value, 10);
    const secondMin = parseInt(secondMinInput.value, 10);
    const secondMax = parseInt(secondMaxInput.value, 10);
    
    // 入力値の検証
    if (firstMin > firstMax) {
        alert(t('errorMinMax'));
        return;
    }
    if (secondMin > secondMax) {
        alert(t('errorMinMax'));
        return;
    }
    
    // マスの数と数値範囲の整合性チェック
    const firstRange = firstMax - firstMin + 1;
    const secondRange = secondMax - secondMin + 1;
    
    if (!useFixedNumbersCheckbox.checked || !fixedFirstNumbers.value.trim()) {
        if (firstRange < rowSize) {
            alert(t('errorRangeShort', {
                type: t('errorRangeType.row'),
                size: rowSize,
                min: firstMin,
                max: firstMax,
                count: firstRange
            }));
            return;
        }
    }
    
    if (!useFixedNumbersCheckbox.checked || !fixedSecondNumbers.value.trim()) {
        if (secondRange < colSize) {
            alert(t('errorRangeShort', {
                type: t('errorRangeType.col'),
                size: colSize,
                min: secondMin,
                max: secondMax,
                count: secondRange
            }));
            return;
        }
    }
    
    // 数値の生成
    let rowNumbers, colNumbers;
    
    // 割り算プリセットが有効な場合の特殊処理
    if (operation === 'division' && !useFixedNumbersCheckbox.checked) {
        const selectedPreset = document.querySelector('input[name="divisionPreset"]:checked');
        const integerRatio = 60; // デフォルトで60%以上を目指す
        
        if (selectedPreset && selectedPreset.value !== 'custom') {
            // プリセットモード: 整数解割合を保証する生成を使用
            const result = generateDivisionNumbersWithRatio(firstMin, firstMax, secondMin, secondMax, rowSize, colSize, integerRatio);
            rowNumbers = result.rowNumbers;
            colNumbers = result.colNumbers;
        } else {
            // カスタムモード: 通常のランダム生成
            rowNumbers = generateRandomNumbers(firstMin, firstMax, rowSize);
            colNumbers = generateRandomNumbers(secondMin, secondMax, colSize);
        }
    } else if (useFixedNumbersCheckbox.checked) {
        // 固定数値を使用
        const fixedRow = parseFixedNumbers(fixedFirstNumbers.value, rowSize);
        const fixedCol = parseFixedNumbers(fixedSecondNumbers.value, colSize);
        
        if (fixedRow) {
            rowNumbers = fixedRow;
        } else {
            rowNumbers = generateRandomNumbers(firstMin, firstMax, rowSize);
        }
        
        if (fixedCol) {
            colNumbers = fixedCol;
        } else {
            colNumbers = generateRandomNumbers(secondMin, secondMax, colSize);
        }
    } else {
        // ランダムに生成
        rowNumbers = generateRandomNumbers(firstMin, firstMax, rowSize);
        colNumbers = generateRandomNumbers(secondMin, secondMax, colSize);
    }
    
    // ランダムに負の数にする機能が有効な場合
    if (allowNegativeCheckbox.checked && randomNegativeCheckbox.checked) {
        rowNumbers = applyRandomNegative(rowNumbers);
        colNumbers = applyRandomNegative(colNumbers);
    }
    
    // データを保存
    currentData = {
        operation,
        rowSize,
        colSize,
        rowNumbers,
        colNumbers
    };
    
    // 表を生成（筆算形式のチェック状態を渡す）
    const shouldSwap = swapOperandsCheckbox.checked;
    const problemTable = createTable(currentData, false, shouldSwap);
    const answerTable = createTable(currentData, true, shouldSwap);
    
    // 表を挿入
    const problemContainer = document.getElementById('problemTableContainer');
    const answerContainer = document.getElementById('answerTableContainer');
    
    problemContainer.innerHTML = '';
    answerContainer.innerHTML = '';
    
    problemContainer.appendChild(problemTable);
    answerContainer.appendChild(answerTable);
    
    // タイトルと情報を更新
    const operationName = t(operation);
    const operationSymbol = getOperationSymbol(operation);
    
    document.getElementById('problemTitle').textContent = `${t('problemTitle')} - ${operationName}`;
    document.getElementById('answerTitle').textContent = `${t('answerTitle')} - ${operationName}`;
    
    document.getElementById('problemInfo').textContent = `${rowSize}×${colSize} | ${operationSymbol}`;
    document.getElementById('answerInfo').textContent = `${rowSize}×${colSize} | ${operationSymbol}`;
    
    // PDFファイル名用に日付付きタイトルを設定
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateString = `${year}.${month}.${day}`;
    document.title = `100masu_${dateString}`;
    
    // 印刷エリアを表示
    printArea.classList.add('active');
    printBtn.disabled = false;
    
    // 印刷エリアまでスクロール
    setTimeout(() => {
        printArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    
    // 入力モードが既にアクティブな場合、グリッドを更新
    if (typeof currentMode !== 'undefined' && currentMode === 'input') {
        if (typeof createInputGrid === 'function') {
            createInputGrid();
        }
    }
    
    // 現在の設定を保存
    saveCurrentSettings();
}

/**
 * 前回の設定を読み込む
 */
function loadSavedSettings() {
    // 保存された値があるかチェック
    const hasSavedSettings = localStorage.getItem('operation') !== null;
    
    if (hasSavedSettings) {
        // 演算の種類
        const savedOperation = localStorage.getItem('operation');
        if (savedOperation) {
            operationSelect.value = savedOperation;
        }
        
        // 行数・列数
        const savedRowSize = localStorage.getItem('rowSize');
        const savedColSize = localStorage.getItem('colSize');
        if (savedRowSize) rowSizeSelect.value = savedRowSize;
        if (savedColSize) colSizeSelect.value = savedColSize;
        
        // 数値範囲
        const savedFirstMin = localStorage.getItem('firstMin');
        const savedFirstMax = localStorage.getItem('firstMax');
        const savedSecondMin = localStorage.getItem('secondMin');
        const savedSecondMax = localStorage.getItem('secondMax');
        
        if (savedFirstMin !== null) firstMinInput.value = savedFirstMin;
        if (savedFirstMax !== null) firstMaxInput.value = savedFirstMax;
        if (savedSecondMin !== null) secondMinInput.value = savedSecondMin;
        if (savedSecondMax !== null) secondMaxInput.value = savedSecondMax;
        
        // 固定数値チェックボックス
        const savedUseFixedNumbers = localStorage.getItem('useFixedNumbers');
        if (savedUseFixedNumbers !== null) {
            useFixedNumbersCheckbox.checked = savedUseFixedNumbers === 'true';
            toggleFixedNumbersPanel();
            toggleRandomShuffleInline();
        }
        
        // 固定数値の内容
        const savedFixedFirst = localStorage.getItem('fixedFirstNumbers');
        const savedFixedSecond = localStorage.getItem('fixedSecondNumbers');
        if (savedFixedFirst !== null) fixedFirstNumbers.value = savedFixedFirst;
        if (savedFixedSecond !== null) fixedSecondNumbers.value = savedFixedSecond;
        
        // ラベルとデフォルト値を更新（演算に応じた適切な表示）
        updateLabelsAndDefaults();
        
        // 前回の設定で自動的に問題を生成（2回目以降の訪問）
        setTimeout(() => {
            generateProblem();
        }, 100);
    } else {
        // 保存された値がない場合（初回訪問）
        // 10×10のかけ算に設定
        operationSelect.value = 'multiplication';
        rowSizeSelect.value = '10';
        colSizeSelect.value = '10';
        updateLabelsAndDefaults();
        
        // 初回訪問時は自動的に問題を生成
        // DOMが完全に読み込まれた後に実行
        setTimeout(() => {
            generateProblem();
        }, 100);
    }
    
    // ラベルは常に更新（デフォルト値は設定しない）
    const operation = operationSelect.value;
    firstNumberLabel.textContent = t(`firstNumber.${operation}`);
    secondNumberLabel.textContent = t(`secondNumber.${operation}`);
    fixedFirstLabel.textContent = t(`fixedFirst.${operation}`);
    fixedSecondLabel.textContent = t(`fixedSecond.${operation}`);
}

/**
 * アコーディオンの初期化
 */
function initAccordion() {
    const accordionToggle = document.getElementById('advancedSettingsToggle');
    if (!accordionToggle) {
        return; // 要素が存在しない場合は何もしない
    }
    
    const accordion = accordionToggle.closest('.accordion');
    if (!accordion) {
        return; // アコーディオン要素が見つからない場合は何もしない
    }
    
    // 保存された開閉状態を読み込む
    const isOpen = localStorage.getItem('accordionOpen') === 'true';
    if (isOpen) {
        accordion.classList.add('open');
    }
    
    // クリックイベント
    accordionToggle.addEventListener('click', () => {
        const isCurrentlyOpen = accordion.classList.toggle('open');
        localStorage.setItem('accordionOpen', isCurrentlyOpen);
    });
}

/**
 * 現在の設定をlocalStorageに保存
 */
function saveCurrentSettings() {
    localStorage.setItem('operation', operationSelect.value);
    localStorage.setItem('rowSize', rowSizeSelect.value);
    localStorage.setItem('colSize', colSizeSelect.value);
    localStorage.setItem('firstMin', firstMinInput.value);
    localStorage.setItem('firstMax', firstMaxInput.value);
    localStorage.setItem('secondMin', secondMinInput.value);
    localStorage.setItem('secondMax', secondMaxInput.value);
    localStorage.setItem('useFixedNumbers', useFixedNumbersCheckbox.checked);
    localStorage.setItem('fixedFirstNumbers', fixedFirstNumbers.value);
    localStorage.setItem('fixedSecondNumbers', fixedSecondNumbers.value);
}
