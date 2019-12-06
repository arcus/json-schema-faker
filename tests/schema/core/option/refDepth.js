module.exports = {
  register(jsf) {
    return jsf.option({
      useDefaultValue: true,
      alwaysFakeOptionals: true,
      refDepth: 6,
    });
  },
};
