
function runProgram(input){
    var newInput = input.split("\n");
    var arr=newInput[1].trim().split(" ").map(Number)
  
    var index=0;
    var res=[]
    var count=0
    
    function oddset(arr,index,res){
        if(index===arr.length){
            console.log(res);
          var sum=res.reduce((x,y)=>x+y,0)
       
          if(sum%2==1 || sum%2==-1){
              count++
          }
       
          
    
          
        }
    else{
       
        oddset(arr,index+1,res)
        res.push(arr[index])
     
        oddset(arr,index+1,res)
        res.pop()
    }
    return
    
    }
    
    oddset(arr,index,res)
    console.log(count);
    
    
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
runProgram(`7
-3 -1 -10 8 -5 0 7 `)