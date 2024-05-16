import ArrayStack from "./01_栈结构"

// 十进制转二进制
function tenToTwo(tenNum: number) {
  let chu = tenNum
  let twoNum = new ArrayStack()
  let result = ''
  while(chu >= 1) {
    twoNum.push(chu % 2)
    chu = Math.floor(chu / 2)
  }
  
  while(!twoNum.isEmpty()) {
    result += twoNum.pop()
  }

  return result
}

console.log(tenToTwo(35));
console.log(tenToTwo(101));

// 有效的括号
function isValid(str: string): boolean{
  const stack = new ArrayStack<string>()
  for(let i = 0; i < str.length; i++){
    switch(str[i]) {
      case '(': stack.push(')');break;
      case '[': stack.push(']');break;
      case '{': stack.push('}');break;
      default: 
        if(str[i] !== stack.pop()) return false
        break;
    }
  }

  return stack.isEmpty()
}

console.log(isValid('()[]{}'));
console.log(isValid('({})[]('));
console.log(isValid('({)}()[]'));

export {}