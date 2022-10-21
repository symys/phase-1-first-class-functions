function receivesAFunction(x){
    x(() => {
        console.log("Stretch! Work that core!");
      });
}

function returnsANamedFunction(){
    const namedFunc = function helloFunc(){
        console.log("hello I'm named Function");
    }
    return namedFunc;
}

function returnsAnAnonymousFunction(){
    return (() => {
        console. log("Hi I'm anonymous func");
    })
}