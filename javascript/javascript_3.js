const src = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32
    }
  },
  prop12: 12
};

const proto = {
  prop11: {
    prop22: null
  }
};

function projectObject(src, proto) {
  const res = {};
  //go through all the properties of the prototype
  for (let prop in proto) {
    //if the property is an object, then recursively call the function for it
    if (typeof proto[prop] === 'object' && proto[prop] !== null 
        && typeof src[prop] === 'object' && src[prop] !== null) {
      res[prop] = projectObject(src[prop],proto[prop]);
    //if the property is a primitive, then copy the value from the source
    } else if (src.hasOwnProperty(prop)) {
      res[prop] = src[prop];
    }
  }
  return res;
}

console.log(projectObject(src, proto));