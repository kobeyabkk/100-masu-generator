// 多言語対応の翻訳データ
const translations = {
    ja: {
        // ページタイトル
        pageTitle: "百マス計算ジェネレーター",
        
        // 演算の種類
        operation: "演算の種類：",
        addition: "たし算",
        subtraction: "ひき算",
        multiplication: "かけ算",
        division: "わり算",
        
        // マスの数
        gridSize: "マスの数：",
        rowSize: "行数（縦）：",
        colSize: "列数（横）：",
        
        // 数値範囲
        firstNumber: {
            addition: "足される数の範囲：",
            subtraction: "引かれる数の範囲：",
            multiplication: "かけられる数の範囲：",
            division: "わられる数の範囲："
        },
        secondNumber: {
            addition: "足す数の範囲：",
            subtraction: "引く数の範囲：",
            multiplication: "かける数の範囲：",
            division: "わる数の範囲："
        },
        
        // 固定数値
        useFixedNumbers: "特定の数値を固定する",
        swapOperands: "筆算形式にする（数値の配置を入れ替える）",
        allowNegative: "負の数を含む",
        randomNegative: "ランダムに負の数にする",
        randomShuffle: "ランダムに配置する",
        fixedFirst: {
            addition: "固定する数値（足される数）：",
            subtraction: "固定する数値（引かれる数）：",
            multiplication: "固定する数値（かけられる数）：",
            division: "固定する数値（わられる数）："
        },
        fixedSecond: {
            addition: "固定する数値（足す数）：",
            subtraction: "固定する数値（引く数）：",
            multiplication: "固定する数値（かける数）：",
            division: "固定する数値（わる数）："
        },
        fixedNumbersPlaceholder: "例: 1,2,3,4,5",
        fixedNumbersHint: "カンマ区切りで入力してください",
        
        // 割り算プリセット
        divisionPreset: "割り算プリセット：",
        divisionPresetEasy: "簡単（2桁÷1桁）",
        divisionPresetNormal: "普通（3桁÷1桁）",
        divisionPresetHard: "難しい（3桁÷2桁）",
        divisionPresetCustom: "カスタム（範囲指定）",
        divisionIntegerRatio: "整数解の割合：",
        divisionIntegerRatioHint: "割り切れる問題の最低割合を設定",
        
        // ボタン
        generateButton: "問題を生成",
        printButton: "印刷する",
        
        // 問題・答え
        problemTitle: "百マス計算（問題）",
        answerTitle: "百マス計算（答え）",
        
        // 入力モード
        printMode: "印刷モード",
        inputMode: "入力モード",
        startTimer: "スタート",
        pauseTimer: "一時停止",
        resetTimer: "リセット",
        gradeButton: "採点する",
        moveDirection: "移動方向：",
        moveRight: "右に移動",
        moveDown: "下に移動",
        stickyHeaderOn: "🔓 全体表示",
        stickyHeaderOff: "📌 ヘッダー固定",
        focusMode: "フォーカスモード（スマホ）",
        results: "採点結果",
        correct: "正解：",
        incorrect: "不正解：",
        accuracy: "正答率：",
        time: "タイム：",
        scoreHistory: "成績記録",
        best: "ベスト",
        chartTitle: "成長グラフ",
        chartTimeLabel: "タイム推移（秒）",
        chartAccuracyLabel: "正答率推移（%）",
        chartNoData: "グラフを表示するには3回以上の記録が必要です",
        rotateDevice: "入力トレーニングには横向き表示を推奨",
        rotateDeviceVerticalOK: "✅ 縦向きでも印刷用の問題生成は可能です",
        rotateDeviceTraining: "💡 本格的な入力トレーニングは横向きでどうぞ",
        noDataMessage: "まず「印刷モード」で問題を生成してください",
        
        // クイックスタート
        quickStartMultiplication: "10×10 かけ算",
        quickStartAddition: "10×10 たし算",
        quickStartSubtraction: "10×10 ひき算",
        
        // アコーディオン
        advancedSettings: "詳細設定",
        
        // エラーメッセージ
        errorMinMax: "最小値は最大値以下にしてください。",
        errorRangeShort: "エラー: {type}の数値範囲が不足しています。\n{type}の数: {size}個\n必要な範囲: 最低{size}個の異なる数値\n現在の範囲: {min}～{max}（{count}個）\n\n範囲を広げるか、{type}の数を減らしてください。",
        errorRangeType: {
            row: "行",
            col: "列"
        }
    },
    
    en: {
        pageTitle: "100-Grid Math Generator",
        
        operation: "Operation:",
        addition: "Addition",
        subtraction: "Subtraction",
        multiplication: "Multiplication",
        division: "Division",
        
        gridSize: "Grid Size:",
        rowSize: "Rows (Vertical):",
        colSize: "Columns (Horizontal):",
        
        firstNumber: {
            addition: "Augend Range:",
            subtraction: "Minuend Range:",
            multiplication: "Multiplicand Range:",
            division: "Dividend Range:"
        },
        secondNumber: {
            addition: "Addend Range:",
            subtraction: "Subtrahend Range:",
            multiplication: "Multiplier Range:",
            division: "Divisor Range:"
        },
        
        useFixedNumbers: "Use Fixed Numbers",
        swapOperands: "Vertical Arithmetic Format (Swap Number Positions)",
        allowNegative: "Include Negative Numbers",
        randomNegative: "Randomly Make Negative",
        randomShuffle: "Randomly Arrange",
        fixedFirst: {
            addition: "Fixed Numbers (Augend):",
            subtraction: "Fixed Numbers (Minuend):",
            multiplication: "Fixed Numbers (Multiplicand):",
            division: "Fixed Numbers (Dividend):"
        },
        fixedSecond: {
            addition: "Fixed Numbers (Addend):",
            subtraction: "Fixed Numbers (Subtrahend):",
            multiplication: "Fixed Numbers (Multiplier):",
            division: "Fixed Numbers (Divisor):"
        },
        fixedNumbersPlaceholder: "e.g. 1,2,3,4,5",
        fixedNumbersHint: "Enter numbers separated by commas",
        
        // Division Preset
        divisionPreset: "Division Preset:",
        divisionPresetEasy: "Easy (2-digit ÷ 1-digit)",
        divisionPresetNormal: "Normal (3-digit ÷ 1-digit)",
        divisionPresetHard: "Hard (3-digit ÷ 2-digit)",
        divisionPresetCustom: "Custom (Range)",
        divisionIntegerRatio: "Integer Solution Ratio:",
        divisionIntegerRatioHint: "Minimum ratio of problems with integer solutions",
        
        generateButton: "Generate",
        printButton: "Print",
        
        problemTitle: "100-Grid Math (Problem)",
        answerTitle: "100-Grid Math (Answer)",
        
        // Input Mode
        printMode: "Print Mode",
        inputMode: "Input Mode",
        startTimer: "Start",
        pauseTimer: "Pause",
        resetTimer: "Reset",
        gradeButton: "Grade",
        moveDirection: "Move Direction:",
        moveRight: "Move Right",
        moveDown: "Move Down",
        stickyHeaderOn: "🔓 Full View",
        stickyHeaderOff: "📌 Fix Headers",
        focusMode: "Focus Mode (Mobile)",
        results: "Results",
        correct: "Correct:",
        incorrect: "Incorrect:",
        accuracy: "Accuracy:",
        time: "Time:",
        scoreHistory: "Score History",
        best: "Best",
        chartTitle: "Progress Chart",
        chartTimeLabel: "Time Progress (seconds)",
        chartAccuracyLabel: "Accuracy Progress (%)",
        chartNoData: "At least 3 records are required to display the chart",
        rotateDevice: "Landscape Mode Recommended for Input Training",
        rotateDeviceVerticalOK: "✅ Portrait mode works for generating printable problems",
        rotateDeviceTraining: "💡 For serious input training, use landscape mode",
        noDataMessage: "Please generate a problem first in 'Print Mode'",
        
        // Quick Start
        quickStartMultiplication: "10×10 Multiplication",
        quickStartAddition: "10×10 Addition",
        quickStartSubtraction: "10×10 Subtraction",
        
        // Accordion
        advancedSettings: "Advanced Settings",
        
        errorMinMax: "Minimum value must be less than or equal to maximum value.",
        errorRangeShort: "Error: Insufficient number range for {type}.\nNumber of {type}: {size}\nRequired: At least {size} different numbers\nCurrent range: {min}~{max} ({count} numbers)\n\nPlease expand the range or reduce the number of {type}.",
        errorRangeType: {
            row: "rows",
            col: "columns"
        }
    },
    
    zh_CN: {
        pageTitle: "百格计算生成器",
        
        operation: "运算类型：",
        addition: "加法",
        subtraction: "减法",
        multiplication: "乘法",
        division: "除法",
        
        gridSize: "网格大小：",
        rowSize: "行数（纵向）：",
        colSize: "列数（横向）：",
        
        firstNumber: {
            addition: "被加数范围：",
            subtraction: "被减数范围：",
            multiplication: "被乘数范围：",
            division: "被除数范围："
        },
        secondNumber: {
            addition: "加数范围：",
            subtraction: "减数范围：",
            multiplication: "乘数范围：",
            division: "除数范围："
        },
        
        useFixedNumbers: "固定特定数值",
        swapOperands: "竖式格式（交换数字位置）",
        allowNegative: "包含负数",
        randomNegative: "随机转为负数",
        randomShuffle: "随机排列",
        fixedFirst: {
            addition: "固定数值（被加数）：",
            subtraction: "固定数值（被减数）：",
            multiplication: "固定数值（被乘数）：",
            division: "固定数值（被除数）："
        },
        fixedSecond: {
            addition: "固定数值（加数）：",
            subtraction: "固定数值（减数）：",
            multiplication: "固定数值（乘数）：",
            division: "固定数值（除数）："
        },
        fixedNumbersPlaceholder: "例如: 1,2,3,4,5",
        fixedNumbersHint: "请用逗号分隔输入数字",
        
        // 除法预设
        divisionPreset: "除法预设：",
        divisionPresetEasy: "简单（2位÷1位）",
        divisionPresetNormal: "普通（3位÷1位）",
        divisionPresetHard: "困难（3位÷2位）",
        divisionPresetCustom: "自定义（范围）",
        divisionIntegerRatio: "整数解比例：",
        divisionIntegerRatioHint: "设置整除问题的最低比例",
        
        generateButton: "生成题目",
        printButton: "打印",
        
        problemTitle: "百格计算（题目）",
        answerTitle: "百格计算（答案）",
        
        // 输入模式
        printMode: "打印模式",
        inputMode: "输入模式",
        startTimer: "开始",
        pauseTimer: "暂停",
        resetTimer: "重置",
        gradeButton: "评分",
        moveDirection: "移动方向：",
        moveRight: "向右移动",
        moveDown: "向下移动",
        stickyHeaderOn: "🔓 全屏显示",
        stickyHeaderOff: "📌 固定标题",
        focusMode: "专注模式（手机）",
        results: "评分结果",
        correct: "正确：",
        incorrect: "错误：",
        accuracy: "正确率：",
        time: "时间：",
        scoreHistory: "成绩记录",
        best: "最佳",
        chartTitle: "成长图表",
        chartTimeLabel: "时间进度(秒)",
        chartAccuracyLabel: "正确率进度(%)",
        chartNoData: "至少需要3次记录才能显示图表",
        rotateDevice: "输入训练推荐横屏模式",
        rotateDeviceVerticalOK: "✅ 竖屏也可以生成打印用题目",
        rotateDeviceTraining: "💡 正式输入训练请使用横屏",
        noDataMessage: "请先在'打印模式'中生成问题",
        
        // 快速启动
        quickStartMultiplication: "10×10 乘法",
        quickStartAddition: "10×10 加法",
        quickStartSubtraction: "10×10 减法",
        
        // 折叠
        advancedSettings: "详细设置",
        
        errorMinMax: "最小值必须小于或等于最大值。",
        errorRangeShort: "错误：{type}的数值范围不足。\n{type}数：{size}\n需要：至少{size}个不同的数字\n当前范围：{min}~{max}（{count}个数字）\n\n请扩大范围或减少{type}数。",
        errorRangeType: {
            row: "行",
            col: "列"
        }
    },
    
    zh_TW: {
        pageTitle: "百格計算生成器",
        
        operation: "運算類型：",
        addition: "加法",
        subtraction: "減法",
        multiplication: "乘法",
        division: "除法",
        
        gridSize: "網格大小：",
        rowSize: "行數（縱向）：",
        colSize: "列數（橫向）：",
        
        firstNumber: {
            addition: "被加數範圍：",
            subtraction: "被減數範圍：",
            multiplication: "被乘數範圍：",
            division: "被除數範圍："
        },
        secondNumber: {
            addition: "加數範圍：",
            subtraction: "減數範圍：",
            multiplication: "乘數範圍：",
            division: "除數範圍："
        },
        
        useFixedNumbers: "固定特定數值",
        swapOperands: "直式格式（交換數字位置）",
        allowNegative: "包含負數",
        randomNegative: "隨機轉為負數",
        randomShuffle: "隨機排列",
        fixedFirst: {
            addition: "固定數值（被加數）：",
            subtraction: "固定數值（被減數）：",
            multiplication: "固定數值（被乘數）：",
            division: "固定數值（被除數）："
        },
        fixedSecond: {
            addition: "固定數值（加數）：",
            subtraction: "固定數值（減數）：",
            multiplication: "固定數值（乘數）：",
            division: "固定數值（除數）："
        },
        fixedNumbersPlaceholder: "例如: 1,2,3,4,5",
        fixedNumbersHint: "請用逗號分隔輸入數字",
        
        // 除法預設
        divisionPreset: "除法預設：",
        divisionPresetEasy: "簡單（2位÷1位）",
        divisionPresetNormal: "普通（3位÷1位）",
        divisionPresetHard: "困難（3位÷2位）",
        divisionPresetCustom: "自訂（範圍）",
        divisionIntegerRatio: "整數解比例：",
        divisionIntegerRatioHint: "設定整除問題的最低比例",
        
        generateButton: "生成題目",
        printButton: "列印",
        
        problemTitle: "百格計算（題目）",
        answerTitle: "百格計算（答案）",
        
        // 輸入模式
        printMode: "列印模式",
        inputMode: "輸入模式",
        startTimer: "開始",
        pauseTimer: "暫停",
        resetTimer: "重置",
        gradeButton: "評分",
        moveDirection: "移動方向：",
        moveRight: "向右移動",
        moveDown: "向下移動",
        stickyHeaderOn: "🔓 全屏顯示",
        stickyHeaderOff: "📌 固定標題",
        focusMode: "專注模式（手機）",
        results: "評分結果",
        correct: "正確：",
        incorrect: "錯誤：",
        accuracy: "正確率：",
        time: "時間：",
        scoreHistory: "成績記錄",
        best: "最佳",
        chartTitle: "成長圖表",
        chartTimeLabel: "時間進度(秒)",
        chartAccuracyLabel: "正確率進度(%)",
        chartNoData: "至少需要3次記錄才能顯示圖表",
        rotateDevice: "輸入訓練推薦橫屏模式",
        rotateDeviceVerticalOK: "✅ 豎屏也可以生成打印用題目",
        rotateDeviceTraining: "💡 正式輸入訓練請使用橫屏",
        noDataMessage: "請先在'列印模式'中生成問題",
        
        // 快速啟動
        quickStartMultiplication: "10×10 乘法",
        quickStartAddition: "10×10 加法",
        quickStartSubtraction: "10×10 減法",
        
        // 折疊
        advancedSettings: "詳細設定",
        
        errorMinMax: "最小值必須小於或等於最大值。",
        errorRangeShort: "錯誤：{type}的數值範圍不足。\n網格大小：{size}×{size}\n需要：至少{size}個不同的數字\n當前範圍：{min}~{max}（{count}個數字）\n\n請擴大範圍或減小網格大小。",
        errorRangeType: {
            row: "行",
            col: "列"
        }
    },
    
    ko: {
        pageTitle: "100칸 계산 생성기",
        
        operation: "연산 유형:",
        addition: "덧셈",
        subtraction: "뺄셈",
        multiplication: "곱셈",
        division: "나눗셈",
        
        gridSize: "그리드 크기:",
        rowSize: "행 수 (세로):",
        colSize: "열 수 (가로):",
        
        firstNumber: {
            addition: "피가수 범위:",
            subtraction: "피감수 범위:",
            multiplication: "피승수 범위:",
            division: "피제수 범위:"
        },
        secondNumber: {
            addition: "가수 범위:",
            subtraction: "감수 범위:",
            multiplication: "승수 범위:",
            division: "제수 범위:"
        },
        
        useFixedNumbers: "특정 숫자 고정",
        swapOperands: "세로 계산 형식 (숫자 위치 바꾸기)",
        allowNegative: "음수 포함",
        randomNegative: "무작위로 음수로 만들기",
        randomShuffle: "무작위로 배치",
        fixedFirst: {
            addition: "고정 숫자 (피가수):",
            subtraction: "고정 숫자 (피감수):",
            multiplication: "고정 숫자 (피승수):",
            division: "고정 숫자 (피제수):"
        },
        fixedSecond: {
            addition: "고정 숫자 (가수):",
            subtraction: "고정 숫자 (감수):",
            multiplication: "고정 숫자 (승수):",
            division: "고정 숫자 (제수):"
        },
        fixedNumbersPlaceholder: "예: 1,2,3,4,5",
        fixedNumbersHint: "쉼표로 구분하여 입력하세요",
        
        // 나눗셈 프리셋
        divisionPreset: "나눗셈 프리셋:",
        divisionPresetEasy: "쉬움 (2자리÷1자리)",
        divisionPresetNormal: "보통 (3자리÷1자리)",
        divisionPresetHard: "어려움 (3자리÷2자리)",
        divisionPresetCustom: "사용자 정의 (범위)",
        divisionIntegerRatio: "정수 해 비율:",
        divisionIntegerRatioHint: "나누어떨어지는 문제의 최소 비율 설정",
        
        generateButton: "문제 생성",
        printButton: "인쇄",
        
        problemTitle: "100칸 계산 (문제)",
        answerTitle: "100칸 계산 (답)",
        
        // 입력 모드
        printMode: "인쇄 모드",
        inputMode: "입력 모드",
        startTimer: "시작",
        pauseTimer: "일시 정지",
        resetTimer: "재설정",
        gradeButton: "채점",
        moveDirection: "이동 방향:",
        moveRight: "오른쪽으로 이동",
        moveDown: "아래로 이동",
        stickyHeaderOn: "🔓 전체 보기",
        stickyHeaderOff: "📌 헤더 고정",
        focusMode: "포커스 모드 (모바일)",
        results: "채점 결과",
        correct: "정답:",
        incorrect: "오답:",
        accuracy: "정답률:",
        time: "시간:",
        scoreHistory: "성적 기록",
        best: "베스트",
        chartTitle: "성장 그래프",
        chartTimeLabel: "시간 진행(초)",
        chartAccuracyLabel: "정확도 진행(%)",
        chartNoData: "그래프를 표시하려면 3회 이상의 기록이 필요합니다",
        rotateDevice: "입력 훈련에는 가로 모드 권장",
        rotateDeviceVerticalOK: "✅ 세로 모드에서도 인쇄용 문제 생성 가능",
        rotateDeviceTraining: "💡 본격적인 입력 훈련은 가로 모드로",
        noDataMessage: "먼저 '인쇄 모드'에서 문제를 생성하세요",
        
        // 빠른 시작
        quickStartMultiplication: "10×10 곱셈",
        quickStartAddition: "10×10 덧셈",
        quickStartSubtraction: "10×10 뺄셈",
        
        // 아코디언
        advancedSettings: "고급 설정",
        
        errorMinMax: "최소값은 최대값보다 작거나 같아야 합니다.",
        errorRangeShort: "오류: {type}의 숫자 범위가 부족합니다.\n{type} 수: {size}\n필요: 최소 {size}개의 서로 다른 숫자\n현재 범위: {min}~{max} ({count}개 숫자)\n\n범위를 확장하거나 {type} 수를 줄이세요.",
        errorRangeType: {
            row: "행",
            col: "열"
        }
    },
    
    th: {
        pageTitle: "เครื่องสร้างตารางคำนวณ 100 ช่อง",
        
        operation: "ประเภทการคำนวณ:",
        addition: "บวก",
        subtraction: "ลบ",
        multiplication: "คูณ",
        division: "หาร",
        
        gridSize: "ขนาดตาราง:",
        rowSize: "จำนวนแถว (แนวตั้ง):",
        colSize: "จำนวนคอลัมน์ (แนวนอน):",
        
        firstNumber: {
            addition: "ช่วงตัวตั้ง:",
            subtraction: "ช่วงตัวตั้ง:",
            multiplication: "ช่วงตัวตั้ง:",
            division: "ช่วงตัวตั้ง:"
        },
        secondNumber: {
            addition: "ช่วงตัวบวก:",
            subtraction: "ช่วงตัวลบ:",
            multiplication: "ช่วงตัวคูณ:",
            division: "ช่วงตัวหาร:"
        },
        
        useFixedNumbers: "ใช้ตัวเลขคงที่",
        swapOperands: "รูปแบบการคำนวณแนวตั้ง (สลับตำแหน่งตัวเลข)",
        allowNegative: "รวมจำนวนลบ",
        randomNegative: "เปลี่ยนเป็นจำนวนลบแบบสุ่ม",
        randomShuffle: "จัดเรียงแบบสุ่ม",
        fixedFirst: {
            addition: "ตัวเลขคงที่ (ตัวตั้ง):",
            subtraction: "ตัวเลขคงที่ (ตัวตั้ง):",
            multiplication: "ตัวเลขคงที่ (ตัวตั้ง):",
            division: "ตัวเลขคงที่ (ตัวตั้ง):"
        },
        fixedSecond: {
            addition: "ตัวเลขคงที่ (ตัวบวก):",
            subtraction: "ตัวเลขคงที่ (ตัวลบ):",
            multiplication: "ตัวเลขคงที่ (ตัวคูณ):",
            division: "ตัวเลขคงที่ (ตัวหาร):"
        },
        fixedNumbersPlaceholder: "ตัวอย่าง: 1,2,3,4,5",
        fixedNumbersHint: "ใส่ตัวเลขคั่นด้วยเครื่องหมายจุลภาค",
        
        divisionPreset: "พรีเซ็ตการหาร:",
        divisionPresetEasy: "ง่าย (2หลัก÷1หลัก)",
        divisionPresetNormal: "ปานกลาง (3หลัก÷1หลัก)",
        divisionPresetHard: "ยาก (3หลัก÷2หลัก)",
        divisionPresetCustom: "กำหนดเอง (ช่วง)",
        divisionIntegerRatio: "อัตราส่วนของคำตอบจำนวนเต็ม:",
        divisionIntegerRatioHint: "กำหนดอัตราส่วนต่ำสุดของโจทย์ที่หารลงตัว",
        
        generateButton: "สร้างโจทย์",
        printButton: "พิมพ์",
        
        problemTitle: "ตารางคำนวณ 100 ช่อง (โจทย์)",
        answerTitle: "ตารางคำนวณ 100 ช่อง (เฉลย)",
        
        // โหมดการป้อน
        printMode: "โหมดพิมพ์",
        inputMode: "โหมดการป้อน",
        startTimer: "เริ่ม",
        pauseTimer: "หยุดชั่วคราว",
        resetTimer: "รีเซ็ต",
        gradeButton: "ตรวจคะแนน",
        moveDirection: "ทิศทางการเคลื่อนที่:",
        moveRight: "เคลื่อนที่ไปทางขวา",
        moveDown: "เคลื่อนที่ลง",
        stickyHeaderOn: "🔓 แสดงทั้งหมด",
        stickyHeaderOff: "📌 ตรึงส่วนหัว",
        focusMode: "โหมดโฟกัส (มือถือ)",
        results: "ผลการตรวจ",
        correct: "ถูกต้อง:",
        incorrect: "ผิด:",
        accuracy: "อัตราความถูกต้อง:",
        time: "เวลา:",
        scoreHistory: "ประวัติคะแนน",
        best: "ดีที่สุด",
        chartTitle: "กราฟความก้าวหน้า",
        chartTimeLabel: "ความก้าวหน้าของเวลา (วินาที)",
        chartAccuracyLabel: "ความก้าวหน้าของความแม่นยำ (%)",
        chartNoData: "ต้องมีบันทึกอย่างน้อย 3 รายการเพื่อแสดงกราฟ",
        rotateDevice: "แนะนำโหมดแนวนอนสำหรับการฝึกป้อนข้อมูล",
        rotateDeviceVerticalOK: "✅ โหมดแนวตั้งสามารถสร้างโจทย์สำหรับพิมพ์ได้",
        rotateDeviceTraining: "💡 การฝึกป้อนข้อมูลจริงจังควรใช้โหมดแนวนอน",
        noDataMessage: "กรุณาสร้างโจทย์ใน 'โหมดพิมพ์' ก่อน",
        
        // เริ่มด่วน
        quickStartMultiplication: "10×10 คูณ",
        quickStartAddition: "10×10 บวก",
        quickStartSubtraction: "10×10 ลบ",
        
        // อะคอร์เดียน
        advancedSettings: "การตั้งค่าขั้นสูง",
        
        errorMinMax: "ค่าต่ำสุดต้องน้อยกว่าหรือเท่ากับค่าสูงสุด",
        errorRangeShort: "ข้อผิดพลาด: ช่วงตัวเลขของ{type}ไม่เพียงพอ\nจำนวน{type}: {size}\nต้องการ: อย่างน้อย {size} ตัวเลขที่แตกต่างกัน\nช่วงปัจจุบัน: {min}~{max} ({count} ตัวเลข)\n\nกรุณาขยายช่วงหรือลดจำนวน{type}",
        errorRangeType: {
            row: "แถว",
            col: "คอลัมน์"
        }
    },
    
    es: {
        pageTitle: "Generador de Cuadrícula de 100 Cálculos",
        
        operation: "Tipo de Operación:",
        addition: "Suma",
        subtraction: "Resta",
        multiplication: "Multiplicación",
        division: "División",
        
        gridSize: "Tamaño de Cuadrícula:",
        rowSize: "Filas (Vertical):",
        colSize: "Columnas (Horizontal):",
        
        firstNumber: {
            addition: "Rango del Sumando:",
            subtraction: "Rango del Minuendo:",
            multiplication: "Rango del Multiplicando:",
            division: "Rango del Dividendo:"
        },
        secondNumber: {
            addition: "Rango del Sumando:",
            subtraction: "Rango del Sustraendo:",
            multiplication: "Rango del Multiplicador:",
            division: "Rango del Divisor:"
        },
        
        useFixedNumbers: "Usar Números Fijos",
        swapOperands: "Formato de Aritmética Vertical (Intercambiar Posiciones)",
        allowNegative: "Incluir Números Negativos",
        randomNegative: "Hacer Negativos Aleatoriamente",
        randomShuffle: "Organizar Aleatoriamente",
        fixedFirst: {
            addition: "Números Fijos (Sumando):",
            subtraction: "Números Fijos (Minuendo):",
            multiplication: "Números Fijos (Multiplicando):",
            division: "Números Fijos (Dividendo):"
        },
        fixedSecond: {
            addition: "Números Fijos (Sumando):",
            subtraction: "Números Fijos (Sustraendo):",
            multiplication: "Números Fijos (Multiplicador):",
            division: "Números Fijos (Divisor):"
        },
        fixedNumbersPlaceholder: "ej. 1,2,3,4,5",
        fixedNumbersHint: "Ingrese números separados por comas",
        
        divisionPreset: "Preset de División:",
        divisionPresetEasy: "Fácil (2 dígitos ÷ 1 dígito)",
        divisionPresetNormal: "Normal (3 dígitos ÷ 1 dígito)",
        divisionPresetHard: "Difícil (3 dígitos ÷ 2 dígitos)",
        divisionPresetCustom: "Personalizado (Rango)",
        divisionIntegerRatio: "Proporción de Soluciones Enteras:",
        divisionIntegerRatioHint: "Establecer proporción mínima de problemas con soluciones enteras",
        
        generateButton: "Generar",
        printButton: "Imprimir",
        
        problemTitle: "Cuadrícula de 100 (Problema)",
        answerTitle: "Cuadrícula de 100 (Respuesta)",
        
        printMode: "Modo Impresión",
        inputMode: "Modo Entrada",
        startTimer: "Iniciar",
        pauseTimer: "Pausar",
        resetTimer: "Reiniciar",
        gradeButton: "Calificar",
        moveDirection: "Dirección:",
        moveRight: "Mover Derecha",
        moveDown: "Mover Abajo",
        stickyHeaderOn: "🔓 Vista Completa",
        stickyHeaderOff: "📌 Fijar Encabezados",
        focusMode: "Modo Enfoque (Móvil)",
        results: "Resultados",
        correct: "Correcto:",
        incorrect: "Incorrecto:",
        accuracy: "Precisión:",
        time: "Tiempo:",
        scoreHistory: "Historial",
        best: "Mejor",
        chartTitle: "Gráfico de Progreso",
        chartTimeLabel: "Progreso de Tiempo (segundos)",
        chartAccuracyLabel: "Progreso de Precisión (%)",
        chartNoData: "Se requieren al menos 3 registros para mostrar el gráfico",
        rotateDevice: "Modo horizontal recomendado para entrenamiento",
        rotateDeviceVerticalOK: "✅ El modo vertical funciona para generar problemas imprimibles",
        rotateDeviceTraining: "💡 Para entrenamiento serio, use el modo horizontal",
        noDataMessage: "Por favor genere un problema primero en 'Modo Impresión'",
        
        // Inicio Rápido
        quickStartMultiplication: "10×10 Multiplicación",
        quickStartAddition: "10×10 Suma",
        quickStartSubtraction: "10×10 Resta",
        
        // Acordeón
        advancedSettings: "Configuración Avanzada",
        
        errorMinMax: "El valor mínimo debe ser menor o igual al valor máximo.",
        errorRangeShort: "Error: Rango de números insuficiente para {type}.\nNúmero de {type}: {size}\nRequerido: Al menos {size} números diferentes\nRango actual: {min}~{max} ({count} números)\n\nPor favor amplíe el rango o reduzca el número de {type}.",
        errorRangeType: {
            row: "filas",
            col: "columnas"
        }
    },
    
    fr: {
        pageTitle: "Générateur de Grille de Calcul 100",
        
        operation: "Type d'Opération:",
        addition: "Addition",
        subtraction: "Soustraction",
        multiplication: "Multiplication",
        division: "Division",
        
        gridSize: "Taille de la Grille:",
        rowSize: "Lignes (Vertical):",
        colSize: "Colonnes (Horizontal):",
        
        firstNumber: {
            addition: "Plage du Premier Nombre:",
            subtraction: "Plage du Diminuende:",
            multiplication: "Plage du Multiplicande:",
            division: "Plage du Dividende:"
        },
        secondNumber: {
            addition: "Plage du Deuxième Nombre:",
            subtraction: "Plage du Diminuteur:",
            multiplication: "Plage du Multiplicateur:",
            division: "Plage du Diviseur:"
        },
        
        useFixedNumbers: "Utiliser des Nombres Fixes",
        swapOperands: "Format Arithmétique Vertical (Échanger les Positions)",
        allowNegative: "Inclure les Nombres Négatifs",
        randomNegative: "Rendre Négatifs Aléatoirement",
        randomShuffle: "Organiser Aléatoirement",
        fixedFirst: {
            addition: "Nombres Fixes (Premier):",
            subtraction: "Nombres Fixes (Diminuende):",
            multiplication: "Nombres Fixes (Multiplicande):",
            division: "Nombres Fixes (Dividende):"
        },
        fixedSecond: {
            addition: "Nombres Fixes (Deuxième):",
            subtraction: "Nombres Fixes (Diminuteur):",
            multiplication: "Nombres Fixes (Multiplicateur):",
            division: "Nombres Fixes (Diviseur):"
        },
        fixedNumbersPlaceholder: "ex. 1,2,3,4,5",
        fixedNumbersHint: "Entrez les nombres séparés par des virgules",
        
        divisionPreset: "Préréglage de Division:",
        divisionPresetEasy: "Facile (2 chiffres ÷ 1 chiffre)",
        divisionPresetNormal: "Normal (3 chiffres ÷ 1 chiffre)",
        divisionPresetHard: "Difficile (3 chiffres ÷ 2 chiffres)",
        divisionPresetCustom: "Personnalisé (Plage)",
        divisionIntegerRatio: "Ratio de Solutions Entières:",
        divisionIntegerRatioHint: "Définir le ratio minimum de problèmes avec des solutions entières",
        
        generateButton: "Générer",
        printButton: "Imprimer",
        
        problemTitle: "Grille de 100 (Problème)",
        answerTitle: "Grille de 100 (Réponse)",
        
        printMode: "Mode Impression",
        inputMode: "Mode Saisie",
        startTimer: "Démarrer",
        pauseTimer: "Pause",
        resetTimer: "Réinitialiser",
        gradeButton: "Noter",
        moveDirection: "Direction:",
        moveRight: "Déplacer Droite",
        moveDown: "Déplacer Bas",
        stickyHeaderOn: "🔓 Vue Complète",
        stickyHeaderOff: "📌 Fixer En-têtes",
        focusMode: "Mode Focus (Mobile)",
        results: "Résultats",
        correct: "Correct:",
        incorrect: "Incorrect:",
        accuracy: "Précision:",
        time: "Temps:",
        scoreHistory: "Historique",
        best: "Meilleur",
        chartTitle: "Graphique de Progression",
        chartTimeLabel: "Progression du Temps (secondes)",
        chartAccuracyLabel: "Progression de la Précision (%)",
        chartNoData: "Au moins 3 enregistrements sont nécessaires pour afficher le graphique",
        rotateDevice: "Mode paysage recommandé pour l'entraînement",
        rotateDeviceVerticalOK: "✅ Le mode portrait fonctionne pour générer des problèmes imprimables",
        rotateDeviceTraining: "💡 Pour un entraînement sérieux, utilisez le mode paysage",
        noDataMessage: "Veuillez d'abord générer un problème en 'Mode Impression'",
        
        // Démarrage Rapide
        quickStartMultiplication: "10×10 Multiplication",
        quickStartAddition: "10×10 Addition",
        quickStartSubtraction: "10×10 Soustraction",
        
        // Accordéon
        advancedSettings: "Paramètres Avancés",
        
        errorMinMax: "La valeur minimale doit être inférieure ou égale à la valeur maximale.",
        errorRangeShort: "Erreur: Plage de nombres insuffisante pour {type}.\nNombre de {type}: {size}\nRequis: Au moins {size} nombres différents\nPlage actuelle: {min}~{max} ({count} nombres)\n\nVeuillez élargir la plage ou réduire le nombre de {type}.",
        errorRangeType: {
            row: "lignes",
            col: "colonnes"
        }
    },
    
    de: {
        pageTitle: "100-Felder-Rechengenerator",
        
        operation: "Rechenart:",
        addition: "Addition",
        subtraction: "Subtraktion",
        multiplication: "Multiplikation",
        division: "Division",
        
        gridSize: "Rastergröße:",
        rowSize: "Zeilen (Vertikal):",
        colSize: "Spalten (Horizontal):",
        
        firstNumber: {
            addition: "Bereich der ersten Zahl:",
            subtraction: "Bereich des Minuenden:",
            multiplication: "Bereich des Multiplikanden:",
            division: "Bereich des Dividenden:"
        },
        secondNumber: {
            addition: "Bereich der zweiten Zahl:",
            subtraction: "Bereich des Subtrahenden:",
            multiplication: "Bereich des Multiplikators:",
            division: "Bereich des Divisors:"
        },
        
        useFixedNumbers: "Feste Zahlen Verwenden",
        swapOperands: "Vertikales Arithmetikformat (Positionen Tauschen)",
        allowNegative: "Negative Zahlen Einbeziehen",
        randomNegative: "Zufällig Negativ Machen",
        randomShuffle: "Zufällig Anordnen",
        fixedFirst: {
            addition: "Feste Zahlen (Erste):",
            subtraction: "Feste Zahlen (Minuend):",
            multiplication: "Feste Zahlen (Multiplikand):",
            division: "Feste Zahlen (Dividend):"
        },
        fixedSecond: {
            addition: "Feste Zahlen (Zweite):",
            subtraction: "Feste Zahlen (Subtrahend):",
            multiplication: "Feste Zahlen (Multiplikator):",
            division: "Feste Zahlen (Divisor):"
        },
        fixedNumbersPlaceholder: "z.B. 1,2,3,4,5",
        fixedNumbersHint: "Geben Sie Zahlen getrennt durch Kommas ein",
        
        divisionPreset: "Divisions-Voreinstellung:",
        divisionPresetEasy: "Einfach (2-stellig ÷ 1-stellig)",
        divisionPresetNormal: "Normal (3-stellig ÷ 1-stellig)",
        divisionPresetHard: "Schwierig (3-stellig ÷ 2-stellig)",
        divisionPresetCustom: "Benutzerdefiniert (Bereich)",
        divisionIntegerRatio: "Ganzzahl-Lösungsverhältnis:",
        divisionIntegerRatioHint: "Minimales Verhältnis von Problemen mit ganzzahligen Lösungen festlegen",
        
        generateButton: "Generieren",
        printButton: "Drucken",
        
        problemTitle: "100-Felder-Rechnung (Aufgabe)",
        answerTitle: "100-Felder-Rechnung (Lösung)",
        
        printMode: "Druckmodus",
        inputMode: "Eingabemodus",
        startTimer: "Start",
        pauseTimer: "Pause",
        resetTimer: "Zurücksetzen",
        gradeButton: "Bewerten",
        moveDirection: "Richtung:",
        moveRight: "Nach Rechts",
        moveDown: "Nach Unten",
        stickyHeaderOn: "🔓 Vollansicht",
        stickyHeaderOff: "📌 Kopfzeilen Fixieren",
        focusMode: "Fokusmodus (Mobil)",
        results: "Ergebnisse",
        correct: "Richtig:",
        incorrect: "Falsch:",
        accuracy: "Genauigkeit:",
        time: "Zeit:",
        scoreHistory: "Verlauf",
        best: "Beste",
        chartTitle: "Fortschrittsgrafik",
        chartTimeLabel: "Zeitfortschritt (Sekunden)",
        chartAccuracyLabel: "Genauigkeitsfortschritt (%)",
        chartNoData: "Mindestens 3 Datensätze erforderlich, um die Grafik anzuzeigen",
        rotateDevice: "Querformat für Eingabetraining empfohlen",
        rotateDeviceVerticalOK: "✅ Hochformat funktioniert für druckbare Aufgaben",
        rotateDeviceTraining: "💡 Für ernsthaftes Training verwenden Sie Querformat",
        noDataMessage: "Bitte generieren Sie zuerst ein Problem im 'Druckmodus'",
        
        // Schnellstart
        quickStartMultiplication: "10×10 Multiplikation",
        quickStartAddition: "10×10 Addition",
        quickStartSubtraction: "10×10 Subtraktion",
        
        // Akkordeon
        advancedSettings: "Erweiterte Einstellungen",
        
        errorMinMax: "Der Mindestwert muss kleiner oder gleich dem Höchstwert sein.",
        errorRangeShort: "Fehler: Unzureichender Zahlenbereich für {type}.\nAnzahl {type}: {size}\nErforderlich: Mindestens {size} verschiedene Zahlen\nAktueller Bereich: {min}~{max} ({count} Zahlen)\n\nBitte erweitern Sie den Bereich oder verringern Sie die Anzahl {type}.",
        errorRangeType: {
            row: "Zeilen",
            col: "Spalten"
        }
    },
    
    pt: {
        pageTitle: "Gerador de Grade de Cálculo 100",
        
        operation: "Tipo de Operação:",
        addition: "Adição",
        subtraction: "Subtração",
        multiplication: "Multiplicação",
        division: "Divisão",
        
        gridSize: "Tamanho da Grade:",
        rowSize: "Linhas (Vertical):",
        colSize: "Colunas (Horizontal):",
        
        firstNumber: {
            addition: "Intervalo do Primeiro Número:",
            subtraction: "Intervalo do Minuendo:",
            multiplication: "Intervalo do Multiplicando:",
            division: "Intervalo do Dividendo:"
        },
        secondNumber: {
            addition: "Intervalo do Segundo Número:",
            subtraction: "Intervalo do Subtraendo:",
            multiplication: "Intervalo do Multiplicador:",
            division: "Intervalo do Divisor:"
        },
        
        useFixedNumbers: "Usar Números Fixos",
        swapOperands: "Formato Aritmético Vertical (Trocar Posições)",
        allowNegative: "Incluir Números Negativos",
        randomNegative: "Tornar Negativos Aleatoriamente",
        randomShuffle: "Organizar Aleatoriamente",
        fixedFirst: {
            addition: "Números Fixos (Primeiro):",
            subtraction: "Números Fixos (Minuendo):",
            multiplication: "Números Fixos (Multiplicando):",
            division: "Números Fixos (Dividendo):"
        },
        fixedSecond: {
            addition: "Números Fixos (Segundo):",
            subtraction: "Números Fixos (Subtraendo):",
            multiplication: "Números Fixos (Multiplicador):",
            division: "Números Fixos (Divisor):"
        },
        fixedNumbersPlaceholder: "ex. 1,2,3,4,5",
        fixedNumbersHint: "Digite números separados por vírgulas",
        
        divisionPreset: "Predefinição de Divisão:",
        divisionPresetEasy: "Fácil (2 dígitos ÷ 1 dígito)",
        divisionPresetNormal: "Normal (3 dígitos ÷ 1 dígito)",
        divisionPresetHard: "Difícil (3 dígitos ÷ 2 dígitos)",
        divisionPresetCustom: "Personalizado (Intervalo)",
        divisionIntegerRatio: "Taxa de Soluções Inteiras:",
        divisionIntegerRatioHint: "Definir taxa mínima de problemas com soluções inteiras",
        
        generateButton: "Gerar",
        printButton: "Imprimir",
        
        problemTitle: "Grade de 100 (Problema)",
        answerTitle: "Grade de 100 (Resposta)",
        
        printMode: "Modo Impressão",
        inputMode: "Modo Entrada",
        startTimer: "Iniciar",
        pauseTimer: "Pausar",
        resetTimer: "Reiniciar",
        gradeButton: "Avaliar",
        moveDirection: "Direção:",
        moveRight: "Mover Direita",
        moveDown: "Mover Abaixo",
        stickyHeaderOn: "🔓 Visualização Completa",
        stickyHeaderOff: "📌 Fixar Cabeçalhos",
        focusMode: "Modo Foco (Móvel)",
        results: "Resultados",
        correct: "Correto:",
        incorrect: "Incorreto:",
        accuracy: "Precisão:",
        time: "Tempo:",
        scoreHistory: "Histórico",
        best: "Melhor",
        chartTitle: "Gráfico de Progresso",
        chartTimeLabel: "Progresso de Tempo (segundos)",
        chartAccuracyLabel: "Progresso de Precisão (%)",
        chartNoData: "Pelo menos 3 registros são necessários para exibir o gráfico",
        rotateDevice: "Modo paisagem recomendado para treinamento",
        rotateDeviceVerticalOK: "✅ Modo retrato funciona para gerar problemas imprimíveis",
        rotateDeviceTraining: "💡 Para treinamento sério, use o modo paisagem",
        noDataMessage: "Por favor, gere um problema primeiro no 'Modo Impressão'",
        
        // Início Rápido
        quickStartMultiplication: "10×10 Multiplicação",
        quickStartAddition: "10×10 Adição",
        quickStartSubtraction: "10×10 Subtração",
        
        // Acordeão
        advancedSettings: "Configurações Avançadas",
        
        errorMinMax: "O valor mínimo deve ser menor ou igual ao valor máximo.",
        errorRangeShort: "Erro: Intervalo de números insuficiente para {type}.\nNúmero de {type}: {size}\nNecessário: Pelo menos {size} números diferentes\nIntervalo atual: {min}~{max} ({count} números)\n\nPor favor, amplie o intervalo ou reduza o número de {type}.",
        errorRangeType: {
            row: "linhas",
            col: "colunas"
        }
    },
    
    id: {
        pageTitle: "Generator Perhitungan Kotak 100",
        
        operation: "Jenis Operasi:",
        addition: "Penjumlahan",
        subtraction: "Pengurangan",
        multiplication: "Perkalian",
        division: "Pembagian",
        
        gridSize: "Ukuran Kotak:",
        rowSize: "Baris (Vertikal):",
        colSize: "Kolom (Horizontal):",
        
        firstNumber: {
            addition: "Rentang Bilangan Ditambah:",
            subtraction: "Rentang Bilangan Dikurang:",
            multiplication: "Rentang Bilangan Dikali:",
            division: "Rentang Bilangan Dibagi:"
        },
        secondNumber: {
            addition: "Rentang Bilangan Penambah:",
            subtraction: "Rentang Bilangan Pengurang:",
            multiplication: "Rentang Bilangan Pengali:",
            division: "Rentang Bilangan Pembagi:"
        },
        
        useFixedNumbers: "Gunakan Angka Tetap",
        swapOperands: "Format Aritmetika Vertikal (Tukar Posisi Angka)",
        allowNegative: "Sertakan Angka Negatif",
        randomNegative: "Jadikan Negatif Secara Acak",
        randomShuffle: "Atur Secara Acak",
        fixedFirst: {
            addition: "Angka Tetap (Ditambah):",
            subtraction: "Angka Tetap (Dikurang):",
            multiplication: "Angka Tetap (Dikali):",
            division: "Angka Tetap (Dibagi):"
        },
        fixedSecond: {
            addition: "Angka Tetap (Penambah):",
            subtraction: "Angka Tetap (Pengurang):",
            multiplication: "Angka Tetap (Pengali):",
            division: "Angka Tetap (Pembagi):"
        },
        fixedNumbersPlaceholder: "Contoh: 1,2,3,4,5",
        fixedNumbersHint: "Masukkan dengan dipisahkan koma",
        
        divisionPreset: "Preset Pembagian:",
        divisionPresetEasy: "Mudah (2 digit ÷ 1 digit)",
        divisionPresetNormal: "Normal (3 digit ÷ 1 digit)",
        divisionPresetHard: "Sulit (3 digit ÷ 2 digit)",
        divisionPresetCustom: "Kustom (Rentang)",
        divisionIntegerRatio: "Rasio Solusi Bilangan Bulat:",
        divisionIntegerRatioHint: "Tetapkan rasio minimum masalah dengan solusi bilangan bulat",
        
        generateButton: "Buat Soal",
        printButton: "Cetak",
        
        problemTitle: "Kotak 100 (Soal)",
        answerTitle: "Kotak 100 (Jawaban)",
        
        printMode: "Mode Cetak",
        inputMode: "Mode Input",
        startTimer: "Mulai",
        pauseTimer: "Jeda",
        resetTimer: "Reset",
        gradeButton: "Nilai",
        moveDirection: "Arah:",
        moveRight: "Pindah Kanan",
        moveDown: "Pindah Bawah",
        stickyHeaderOn: "🔓 Tampilan Penuh",
        stickyHeaderOff: "📌 Tetapkan Header",
        focusMode: "Mode Fokus (Ponsel)",
        results: "Hasil",
        correct: "Benar:",
        incorrect: "Salah:",
        accuracy: "Akurasi:",
        time: "Waktu:",
        scoreHistory: "Riwayat Nilai",
        best: "Terbaik",
        chartTitle: "Grafik Kemajuan",
        chartTimeLabel: "Kemajuan Waktu (detik)",
        chartAccuracyLabel: "Kemajuan Akurasi (%)",
        chartNoData: "Setidaknya 3 catatan diperlukan untuk menampilkan grafik",
        rotateDevice: "Mode Landscape Disarankan untuk Latihan Input",
        rotateDeviceVerticalOK: "✅ Mode portrait berfungsi untuk membuat soal cetak",
        rotateDeviceTraining: "💡 Untuk latihan serius, gunakan mode landscape",
        noDataMessage: "Silakan buat soal terlebih dahulu di 'Mode Cetak'",
        
        // Mulai Cepat
        quickStartMultiplication: "10×10 Perkalian",
        quickStartAddition: "10×10 Penjumlahan",
        quickStartSubtraction: "10×10 Pengurangan",
        
        errorMinMax: "Nilai minimum harus lebih kecil atau sama dengan nilai maksimum.",
        errorRangeShort: "Kesalahan: Rentang angka tidak cukup untuk {type}.\nJumlah {type}: {size}\nDibutuhkan: Minimal {size} angka berbeda\nRentang saat ini: {min}~{max} ({count} angka)\n\nSilakan perluas rentang atau kurangi jumlah {type}.",
        errorRangeType: {
            row: "baris",
            col: "kolom"
        }
    },
    
    hi: {
        pageTitle: "100-ग्रिड गणित जनरेटर",
        
        operation: "संचालन का प्रकार:",
        addition: "जोड़",
        subtraction: "घटाव",
        multiplication: "गुणा",
        division: "भाग",
        
        gridSize: "ग्रिड का आकार:",
        rowSize: "पंक्तियाँ (लंबवत):",
        colSize: "स्तंभ (क्षैतिज):",
        
        firstNumber: {
            addition: "जोड़े जाने वाली संख्या की सीमा:",
            subtraction: "घटाई जाने वाली संख्या की सीमा:",
            multiplication: "गुणा की जाने वाली संख्या की सीमा:",
            division: "भाग की जाने वाली संख्या की सीमा:"
        },
        secondNumber: {
            addition: "जोड़ने वाली संख्या की सीमा:",
            subtraction: "घटाने वाली संख्या की सीमा:",
            multiplication: "गुणक संख्या की सीमा:",
            division: "भाजक संख्या की सीमा:"
        },
        
        useFixedNumbers: "निश्चित संख्याएं उपयोग करें",
        swapOperands: "लंबवत गणित प्रारूप (संख्या स्थिति बदलें)",
        allowNegative: "ऋणात्मक संख्याएं शामिल करें",
        randomNegative: "यादृच्छिक रूप से ऋणात्मक बनाएं",
        randomShuffle: "यादृच्छिक रूप से व्यवस्थित करें",
        fixedFirst: {
            addition: "निश्चित संख्याएं (जोड़े जाने वाली):",
            subtraction: "निश्चित संख्याएं (घटाई जाने वाली):",
            multiplication: "निश्चित संख्याएं (गुणा की जाने वाली):",
            division: "निश्चित संख्याएं (भाग की जाने वाली):"
        },
        fixedSecond: {
            addition: "निश्चित संख्याएं (जोड़ने वाली):",
            subtraction: "निश्चित संख्याएं (घटाने वाली):",
            multiplication: "निश्चित संख्याएं (गुणक):",
            division: "निश्चित संख्याएं (भाजक):"
        },
        fixedNumbersPlaceholder: "उदाहरण: 1,2,3,4,5",
        fixedNumbersHint: "कॉमा से अलग करके दर्ज करें",
        
        divisionPreset: "विभाजन प्रीसेट:",
        divisionPresetEasy: "आसान (2 अंक ÷ 1 अंक)",
        divisionPresetNormal: "सामान्य (3 अंक ÷ 1 अंक)",
        divisionPresetHard: "कठिन (3 अंक ÷ 2 अंक)",
        divisionPresetCustom: "कस्टम (रेंज)",
        divisionIntegerRatio: "पूर्णांक समाधान अनुपात:",
        divisionIntegerRatioHint: "पूर्णांक समाधान वाली समस्याओं का न्यूनतम अनुपात निर्धारित करें",
        
        generateButton: "समस्या बनाएं",
        printButton: "प्रिंट करें",
        
        problemTitle: "100-ग्रिड (समस्या)",
        answerTitle: "100-ग्रिड (उत्तर)",
        
        printMode: "प्रिंट मोड",
        inputMode: "इनपुट मोड",
        startTimer: "शुरू करें",
        pauseTimer: "रोकें",
        resetTimer: "रीसेट करें",
        gradeButton: "मूल्यांकन करें",
        moveDirection: "दिशा:",
        moveRight: "दाएं चलें",
        moveDown: "नीचे चलें",
        stickyHeaderOn: "🔓 पूर्ण दृश्य",
        stickyHeaderOff: "📌 शीर्षक स्थिर करें",
        focusMode: "फोकस मोड (मोबाइल)",
        results: "परिणाम",
        correct: "सही:",
        incorrect: "गलत:",
        accuracy: "सटीकता:",
        time: "समय:",
        scoreHistory: "स्कोर इतिहास",
        best: "सर्वश्रेष्ठ",
        chartTitle: "प्रगति चार्ट",
        chartTimeLabel: "समय प्रगति (सेकंड)",
        chartAccuracyLabel: "सटीकता प्रगति (%)",
        chartNoData: "चार्ट प्रदर्शित करने के लिए कम से कम 3 रिकॉर्ड आवश्यक हैं",
        rotateDevice: "इनपुट प्रशिक्षण के लिए लैंडस्केप मोड अनुशंसित",
        rotateDeviceVerticalOK: "✅ पोर्ट्रेट मोड में भी प्रिंट करने योग्य समस्याएं बनाई जा सकती हैं",
        rotateDeviceTraining: "💡 गंभीर प्रशिक्षण के लिए लैंडस्केप मोड का उपयोग करें",
        noDataMessage: "कृपया पहले 'प्रिंट मोड' में समस्या उत्पन्न करें",
        
        // त्वरित प्रारंभ
        quickStartMultiplication: "10×10 गुणा",
        quickStartAddition: "10×10 जोड़",
        quickStartSubtraction: "10×10 घटाव",
        
        errorMinMax: "न्यूनतम मान अधिकतम मान से कम या बराबर होना चाहिए।",
        errorRangeShort: "त्रुटि: {type} के लिए संख्या सीमा अपर्याप्त है।\n{type} की संख्या: {size}\nआवश्यक: कम से कम {size} विभिन्न संख्याएं\nवर्तमान सीमा: {min}~{max} ({count} संख्याएं)\n\nकृपया सीमा बढ़ाएं या {type} की संख्या कम करें।",
        errorRangeType: {
            row: "पंक्तियां",
            col: "स्तंभ"
        }
    },
    
    vi: {
        pageTitle: "Trình Tạo Bảng Tính 100 Ô",
        
        operation: "Loại Phép Tính:",
        addition: "Phép Cộng",
        subtraction: "Phép Trừ",
        multiplication: "Phép Nhân",
        division: "Phép Chia",
        
        gridSize: "Kích Thước Bảng:",
        rowSize: "Hàng (Dọc):",
        colSize: "Cột (Ngang):",
        
        firstNumber: {
            addition: "Phạm Vi Số Bị Cộng:",
            subtraction: "Phạm Vi Số Bị Trừ:",
            multiplication: "Phạm Vi Số Bị Nhân:",
            division: "Phạm Vi Số Bị Chia:"
        },
        secondNumber: {
            addition: "Phạm Vi Số Cộng:",
            subtraction: "Phạm Vi Số Trừ:",
            multiplication: "Phạm Vi Số Nhân:",
            division: "Phạm Vi Số Chia:"
        },
        
        useFixedNumbers: "Sử Dụng Số Cố Định",
        swapOperands: "Định Dạng Tính Toán Dọc (Đổi Vị Trí Số)",
        allowNegative: "Bao Gồm Số Âm",
        randomNegative: "Ngẫu Nhiên Chuyển Thành Số Âm",
        randomShuffle: "Sắp Xếp Ngẫu Nhiên",
        fixedFirst: {
            addition: "Số Cố Định (Bị Cộng):",
            subtraction: "Số Cố Định (Bị Trừ):",
            multiplication: "Số Cố Định (Bị Nhân):",
            division: "Số Cố Định (Bị Chia):"
        },
        fixedSecond: {
            addition: "Số Cố Định (Cộng):",
            subtraction: "Số Cố Định (Trừ):",
            multiplication: "Số Cố Định (Nhân):",
            division: "Số Cố Định (Chia):"
        },
        fixedNumbersPlaceholder: "Ví dụ: 1,2,3,4,5",
        fixedNumbersHint: "Nhập các số cách nhau bằng dấu phẩy",
        
        divisionPreset: "Cài đặt sẵn Chia:",
        divisionPresetEasy: "Dễ (2 chữ số ÷ 1 chữ số)",
        divisionPresetNormal: "Bình thường (3 chữ số ÷ 1 chữ số)",
        divisionPresetHard: "Khó (3 chữ số ÷ 2 chữ số)",
        divisionPresetCustom: "Tùy chỉnh (Phạm vi)",
        divisionIntegerRatio: "Tỷ Lệ Nghiệm Nguyên:",
        divisionIntegerRatioHint: "Đặt tỷ lệ tối thiểu các bài toán có nghiệm nguyên",
        
        generateButton: "Tạo Bài Tập",
        printButton: "In",
        
        problemTitle: "Bảng 100 Ô (Đề Bài)",
        answerTitle: "Bảng 100 Ô (Đáp Án)",
        
        printMode: "Chế Độ In",
        inputMode: "Chế Độ Nhập",
        startTimer: "Bắt Đầu",
        pauseTimer: "Tạm Dừng",
        resetTimer: "Đặt Lại",
        gradeButton: "Chấm Điểm",
        moveDirection: "Hướng:",
        moveRight: "Sang Phải",
        moveDown: "Xuống Dưới",
        stickyHeaderOn: "🔓 Hiển Thị Đầy Đủ",
        stickyHeaderOff: "📌 Cố Định Tiêu Đề",
        focusMode: "Chế Độ Tập Trung (Điện Thoại)",
        results: "Kết Quả",
        correct: "Đúng:",
        incorrect: "Sai:",
        accuracy: "Độ Chính Xác:",
        time: "Thời Gian:",
        scoreHistory: "Lịch Sử Điểm",
        best: "Tốt Nhất",
        chartTitle: "Biểu Đồ Tiến Bộ",
        chartTimeLabel: "Tiến Bộ Thời Gian (giây)",
        chartAccuracyLabel: "Tiến Bộ Độ Chính Xác (%)",
        chartNoData: "Cần ít nhất 3 bản ghi để hiển thị biểu đồ",
        rotateDevice: "Khuyến nghị chế độ ngang cho đào tạo nhập liệu",
        rotateDeviceVerticalOK: "✅ Chế độ dọc vẫn hoạt động để tạo bài in",
        rotateDeviceTraining: "💡 Để đào tạo nghiêm túc, hãy sử dụng chế độ ngang",
        noDataMessage: "Vui lòng tạo bài tập trước trong 'Chế Độ In'",
        
        // Khởi Động Nhanh
        quickStartMultiplication: "10×10 Phép Nhân",
        quickStartAddition: "10×10 Phép Cộng",
        quickStartSubtraction: "10×10 Phép Trừ",
        
        errorMinMax: "Giá trị tối thiểu phải nhỏ hơn hoặc bằng giá trị tối đa.",
        errorRangeShort: "Lỗi: Phạm vi số không đủ cho {type}.\nSố lượng {type}: {size}\nCần thiết: Ít nhất {size} số khác nhau\nPhạm vi hiện tại: {min}~{max} ({count} số)\n\nVui lòng mở rộng phạm vi hoặc giảm số lượng {type}.",
        errorRangeType: {
            row: "hàng",
            col: "cột"
        }
    },
    
    ar: {
        pageTitle: "مولد جدول الحساب 100",
        
        operation: "نوع العملية:",
        addition: "الجمع",
        subtraction: "الطرح",
        multiplication: "الضرب",
        division: "القسمة",
        
        gridSize: "حجم الجدول:",
        rowSize: "الصفوف (عمودي):",
        colSize: "الأعمدة (أفقي):",
        
        firstNumber: {
            addition: "نطاق الأعداد المضافة:",
            subtraction: "نطاق الأعداد المطروحة:",
            multiplication: "نطاق الأعداد المضروبة:",
            division: "نطاق الأعداد المقسومة:"
        },
        secondNumber: {
            addition: "نطاق أعداد الإضافة:",
            subtraction: "نطاق أعداد الطرح:",
            multiplication: "نطاق أعداد الضرب:",
            division: "نطاق أعداد القسمة:"
        },
        
        useFixedNumbers: "استخدام أرقام ثابتة",
        swapOperands: "تنسيق الحساب العمودي (تبديل مواضع الأرقام)",
        allowNegative: "تضمين الأرقام السالبة",
        randomNegative: "جعل الأرقام سالبة عشوائيًا",
        randomShuffle: "ترتيب عشوائي",
        fixedFirst: {
            addition: "الأرقام الثابتة (المضافة):",
            subtraction: "الأرقام الثابتة (المطروحة):",
            multiplication: "الأرقام الثابتة (المضروبة):",
            division: "الأرقام الثابتة (المقسومة):"
        },
        fixedSecond: {
            addition: "الأرقام الثابتة (الإضافة):",
            subtraction: "الأرقام الثابتة (الطرح):",
            multiplication: "الأرقام الثابتة (الضرب):",
            division: "الأرقام الثابتة (القسمة):"
        },
        fixedNumbersPlaceholder: "مثال: 1,2,3,4,5",
        fixedNumbersHint: "أدخل الأرقام مفصولة بفواصل",
        
        divisionPreset: "إعداد مسبق للقسمة:",
        divisionPresetEasy: "سهل (رقمان ÷ رقم واحد)",
        divisionPresetNormal: "عادي (3 أرقام ÷ رقم واحد)",
        divisionPresetHard: "صعب (3 أرقام ÷ رقمان)",
        divisionPresetCustom: "مخصص (نطاق)",
        divisionIntegerRatio: "نسبة الحلول الصحيحة:",
        divisionIntegerRatioHint: "تحديد الحد الأدنى لنسبة المسائل ذات الحلول الصحيحة",
        
        generateButton: "إنشاء المسألة",
        printButton: "طباعة",
        
        problemTitle: "جدول 100 (المسألة)",
        answerTitle: "جدول 100 (الإجابة)",
        
        printMode: "وضع الطباعة",
        inputMode: "وضع الإدخال",
        startTimer: "بدء",
        pauseTimer: "إيقاف مؤقت",
        resetTimer: "إعادة تعيين",
        gradeButton: "تقييم",
        moveDirection: "الاتجاه:",
        moveRight: "انتقل يمينًا",
        moveDown: "انتقل لأسفل",
        stickyHeaderOn: "🔓 عرض كامل",
        stickyHeaderOff: "📌 تثبيت الرؤوس",
        focusMode: "وضع التركيز (جوال)",
        results: "النتائج",
        correct: "صحيح:",
        incorrect: "خطأ:",
        accuracy: "الدقة:",
        time: "الوقت:",
        scoreHistory: "سجل الدرجات",
        best: "الأفضل",
        chartTitle: "رسم بياني للتقدم",
        chartTimeLabel: "تقدم الوقت (ثواني)",
        chartAccuracyLabel: "تقدم الدقة (%)",
        chartNoData: "مطلوب 3 سجلات على الأقل لعرض الرسم البياني",
        rotateDevice: "يوصى بالوضع الأفقي للتدريب على الإدخال",
        rotateDeviceVerticalOK: "✅ الوضع العمودي يعمل لإنشاء مسائل قابلة للطباعة",
        rotateDeviceTraining: "💡 للتدريب الجاد استخدم الوضع الأفقي",
        noDataMessage: "يرجى إنشاء مسألة أولاً في 'وضع الطباعة'",
        
        // بدء سريع
        quickStartMultiplication: "10×10 الضرب",
        quickStartAddition: "10×10 الجمع",
        quickStartSubtraction: "10×10 الطرح",
        
        errorMinMax: "يجب أن تكون القيمة الدنيا أقل من أو تساوي القيمة القصوى.",
        errorRangeShort: "خطأ: نطاق الأرقام غير كافٍ لـ {type}.\nعدد {type}: {size}\nمطلوب: على الأقل {size} أرقام مختلفة\nالنطاق الحالي: {min}~{max} ({count} أرقام)\n\nيرجى توسيع النطاق أو تقليل عدد {type}.",
        errorRangeType: {
            row: "الصفوف",
            col: "الأعمدة"
        }
    },
    
    ru: {
        pageTitle: "Генератор таблицы 100 вычислений",
        
        operation: "Тип операции:",
        addition: "Сложение",
        subtraction: "Вычитание",
        multiplication: "Умножение",
        division: "Деление",
        
        gridSize: "Размер таблицы:",
        rowSize: "Строки (Вертикально):",
        colSize: "Столбцы (Горизонтально):",
        
        firstNumber: {
            addition: "Диапазон слагаемых:",
            subtraction: "Диапазон уменьшаемых:",
            multiplication: "Диапазон множимых:",
            division: "Диапазон делимых:"
        },
        secondNumber: {
            addition: "Диапазон слагаемых:",
            subtraction: "Диапазон вычитаемых:",
            multiplication: "Диапазон множителей:",
            division: "Диапазон делителей:"
        },
        
        useFixedNumbers: "Использовать фиксированные числа",
        swapOperands: "Формат вертикальной арифметики (поменять позиции)",
        allowNegative: "Включить отрицательные числа",
        randomNegative: "Случайно Сделать Отрицательными",
        randomShuffle: "Случайно Разместить",
        fixedFirst: {
            addition: "Фиксированные числа (слагаемые):",
            subtraction: "Фиксированные числа (уменьшаемые):",
            multiplication: "Фиксированные числа (множимые):",
            division: "Фиксированные числа (делимые):"
        },
        fixedSecond: {
            addition: "Фиксированные числа (слагаемые):",
            subtraction: "Фиксированные числа (вычитаемые):",
            multiplication: "Фиксированные числа (множители):",
            division: "Фиксированные числа (делители):"
        },
        fixedNumbersPlaceholder: "Пример: 1,2,3,4,5",
        fixedNumbersHint: "Введите числа через запятую",
        
        divisionPreset: "Предустановка деления:",
        divisionPresetEasy: "Легко (2 цифры ÷ 1 цифра)",
        divisionPresetNormal: "Нормально (3 цифры ÷ 1 цифра)",
        divisionPresetHard: "Сложно (3 цифры ÷ 2 цифры)",
        divisionPresetCustom: "Пользовательский (диапазон)",
        divisionIntegerRatio: "Соотношение целочисленных решений:",
        divisionIntegerRatioHint: "Установить минимальное соотношение задач с целочисленными решениями",
        
        generateButton: "Создать задачу",
        printButton: "Печать",
        
        problemTitle: "Таблица 100 (Задача)",
        answerTitle: "Таблица 100 (Ответ)",
        
        printMode: "Режим Печати",
        inputMode: "Режим Ввода",
        startTimer: "Старт",
        pauseTimer: "Пауза",
        resetTimer: "Сброс",
        gradeButton: "Оценить",
        moveDirection: "Направление:",
        moveRight: "Вправо",
        moveDown: "Вниз",
        stickyHeaderOn: "🔓 Полный Просмотр",
        stickyHeaderOff: "📌 Закрепить Заголовки",
        focusMode: "Режим Фокуса (Мобильный)",
        results: "Результаты",
        correct: "Правильно:",
        incorrect: "Неправильно:",
        accuracy: "Точность:",
        time: "Время:",
        scoreHistory: "История Результатов",
        best: "Лучший",
        chartTitle: "График Прогресса",
        chartTimeLabel: "Прогресс Времени (секунды)",
        chartAccuracyLabel: "Прогресс Точности (%)",
        chartNoData: "Для отображения графика требуется не менее 3 записей",
        rotateDevice: "Рекомендуется альбомный режим для тренировки ввода",
        rotateDeviceVerticalOK: "✅ Портретный режим работает для создания печатных задач",
        rotateDeviceTraining: "💡 Для серьёзной тренировки используйте альбомный режим",
        noDataMessage: "Пожалуйста, сначала создайте задачу в 'Режиме Печати'",
        
        // Быстрый Старт
        quickStartMultiplication: "10×10 Умножение",
        quickStartAddition: "10×10 Сложение",
        quickStartSubtraction: "10×10 Вычитание",
        
        errorMinMax: "Минимальное значение должно быть меньше или равно максимальному.",
        errorRangeShort: "Ошибка: недостаточный диапазон чисел для {type}.\nКоличество {type}: {size}\nТребуется: минимум {size} различных чисел\nТекущий диапазон: {min}~{max} ({count} чисел)\n\nПожалуйста, расширьте диапазон или уменьшите количество {type}.",
        errorRangeType: {
            row: "строк",
            col: "столбцов"
        }
    },
    
    nl: {
        pageTitle: "100-Raster Rekengenerator",
        
        operation: "Type bewerking:",
        addition: "Optellen",
        subtraction: "Aftrekken",
        multiplication: "Vermenigvuldigen",
        division: "Delen",
        
        gridSize: "Rastergrootte:",
        rowSize: "Rijen (Verticaal):",
        colSize: "Kolommen (Horizontaal):",
        
        firstNumber: {
            addition: "Bereik van de getallen die worden opgeteld:",
            subtraction: "Bereik van de getallen waarvan wordt afgetrokken:",
            multiplication: "Bereik van de getallen die worden vermenigvuldigd:",
            division: "Bereik van de getallen die worden gedeeld:"
        },
        secondNumber: {
            addition: "Bereik van de op te tellen getallen:",
            subtraction: "Bereik van de af te trekken getallen:",
            multiplication: "Bereik van de vermenigvuldigers:",
            division: "Bereik van de delers:"
        },
        
        useFixedNumbers: "Vaste getallen gebruiken",
        swapOperands: "Verticaal rekenformaat (Posities verwisselen)",
        allowNegative: "Negatieve getallen toevoegen",
        randomNegative: "Willekeurig Negatief Maken",
        randomShuffle: "Willekeurig Rangschikken",
        fixedFirst: {
            addition: "Vaste getallen (opgeteld):",
            subtraction: "Vaste getallen (afgetrokken):",
            multiplication: "Vaste getallen (vermenigvuldigd):",
            division: "Vaste getallen (gedeeld):"
        },
        fixedSecond: {
            addition: "Vaste getallen (optellen):",
            subtraction: "Vaste getallen (aftrekken):",
            multiplication: "Vaste getallen (vermenigvuldigers):",
            division: "Vaste getallen (delers):"
        },
        fixedNumbersPlaceholder: "Voorbeeld: 1,2,3,4,5",
        fixedNumbersHint: "Voer getallen in, gescheiden door komma's",
        
        divisionPreset: "Deling voorinstelling:",
        divisionPresetEasy: "Makkelijk (2-cijferig ÷ 1-cijferig)",
        divisionPresetNormal: "Normaal (3-cijferig ÷ 1-cijferig)",
        divisionPresetHard: "Moeilijk (3-cijferig ÷ 2-cijferig)",
        divisionPresetCustom: "Aangepast (bereik)",
        divisionIntegerRatio: "Geheel Getal Oplossing Verhouding:",
        divisionIntegerRatioHint: "Minimale verhouding van problemen met gehele getaloplossingen instellen",
        
        generateButton: "Maak opgave",
        printButton: "Afdrukken",
        
        problemTitle: "100-Raster (Opgave)",
        answerTitle: "100-Raster (Antwoord)",
        
        printMode: "Afdrukken",
        inputMode: "Invoermodus",
        startTimer: "Start",
        pauseTimer: "Pauzeren",
        resetTimer: "Reset",
        gradeButton: "Beoordelen",
        moveDirection: "Richting:",
        moveRight: "Naar Rechts",
        moveDown: "Naar Beneden",
        stickyHeaderOn: "🔓 Volledige Weergave",
        stickyHeaderOff: "📌 Headers Vastzetten",
        focusMode: "Focusmodus (Mobiel)",
        results: "Resultaten",
        correct: "Correct:",
        incorrect: "Fout:",
        accuracy: "Nauwkeurigheid:",
        time: "Tijd:",
        scoreHistory: "Scoregeschiedenis",
        best: "Beste",
        chartTitle: "Voortgangsgrafiek",
        chartTimeLabel: "Tijdvoortgang (seconden)",
        chartAccuracyLabel: "Nauwkeurigheidsvoortgang (%)",
        chartNoData: "Minimaal 3 records vereist om de grafiek weer te geven",
        rotateDevice: "Landschapsmodus aanbevolen voor invoertraining",
        rotateDeviceVerticalOK: "✅ Portretmodus werkt voor het genereren van afdrukbare problemen",
        rotateDeviceTraining: "💡 Voor serieuze training, gebruik landschapsmodus",
        noDataMessage: "Maak eerst een probleem in 'Afdrukken'",
        
        // Snelstart
        quickStartMultiplication: "10×10 Vermenigvuldiging",
        quickStartAddition: "10×10 Optelling",
        quickStartSubtraction: "10×10 Aftrekking",
        
        errorMinMax: "De minimumwaarde moet kleiner zijn dan of gelijk aan de maximumwaarde.",
        errorRangeShort: "Fout: onvoldoende getallenbereik voor {type}.\nAantal {type}: {size}\nVereist: minimaal {size} verschillende getallen\nHuidig bereik: {min}~{max} ({count} getallen)\n\nVergroot het bereik of verklein het aantal {type}.",
        errorRangeType: {
            row: "rijen",
            col: "kolommen"
        }
    }
};

