class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const resan = new Array();
        const strs1 = new Array();
        for (let i = 0; i < strs.length; i++){
            const resansub = [];
            if(!strs1.includes(strs[i])){
                resansub.push(strs[i]);
                strs1.push(strs[i]);
                let s1 = strs[i].split('').sort().join('');
                for(let j = i+1; j < strs.length; j++){
                    let s2 = strs[j].split('').sort().join('');
                    if(s1 == s2){
                        resansub.push(strs[j]);
                        strs1.push(strs[j]);
                    }
                    
                }
                resan.push(resansub);
            }
        }
        return resan;
    }
}
