// var sq = document.querySelector('.squere').style.transform('translateX(10px)')
var sq = document.getElementById("sq");
var sqRan = document.getElementById("sq-ran");
var pointsUI = document.querySelector('.points');
var sLength = 20;
var sHeight = 20;
sq.style.height = `${sLength}px`;
sq.style.width = `${sHeight}px`;
 var direction;
 var newSq;

var ranX = Math.floor(Math.random() * 18) * 20;
var ranY = Math.floor(Math.random() * 18) * 20;
sqRan.style.transform = `translate(${ranX}px,${ranY}px)`;
console.log(ranX + '   ' + ranY);
var points = 0;

var countX = 0
console.log(countX);
var countY = 0;
var x;
var y;
var newSqCreate = false;
var dataArray = [];
var movesArray = [];
var gameOver = document.querySelector('.game-over');
var gameOn;
var gameStartButton = document.querySelector('.start-game');
var welcomeTxt = document.querySelector('.welcome');
gameStartButton.addEventListener('click', startf);
var poleGry = document.querySelector('.pole-gry');
var pointsContainer = document.querySelector('.points-container');
var speed = 200;
////OBCZAJ KOLORY

function startf(){
    welcomeTxt.style.visibility = 'hidden';
    poleGry.style.visibility = 'visible';
    pointsContainer.style.visibility = 'visible';
    gameOn = true ;

}

// setInterval(xUp,500);

//CHECK IF RETURNING VALUE HELP WITH DIRECTIONS
function xUp(){
    

     direction = 'right';
    // countX += 10;
    if(countX <= 380 ){
        countX += 20;
        move();
        // sq.style.width = `${sHeight}px`;
        // sq.style.height = `${20}px`;
      

        

      
        
    }
     
}
function xDown(){

    direction = 'left';
    if(direction === 'right'){
        sq.style.transform = 'rotate(180deg)';
        console.log('rotating');
    }
    
    if(countX >= 0 ){
        countX -= 20;
        move();
        // sq.style.width = `${sHeight}px`;
        // sq.style.height = `${20}px`;

       
        
    }
     
}
function yDown(){

    direction = 'up';
    if(countY <= 380 ){
        countY += 20;
        move();
        // sq.style.height = `${sLength}px`;
        // sq.style.width = `${20}px`;

       
    }
     
}
function yUp(){

    direction = 'down';
    if(countY >= 0 ){
        countY -= 20;
        move();
        // sq.style.height = `${sLength}px`;
        // sq.style.width = `${20}px`;

       
    }
     
}
// document.addEventListener('keypress', btnClicked);
  document.addEventListener('keydown',function(e){

    //count max 380 do code
    // if (count <= 380 && count >= 0){}
     if (e.keyCode === 39 && direction != 'left') {
        if (countX <= 370){
            clearInterval(x);
         x = setInterval(xUp,speed);
        
            
        }
    
   }
   else if(e.keyCode === 37 && direction != 'right'){

        if(countX >= 10){
            
            clearInterval(x);
           x = setInterval(xDown,speed);
        }
        
   }
   else if(e.keyCode === 40 && direction != 'down'){

    if(countY <= 370){
        clearInterval(x);
        x = setInterval(yDown,speed);
    }
    
}
    else if(e.keyCode === 38 && direction != 'up'){

        if(countY >= 10){
            clearInterval(x);
        x = setInterval(yUp,speed);
        }
        
    }
    else if(e.keyCode === 32){
        
            clearInterval(x);
            console.log('space');
            UIControll.stop();
       
        
        
    }

});
/////translate csss
var Moves = function(positionX, positionY){
    this.positionX = positionX;
    this.positionY = positionY;
}
function saveMoves(){

    
        var newMove = new Moves(countX,countY);
        movesArray.unshift(newMove);

    
}
function deleteMoves(){
    movesArray.pop();
}

