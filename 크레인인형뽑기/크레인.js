export default function solution(board, moves) {
  let answer = 0;
  const cRow = new Array(board.length).fill(0);
  const box = [];

  function getCurrentPosition(x) {
    const currentY = cRow[x];
    const newOne = board[currentY][x];
    ++cRow[x];
    if (newOne === 0) {
      return getCurrentPosition(x);
    }
    return newOne;
  }

  moves.forEach((move) => {
    const x = move - 1;
    const currentRow = cRow[x];
    if (currentRow < board.length) {
      const newOne = getCurrentPosition(x);
      const lastOne = box[box.length - 1];
      if (lastOne === newOne) {
        box.pop();
        answer += 2;
      } else {
        box.push(newOne);
      }
    }
  });
  return answer;
}

class 인형뽑기Col {
  constructor(param) {
    this.col = param.filter((인형) => 인형 !== 0);
  }
  pop() {
    return this.col.pop();
  }
}

export function 다른방법(board, moves) {
  const 인형들 = board.map((인형) => new 인형뽑기Col(인형));
  const box = [];
  let answer = 0;
  moves.forEach((move) => {
    const new인형 = 인형들[move - 1].pop();

    if (box[box.length - 1] === new인형) {
      box.pop();
      answer += 2;
    } else {
      box.push(new인형);
    }
  });
  return answer;
}

export function 쏭의solution(board, moves) {
  let answer = 0;
  let result = [];

  let newBoard = [];

    for(let i = 0; i < board.length; i++){
        newBoard[i]=[]
        for(let j = board.length-1; j >= 0; j--){
            board[j][i] > 0 && newBoard[i].push(board[j][i])    
        }
    }
    console.log(newBoard)

  moves.forEach((move)=>{
      if(newBoard[move-1].length === 0) return;
      const doll =  newBoard[move-1].pop();
      
      if(result[result.length-1] === doll){
         result.length > 0 && result.pop() 
         answer++;
      }else{
        result.push(doll)
      } 
  })
  
  return answer*2;
}
