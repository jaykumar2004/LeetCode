/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (arr, capacity) {

    let loc = Array(1001).fill(0);
    for (let i = 0; i < arr.length; i++) {
        let [passengers, from, to] = arr[i];
        loc[from] += passengers;
        loc[to] -= passengers;
    }

    let usedCapactiy = 0;

    for (let i = 0; i < 1001; i++) {
        usedCapactiy += loc[i];
        if (usedCapactiy > capacity) {
            return false;
        }
    }
    return true;

};





