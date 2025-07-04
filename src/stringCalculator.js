function add (str) {

    if(str === "")  return 0;
    
    return str
    .split(",")
    .map(s => s.trim())
    .filter(s => s !== "")
    .reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };