// find the permutation of the given string

var str='abc'
var n=str.length
var ch=str.charAt(1)

var ans=""


function print(str,ans){
    if(str.length==0){

        console.log(ans);
        return
    }

    for(var i=0;i<str.length;i++){
        var ch=str.charAt(i)
        
        var left=str.substr(0,i)
        var right=str.substr(i+1)
        var rest=left+right;
        print(rest,ans+ch)
    }
}

print(str,ans)
