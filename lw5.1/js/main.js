function getLast(line) {
    return line.charAt(line.length - 1);
}

function getLastOther(line) {
    if (line.length > 0) {
        return line[line.length - 1];
    } else {
        return '';
    }
}

function getWithoutLast(line) {
    return line.substring(0, line.length - 1);
}

function getWithoutLastOther(line) {
    var newLine = '';
    for (var i = 0; i < line.length - 1; i++) {
        newLine += line.charAt(i);
    }
    return newLine;
}

function getReverse(line) {
    var newLine = '';
    for (var i = line.length - 1; i >= 0; i--) {
        newLine += line.charAt(i);
    }
    return newLine;
}

function getReverseOther(line) {
    return line.split('').reverse().join('');
}

function removeExtraBlanks(line) {
    var STATE_BEGIN = 'begin';
    var STATE_WORD = 'word';
    var STATE_SPACE = 'space';
    var state = STATE_BEGIN;
    var newLine = '';
    for (var i = 0; i < line.length; i++) {
        if (line.charAt(i) != ' ') {
            if (state == STATE_SPACE) {
                newLine += ' ';
            }
            newLine += line.charAt(i);
            state = STATE_WORD;
        } else {
            if (state == STATE_WORD) {
                state = STATE_SPACE;
            }
        }
    }
    return newLine;
}

function removeExtraBlanksOther(line) {
    return line.trim().replace(/\s+/g, ' ');
}

console.log( getLast('Hello world') );
console.log( getLastOther('Hello world') );

console.log( getWithoutLast('Hello world') );
console.log( getWithoutLastOther('Hello world') );

console.log( getReverse('Hello world') );
console.log( getReverseOther('Hello world') );

console.log( removeExtraBlanks('    Hello    world    ') );
console.log( removeExtraBlanksOther('    Hello    world    ') );