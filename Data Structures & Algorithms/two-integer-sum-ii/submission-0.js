class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const res = new Map();
        for(let i=0; i<numbers.length; i++){
            const temp = target - numbers[i];
            if(res.has(temp)){
                return [res.get(temp), i + 1];
            }
            res.set(numbers[i], i+1);
        }
        return [];
    }
}
