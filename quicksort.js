var str=`2 3 7 9 4`
var arr=str.split(" ").map(Number)

var p=0
var r=arr.length-1;

function swap(arr,a,b){
var temp=arr[a];
arr[a]=arr[b];
arr[b]=temp
return arr
}

function partition (arr,p,r){
    var pivot_elem=arr[r]
    var i=p-1
    for(var j=p;j<=r-1;j++){
        if(arr[j]<=pivot_elem){
            i++
            swap(arr,i,j)
        }
    }
  

    swap(arr,i+1,r)

    return i+1
}

function quicksort(arr,p,r){
    if(p<r){
        var q=partition(arr,p,r)
        quicksort(arr,p,q-1)
        quicksort(arr,q+1,r)
    }
}


quicksort(arr,0,arr.length-1)
console.log(arr.join(" "));

