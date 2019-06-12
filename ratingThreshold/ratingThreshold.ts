function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    const review: number[] = [];

    for (let i = 0; i < ratings.length; i++) {
        let totalRating = 0;

        ratings[i].forEach((rating: number) => {
            totalRating += rating;
        });

        if (totalRating / ratings[i].length < threshold) {
            review.push(i);
        }
    }

    return review;
}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));

// solution 2

    function ratingThreshold2(threshold: number, ratings: number[][]): number[] {
 
        let allRatings: number[] = [], averages: number[] = [], needsReview: number[] = [];
        let sum: number = 0, numOfReviews: number = 0;
     
        for (let i = 0; i < ratings.length; i++) {
            allRatings.push(...ratings[i], -9999);
        }
        
        for (let i = 0; i < allRatings.length; i++) {
            if (allRatings[i] === -9999) {
                averages.push(sum / numOfReviews);
                sum = 0;
                numOfReviews = 0;
            } else {
                sum += allRatings[i];
                numOfReviews++;
            }
        }
     
        for (let i = 0; i < averages.length; i++) {
            if (averages[i] < threshold) needsReview.push(i);
        }
     
        return needsReview;
    }
     
    console.log(ratingThreshold2(3.5, [[3,4],[3,3,3,4],[4]]));