const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]
const expla = document.getElementById("explantion")
const guess = document.getElementById("guess")
const sub = document.getElementById("sub")
const hint = document.getElementById("hint")
const val = document.getElementById("value")
const answer = document.getElementById("ans")
const ran = Math.floor(Math.random()*11)
expla.innerHTML = movies[ran].explanation

sub.addEventListener("click", function() {
    if(guess.value == movies[ran].title){
        answer.innerHTML = `<div class="alert alert-success mt-2" role="alert">
       Correct! "${movies[ran].title}" is right.
                            </div>` 
    }
    else{
        answer.innerHTML = `<div class="alert alert-danger mt-2" role="alert">
        Wrong "${movies[ran].title}" was the right movie 
                             </div>`
    }
})
hint.addEventListener("click", function(){
    val.innerHTML = movies[ran].hint
} )

