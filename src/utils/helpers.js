const helpers = {
  throwError: (errorMessage) => {
    console.error(errorMessage);
    return false;
  },
  splitter: (value, separator) => value.slice(0).split(separator),
  formToJSON: target => [...target.elements].filter(el => el.type !== 'submit')
    .reduce((acc, el) => ({
      ...acc,
      [el.name]: el.value,
    }), { formID: target.id }),
};

export default helpers;
