function runProgram(input){
    var newInput = input.trim().split("\n");
    var arr=newInput[1].trim().split(' ').map(Number).sort((a,b)=> a-b)

    for(var i=2;i<newInput.length;i++){

var key=Number(newInput[i])

var low=0
var high=arr.length-1
 
 function binary(key)
{while(low<=high){

    var mid=low+Math.floor((high-low)/2)

    if(arr[mid]===key){
        return 1
    }
    else if(arr[mid]>key){
        high=mid-1
    }
    else{
        low=mid+1
    }
  
}
return-1
}

var res=binary(key)

if(res==1){
    console.log("YES")
}
 else{
     
      console.log("NO")
 }
 
 
 
    
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