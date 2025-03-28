const key = parseInt(process.env.CESAR_KEY);

const cipher = {
  encrypt: (text) => {
    return text.split('').map(c => {
      const code = c.charCodeAt(0);
      if (code >= 65 && code <= 90) { // Mayúsculas
        return String.fromCharCode(((code - 65 + key) % 26) + 65);
      } else if (code >= 97 && code <= 122) { // Minúsculas
        return String.fromCharCode(((code - 97 + key) % 26) + 97);
      }
      return c; // No cifra números/símbolos
    }).join('');
  },

  decrypt: (text) => {
    return text.split('').map(c => {
      const code = c.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 - key + 26) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 - key + 26) % 26) + 97);
      }
      return c;
    }).join('');
  }
};

module.exports = cipher;