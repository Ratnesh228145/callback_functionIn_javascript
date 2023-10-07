function manipulateString(inputstring,callback){
    const manipulatedstring=inputstring.toUpperCase();
    callback(manipulatedstring);
}

function logString(manipulatedstring){
    console.log(`the manipulated string is : ${manipulatedstring}`);
}

manipulateString("hello, world!" , logString);