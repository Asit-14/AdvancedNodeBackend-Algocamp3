const onearray = [1, 2, 3, 4]
const twoarray = [5, 6, 7, 8, 9]

// const threearray = onearray.concat(twoarray);

// const threearray = [onearray , twoarray]

const threearray = [...onearray,...twoarray]
console.log(threearray);