
function printData(data: string | number) {
    if (typeof data === 'string') {
        console.log(`String data: ${data}`);
    } else {
        console.log(`Number data: ${data}`);
    }
}

printData('Hello');
printData(42);