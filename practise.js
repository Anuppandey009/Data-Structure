
var str='-8 -4 1 '
var arr=str.trim().split(" ").map(Number)
var res=[]
var index=0
var count=0

function  odd(arr,index,res){
    if(index==arr.length){
        var sum = res.reduce((acc, item) => acc + item, 0)
        console.log(res);
        if(sum%2==1 || sum%2==-1){
           
            count++
        }
     return
    }
    else{
        res.push(arr[index])
        odd(arr,index+1,res)
        res.pop()
        odd(arr,index+1,res)
    }
    return
}
odd(arr,index,res)
//console.log(count);