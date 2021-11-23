 //To find the weird sum 

 
function runProgram(input) {
    var newInput = input.split("\n");
    for (var i = 2; i < newInput.length; i = i + 2) {
        var str = newInput[i]

        var arr = str.split(" ").map(Number)

        var res = []
        var index = 0;
        var op = []
        var max = Math.max(...arr)
        var flag = false;
        function print(res, index, arr, max) {

            var sum = 0
            if (index === arr.length) {

                for (var i = 0; i < res.length; i++) {
                    if (res[i] != max) {
                        sum = sum + res[i]
                    }
                }

                if (sum === max) {
                    flag = true
                    return flag
                }

                return flag

            }
            else {
                print(res, index + 1, arr, max)

                res.push(arr[index])


                print(res, index + 1, arr, max)
                res.pop()


            }

            return
        }
        print(res, index, arr, max)
        if (flag === true) {
            console.log("Yes");
        }
        else {
            console.log("No");
        }


    }

}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});