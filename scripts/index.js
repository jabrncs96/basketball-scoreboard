let home_score = 0;
let guest_score = 0;
let homeScoreEl = document.getElementById("home_score");
let guestScoreEl = document.getElementById("guest_score");

function increment_oneh(){
    home_score += 1;
    homeScoreEl.textContent = home_score;
}

function increment_twoh(){
    home_score += 2;
    homeScoreEl.textContent = home_score;
}

function increment_threeh(){
    home_score += 3;
    homeScoreEl.textContent = home_score;
}

function increment_oneg(){
    guest_score += 1;
    guestScoreEl.textContent = guest_score;
}

function increment_twog(){
    guest_score += 2;
    guestScoreEl.textContent = guest_score;
}

function increment_threeg(){
    guest_score += 3;
    guestScoreEl.textContent = guest_score;
}

function restart(){
    home_score = 0
    guest_score = 0
    homeScoreEl.textContent = home_score;
    guestScoreEl.textContent = guest_score;
}