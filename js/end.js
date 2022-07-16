const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('Score')) || [];


const MAX_HIGH_SCORES = 5;
console.log(highScores);


finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("Click click");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random()*100),
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score -a.score);
    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.localStorage.assign("/index.html");
};
