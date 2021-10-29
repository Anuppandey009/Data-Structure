

var str=`97481313741`

var arr=str.split("").map(Number)

var l=0
var r=arr.length-1

function sort(arr,l,r){
  if(l<r){
     
      var mid=Math.floor( (l+r)/2)
      sort(arr,l,mid)
      sort(arr,mid+1,r)
      merge(arr,l,mid,r)
  }
}


function merge(arr,l,mid,r){
    var n1=mid-l+1;
    var n2=r-mid;   // these will the length of the two array we are gonna make merge
    
    var a=[];
    var b=[];
    for( var i=0;i<n1;i++){
    a[i]=arr[l+i];
   }
   for(var i=0;i<n2;i++){
       b[i]=arr[mid+1+i]

}
var i=0;
var j=0;
var k=l;
while(i<n1 && j<n2){
    if(a[i]<b[j]){
        arr[k]=a[i]
        k++;
        i++;
}

else{
    arr[k]=b[j]
    k++;
    j++
}
}

while(i<n1){
    arr[k]=a[i]
    k++;
    i++
}

while(j<n2){
    arr[k]=b[j]
    k++;
    j++
}

}

sort(arr,l,r)
console.log(arr.join(" "));