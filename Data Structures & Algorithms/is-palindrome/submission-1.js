class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
    isPalindrome(s) {
        let newStr = "";
        for (let c of s){
            if(this.isAlphanumeric(c)){
                newStr += c.toLowerCase();
            }
        }
        let s1 = newStr.replace(" ", "");
        let num = s1.length;
        let i=0, j=num-1;
        while(i < j){
            if(s1[i] !== s1[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
