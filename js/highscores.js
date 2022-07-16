const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores
    .map(score => {
    return `<li class="high-score">${score.name} ↠ Tổng điểm bạn là:  ${score.score} điểm.</li>`;
})
.join("");