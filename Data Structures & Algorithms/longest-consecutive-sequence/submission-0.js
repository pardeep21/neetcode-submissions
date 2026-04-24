class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let finalres = 0;
        for(let i = 0; i < nums.length; i++){
            let res = new Array();
            res.push(nums[i]);
            if(nums[i] > 0){
                let prevnum = nums[i]-1;
                while(nums.includes(prevnum)){
                    res.push(prevnum);
                    prevnum--;
                }
            }
            let nextnum = nums[i]+1;
            //console.log(nextnum);
            while(nums.includes(nextnum)){
                res.push(nextnum);
                nextnum++;
            }
            //console.log(res);
            if(res.length > finalres){
                finalres = res.length;
            }
        }
        return finalres;
    }
}
nums=[0,3,2,5,4,6,1,1];
const solution = new Solution();
console.log(solution.longestConsecutive(nums));