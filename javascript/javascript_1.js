Date.prototype.daysTo = function (otherDate) {
  // get the difference between the two dates in milliseconds
  const diffInMs = Math.abs(this - otherDate);

  // convert milliseconds to days
  const msInDay = 1000 * 60 * 60 * 24;
  const diffInDays = Math.floor(diffInMs / msInDay);

  return diffInDays;
};

const d1 = new Date('2023-03-13');
const d2 = new Date('2023-03-17');
const daysBetween = d1.daysTo(d2); 
console.log(daysBetween); // 5