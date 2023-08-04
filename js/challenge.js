const grabCounter = document.getElementById(`counter`);
const grabUp = document.getElementById(`plus`);
const grabDown = document.getElementById(`minus`);
const grabPause = document.getElementById(`pause`);
const grabHeart = document.getElementById(`heart`);
const grabLikes = document.getElementsByClassName(`likes`)
const grabCommentForm = document.getElementById(`comment-form`)
const grabCommentInput = document.getElementById(`comment-input`)
const grabCommentBox = document.getElementById(`list`)

let startCounter = true;
let intervalId;
let timer = 0

function startCount() {
     intervalId = setInterval(timerUp, 1000)
}
startCount();
function timerUp() {
    timer ++;
    grabCounter.innerText = timer;
}
grabUp.addEventListener(`click`, function() {
    timer += 1;
  grabCounter.textContent = timer;
})

grabDown.addEventListener('click', function() {
    timer -= 1;
    grabCounter.textContent = timer;
})
grabPause.addEventListener('click', function() {
    if (startCounter) {
        console.log("pause counter", startCounter)
        clearInterval(intervalId);
        startCounter = false;
    }
    else {
        console.log("restart counter", startCounter)
        startCount();
        startCounter = true; 
    }
    grabUp.disabled = !startCounter;
    grabDown.disabled = !startCounter;
    grabHeart.disabled = !startCounter;
    grabPause.innerText = startCounter ? "pause" : "resume"
    console.log(grabPause.innerText, startCounter)  
})

grabHeart.addEventListener('click', function(){
    const message = document.createElement(`li`);
    message.innerText = `You have liked ${timer}!`;
    grabLikes[0].appendChild(message);
})
grabCommentForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const comments = document.createElement(`p`);
    comments.innerText = grabCommentInput.value;
    grabCommentBox.append(comments);
})
