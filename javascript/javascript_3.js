function projectObject(src, proto) {
  const res = {};

  for (const prop in proto) {
    if (src.hasOwnProperty(prop)) {
      if (typeof proto[prop] === 'object' && proto[prop] !== null) {
        if (typeof src[prop] === 'object' && src[prop] !== null) {
          const projectedObj = projectObject(src[prop], proto[prop]);
          if (Object.keys(projectedObj).length > 0) {
            res[prop] = projectedObj;
          } else if (Object.keys(proto[prop]).length === 0) {
            res[prop] = src[prop];
          }
        }
      } else {
        res[prop] = src[prop];
      }
    }
  }

  return res;
}

const src = {
  prop22: null,
  prop33: {
      prop331: 1,
      prop332: 2
  },
  prop11: {
      prop111: "value",
      prop112: {
          prop112: null
      }
  }
};

const proto = {
  prop11:
      {
        prop22: null,
        prop111: {
          prop111: null
        },
        prop112: null
      },
  prop33: {},
  prop22: 2
};

// const res = {
//   prop11: {
//      prop112: {
//         prop112: null
//      }
//   },
//   prop33: {
//      prop331: 1,
//      prop332: 2
//   },
//   prop22: null
// }


console.log(projectObject(src, proto));
