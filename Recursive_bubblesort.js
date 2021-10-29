var str=`3 5 0 9 8`
var arr=str.split(" ").map(Number)

var n=arr.length






function sort(arr,n){
    if(n==1){
        return arr
    }
    else{
        for(var i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                var temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
            }
        }
        return sort(arr,n-1)
    }
}
// sort(arr,n)
// console.log(arr);




function runProgram(input){
    var newInput = input.split("\n");
    var n=+newInput[0]
    var arr=+newInput[1].split(" ").map(Number)
    sort(arr,n)
    console.log(arr.join(" "));
  
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
