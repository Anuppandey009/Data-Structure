
//To find the subsequence of an array by using recursive method


var str=`1 2 3`
var arr=str.split(" ").map(Number)
var  index=0
var res=[];

// Create the function to find the sub sequence
function subsequence(arr,index,res){
    if(index===arr.length){
        var sum=0
        for(var i=0;i<res.length;i++){
            sum=sum+res[i]
        }
        console.log(sum);
    }
    else{
        subsequence(arr,index+1,res)
        res.push(arr[index])
        subsequence(arr,index+1,res)
        res.pop()
    }
    return
}
subsequence(arr,index,res)