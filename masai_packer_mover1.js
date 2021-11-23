
var str='1 2 3'




function runProgram(input){
   var newInput = input.split("\n");
   var str=newInput[1]
   var x=newInput[0].split(" ").map(Number)
   var weight=x[1]

   var arr=str.split(" ").map(Number)
   // var weight=3
   var min =Infinity;
   var max=-Infinity;
   var count=0
   var res=[]
   
   function mover(arr,weight,count){
     if(weight==0){
      //   console.log(count);
        res.push(count)
        return
     }
     if(weight<0){
        return
     }
     for(var i=0;i<arr.length;i++){
      mover(arr,weight-arr[i],count++)
     }
   
   
   }
   mover(arr,weight,count)
   res.sort()
   
   if(res.length!=0){
      min=arr[0]
      max=arr[res.length-1]
      console.log(min,max);
   }
   else{
      console.log("-1");
   }
   
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
