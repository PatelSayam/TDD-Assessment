function add (str) {

    if(str === "")  return 0;
    if(!str.includes(','))  return parseInt(str);

    const numArray = str.split(",").map(s => Number(s));

    if(numArray.length === 2) {
        return numArray[0] + numArray[1];
    }        

    return 0;
}

module.exports = { add };