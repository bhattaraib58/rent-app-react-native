const CustomRegex = {
  all: /[^]*/,
  // eslint-disable-next-line  no-useless-escape
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  nameWithSpaceInBetween: /^(?![\s.]+$)[a-zA-Z\s.]*$/
};

export default CustomRegex;
