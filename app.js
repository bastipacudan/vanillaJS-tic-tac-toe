var cnt = 0;
var board = [[0,0,0],
             [0,0,0],
             [0,0,0]];
/////////////////////
var onClick = (id) => {
    if(cnt % 2 == 0) {
        document.getElementById(id).innerHTML = 'X';
        if(id <= 3 ){
          board[0][id-1] ='x';
        }else if(id > 3 && id <= 6 ) {
          board[1][id-4] ='x';
        }else {
          board[2][id-7] ='x';
        }
        cnt++;
    }else {
        document.getElementById(id).innerHTML = 'O';
        if(id <= 3 ){
            board[0][id-1] ='o';
          }else if(id > 3 && id <= 6 ){
            board[1][id-4] ='o';
          }else {
            board[2][id-7] ='o';
          }
        cnt++;
    }
    checkBoard(board);
    console.log(board)
    if(cnt > 8 ){
       alert('Tie Game!');
       clearAll();
      
    }
    
}
/*


*/
var checkBoard = (matrix) => {
  
    horizontalScore(matrix);
    verticalScore(matrix);
    diagonalLeftScore(matrix);
    diagonalRightScore(matrix);
  
}
/*


*/
var horizontalScore = (matrix) =>{
    var xScore = 0;
    var yScore = 0;
    matrix.forEach(rows => {
        rows.forEach(cols => {
            if(cols === 'x') {
                xScore++;
            }else if(cols === 'o'){
                yScore++;
            }
        });

        checkWinner(xScore,yScore);
        xScore = 0;
        yScore = 0;
    
    });
}
/*


*/
var verticalScore = (matrix) => {
    let xScore = 0;
    let yScore = 0;
    
    for(let i = 0; i < matrix.length; i++) {
      for(let y = 0; y < matrix.length; y++) {
         if(matrix[y][i] === 'x'){
             xScore++;
         }else if(matrix[y][i] === 'o'){
             yScore++;
         }
      }
      checkWinner(xScore,yScore);
      xScore = 0;
      yScore = 0;

    }
    
}
/*


*/
var diagonalLeftScore = (matrix) => {
    let xScore = 0;
    let yScore = 0;
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i][i] === 'x'){
            xScore++;
        }else if(matrix[i][i] === 'o'){
            yScore++;
        }
    }
    checkWinner(xScore,yScore);
}
/*


*/
var diagonalRightScore = (matrix) => {
    let xScore = 0;
    let yScore = 0;
    let cnt = 0;
    for(let i = 2; i >= 0; i--) {
        if(matrix[cnt][i] === 'x'){
          xScore++;
         }else if(matrix[cnt][i] === 'o'){
           yScore++;
         }
         cnt++;
     }
    
     checkWinner(xScore,yScore);
}
/*


*/
var checkWinner = (x,y) => {
    if(x === 3) {
        alert('X Wins ')
        clearAll(); 
    }else if(y === 3) {
        alert('O Wins ');
        clearAll(); 
    }
}
/*


*/
var clearAll = () => {
    cnt = 0;
    board = [[0,0,0],
             [0,0,0],
             [0,0,0]]
    for(var i = 1; i <=9; i++){
        document.getElementById(i).innerHTML = '';
    }
}