const quotes = [
    {
        quote_eng : "The future depends on what we do in the present.",
        quote_kr: "미래는 현재 우리가 무엇을 하는가에 달려 있다.",
        author: "Mahatma Gandhi"
    },
    {
        quote_eng : "Nothing is a waste of time if you use the experience wisely.",
        quote_kr: "경험을 현명하게 사용한다면, 어떤 일도 시간 낭비는 아니다.",
        author: "Auguste Rodin"
    },
    {
        quote_eng : "We are always more anxious to be distinguished for a talent which we do not possess, than to be praised for the fifteen which we do possess.",
        quote_kr: "우리는 가지고 있는 15가지 재능으로 칭찬받으려 하기보다, 가지지도 않은 한가지 재능으로 돋보이려 안달한다.",
        author: "Mark Twain"
    },
    {
        quote_eng : "Never leave that 'till tomorrow which you can do today.",
        quote_kr: "오늘 할 수 있는 일을 내일로 미루지 마라.",
        author: "Benjamin Franklin"
    },
    {
        quote_eng : "If you can't beat them, join them.",
        quote_kr: "피할수 없으면 즐겨라.",
        author: "Robert S. Eliot"
    },
    {
        quote_eng : "The greatest risk is the risk of riskless living.",
        quote_kr: "가장 큰 위험은 위험없는 삶이다.",
        author: "Stephen Covey"
    },
];

const engQuote = document.querySelector("#quote .engQoute");
const krQuote = document.querySelector("#quote .krQoute");
const author = document.querySelector("#quote .author");
const todayQuote = quotes[Math.floor(Math.random()* quotes.length)];

engQuote.innerText = todayQuote.quote_eng;
krQuote.innerText = todayQuote.quote_kr;
author.innerText = todayQuote.author;