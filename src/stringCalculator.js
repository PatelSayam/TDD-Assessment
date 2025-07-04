function add (str) {

    if(str === "")  return 0;

    // default delimiters
    let delimiters = [",", "\n"];

    if(str.startsWith("//")) {
        let delimeter = str.substring(2,3);
        delimiters.push(delimeter);
        str = str.substring(4);
    }

    const regex = new RegExp(`[${delimiters.join("")}]`);

    return str
    .split(regex)
    .map(s => s.trim())
    .filter(s => s !== "")
    .reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };