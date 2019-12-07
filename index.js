class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(str) {
    str = str.split(' ');

    for (let i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }

    return str.join(' ');
  }
}
