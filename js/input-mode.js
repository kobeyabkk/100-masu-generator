// 入力モード専用JavaScript

// 入力モード用グローバル変数
let currentMode = 'print'; // 'print' or 'input'
let timerInterval = null;
let timerStartTime = 0;
let timerElapsedTime = 0;
let timerRunning = false;
let currentActiveCell = null;
let userInputs = {}; // {row: {col: value}}
let moveDirection = 'right'; // 'right' or 'down'
let isTouchDevice = false;
let stickyHeaderMode = false; // ヘッダー固定モード（入力開始で自動ON）
let hasStartedInput = false; // 入力を開始したかどうか

// 入力モード用DOM要素（printAreaはmain.jsで宣言済み）
let printModeTab, inputModeTab, inputArea;
let startTimerBtn, pauseTimerBtn, resetTimerBtn, timerDisplay;
let inputGrid, numpad, gradeBtn;
let resultsArea, historyArea;
let printModeLabel, inputModeLabel;
let toggleStickyBtn; // ヘッダー固定切り替えボタン

/**
 * 入力モードの初期化
 */
function initInputMode() {
    // DOM要素の取得（printAreaはmain.jsで取得済み）
    printModeTab = document.getElementById('printModeTab');
    inputModeTab = document.getElementById('inputModeTab');
    inputArea = document.getElementById('inputArea');
    startTimerBtn = document.getElementById('startTimerBtn');
    pauseTimerBtn = document.getElementById('pauseTimerBtn');
    resetTimerBtn = document.getElementById('resetTimerBtn');
    timerDisplay = document.getElementById('timerDisplay');
    inputGrid = document.getElementById('inputGrid');
    numpad = document.getElementById('numpad');
    gradeBtn = document.getElementById('gradeBtn');
    resultsArea = document.getElementById('resultsArea');
    historyArea = document.getElementById('historyArea');
    toggleStickyBtn = document.getElementById('toggleStickyBtn');
    
    // ラベル要素
    printModeLabel = document.getElementById('printModeLabel');
    inputModeLabel = document.getElementById('inputModeLabel');
    
    // デバイス判定
    detectDevice();
    
    // イベントリスナー
    startTimerBtn.addEventListener('click', startTimer);
    pauseTimerBtn.addEventListener('click', pauseTimer);
    resetTimerBtn.addEventListener('click', resetTimer);
    gradeBtn.addEventListener('click', gradeAnswers);
    
    // モードタブのイベントリスナー
    if (printModeTab) {
        printModeTab.addEventListener('click', () => switchMode('print'));
    }
    if (inputModeTab) {
        inputModeTab.addEventListener('click', () => switchMode('input'));
    }
    
    // toggleStickyBtn が存在する場合のみイベントリスナーを追加
    if (toggleStickyBtn) {
        toggleStickyBtn.addEventListener('click', toggleStickyHeaderMode);
    }
    
    // テンキーのイベントリスナー
    setupNumpadListeners();
    
    // 移動方向の読み込みと設定
    const savedMoveDirection = localStorage.getItem('inputMoveDirection');
    if (savedMoveDirection) {
        moveDirection = savedMoveDirection;
        const radioBtn = document.querySelector(`input[name="moveDirection"][value="${savedMoveDirection}"]`);
        if (radioBtn) radioBtn.checked = true;
    }
    
    // 移動方向のラジオボタンのイベントリスナー
    const moveDirectionRadios = document.querySelectorAll('input[name="moveDirection"]');
    moveDirectionRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            moveDirection = e.target.value;
            localStorage.setItem('inputMoveDirection', moveDirection);
            // テンキーの移動ボタンのアイコンを更新
            updateNumpadMoveButton();
        });
    });
    
    // 初期のテンキー移動ボタンを更新
    updateNumpadMoveButton();
    
    // ウィンドウリサイズ時の処理（デバウンス付き）
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(detectDevice, 150);
    });
    
    // 画面回転時の処理（iOS Safari対応）
    window.addEventListener('orientationchange', () => {
        // iOS Safariでは画面サイズ更新に時間がかかるため、待機時間を延長
        setTimeout(detectDevice, 200);
    });
    
    // 横持ちメッセージの閉じるボタン
    const rotateMessageClose = document.getElementById('rotateMessageClose');
    if (rotateMessageClose) {
        rotateMessageClose.addEventListener('click', closeRotateMessage);
    }
}

