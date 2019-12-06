module.exports = {
  register(jsf) {
    return jsf.option({
      refDepth: 6,
      minItems: 1,
      maxItems: 1,
      alwaysFakeOptionals: true,
    });
  },
};
