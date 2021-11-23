
var str=`2 4 3 5 1`

var arr=str.split(" ").map(Number)
var k=3

function  sum(arr) {
    var x=0
    for(var i=0;i<arr.length;i++){
     x=x+arr[i]
    }
    return x
}


for(var i=0;i<arr.length;i++){

   var res=[]
   for(var j=i;j<arr.length;j++){
       res.push(arr[j])
   }

}

