/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    let map=new Map()
    let result=[]
    for(str of strs){       
        let sortstr= str.split('').sort().join();
        //need to consider sorting algorithim
        if (map.has(sortstr)){
            let array= map.get(sortstr)
                array.push(str)
            map.set(sortstr,array )
        }
        else{
            map.set(sortstr,[str])

        }        
    }

    for(let key of map.keys()){
        result.push(map.get(key))
    }
    return result;
};