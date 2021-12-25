

var str='12 3 4 6 9 12'
var arr=str.split(" ").map(Number).sort((a,b)=>{return a-b})

var sum=24;

for(var i=0;i<arr.length-2;i++){
    var low=i+1
    var high=arr.length-1

    while(low<high){
        if(arr[low]+arr[high]+arr[i]==sum){
      console.log( arr[i],arr[low],arr[high]);
        }
        else if(arr[low]+arr[high]+arr[i]>sum){
            high--
        }
        else{
              low++
        }
    }
}

