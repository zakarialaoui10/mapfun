import { mapfun } from "./src/index.js";
const callback = Math.cos
let res = mapfun(callback, {}, 1,{a:1})
console.log(res)