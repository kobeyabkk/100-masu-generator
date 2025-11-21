# 100-Grid Math Generator - User Guide

Thank you for your purchase!

## 📖 About This App

The 100-Grid Math Generator is a web application that automatically creates addition, subtraction, multiplication, and division problems. You can **print** them or **practice online** with the input mode.

### ✨ Key Features

- **2 Modes**: Print Mode (paper practice), Input Mode (online practice)
- **4 Operations**: Addition, Subtraction, Multiplication, Division
- **Flexible Grid Size**: Set rows and columns independently (3-15), square or rectangle
- **16 Languages**: Japanese, English, Chinese (Simplified/Traditional), Korean, Thai, Indonesian, Vietnamese, Hindi, Arabic, Russian, Dutch, Spanish, French, German, Portuguese
- **Advanced Features**: Negative numbers, vertical format, fixed numbers, random shuffle
- **Input Mode Exclusive**: Timer, auto-grading, score history, best time display
- **Auto-Save Settings**: Remembers your previous configuration

---

## 🚀 Quick Start (3 Steps)

### Step 1: Open the File

1. Extract the downloaded ZIP file
2. Double-click "**index.html**" in the folder
3. Opens in your browser (Chrome, Safari, Edge, etc.)

**💡 Tip**:
- **No internet connection required** (works offline)
- Save to Desktop for easy access

---

### Step 2: Create a Problem

#### Basic Setup
1. **Select Language** (dropdown at top of page)
2. **Choose Operation** (addition/subtraction/multiplication/division)
3. **Set Rows (Vertical)** and **Columns (Horizontal)**
   - Example: 10×10 (square), 5×10 (rectangle)
4. **Set Number Range**
5. Click "**Generate**" button

#### Choose Your Mode

**🖨 Print Mode**:
- Problem and answer sheets displayed
- Click "Print" to print on A4 paper
- Fold paper in half to use

**💻 Input Mode**:
- Enter answers directly on screen
- Timer tracks your speed
- Auto-grading provides instant feedback
- Score history recorded

---

## 📐 Grid Size Settings

### Square (Traditional)
```
Rows: 10
Columns: 10
Result: 10×10 square
```

### Rectangle (New Feature!)
```
Rows: 5
Columns: 10
Result: 5×10 rectangle (horizontal)
```

```
Rows: 15
Columns: 8
Result: 15×8 rectangle (vertical)
```

**Use Cases**:
- Small (5×8): Beginners, short practice
- Standard (10×10): Classic 100-grid
- Horizontal (8×15): Ideal for multiplication tables
- Vertical (15×5): Focus on specific numbers

---

## 🖨 Using Print Mode

### Basic Printing

1. Generate a problem
2. Click "**Print**" button
3. Select "**A4**" in printer settings
4. Print

**How to Use the Paper**:
- Top half: Problem (no answers)
- Bottom half: Answer sheet (with answers)
- Fold in half for easy checking

### Printing Tips

- **Paper Size**: Always select A4
- **Margins**: Use "Standard" or "Default"
- **Scale**: 100% (fit to page)

---

## 💻 Using Input Mode

### Basic Operation

1. After generating, click "**Input Mode**" tab
2. **Start Timer**
3. Enter answers (keyboard or numpad)
4. After completing, click "**Grade**" button

### Input Methods

#### PC (Keyboard)
- **Enter Numbers**: Numpad or number keys
- **Move to Next Cell**: Enter, Tab, Arrow keys
- **Minus Sign**: `-` key

#### Tablet/Mobile
- **On-screen numpad** on right side
- **Large buttons** for easy touch
- **Horizontal orientation recommended** (auto-split screen)

### Movement Direction

Select "Move Direction":
- **Move Right**: Horizontal progression (default)
- **Move Down**: Vertical progression

Changes behavior of Enter key and numpad move button.

### Timer Function

- **Start**: Begin timing
- **Pause**: Pause timing (can resume)
- **Reset**: Reset timer to 0

**Precision**: 10 milliseconds (00:00.00 format)

### Grading Function

Click "Grade" button to see:
- ✅ **Correct**: Displayed in green
- ❌ **Incorrect**: Displayed in red
- 📊 **Statistics**: Correct count, incorrect count, accuracy, time

### Score History

- **Auto-Save**: Last 10 attempts recorded
- **Display**: Date/time, correct count, accuracy, time
- **Best Time**: Fastest record shows gold "BEST" badge

**Storage**: Browser's localStorage (device only)

---

## 🎨 Advanced Features

### 1. Vertical Format

Swaps number positions for vertical arithmetic style.

**Standard Format** (Checkbox OFF):
```
        1  2  3  4  5
   10  11 12 13 14 15
   20  21 22 23 24 25
```

**Vertical Format** (Checkbox ON):
```
       10 20 30 40 50
    1  11 21 31 41 51
    2  12 22 32 42 52
```

Top and left numbers swap positions.

### 2. Include Negative Numbers

Create problems with negative numbers.

**How to Set**:
1. Check "Include Negative Numbers"
2. Range expands to -999 to 999
3. Example: -5 + 3 = -2

**Sub-feature - Randomize Signs**:
- About 50% probability to convert to negative
- Example: 1,2,3,4,5 → -1,2,-3,4,-5

