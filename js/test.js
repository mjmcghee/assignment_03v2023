const init = () => test();

const test = () => {
    let a = parseInt(prompt("What is the value?"));
    while (a != 0) {
        if (a == 1) {
            console.log(a);
            continue;
        } else {
            a++;
            console.log(a);
        }
     }
}

init()