// 現在の言語（デフォルトはブラウザの言語）
let currentLanguage = 'ja';

// ブラウザの言語を検出
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (browserLang.startsWith('ja')) return 'ja';
    if (browserLang.startsWith('en')) return 'en';
    if (browserLang.startsWith('zh-CN') || browserLang.startsWith('zh-Hans')) return 'zh_CN';
    if (browserLang.startsWith('zh-TW') || browserLang.startsWith('zh-Hant')) return 'zh_TW';
    if (browserLang.startsWith('ko')) return 'ko';
    if (browserLang.startsWith('th')) return 'th';
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('de')) return 'de';
    if (browserLang.startsWith('id')) return 'id';
    if (browserLang.startsWith('hi')) return 'hi';
    if (browserLang.startsWith('vi')) return 'vi';
    if (browserLang.startsWith('ar')) return 'ar';
    if (browserLang.startsWith('ru')) return 'ru';
    if (browserLang.startsWith('nl')) return 'nl';
    if (browserLang.startsWith('pt')) return 'pt';
    
    return 'en'; // デフォルトは英語
}

// 翻訳テキストを取得
function t(key, params = {}) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return key; // キーが見つからない場合はキーをそのまま返す
        }
    }
    
    // パラメータを置換
    if (typeof value === 'string') {
        Object.keys(params).forEach(param => {
            value = value.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
        });
    }
    
    return value || key;
}

// 言語を変更
function changeLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        // HTMLのlang属性を設定（アラビア語のRTL対応）
        document.documentElement.setAttribute('lang', lang);
        updateUILanguage();
    }
}

// ページロード時に保存された言語設定を読み込む
function loadSavedLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
    } else {
        currentLanguage = detectBrowserLanguage();
    }
    // HTMLのlang属性を設定
    document.documentElement.setAttribute('lang', currentLanguage);
}
