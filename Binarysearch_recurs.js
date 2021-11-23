







function runProgram(input){
    var newInput = input.split("\n");

    var data=newInput[0].split(" ").map(Number)
var key=data[1]
var arr=newInput[1].split(" ").map(Number)
var low=0
var high=arr.length-1
    
function binary(arr,low,high,key){
    if(low<=high){
        let mid = low+ Math.floor((high - low) / 2);

        if(arr[mid]===key){
            return 1
        }
  
     else if(arr[mid]<key){
        return    binary(arr,mid+1,high,key )
        }
         else{
              return   binary(arr,low,mid-1,key )
         }


    }

    return -1

}
var x=binary(arr,low,high,key)
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

