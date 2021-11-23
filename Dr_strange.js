var str=`1 2 2`
var arr=str.split(" ").map(Number)
var low=0;
var high=arr.length-1
var ans=''
var res=[]
function subsequence(ans, arr, low, high) {
    if (low <= high + 1 && ans.length != 0){
       res.push(ans)
    }
        // console.log(ans);

    for (let i = low; i <= high; i++)
        subsequence(ans + arr[i] + " ", arr, i + 1, high);
}

subsequence(ans, arr, low, high)
console.log(res);

// var res=' '
// var left=0;
// var right=arr.length-1

// function print(res,arr,left,right){
//     if(left<=right+1 && res.length!=0){
//         console.log(res)
//     }  
//      for(var i=left;i<=right;i++){
//         print(res+arr[i]+" ",arr,left+1,right)
     
//        ;
//      }
// }
// print(res,arr,left,right)