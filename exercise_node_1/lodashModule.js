export function reverse(arr) {
    return arr.reverse();
}

export function uniq(arr) {
    const wordSet = {}; 

    const uniqueWords = arr.filter(word => {
        if (!wordSet[word]) {
            wordSet[word] = true;
            return true;
        }
        return false;
    });

    return uniqueWords;
}

