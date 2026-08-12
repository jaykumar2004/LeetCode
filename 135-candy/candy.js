/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (arr) {

    let n = arr.length;
    let ans = n;
    let i = 1;

    while (i < n) {

        if (arr[i] === arr[i - 1]) {
            ++i;
            continue;
        }

        let count = 0;
        while (arr[i] > arr[i - 1]) {
            ++count;
            ans = ans + count;
            ++i
        }

        let count2 = 0;

        while (arr[i] < arr[i - 1]) {
            ++count2;
            ans = ans + count2;
            ++i
        }

        ans = ans - Math.min(count, count2)

    }


    return ans;

};




