export default class Validator {
  validateUsername(username) {
    const regex = /^(?![\d_-])[a-z\d][a-z\d_-]{0,31}(?<![\d_-])$/i;

    return regex.test(username);
  }
}
