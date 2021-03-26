function sumAges(firstUserPhrase, SecondUserPhrase, ThirdUserPhrase) {




    const array = firstUserPhrase.split(' ');
    const array2 = SecondUserPhrase.split(' ');
    const array3 = ThirdUserPhrase.split(' ');

    const age = array[array.length -2];
    const age2 = array2[array2.length -2];
    const age3 = array3[array3.length -2];

    return Number(age) + Number(age2) + Number(age3)


}
