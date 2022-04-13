Array.prototype.randomElem = function () {
  return this[random(0, this.length - 1)];
};

Array.prototype.sampleUnique = function (n) {
  const uniqueElements = [...new Set(this)];
  n = n > this.length ? this.length : n;
  let results = [];
  for (let i = 0; i < n; i++) {
    const sample = uniqueElements
      .filter((el) => results.indexOf(el) < 0)
      .randomElem();
    results.push(sample);
  }
  return results;
};
