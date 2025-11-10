const cards = [
    { name: "daidaikichi", imageUrl: "img/daidaikiti_omikuji.jpeg" },
    { name: "tyukichi", imageUrl: "img/tyukiti_omikuji.jpeg" },
    { name: "kichi", imageUrl: "img/kiti_omikuji.jpeg" },
    { name: "syokichi", imageUrl: "img/syoukiti_omikuji.jpeg" },
    { name: "suekiti", imageUrl: "img/suekiti_omikuji.jpeg" },
    { name: "daikiti", imageUrl: "img/daikiti_omikuji.jpeg" },
    { name: "kyou", imageUrl: "img/kyou_omikuji.jpeg" },
    { name: "daidaikichi", imageUrl: "img/daidaikiti_omikuji.jpeg" },
    { name: "tyukichi", imageUrl: "img/tyukiti_omikuji.jpeg" },
    { name: "kichi", imageUrl: "img/kiti_omikuji.jpeg" },
    { name: "syokichi", imageUrl: "img/syoukiti_omikuji.jpeg" },
    { name: "suekiti", imageUrl: "img/suekiti_omikuji.jpeg" },
    { name: "daikiti", imageUrl: "img/daikiti_omikuji.jpeg" },
    { name: "kyou", imageUrl: "img/kyou_omikuji.jpeg" },
     { name: "secret", imageUrl: "img/secret.jpeg" },
    // その他のカードを追加
];

window.onload = function() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    // カード画像を表示
    document.getElementById('card-image').src = selectedCard.imageUrl;
};
