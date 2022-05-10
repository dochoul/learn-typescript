function sum(a: number, b: number):number {
  return a + b;
}
sum(10, 20);

function sum3():number {
  return 10;
}

// 옵셔널 파라미터
function log(a:string, b?:string) {
  console.log(a,b);
}
log('hello world')
log('kimdy', 'hello world')