function move(){
    if(gameOn){
        saveMoves();
        UIControll.start();
        if( movesArray.length -1  > points ){
            deleteMoves();
        }
        sq.style.transform = `translate(${countX}px,${countY}px)`;
        // sq.style.transform = `translateY(${countY}px)`;
        if(newSq === document.querySelector('.squere-test')){
            
            newSq.style = `transform: translate(${countX -10}px,${countY }px)
                            margin: ${10 * points}px`
                       ;
        }
        ////GET ACCES TO DATA ARREY 
        if (points > 0){
           for (var i = 0 ; i < points ; i++){
            //    if (direction === 'right'){
            //     dataArray[i].DOMo.style = `transform: translate(${-20 + countX - 20 * i}px,${ countY  - 20 * i  }px);`
    
            //    }
            //    else if (direction === 'left'){
            //     dataArray[i].DOMo.style = `transform: translate(${20 + countX + 20 * i}px,${ countY  - 20 * i  }px);`
    
            //    }
            //    else if (direction === 'down'){
            //     dataArray[i].DOMo.style = `transform: translate(${countX}px,${countY + 20 * i }px);`
    
            //    }
            //    else if (direction === 'up'){
            //     dataArray[i].DOMo.style = `transform: translate(${countX}px,${countY - 20 * i }px);`
    
            //    }
            
                    dataArray[i].DOMo.style = `transform: translate(${movesArray[i + 1].positionX}px,${ movesArray[i + 1].positionY}px);
                                                visibility: visible`
        
                //    
          
               console.log(i);
           }
           console.log(countX + ' yo  ' + countY + '  ' + movesArray[0].positionX + '  ' + movesArray[0].positionY );
        }
      
        ///// TRIGER MOVE METHOD
    }
  
   
 
   
};
function lForCrush(){
     if ((countX === -20 ||countX === 400) || (countY === -20 || countY === 400)){
        gameOver.style.visibility = 'visible';
        gameOn = false;
        // alert('game over');
     }
     for(var i = 0; i <movesArray.length - 1; i++){
         if(countX === movesArray[i + 1].positionX && countY === movesArray[i + 1].positionY){
            gameOver.style.visibility = 'visible';
            gameOn = false;
         }
        
        // console.log(movesArray[i].positionX + ' xxx '+ movesArray[i].positionY);
     }

    // console.log('pies');




}
function lForPoints(){
    lForCrush();
    
    if(points >10){
        speed = 150;
    }
    if (points > 20){
        speed = 100;
    }
    if (points > 30){
        speed = 50;
    }
    console.log(speed);
    if( countX === ranX && countY === ranY){
            points++;
            snakeGrow();
           
            sLength += 20;
            sHeight += 20;
           
            ranX = Math.floor(Math.random() * 18) * 20;
            ranY = Math.floor(Math.random() * 18) * 20;
            for(var i = 0; i < movesArray.length; i++){
                if (ranX === movesArray[i].positionX && ranY === movesArray[i].positionY){
                    ranX = Math.floor(Math.random() * 18) * 20;
                    ranY = Math.floor(Math.random() * 18) * 20;
                   
                }
            }
            
            sqRan.style.transform = `translate(${ranX}px,${ranY}px)`;
            pointsUI.textContent = points;
            newSqCreate = true;
            newSqCreate = false;

          
    }
    
 

    
};
setInterval(lForPoints,100);

// MAKE NEW HTML MOVE NEW SNAKESES
var Snake = function  (positionX,positionY){
    this.positionX = positionX;
    this.positionY = positionY;
     this.DOMo = document.getElementById(`squere-${points}`);
     

   
    this.move = function(){
        
        this.DOMo.style = `transform: translate(${countX }px,${countY }px)`;
        
    }

}

function snakeGrow(){
    
    
    sq.insertAdjacentHTML('beforebegin', `<div id="squere-${points}" class="squere-kid-${ points % 3}"></div>`);
    
    
    var newSnake = new Snake(countX,countY);
    
    
    
    dataArray.push(newSnake);
    

   
    
    
   
}

var UIControll = (function () {
    const startStopBtn = document.getElementById('start-stop');

    return {
        start: function(){
            
            startStopBtn.classList = 'stop-btn';
            
           
           
          
        },
        stop: function(){
            
            startStopBtn.classList = 'start-btn';
            
           
           
           
        }
    }
        
   
})();

console.log(dataArray);





