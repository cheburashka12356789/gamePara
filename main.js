import Card from "./app.js";

const {addEventListener} = document.querySelector('#start')
const screens= document.querySelectorAll('.screen')
const btnStart=document.querySelector('#btnSt')
const timeList=document.querySelector('#time-list')
const screenScore=document.querySelector('#score')
const score1=document.getElementById('game0')
const score2=document.getElementById('game')
const score3=document.getElementById('game1')
const elem = document.getElementById('time')

let timer
let scoreSumm=1
let cardsCount=5
let time=1
addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click',(event)=> {
    if (event.target.classList.contains('time-btn')) {
        cardsCount = parseInt(event.target.getAttribute('data-time'));

        screens[1].classList.add('up');

        if(cardsCount==5) {

            screenScore.innerText=''
            timer=setInterval(decreaseTime,1000);
            setTime(time);
            function decreaseTime(){
                let current=++time;
                    current=`0${current}`;
                    setTime(current)
            }
                function setTime(value) {
                elem.innerHTML = `${value}`
            }
            newGame(document.getElementById('game0'),cardsCount)
        }

        if(cardsCount==15){
            screenScore.innerText=''
            timer=setInterval(decreaseTime,1000);
            setTime(time);
            function decreaseTime(){
                let current=++time;
                current=`0${current}`;
                setTime(current)
            }
            function setTime(value) {
                elem.innerHTML = `${value}`
            }
            newGame(document.getElementById('game'),cardsCount)

        }
        if(cardsCount==19) {
            screenScore.innerText=''
            timer=setInterval(decreaseTime,1000);
            setTime(time);
            function decreaseTime(){
                let current=++time;
                current=`0${current}`;
                setTime(current)
            }
            function setTime(value) {
                elem.innerHTML = `${value}`
            }

            newGame(document.getElementById('game2'), cardsCount)

        }
    }
})




function newGame(container,cardsCount) {


    let
        cardsNumberArray=[],
        cardsArray=[],
        firstCard=null,
        secondCard=null
    for (let i = 0; i <= cardsCount/2; i++) {
        cardsNumberArray.push(i)
        cardsNumberArray.push(i)
    }
    cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5)
    for(const cardNumber of cardsNumberArray){
        cardsArray.push(new Card(container,cardNumber,flip))
    }
    function flip(card){
        if(firstCard!==null && secondCard!==null ) {
            if (firstCard.number !== secondCard.number) {
                firstCard.open = false
                secondCard.open = false
                firstCard = null
                secondCard = null
            }
        }
       if(firstCard==null){
           firstCard = card
       }else{
           if(secondCard==null)
           secondCard=card
       }
       if(firstCard!==null && secondCard!==null ){
           if(firstCard.number==secondCard.number){
               firstCard.succes=true
               secondCard.succes=true
               firstCard=null
               secondCard=null
           }
       }




       if(document.querySelectorAll('.card.succes').length==cardsNumberArray.length){
           screens[2].classList.add('up')
            clearInterval(timer)
           screenScore.innerText=`${scoreSumm}`

           btnStart.addEventListener('click',finish)
                 function finish() {
                     container.innerHTML=''
                     screens[2].classList.remove('up')
                     screens[1].classList.remove('up')
                 }
                 screenScore.innerText=`${scoreSumm}`

       }
    }
    if(cardsCount==5) {
    score1.addEventListener('click',summ)
    function  summ() {
        console.log(scoreSumm + 'score')
        return scoreSumm++
    }
    }
    if(cardsCount==15) {
        score2.addEventListener('click', summ)
    }
        if(cardsCount==19) {
            score3.addEventListener('click', summ)
        }
}


