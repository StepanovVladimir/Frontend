function getLast(line) {
    return line.charAt(line.length - 1);
}

function getWithoutLast(line) {
    return line.substring(0, line.length - 1);
}

function getReverse(line) {
    var newLine = '';
    for (i = line.length - 1; i >= 0; i--) {
        newLine += line.charAt(i);
    }
    return newLine;
}

function removeExtraBlanks(line) {
    var state = 'begin';
    var newLine = '';
    for (i = 0; i < line.length; i++) {
        if (line.charAt(i) != ' ') {
            if (state == 'space') {
                newLine += ' ';
            }
            newLine += line.charAt(i);
            state = 'word';
        } else {
            if (state == 'word') {
                state = 'space';
            }
        }
    }
    return newLine;
}

console.log( getLast('Hello world') );
console.log( getWithoutLast('Hello world') );
console.log( getReverse('Hello world') );
console.log( removeExtraBlanks('    Hello    world    ') );