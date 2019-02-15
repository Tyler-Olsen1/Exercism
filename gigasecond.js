// const gs = (new Date(Date.UTC(2015, 8, 14)))
// console.log(gs)
// var f = gs.getTime()
// console.log(f)

// var sumGS = (f + 1000021600000);
// console.log(sumGS)
// const expectedDate = new Date(sumGS)
// console.log(expectedDate)

function gigasecond(){
    const gs = (new Date(Date.UTC(2015, 8, 14)))
    var f = gs.getTime()
    var sumGS = (f + 1000000000);
    const expectedDate = new Date(sumGS)
    return expectedDate
}
console.log(gigasecond(2015, 8, 14))

export {gigasecond}