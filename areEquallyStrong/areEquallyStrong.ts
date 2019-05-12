function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))

function areEquallyStrong2(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    if((yourLeft + yourRight) === (friendsLeft + friendsRight)){
        return true;
    } else {
        return false;
    }
}

console.log(areEquallyStrong2(10, 15, 15, 10))
console.log(areEquallyStrong2(15, 10, 15, 10))
console.log(areEquallyStrong2(15, 10, 15, 9))

