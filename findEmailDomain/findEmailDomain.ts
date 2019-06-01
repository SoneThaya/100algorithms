function findEmailDomain(address: string): string {
    const lastAtIndex = address.lastIndexOf('@');

    return address.slice(lastAtIndex + 1, address.length);
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));

// solution 2

function findEmailDomain2(email: string): string {
 
    return email.slice(email.lastIndexOf('@') + 1);
 
}
 
console.log(findEmailDomain2('prettyandsimple@example.com'));
console.log(findEmailDomain2('<>[];@!#%$&*+=;?^_{}||\/.@example.org'));
