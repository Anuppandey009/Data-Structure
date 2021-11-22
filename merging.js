
var str1='1 5 7 9'
var str2='2 4 6 8'

var arr1=str1.split(" ").map(Number)
var arr2=str2.split(" ").map(Number)


var arr=[]
var n1=arr1.length;
var n2=arr2.length;

var i=0;
var j=0;
while(i<n1 && j<n2){
    if(arr1[i]<arr2[j]){
        arr.push(arr1[i])
        i++

    }
    else{
        arr.push(arr2[j])
        j++
    }
}

for(;i<n1;i++){
    arr.push(arr1[i])
}
for(;j<n2;j++){
    arr.push(arr2[j])
}

console.log(arr.join(" "));