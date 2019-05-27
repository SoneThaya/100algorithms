function domainType(domains: string[]): string[] {
    const domainType: string[] = [];

    for (let i = 0; i < domains.length; i++) {
        const domain = domains[i].split('.');
        const lastDomain = domain[domain.length - 1];

        if (lastDomain === 'org') {
            domainType.push('orgainzation')
        } else if (lastDomain === 'com') {
            domainType.push('commercial') 
        } else if (lastDomain === 'net') {
            domainType.push('network')
        } else if (lastDomain === 'info') {
            domainType.push('information')
        }
    }

    return domainType;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));

// solution 2

function domainType2(arr: string[]) {
 
    let domainArray: string[] = [], domains = { 'org': 'organization', 'com': 'commercial', 'net': 'network', 'info': 'information'};
 
    for (let i = 0; i < arr.length; i++) {
        let domain = arr[i].split('.');
        domainArray.push(domains[domain[domain.length - 1]]);
    }
    return domainArray;
}
 
console.log(domainType2(["en.wiki.org", "www.codefights.com", "happy.net", "code.info"]));
console.log(domainType2(["en.wiki.org", "www.codefights.org", "happy.org", "code.org"]));
console.log(domainType2(["en.wiki.info", "www.codefights.info", "happy.net", "code.com"]));