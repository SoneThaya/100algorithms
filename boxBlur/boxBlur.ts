function boxBlur(image: number[][]): number[][] {
    const res = [];

    for(let y = 0; y < image.length - 2; y++){
        const line = [];

        for (let x = 0; x < image[y].length - 2; x++){
            let sum = 0;
            let count = 0;

            for(let a = y; a < y + 3; a++){
                for(let b = x; b < x + 3; b++){
                    sum += image[a][b];
                    count++;
                }
            }
            line.push(Math.floor(sum / count));
        }
        res.push(line);
    }
    return res;
}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));

    // solution 2

    function boxBlur2(image: number[][]): number[][] {
        let finalArr =[];
        for(let i=1;i<image.length-1;i++){
           let arr = [];
            for(let j=1;j<image[i].length-1;j++){
                let centerRow = image[i][j] + image[i][j-1] + image[i][j+1];
                let upperRow = image[i-1][j-1] + image[i-1][j] + image[i-1][j+1];
                let lowerRow = image[i+1][j-1] + image[i+1][j] + image[i+1][j+1];
                
                let sum = Math.floor((upperRow + centerRow + lowerRow)/9);
                arr.push(sum);
            }
            finalArr.push(arr);
        }
        
        return finalArr;
    }

    console.log(boxBlur2([[1, 1, 1], 
        [1, 7, 1], 
        [1, 1, 1]]));