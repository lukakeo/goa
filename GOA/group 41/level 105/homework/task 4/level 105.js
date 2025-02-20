let people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

let morePeople = [
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
];

let allpeople = people.concat(morePeople);
allpeople.copyWithin(-2,0,1);
allpeople.fill({ id: O, name: 'Unknown' },0,1);
let removedperson = allpeople.pop();
let firstremovedperson = allpeople.shift();
allpeople.unshift({id: 6, name: 'Frank' } , { id: 7, name: 'Grace' });
allpeople.join(",");
let somepeople = allpeople.slice(1,3);
allpeople.splice(2,2,{ id: IO, name: 'Ivan' } , { id: 11, name: 'Judy' });
let nestedArray = [[1,2],[3, 4],[5,6],[7,8]];
nestedArray.flat(4);
allpeople.includes ({ id: 5, name: 'Eve' });
allpeople.lastIndexOf({id: 2, name: 'Bob' });
allpeople.push({id: 8, name: 'Hank'})