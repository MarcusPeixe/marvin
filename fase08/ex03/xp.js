function xp(num) {
    var level = 1;
    var xpPerLevel = 100;
    while (num > xpPerLevel) {
        num -= xpPerLevel;
        xpPerLevel += 50;
        level++;
    }
    return level;
}