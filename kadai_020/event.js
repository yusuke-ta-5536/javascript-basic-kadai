// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときに文字を書き換える
btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました'
});