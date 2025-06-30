let pattern = 'as'

let regExOne = new RegExp(pattern)


let flag = "gi";
let regExTwo = new RegExp(pattern, flag)



let regExThree = /as/gi

const strToCheck = "hi they are  what  are  you  doing  ans my name is  asit  kuar "

const res = regExThree.test(strToCheck)
console.log(res);

const anotherres = strToCheck.match(regExThree)
console.log(anotherres);


const onemorepatter = strToCheck.replace(regExThree, 'the')
console.log(onemorepatter)


const weburl = "https://asitkumar.com/%20shakya"
const useableurl = weburl.replace(/%\d0/, '-')
console.log(useableurl);
