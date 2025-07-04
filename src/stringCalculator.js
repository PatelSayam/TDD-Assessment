function add (str) {

    // return 0 for an empty string 
    if(str === "") {
        return 0;
    }            
    else {
        return parseInt(str);
    }

}

module.exports = { add };