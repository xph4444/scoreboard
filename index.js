let homeScore = 0;
let homeScoreText=document.getElementById("home-score")
let guestScore = 0;
let guestScoreText=document.getElementById("guest-score")
let leaderHome = document.getElementById("leader-home")
let leaderGuest = document.getElementById("leader-guest")
let homeFoul=0;
let homeFoulText= document.getElementById("home-foul-number")
let guestFoul=0;
let guestFoulText= document.getElementById("guest-foul-number")


function compare(){
    if (homeScore==guestScore) {
        leaderHome.style.opacity=0
        leaderGuest.style.opacity=0
    }
    else if (homeScore > guestScore) {
        leaderHome.style.opacity=1
        leaderGuest.style.opacity=0
    }
    else {
         leaderGuest.style.opacity=1
         leaderHome.style.opacity=0    
    }
}

function home_add_1point() {
    homeScore +=1;
    homeScoreText.textContent=homeScore;
    compare();
}
function home_add_2points() {
    homeScore +=2;
    homeScoreText.textContent=homeScore;
    compare();
}
function home_add_3points() {
    homeScore +=3;
    homeScoreText.textContent=homeScore;
    compare();
}

function guest_add_1point() {
    guestScore +=1;
    guestScoreText.textContent=guestScore;
    compare();
}
function guest_add_2points() {
    guestScore +=2;
    guestScoreText.textContent=guestScore;
    compare();
}
function guest_add_3points() {
    guestScore +=3;
    guestScoreText.textContent=guestScore;
    compare();
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreText.textContent=homeScore;
    guestScoreText.textContent=guestScore;
    homeFoul = 0
    guestFoul = 0
    homeFoulText.textContent = 0;
    guestFoulText.textContent = 0;
    compare()
}

    compare()
}

function home_foul_add() {
    homeFoul+=1;
    homeFoulText.textContent=homeFoul;
}

function home_foul_minus() {
    homeFoul-=1;
    homeFoulText.textContent=homeFoul;
}

function guest_foul_add() {
    guestFoul+=1;
    guestFoulText.textContent=guestFoul;
}

function guest_foul_minus() {
    guestFoul-=1;
   guestFoulText.textContent=guestFoul;
}