/**
 * デバイスを判定
 */
function detectDevice() {
    // nullチェック
    if (!numpad) return;
    
    isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // 横向きかどうかを判定（幅 > 高さ）
    const isLandscape = screenWidth > screenHeight;
    
    // テンキーの表示/非表示
    if (!isTouchDevice && screenWidth >= 1024) {
        // PC（タッチなし）: テンキー非表示（キーボード使用）
        numpad.style.display = 'none';
        showRotateMessage(false);
    } else if (isTouchDevice && isLandscape) {
        // タブレット/スマホ横: テンキー表示（幅の制限を削除）
        numpad.style.display = 'flex';
        showRotateMessage(false);
        
        // 2カラムレイアウトに変更（グリッド+テンキー）
        const inputMain = document.querySelector('.input-main');
        if (inputMain) {
            inputMain.style.gridTemplateColumns = '1fr auto';
        }
    } else if (isTouchDevice && !isLandscape) {
        // スマホ縦: 横持ち推奨メッセージ
        numpad.style.display = 'none';
        showRotateMessage(true);
    } else {
        // その他のケース
        numpad.style.display = 'none';
        showRotateMessage(false);
    }
}

/**
 * 横持ち推奨メッセージの表示/非表示
 */
let rotateMessageTimeout = null;
function showRotateMessage(show) {
    const rotateMessage = document.getElementById('rotateMessage');
    if (!rotateMessage) return;
    
    if (show) {
        // メッセージを表示
        rotateMessage.style.display = 'block';
        rotateMessage.classList.remove('fade-out');
        
        // 既存のタイムアウトをクリア
        if (rotateMessageTimeout) {
            clearTimeout(rotateMessageTimeout);
        }
        
        // 3秒後に自動的にフェードアウト
        rotateMessageTimeout = setTimeout(() => {
            rotateMessage.classList.add('fade-out');
            setTimeout(() => {
                rotateMessage.style.display = 'none';
            }, 500); // フェードアウトアニメーション完了後に非表示
        }, 3000);
    } else {
        // メッセージを非表示
        if (rotateMessageTimeout) {
            clearTimeout(rotateMessageTimeout);
            rotateMessageTimeout = null;
        }
        rotateMessage.classList.remove('fade-out');
        rotateMessage.style.display = 'none';
    }
}

/**
 * 横持ちメッセージを手動で閉じる
 */
function closeRotateMessage() {
    const rotateMessage = document.getElementById('rotateMessage');
    if (!rotateMessage) return;
    
    if (rotateMessageTimeout) {
        clearTimeout(rotateMessageTimeout);
        rotateMessageTimeout = null;
    }
    
    rotateMessage.classList.add('fade-out');
    setTimeout(() => {
        rotateMessage.style.display = 'none';
    }, 500);
}

/**
 * モードを切り替え
 */
function switchMode(mode) {
    currentMode = mode;
    
    if (mode === 'print') {
        // 印刷モード
        printModeTab.classList.add('active');
        inputModeTab.classList.remove('active');
        
        // printAreaの表示制御（.activeクラスと.mode-hiddenクラスの両方を管理）
        if (printArea) {
            printArea.classList.remove('mode-hidden'); // 強制非表示を解除
            printArea.classList.add('active'); // 表示するために.activeを追加
        }
        
        // inputAreaを非表示
        if (inputArea) {
            inputArea.style.display = 'none';
        }
    } else {
        // 入力モード
        inputModeTab.classList.add('active');
        printModeTab.classList.remove('active');
        
        // printAreaを非表示（.mode-hiddenで強制非表示）
        if (printArea) {
            printArea.classList.add('mode-hidden'); // 強制非表示
            // .activeは残しておく（印刷モードに戻った時のため）
        }
        
        // inputAreaを表示
        if (inputArea) {
            inputArea.style.display = 'block';
        }
        
        // 入力開始フラグとヘッダー固定モードをリセット
        hasStartedInput = false;
        stickyHeaderMode = false;
        if (toggleStickyBtn) {
            toggleStickyBtn.style.display = 'none';
        }
        
        // 問題が生成されている場合は入力グリッドを作成
        if (currentData) {
            createInputGrid();
            // メッセージを非表示
            const noDataMessage = document.getElementById('noDataMessage');
            if (noDataMessage) noDataMessage.style.display = 'none';
        } else {
            // メッセージを表示
            showNoDataMessage();
        }
    }
}

