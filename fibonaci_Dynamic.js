


function runProgram(input){
    var n=Number(input)
   
   var temp=[]
   
   for(var i=0;i<=n;i++){
     temp.push(0)
   }
   
   function fib(n,temp) {
     if(n<=1){
       return n
     }
   
     if(temp[n]!=0){
       return temp[n]
     }
        temp[n]= fib(n-1,temp)+fib(n-2,temp)
        return fib(n-1,temp)+fib(n-2,temp)
   }
   
   
    var x=fib(n,temp)
    console.log(x);
   }
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
      read += input;
   });
   process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
     runProgram(read);
   });
   process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
   });
   

   