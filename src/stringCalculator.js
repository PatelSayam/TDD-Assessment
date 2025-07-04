function add (str) {

    if(str === "")  return 0;
    
    const numbers = str.split(",").map(s => Number(s));
    return numbers.reduce((sum, number) => sum + number , 0);
}

module.exports = { add };