/**
 * 問題未生成時のメッセージを表示
 */
function showNoDataMessage() {
    const message = document.createElement('div');
    message.id = 'noDataMessage';
    message.className = 'no-data-message';
    
    const text = document.createElement('p');
    text.textContent = t('noDataMessage');
    
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = t('generateButton');
    button.addEventListener('click', () => switchMode('print'));
    
    message.appendChild(text);
    message.appendChild(button);
    
    inputGrid.innerHTML = '';
    inputGrid.appendChild(message);
}

/**
 * 入力用グリッドを作成
 */
function createInputGrid() {
    if (!currentData) return;
    
    const { rowSize, colSize, rowNumbers, colNumbers, operation } = currentData;
    const shouldSwap = swapOperandsCheckbox ? swapOperandsCheckbox.checked : false;
    const topNumbers = shouldSwap ? rowNumbers : colNumbers;
    const leftNumbers = shouldSwap ? colNumbers : rowNumbers;
    const colCount = shouldSwap ? rowSize : colSize;
    const rowCount = shouldSwap ? colSize : rowSize;
    
    const table = document.createElement('table');
    const maxSize = Math.max(rowSize, colSize);
    table.className = `input-table size-${maxSize}`;
    
    // ヘッダー行
    const headerRow = document.createElement('tr');
    
    // 左上のセル
    const cornerCell = document.createElement('td');
    cornerCell.className = 'corner';
    cornerCell.textContent = getOperationSymbol(operation);
    headerRow.appendChild(cornerCell);
    
    // 列ヘッダー
    for (let j = 0; j < colCount; j++) {
        const cell = document.createElement('td');
        cell.className = 'header';
        cell.textContent = topNumbers[j];
        headerRow.appendChild(cell);
    }
    table.appendChild(headerRow);
    
    // データ行
    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement('tr');
        
        // 行ヘッダー
        const headerCell = document.createElement('td');
        headerCell.className = 'header';
        headerCell.textContent = leftNumbers[i];
        row.appendChild(headerCell);
        
        // 入力セル
        for (let j = 0; j < colCount; j++) {
            const cell = document.createElement('td');
            cell.className = 'input-cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            
            // 答えを計算（採点用）
            const firstOperand = shouldSwap ? topNumbers[j] : leftNumbers[i];
            const secondOperand = shouldSwap ? leftNumbers[i] : topNumbers[j];
            const answer = calculate(operation, firstOperand, secondOperand);
            cell.dataset.answer = answer;
            
            if (answer === null) {
                // 割り切れない場合は斜線
                cell.className = 'input-cell disabled';
                cell.innerHTML = '<div class="diagonal-line"></div>';
            } else {
                // 入力フィールド
                const input = document.createElement('input');
                input.type = 'text';
                input.inputMode = 'none'; // iPadのキーボードを出さない
                input.autocomplete = 'off';
                input.readOnly = true; // タッチデバイスでキーボードを出さない
                input.dataset.row = i;
                input.dataset.col = j;
                
                // 全角→半角変換
                input.addEventListener('input', (e) => {
                    e.target.value = convertToHalfWidth(e.target.value);
                    
                    // セルの状態を更新
                    if (e.target.value !== '') {
                        cell.classList.add('filled');
                    } else {
                        cell.classList.remove('filled');
                    }
                });
                
                // フォーカス時（PCのみ）
                if (!isTouchDevice) {
                    input.addEventListener('focus', (e) => {
                        setActiveCell(cell);
                        onInputStart(); // 入力開始を検知
                    });
                } else {
                    // タッチデバイスではセルクリックでアクティブ化
                    cell.addEventListener('click', () => {
                        setActiveCell(cell);
                        onInputStart(); // 入力開始を検知
                    });
                }
                
                // キーボード操作（PC用のみ）
                if (!isTouchDevice) {
                    // PCの場合はreadOnlyを解除してキーボード入力を許可
                    input.readOnly = false;
                    input.inputMode = 'numeric';
                    input.addEventListener('keydown', (e) => {
                        handleInputKeydown(e, i, j, rowCount, colCount);
                    });
                }
                
                cell.appendChild(input);
            }
            
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    // グリッドを挿入
    inputGrid.innerHTML = '';
    inputGrid.appendChild(table);
    
    // 初期化
    userInputs = {};
    resetTimer();
    resultsArea.style.display = 'none';
    
    // 最初の入力可能なセルに自動フォーカス
    setTimeout(() => {
        focusFirstInputCell();
    }, 100);
}

/**
 * 最初の入力可能なセルにフォーカス
 */
function focusFirstInputCell() {
    // 最初の入力フィールドを探す
    const firstInput = document.querySelector('.input-cell:not(.disabled) input');
    if (firstInput) {
        const cell = firstInput.parentElement;
        if (isTouchDevice) {
            // タッチデバイスの場合はアクティブセルに設定
            setActiveCell(cell);
        } else {
            // PCの場合はフォーカス
            firstInput.focus();
        }
    }
}

/**
 * アクティブセルを設定
 */
function setActiveCell(cell) {
    // 既存のアクティブセルをクリア
    const prevActive = document.querySelector('.input-cell.active');
    if (prevActive) {
        prevActive.classList.remove('active');
    }
    
    // 新しいアクティブセルを設定
    if (cell && !cell.classList.contains('disabled')) {
        cell.classList.add('active');
        currentActiveCell = cell;
    }
}

/**
 * キーボード操作の処理
 */
function handleInputKeydown(e, row, col, rowCount, colCount) {
    if (e.key === 'Enter') {
        e.preventDefault();
        moveToNextCell(row, col, rowCount, colCount);
    } else if (e.key === 'Tab') {
        e.preventDefault();
        if (e.shiftKey) {
            moveToPreviousCell(row, col, rowCount, colCount);
        } else {
            moveToNextCell(row, col, rowCount, colCount);
        }
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        moveToCell(row, col + 1, rowCount, colCount);
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        moveToCell(row, col - 1, rowCount, colCount);
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        moveToCell(row + 1, col, rowCount, colCount);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        moveToCell(row - 1, col, rowCount, colCount);
    }
}

/**
 * 次のセルに移動
 */
function moveToNextCell(row, col, rowCount, colCount) {
    if (moveDirection === 'right') {
        // 右に移動
        if (col < colCount - 1) {
            moveToCell(row, col + 1, rowCount, colCount);
        } else if (row < rowCount - 1) {
            moveToCell(row + 1, 0, rowCount, colCount);
        }
    } else {
        // 下に移動
        if (row < rowCount - 1) {
            moveToCell(row + 1, col, rowCount, colCount);
        } else if (col < colCount - 1) {
            moveToCell(0, col + 1, rowCount, colCount);
        }
    }
}

/**
 * 前のセルに移動
 */
function moveToPreviousCell(row, col, rowCount, colCount) {
    if (moveDirection === 'right') {
        // 左に移動
        if (col > 0) {
            moveToCell(row, col - 1, rowCount, colCount);
        } else if (row > 0) {
            moveToCell(row - 1, colCount - 1, rowCount, colCount);
        }
    } else {
        // 上に移動
        if (row > 0) {
            moveToCell(row - 1, col, rowCount, colCount);
        } else if (col > 0) {
            moveToCell(rowCount - 1, col - 1, rowCount, colCount);
        }
    }
}

/**
 * 指定セルに移動（割り切れないマスはスキップ）
 */
function moveToCell(row, col, rowCount, colCount) {
    if (row < 0 || row >= rowCount || col < 0 || col >= colCount) {
        return;
    }
    
    const input = document.querySelector(`input[data-row="${row}"][data-col="${col}"]`);
    if (input) {
        const cell = input.parentElement;
        
        // disabledセルの場合は次のセルに移動
        if (cell.classList.contains('disabled')) {
            // 現在の移動方向に従って次のセルを計算
            if (moveDirection === 'right') {
                if (col < colCount - 1) {
                    moveToCell(row, col + 1, rowCount, colCount);
                } else if (row < rowCount - 1) {
                    moveToCell(row + 1, 0, rowCount, colCount);
                }
            } else {
                if (row < rowCount - 1) {
                    moveToCell(row + 1, col, rowCount, colCount);
                } else if (col < colCount - 1) {
                    moveToCell(0, col + 1, rowCount, colCount);
                }
            }
            return;
        }
        
        // タッチデバイスの場合、focusイベントリスナーがないので手動でアクティブセルを設定
        if (isTouchDevice) {
            setActiveCell(cell);
        } else {
            // PCの場合はfocusでfocusイベントが発火してsetActiveCellが呼ばれる
            input.focus();
            // 既存の値を全選択（次の入力で上書きされる）
            setTimeout(() => {
                input.select();
            }, 0);
        }
    } else {
        // inputが見つからない場合（disabledセル）、次のセルに移動
        if (moveDirection === 'right') {
            if (col < colCount - 1) {
                moveToCell(row, col + 1, rowCount, colCount);
            } else if (row < rowCount - 1) {
                moveToCell(row + 1, 0, rowCount, colCount);
            }
        } else {
            if (row < rowCount - 1) {
                moveToCell(row + 1, col, rowCount, colCount);
            } else if (col < colCount - 1) {
                moveToCell(0, col + 1, rowCount, colCount);
            }
        }
    }
}

/**
 * テンキーのセットアップ
 */
function setupNumpadListeners() {
    const buttons = document.querySelectorAll('.numpad-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // デフォルト動作を防止
            e.stopPropagation(); // イベント伝播を停止
            handleNumpadClick(btn.dataset.value);
        }, { passive: false }); // passiveをfalseにして即座に処理
    });
}

/**
 * テンキークリックの処理
 */
function handleNumpadClick(value) {
    if (!currentActiveCell) return;
    
    const input = currentActiveCell.querySelector('input');
    if (!input) return;
    
    if (value === 'backspace') {
        input.value = input.value.slice(0, -1);
    } else if (value === 'delete') {
        input.value = '';
    } else if (value === 'enter' || value === 'move') {
        const row = parseInt(input.dataset.row);
        const col = parseInt(input.dataset.col);
        const { rowSize, colSize } = currentData;
        const shouldSwap = swapOperandsCheckbox.checked;
        const rowCount = shouldSwap ? colSize : rowSize;
        const colCount = shouldSwap ? rowSize : colSize;
        moveToNextCell(row, col, rowCount, colCount);
        return; // 早期リターンでinputイベントを発火しない
    } else {
        input.value += value;
        input.value = convertToHalfWidth(input.value);
    }
    
    // inputイベントを発火
    input.dispatchEvent(new Event('input'));
}

/**
 * タイマー開始
 */
function startTimer() {
    if (!timerRunning) {
        timerStartTime = Date.now() - timerElapsedTime;
        timerInterval = setInterval(updateTimerDisplay, 10);
        timerRunning = true;
        startTimerBtn.style.display = 'none';
        pauseTimerBtn.style.display = 'inline-block';
    }
}

