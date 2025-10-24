const questions = [
    {
        id: 1,
        image: 'images/question1.png', // パスを修正
        question: "ウサギ・キツネ・リスが走った。\n• ウサギは1位でも3位でもない。\n• リスはキツネよりあと。\nさて、2位はだれ？",
        hint: "可能な並びをしぼって考えてみましょう。ウサギが2位なので、残りのキツネとリスの順序を考えると答えが見えてきます。",
        answer: "ウサギ",
        choices: ["キツネ", "ウサギ", "リス", "全員"] // 4択の選択肢
    },
    {
        id: 2,
        image: 'images/question2.png', // パスを修正
        question: "A・B・Cが1〜3の順に並べられた椅子に1人ずつ座っている。\n A「ぼくはイス2」\n B「Aはイス2じゃない」\n C「ぼくはイス3」\nこの中で1人だけウソをついているのは誰？ただし、AはBの左に座っているとします。",
        hint: "一人ひとりの発言を本当と仮定すると、各発言の真偽はどうなるでしょうか？矛盾がないか確認してみましょう。",
        answer: "A",
        choices: ["A", "B", "C", "分からない"]
    },
    {
        id: 3,
        image: 'images/question3.png', // パスを修正
        question: "ライオン・ウサギ・ゾウのクッキー。\n ゾウはライオンより大きい。\n ライオンはいちばん大きくない。\n ウサギはいちばん小さくない。\n真ん中のサイズのクッキーはだれ？",
        hint: "まず最大と最小のクッキーを特定してみましょう。ライオンがいちばん大きくなく、ゾウがライオンより大きいことから、ゾウは一番大きいことがわかりますね。",
        answer: "ウサギ",
        choices: ["ライオン", "ウサギ", "ゾウ", "決められない"]
    },
    {
        id: 4,
        image: 'images/question4.png', // パスを修正
        question: "ウマ、イヌ、ネコの３匹がかけっこをしましたゴールした後、こう言いました。\n ウマ「僕は一番だった！」\n イヌ「ウマの方が僕より早かったよ」\n ネコ「イヌのほうがぼくより早かったよ。\nこの中で、ウソをついているのは１匹だけ。誰がウソつきでしょう？,
        hint: "2つの文が同時に成り立つような並び順を探してみましょう。もしネコがウマより速く、イヌがネコより速いとしたら、ウマとイヌの速さの関係はどうなるでしょうか？",
        answer: "ネコ",
        choices: ["ウマ", "イヌ", "ネコ", "同着"]
    },
    {
        id: 5,
        image: 'images/question5.png', // パスを修正
        question: "A=チョコ、B=いちご、C=メロン。\n(1) AとBが交換 → (2) BとCが交換 → (3) AとCが交換。\n最終的にAのケーキは何？",
        hint: "矢印やメモを使って、交換の過程を順番にトレースしてみましょう。最終的な状態を丁寧に追いかけるのがポイントです。",
        answer: "チョコ",
        choices: ["チョコ", "いちご", "メロン", "不明"]
    },
    {
        id: 6,
        image: 'images/question6.png', // パスを修正
        question: "A・B・Cの３人がいます。\nA「Bは正直者やで。」\nB「Cはウソつきや。」\nC「AとBは、どっちも正直者やない。」 \nこの中でウソをついているのは一人だけです。誰がウソをついているでしょう。", // 問題文を変更
        hint: "「Aがウソつきである」と仮定して、各発言の真偽を検証してみましょう。矛盾が生じないかを確認します。",
        answer: "Cだけ", // 修正: 正直者2人なので「AとB」
        choices: ["Aだけ", "Bだけ", "Cだけ", "AとB"] // 選択肢も修正
    },
    {
        id: 8,
        image: 'images/question8.png', // パスを修正
        question: "あきこ、まさる、なおが赤・青・黄のスリッパをそれぞれ1つずつ履いています。全員違う色です。\n• あきこは黄色ではない。\n• まさるは青ではない。\n• なおは赤でも青でもない。\nさて、３人はあきこは何色のスリッパを履いている？", // 問題文を変更
        hint: "なおさんの発言から、確定できる色がありますね。そこから順番に考えていきましょう。",
        answer: "青色", // 修正: 特定の人物の回答に
        choices: ["赤色", "青色", "黄色", "判断できない"]
    },
    {
        id: 9,
        image: 'images/question9.png', // パスを修正
        question: "4人（あき、けん、ゆい、そうた）がバスを待っています。\n• あきはゆいより前。\n• けんはそうたより前。\n• そうたはあきのうしろ。\n1番前にいるのはだれ？",
        hint: "情報を線でつなぐように整理してみましょう。「AはBより前」を「A > B」のように書いていくと分かりやすいかもしれません。",
        answer: "けん",
        choices: ["あき", "けん", "ゆい", "そうた"]
    },
    {
        id: 11,
        image: 'images/question11.png', // パスを修正
        question: "3人がそれぞれ違うペットを１匹ずつ飼っています（たけし、みほ、けんじ）。イヌ・ネコ・ウサギがそれぞれ1人ずつです。次のことがわかっています。\n１．たけしのペットはイヌではない。\n４　• みほのペットはネコではない。\n• けんじのペットはウサギではない。\n大きさの順は『イヌ＞ネコ＞ウサギ』\nみほのペットは、たけしのペットより小さい。,　\nネコを飼っているのは誰？
        hint: "各人の飼っているペットではない情報を整理し、消去法で絞り込んでみましょう。表にすると分かりやすいかもしれません。",
        answer: "たけし",
        choices: ["たけし", "みほ", "けんじ", "誰も飼っていない"]
    },
    {
        id: 12,
        image: 'images/question12.png', // パスを修正
        question: "りこ・たいち・まゆ・けんの4人がすべり台を順番にすべります。\n りこはたいちより先。\n まゆはけんよりあと。\n けんはたいちより先。\n　まゆはたいちより先\n最後にすべったのはだれ？",
        hint: "それぞれの順番の関係性を整理して、全体を並び替えてみましょう。例えば、「AがBより先」を「A → B」のように書き出してみると分かりやすいです。",
        answer: "たいち",
        choices: ["りこ", "たいち", "まゆ", "けん"]
    },
    {
        id: 14,
        image: 'images/question14.png', // パスを修正
        question: "箱の中に3色のボール（赤・青・黄）が入っています。見えないけどヒントは:\n• 青は赤のとなり。\n• 黄は青の右。\n左からの並びは？",
        hint: "「右」という言葉に注目して、順番に並べてみましょう。確定した情報から順に配置していくと良いでしょう。",
        answer: "赤→青→黄",
        choices: ["赤→青→黄", "青→赤→黄", "黄→青→赤", "青→黄→赤"]
    },
    {
        id: 15,
        image: 'images/question15.png', // パスを修正
        question: "青・赤・緑のかばんが１つずつあります。A、B、Cの3人がそれぞれ違う色のカバンを持っています。\n• A「ぼくのは青」\n• B「ぼくのは赤じゃない」\n• C「ぼくのは緑じゃない」\nじつは1人だけ本当のことを言っている。本当のことを言ったのはだれ？",
        hint: "それぞれの人が言っていることが本当だった場合と、嘘だった場合を考えてみましょう。1人だけ本当を言っているという条件に合う組み合わせを見つけます。",
        answer: "C",
        choices: ["A", "B", "C", "誰も言っていない"]
    }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let selectedChoice = null; // 選択された4択の答えを保持

// DOM要素の取得
const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const quizCard = document.getElementById('quiz-card');
const questionNumberElement = document.getElementById('question-number');
const imageContainer = document.getElementById('image-container');
const questionTextElement = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');
const showHintButton = document.getElementById('show-hint-button');
const hintTextElement = document.getElementById('hint-text');
const feedbackElement = document.getElementById('feedback');
const nextQuestionButton = document.getElementById('next-question-button');
const resultArea = document.getElementById('result-area');
const correctCountElement = document.getElementById('correct-count');
const resetButton = document.getElementById('reset-button');
const treasureHintElement = document.getElementById('treasure-hint');


// ランダムに10問取得
function getRandomQuestions(num) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// 問題の表示
function displayQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        const question = currentQuestions[currentQuestionIndex];
        questionNumberElement.textContent = `問題 ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
        imageContainer.innerHTML = `<img src="${question.image}" alt="問題画像">`;
        questionTextElement.textContent = question.question;

        // 4択ボタンを生成
        choicesContainer.innerHTML = ''; // 一度クリア
        question.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-button');
            button.textContent = choice;
            button.addEventListener('click', () => selectChoice(button, choice));
            choicesContainer.appendChild(button);
        });

        hintTextElement.textContent = question.hint;
        hintTextElement.classList.add('hidden');
        showHintButton.classList.remove('hidden');
        
        feedbackElement.textContent = '';
        nextQuestionButton.classList.add('hidden'); // 次へボタンは非表示
        selectedChoice = null; // 選択肢をリセット
        enableAllChoices(); // 全ての選択肢を有効にする
    } else {
        showFinalResult();
    }
}

// 選択肢が選ばれた時の処理
function selectChoice(button, choiceText) {
    // 既に選択済みのボタンがあれば選択解除
    const previousSelected = document.querySelector('.choice-button.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }
    // 新しいボタンを選択状態に
    button.classList.add('selected');
    selectedChoice = choiceText; // 選択されたテキストを保持
    
    // 回答チェックとフィードバック
    checkAnswer();
}

// 回答のチェック
function checkAnswer() {
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = (selectedChoice === question.answer);

    disableAllChoices(); // 全ての選択肢を無効にする

    if (isCorrect) {
        feedbackElement.textContent = '🎉 正解です！素晴らしい！';
        feedbackElement.className = 'feedback correct';
        correctAnswersCount++;
        // 正解のボタンにスタイルを適用
        document.querySelector(`.choice-button.selected`).classList.add('correct-answer');
    } else {
        feedbackElement.textContent = `残念...不正解です。正解は「${question.answer}」でした。`;
        feedbackElement.className = 'feedback incorrect';
        // 選択した不正解のボタンと正解のボタンにスタイルを適用
        document.querySelector(`.choice-button.selected`).classList.add('incorrect-answer');
        Array.from(choicesContainer.children).find(btn => btn.textContent === question.answer).classList.add('correct-answer');
    }
    
    nextQuestionButton.classList.remove('hidden'); // 次へボタンを表示
}

// 全ての選択肢を無効にする
function disableAllChoices() {
    Array.from(choicesContainer.children).forEach(button => {
        button.disabled = true;
    });
}

// 全ての選択肢を有効にする
function enableAllChoices() {
    Array.from(choicesContainer.children).forEach(button => {
        button.disabled = false;
        button.classList.remove('selected', 'correct-answer', 'incorrect-answer'); // スタイルもリセット
    });
}

// 最終結果の表示
function showFinalResult() {
    quizCard.classList.add('hidden'); // クイズ画面を非表示
    resultArea.classList.remove('hidden'); // 結果画面を表示

    correctCountElement.textContent = `${currentQuestions.length}問中、${correctAnswersCount}問正解しました！`;

    if (correctAnswersCount === 10) {
        treasureHintElement.textContent = "🏆 おめでとう！宝のありかのヒントは「バク」だよ！";
        treasureHintElement.classList.remove('hidden');
    } else {
        treasureHintElement.classList.add('hidden');
    }
}

// ゲームのリセット（スタート画面に戻る）
function resetGame() {
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    selectedChoice = null;

    // UI要素の表示/非表示をリセット
    quizCard.classList.add('hidden');
    resultArea.classList.add('hidden');
    startScreen.classList.remove('hidden');

    feedbackElement.textContent = '';
    hintTextElement.classList.add('hidden');
    showHintButton.classList.remove('hidden');
    nextQuestionButton.classList.add('hidden');
}

// ゲームスタート
function startGame() {
    currentQuestions = getRandomQuestions(10); // 新しい10問を選定
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    selectedChoice = null;

    startScreen.classList.add('hidden'); // スタート画面を非表示
    quizCard.classList.remove('hidden');  // クイズ画面を表示
    
    displayQuestion(); // 最初の問題を表示
}

// イベントリスナー
startButton.addEventListener('click', startGame);

showHintButton.addEventListener('click', () => {
    hintTextElement.classList.toggle('hidden');
});

nextQuestionButton.addEventListener('click', () => {
    currentQuestionIndex++;
    displayQuestion();
});

resetButton.addEventListener('click', resetGame);

// 初期表示はスタート画面
document.addEventListener('DOMContentLoaded', resetGame); // ページ読み込み時にリセットしてスタート画面を表示
