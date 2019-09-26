function deepCopy(obj) {
  var newObj = obj instanceof Array ? []:{};
  if(typeof obj !== "object"){
      return obj;
  } else {
      for(let i in obj){
          if(typeof obj[i] === 'object'){
              newObj[i] = deepCopy(obj[i]);
          } else {
              newObj[i] = obj[i];
          }
      }
  } 
  return newObj;
}

var obj = {arr:[1,2],name:'bty'};
var obj2 = deepCopy(obj);
console.log(obj2)