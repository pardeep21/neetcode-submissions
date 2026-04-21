class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = {};
        for (let n of nums){
            if(!res[n]){
                res[n] = 0;
            }
            res[n]+=1; 
        }
        const arr = Object.entries(res).map(([nums, freq]) => [freq, parseInt(nums)]);
        arr.sort((a, b) => b[0] - a[0]);
        return arr.slice(0, k).map((pair) => pair[1]);
    }
}