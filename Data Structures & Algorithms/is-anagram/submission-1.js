class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sArr = s.split("").sort();
        const tArr = t.split("").sort();
        const sN = sArr.toString();
        const tN = tArr.toString();
        if(sN === tN) return true;
        return false;

    }
}
