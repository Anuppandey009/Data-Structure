

function add(arr) {
    var total=0
    for(var i=0;i<arr.length;i++){
        total=total+arr[i]
    }
    return total
}




function runProgram(input){
    var newInput = input.split("\n");
    var num=Number(newInput[0])
   
    for(var i=num+1+1;i<newInput.length;i++){
        var arr=[]
        for(var j=1;j<=num;j++){
            if(Number(newInput[i])>=Number(newInput[j])){
                arr.push(Number(newInput[j]))

            }
        }
       
        var x=add(arr)
        console.log(arr.length,x);
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
runProgram(`7
1 
2 
3 
4 
5 
6 
7
3
3
10
2`)