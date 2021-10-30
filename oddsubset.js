
var str = `2 4`




function runProgram(input) {
    var newInput = input.split("\n");
    for (var i = 1; i < newInput.length; i = i + 2) {
        var str = newInput[i]

        var arr = str.split(" ").map(Number)
        var index = 0;
        var res = []
        var count = 0
        function subset(arr, index, res) {
            var sum = 0
            if (index === arr.length) {
                for (var i = 0; i < res.length; i++) {
                    sum += res[i]

                }
               
                if (sum % 2 == 1) {
                    console.log(sum);
                    count++
                }

            }
            else {
                subset(arr, index + 1, res)
                res.push(arr[index])
                subset(arr, index + 1, res)
                res.pop()
            }
            return
        }
        subset(arr, index, res)
        console.log(count);
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
runProgram(`3
1 2 3`)