function add (str) {

    if(str === "")  return 0;

    // default delimiters
    let delimiters = [",", "\n"];

    if(str.startsWith("//[")) {

        let endlineIndex = str.indexOf("\n");
        let delimiterPart = str.substring(2, endlineIndex);
        const matches = delimiterPart.match(/\[([^\]]+)\]/g);

        if(matches) {
            const multipleDelimiters = matches.map(delim => delim.slice(1,-1));
            delimiters.push(multipleDelimiters);
        }
        
        str = str.substring(endlineIndex + 1);
    } 
    else if(str.startsWith("//")) {
        let delimeter = str.substring(2,3);
        delimiters.push(delimeter);
        str = str.substring(4);
    }

    const regex = new RegExp(`[${delimiters.join("")}]`);

    const numbers = str
    .split(regex)
    .map(s => s.trim())
    .filter(s => s !== "")
    .map(Number)
    .filter(num => num <= 1000);
    
    // check for negative values, if any present then throw error message
    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error("negative numbers are not allowed " + negatives.join(","));        
    }
    
    return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };