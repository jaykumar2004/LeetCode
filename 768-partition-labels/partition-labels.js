/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let ans = [];

    let last = Array(26).fill(-1);

    for (let i = 0; i < s.length; i++) {
        let curr = s.charCodeAt(i) - 97;
        last[curr] = i;
    }

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = s.charCodeAt(i) - 97;

        end = Math.max(end, last[curr]);

        if (i === end) {
            ans.push(end - start + 1);
            start = i + 1;
        }
    }

    return ans;
};