### 3. Fix Specific Numbers

Specify which numbers to use.

**Usage**:
```
✅ Check "Fix Specific Numbers"
Fixed Numbers (Rows): 1,2,3,4,5
Fixed Numbers (Columns): 7
```
→ Practice only 7 times table

**Input Tips**:
- Comma-separated: `1,2,3,4,5`
- Spaces allowed: `1, 2, 3`
- Negative numbers OK: `-5,-3,0,2,5`

**Sub-feature - Random Shuffle**:
- Shuffle fixed numbers
- Different order each time
- Example: 1,2,3,4,5 → 3,1,5,2,4

---

## 📝 Default Settings by Operation

### Addition
```
Augend Range: 21-30
Addend Range: 1-10
```

### Subtraction
```
Minuend Range: 21-30
Subtrahend Range: 1-10
```

### Multiplication
```
Multiplicand Range: 1-10
Multiplier Range: 1-10
```

### Division
```
Dividend Range: 21-30
Divisor Range: 1-10
```
*Non-integer results show diagonal line

---

## 💾 Auto-Save Settings

**When you generate a problem, these are saved**:
- Operation type
- Rows and columns
- Number ranges (min/max)
- Checkbox states (vertical format, negative numbers, etc.)
- Fixed number contents

**Next Launch**: Starts with previous settings

**Reset**: Change settings and generate new problem

---

## 💡 Usage Ideas

### 🏫 Teachers (School/Cram School)

**Print Mode**:
- Create homework sheets by level
- Generate bulk test problems
- Self-grading with answer sheets

**Input Mode**:
- In-class quizzes
- Time attack competitions
- Track progress with score history

### 👨‍👩‍👧‍👦 Parents

**Print Mode**:
- Daily homework sheets
- Practice on-the-go (paper)

**Input Mode**:
- Fun, game-like learning
- Motivation through best time updates
- No paper or pencils needed

### 🎓 Self-Study

**Input Mode**:
- Practice at your own pace
- Track improvement with score history
- Boost concentration with timer

**Print Mode**:
- Think carefully and solve
- Use as scratch paper

---

## 🔧 Troubleshooting

### Q1. File won't open

**A**:
- Open index.html in a browser
- Windows: Right-click → Open with → Browser
- Mac: Right-click → Open with → Browser

### Q2. Grid not showing in Input Mode

**A**:
1. First generate problem in "Print Mode"
2. Then click "Input Mode" tab
3. Grid will appear

### Q3. Previous value remains when moving cells

**A**:
- This is intentional (to edit existing values easily)
- Type new number to automatically overwrite
- To clear: Use Backspace or Delete key

### Q4. Score history disappeared

**A**:
- Clearing browser cache will delete it
- Not shared between different browsers
- Data stored in localStorage (device only)

### Q5. Prints on multiple pages

**A**:
- Select "A4" in printer settings
- Set scale to "100%" or "Fit to Page"

### Q6. Timer doesn't work

**A**:
- Click "Start" button
- If already running, shows "Pause" button

---

## 🌍 Supported Languages

### App Languages (16 Languages)
🇯🇵 日本語 | 🇺🇸 English | 🇨🇳 简体中文 | 🇹🇼 繁體中文  
🇰🇷 한국어 | 🇹🇭 ไทย | 🇮🇩 Bahasa Indonesia | 🇻🇳 Tiếng Việt  
🇮🇳 हिन्दी | 🇦🇪 العربية | 🇷🇺 Русский | 🇳🇱 Nederlands  
🇪🇸 Español | 🇫🇷 Français | 🇩🇪 Deutsch | 🇵🇹 Português

Selected language is automatically remembered.

---

## 📂 File Structure

```
100-Grid Math Generator/
├── index.html              ← Open this
├── css/
│   ├── style.css          ← Print mode styles
│   └── input-mode.css     ← Input mode styles
├── js/
│   ├── main.js            ← Main program
│   ├── input-mode.js      ← Input mode features
│   └── translations.js    ← 16-language translations
├── HOW_TO_USE_EN.md       ← This file
├── HOW_TO_USE_JP.md       ← Japanese guide
├── HOW_TO_USE_*.md        ← Other language guides (16 languages)
├── LICENSE.txt            ← License information
└── VERSION.txt            ← Version information
```

---

## 📜 License

This software can be used for personal and commercial purposes (including schools and cram schools).
See LICENSE.txt for details.

---

## 📞 Support

### Questions & Inquiries
Contact via your Gumroad purchase page.

### Update Information
New features can be re-downloaded from Gumroad.

---

## 🎉 Thank You!

Enjoy improving your calculation skills with this app!

**Developer**: Programming no KOBEYA  
**Location**: Bangkok, Thailand  
**Website**: https://www.programming-kobeya.com

---

**Version 2.8.0**  
Last Updated: November 13, 2025

### New Features (v2.8.0)
- ✨ Set rows and columns independently (rectangle grids)
- 💻 Input mode (timer, grading, score history)
- 💾 Auto-save and restore settings
- ➖ Negative number support
- 🔄 Random shuffle function
- 🧮 Vertical format support
- 🌐 16-language support
