const str = `
010-1234-5678
abcdef@gmail.com
https://www.ABCD.efg
aaabbbccccddd.
`;

console.log(str.match(/(?<=@).{1,}/g))