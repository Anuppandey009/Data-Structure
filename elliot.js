






function runProgram(input){
    var newInput = input.split("\n");
    for(var i=2;i<newInput.length;i=i+2){
        var str=newInput[i]
        var res=""

        var right=str.length
          
        
        function encrypt(str){
        if(str.length>2){
            var mid=Math.floor((str.length-1)/2)
            res=res+str[mid]
            var left=str.slice(0,mid);
            var right=str.slice(mid+1)
            encrypt(left)
            encrypt(right)
            
        }
        else{
            res=res+str
        }
        }
        
        encrypt(str)
        console.log(res);
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