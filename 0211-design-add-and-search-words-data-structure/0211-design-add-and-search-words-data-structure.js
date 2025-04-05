
var WordDictionary = function () {
    this.dict = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let dict = this.dict;
    for (let letter of word) {
        if (!dict[letter]) {
            dict[letter] = {}
        }

        dict = dict[letter];
    }

    dict.isTerminated = true;
};

WordDictionary.prototype.dfs = function (word, node, index) {
    if (index === word.length) {
        return node.isTerminated || false
    };
    const currentLetter = word[index];


    if (currentLetter === '.') {
        for (let nextLetter in node) {
            if (this.dfs(word, node[nextLetter], index + 1)) {
                return true;
            }
        }
    }

    if (node[currentLetter]) {
        return this.dfs(word, node[currentLetter], index + 1);
    }

    return false;
}

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    return this.dfs(word, this.dict, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */