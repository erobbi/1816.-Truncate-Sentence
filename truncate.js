var truncateSentence = function(s, k) {
    return s.split(" ").splice(0, k).join(" ")
    // turns out that slice may be faster that splice?
};