/**
 * タイマー一時停止
 */
function pauseTimer() {
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        timerElapsedTime = Date.now() - timerStartTime;
        startTimerBtn.style.display = 'inline-block';
        pauseTimerBtn.style.display = 'none';
    }
}

/**
 * タイマーリセット
 */
function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timerElapsedTime = 0;
    timerStartTime = 0;
    timerDisplay.textContent = '00:00.00';
    startTimerBtn.style.display = 'inline-block';
    pauseTimerBtn.style.display = 'none';
}

/**
 * タイマー表示を更新
 */
function updateTimerDisplay() {
    const elapsed = Date.now() - timerStartTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    const centiseconds = Math.floor((elapsed % 1000) / 10);
    
    timerDisplay.textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`;
}

/**
 * 採点処理
 */
function gradeAnswers() {
    if (!currentData) return;
    
    // タイマーを停止
    if (timerRunning) {
        pauseTimer();
    }
    
    const { rowSize, colSize } = currentData;
    let correctCount = 0;
    let incorrectCount = 0;
    let totalCells = 0;
    
    // 全セルをチェック
    const inputs = document.querySelectorAll('.input-table input');
    inputs.forEach(input => {
        const cell = input.parentElement;
        const correctAnswer = parseFloat(cell.dataset.answer);
        const userAnswer = input.value.trim();
        
        totalCells++;
        
        // 採点
        if (userAnswer === '') {
            // 未入力
            cell.classList.remove('correct', 'incorrect');
        } else if (parseFloat(userAnswer) === correctAnswer) {
            // 正解
            cell.classList.add('correct');
            cell.classList.remove('incorrect');
            correctCount++;
        } else {
            // 不正解
            cell.classList.add('incorrect');
            cell.classList.remove('correct');
            incorrectCount++;
        }
    });
    
    // 結果を表示
    const accuracy = totalCells > 0 ? Math.round((correctCount / totalCells) * 100) : 0;
    const timeValue = timerDisplay.textContent;
    
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    document.getElementById('accuracyValue').textContent = accuracy + '%';
    document.getElementById('timeValue').textContent = timeValue;
    
    resultsArea.style.display = 'block';
    
    // 成績を記録
    saveScore({
        date: new Date().toISOString(),
        rowSize: rowSize,
        colSize: colSize,
        operation: currentData.operation,
        correct: correctCount,
        incorrect: incorrectCount,
        accuracy: accuracy,
        time: timeValue
    });
    
    // 成績履歴を表示
    displayScoreHistory();
}

/**
 * 成績を保存
 */
function saveScore(score) {
    let scores = JSON.parse(localStorage.getItem('scoreHistory') || '[]');
    scores.unshift(score);
    
    // 最新10件のみ保持
    scores = scores.slice(0, 10);
    
    localStorage.setItem('scoreHistory', JSON.stringify(scores));
}

/**
 * 成績履歴を表示
 */
function displayScoreHistory() {
    const scores = JSON.parse(localStorage.getItem('scoreHistory') || '[]');
    
    if (scores.length === 0) {
        historyArea.style.display = 'none';
        return;
    }
    
    // ベストタイムを計算
    let bestTimeIndex = -1;
    let bestTime = Infinity;
    
    scores.forEach((score, index) => {
        const timeParts = score.time.split(':');
        const timeInSeconds = parseFloat(timeParts[0]) * 60 + parseFloat(timeParts[1]);
        if (timeInSeconds < bestTime && score.accuracy === 100) {
            bestTime = timeInSeconds;
            bestTimeIndex = index;
        }
    });
    
    // リストを作成
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    
    scores.forEach((score, index) => {
        const item = document.createElement('div');
        item.className = 'history-item' + (index === bestTimeIndex ? ' best' : '');
        
        const date = new Date(score.date).toLocaleDateString(currentLanguage);
        const operationName = t(score.operation);
        
        // 後方互換性: 旧データはgridSize、新データはrowSize/colSize
        const displayRows = score.rowSize || score.gridSize || 'N/A';
        const displayCols = score.colSize || score.gridSize || 'N/A';
        
        item.innerHTML = `
            <span class="history-date">${date}</span>
            <span class="history-details">${displayRows}×${displayCols} ${operationName}</span>
            <span class="history-score">${score.accuracy}% - ${score.time}${index === bestTimeIndex ? '<span class="best-badge">' + t('best') + '</span>' : ''}</span>
        `;
        
        historyList.appendChild(item);
    });
    
    historyArea.style.display = 'block';
    
    // グラフ描画を呼び出し
    displayScoreChart(scores);
}

/**
 * 成長グラフを描画（Chart.js使用）
 * @param {Array} scores - スコア履歴配列
 */
function displayScoreChart(scores) {
    // 3件以上のデータがある場合のみグラフ表示
    if (scores.length < 3) {
        const chartContainer = document.getElementById('chartContainer');
        if (chartContainer) {
            chartContainer.style.display = 'none';
        }
        return;
    }
    
    // コンテナが存在しない場合は作成
    let chartContainer = document.getElementById('chartContainer');
    if (!chartContainer) {
        chartContainer = document.createElement('div');
        chartContainer.id = 'chartContainer';
        chartContainer.className = 'chart-container';
        
        // タイトル
        const chartTitle = document.createElement('h3');
        chartTitle.className = 'chart-title';
        chartTitle.textContent = t('chartTitle');
        chartContainer.appendChild(chartTitle);
        
        // タイムグラフ用canvasコンテナ
        const timeChartWrapper = document.createElement('div');
        timeChartWrapper.className = 'chart-wrapper';
        const timeCanvas = document.createElement('canvas');
        timeCanvas.id = 'timeChart';
        timeChartWrapper.appendChild(timeCanvas);
        chartContainer.appendChild(timeChartWrapper);
        
        // 正答率グラフ用canvasコンテナ
        const accuracyChartWrapper = document.createElement('div');
        accuracyChartWrapper.className = 'chart-wrapper';
        const accuracyCanvas = document.createElement('canvas');
        accuracyCanvas.id = 'accuracyChart';
        accuracyChartWrapper.appendChild(accuracyCanvas);
        chartContainer.appendChild(accuracyChartWrapper);
        
        // historyAreaの後に挿入
        const historyArea = document.getElementById('historyArea');
        historyArea.parentNode.insertBefore(chartContainer, historyArea.nextSibling);
    }
    
    chartContainer.style.display = 'block';
    
    // データ準備（古い順にする - 新しいデータが右側）
    const reversedScores = [...scores].reverse();
    const labels = reversedScores.map((score, index) => `#${index + 1}`);
    
    // タイムデータ（秒単位に変換）
    const timeData = reversedScores.map(score => {
        const timeParts = score.time.split(':');
        return parseFloat(timeParts[0]) * 60 + parseFloat(timeParts[1]);
    });
    
    // 正答率データ
    const accuracyData = reversedScores.map(score => score.accuracy);
    
    // 既存のチャートを破棄
    const timeChartCanvas = document.getElementById('timeChart');
    const accuracyChartCanvas = document.getElementById('accuracyChart');
    
    if (window.timeChartInstance) {
        window.timeChartInstance.destroy();
    }
    if (window.accuracyChartInstance) {
        window.accuracyChartInstance.destroy();
    }
    
    // タイムグラフ作成（下がるほど成長）
    window.timeChartInstance = new Chart(timeChartCanvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: t('chartTimeLabel'),
                data: timeData,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const seconds = context.parsed.y;
                            const minutes = Math.floor(seconds / 60);
                            const remainingSeconds = (seconds % 60).toFixed(2);
                            return `${context.dataset.label}: ${minutes}:${remainingSeconds.padStart(5, '0')}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    reverse: false, // 下がるほど良い
                    ticks: {
                        callback: function(value) {
                            const minutes = Math.floor(value / 60);
                            const seconds = Math.floor(value % 60);
                            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
                        }
                    }
                }
            }
        }
    });
    
    // 正答率グラフ作成（上がるほど成長）
    window.accuracyChartInstance = new Chart(accuracyChartCanvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: t('chartAccuracyLabel'),
                data: accuracyData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

/**
 * 入力モードのUI言語更新
 */
function updateInputModeLanguage() {
    // タブラベル
    if (printModeLabel) printModeLabel.textContent = t('printMode');
    if (inputModeLabel) inputModeLabel.textContent = t('inputMode');
    
    // タイマーボタン
    const startTimerLabel = document.getElementById('startTimerLabel');
    const pauseTimerLabel = document.getElementById('pauseTimerLabel');
    const resetTimerLabel = document.getElementById('resetTimerLabel');
    if (startTimerLabel) startTimerLabel.textContent = t('startTimer');
    if (pauseTimerLabel) pauseTimerLabel.textContent = t('pauseTimer');
    if (resetTimerLabel) resetTimerLabel.textContent = t('resetTimer');
    
    // 採点ボタン
    const gradeButtonLabel = document.getElementById('gradeButtonLabel');
    if (gradeButtonLabel) gradeButtonLabel.textContent = t('gradeButton');
    
    // 結果ラベル
    const resultsTitle = document.getElementById('resultsTitle');
    const correctLabel = document.getElementById('correctLabel');
    const incorrectLabel = document.getElementById('incorrectLabel');
    const accuracyLabel = document.getElementById('accuracyLabel');
    const timeLabel = document.getElementById('timeLabel');
    if (resultsTitle) resultsTitle.textContent = t('results');
    if (correctLabel) correctLabel.textContent = t('correct');
    if (incorrectLabel) incorrectLabel.textContent = t('incorrect');
    if (accuracyLabel) accuracyLabel.textContent = t('accuracy');
    if (timeLabel) timeLabel.textContent = t('time');
    
    // 履歴ラベル
    const historyTitle = document.getElementById('historyTitle');
    if (historyTitle) historyTitle.textContent = t('scoreHistory');
    
    // 横持ちメッセージ（main.jsで更新される）
    // rotateDeviceTitle, rotateDeviceVerticalOK, rotateDeviceTrainingはmain.jsで処理
    
    // 移動方向ラベル
    const moveDirectionLabel = document.getElementById('moveDirectionLabel');
    const moveRightLabel = document.getElementById('moveRightLabel');
    const moveDownLabel = document.getElementById('moveDownLabel');
    if (moveDirectionLabel) moveDirectionLabel.textContent = t('moveDirection');
    if (moveRightLabel) moveRightLabel.textContent = t('moveRight');
    if (moveDownLabel) moveDownLabel.textContent = t('moveDown');
}

/**
 * テンキーの移動ボタンのアイコンを更新
 */
function updateNumpadMoveButton() {
    const moveBtn = document.getElementById('numpadMoveBtn');
    if (moveBtn) {
        moveBtn.textContent = moveDirection === 'right' ? '→' : '↓';
    }
}

/**
 * ヘッダー固定モードの切り替え
 */
function toggleStickyHeaderMode() {
    stickyHeaderMode = !stickyHeaderMode;
    applyStickyHeaderMode();
    updateStickyButtonLabel();
}

/**
 * ヘッダー固定モードを適用
 */
function applyStickyHeaderMode() {
    const table = document.querySelector('.input-table');
    if (!table) {
        return;
    }
    
    if (stickyHeaderMode) {
        table.classList.add('sticky-headers');
    } else {
        table.classList.remove('sticky-headers');
    }
}

/**
 * ヘッダー固定ボタンのラベルを更新
 */
function updateStickyButtonLabel() {
    const label = document.getElementById('toggleStickyLabel');
    if (!label) return;
    
    if (stickyHeaderMode) {
        label.textContent = t('stickyHeaderOn');
    } else {
        label.textContent = t('stickyHeaderOff');
    }
}

/**
 * 入力開始を検知してヘッダー固定モードを自動ON
 */
function onInputStart() {
    if (!hasStartedInput) {
        hasStartedInput = true;
        stickyHeaderMode = true;
        applyStickyHeaderMode();
        updateStickyButtonLabel();
        // ボタンを表示
        if (toggleStickyBtn) {
            toggleStickyBtn.style.display = 'inline-block';
        }
    }
}


