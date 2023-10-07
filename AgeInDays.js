const person={
    firstName:"Mithun",
    lastName:"S",
    age:20,
};

function ageindays(personobject,callback){
    const fullName=`${personobject.firstName} ${personobject.lastName}`;
    const ageindays=personobject.age*365;
    callback(fullName,ageindays);
}

function logresult(fullName,ageindays){
    console.log(`The persons full Name is ${fullName} and their age in days is ${ageindays}.`);
}

ageindays(person,logresult);