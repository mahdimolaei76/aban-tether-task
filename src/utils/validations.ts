export const validateUsername = (str: string) => {
  const regex = /^(\+98|0)?9\d{9}$/;
  if (!str.match(regex) || str === "") return false;
  return true;
};
export const validateEmail = (str: string) => {
  const result = str
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (!result || str.length < 6 || str.length > 26) return false;
  return true;
};

export const validatePassword = (str: string) => {
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
  if (!str.match(regex) || str === "") return false;
  return true;
};
