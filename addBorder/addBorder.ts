function addBorder(picture: string[]): any {
    const wall = '*'.repeat(picture[0].length + 2);

    picture.unshift(wall);
    picture.push(wall);

    for(let i = 1; i < picture.length - 1; i++){
        picture[i] = '*'.concat(picture[i], '*');
    }

    return wall;
}

function addBorder2(a: string[]): string[]{
    let wall: string = '';
    let arrayWithBorder: string[] = [];

    for (let char of a[0]){
        wall += '*';
    }
    a.forEach((element) => {
        arrayWithBorder.push('*' + element)
    });

    arrayWithBorder.unshift(wall);
    arrayWithBorder.push(wall);
    return arrayWithBorder;
}


console.log(addBorder(["abc", "ded"]));
console.log(addBorder2(["abc", "ded"]));