/* Encryption code beigns here */
// Format conversion

function normalise_to_ascii(input) {
  return unescape(encodeURIComponent(input));
}
function normalise_to_unicode(input) {
  return decodeURIComponent(escape(input));
}
//Encoding and decoding from and to base 64
var Base64 = {
  // private property
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  // public method for encoding
  encode: function(input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = Base64._utf8_encode(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output =
        output +
        Base64._keyStr.charAt(enc1) +
        Base64._keyStr.charAt(enc2) +
        Base64._keyStr.charAt(enc3) +
        Base64._keyStr.charAt(enc4);
    }
    return output;
  },
  // public method for decoding
  decode: function(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    // eslint-disable-next-line
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
      enc1 = Base64._keyStr.indexOf(input.charAt(i++));
      enc2 = Base64._keyStr.indexOf(input.charAt(i++));
      enc3 = Base64._keyStr.indexOf(input.charAt(i++));
      enc4 = Base64._keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      // eslint-disable-next-line
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      // eslint-disable-next-line
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = Base64._utf8_decode(output);
    return output;
  },
  // private method for UTF-8 encoding
  _utf8_encode: function(str) {
    str = str.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < str.length; n++) {
      var c = str.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  },
  // private method for UTF-8 decoding
  _utf8_decode: function(utftext) {
    var string = "";
    var i = 0;
    var c = 0;

    var c2 = 0;
    var c3 = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(
          ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
        );
        i += 3;
      }
    }
    return string;
  }
};
// Hashing the key(string) into a 32-bit integer
function hashCode(input) {
  var hash = 0,
    i,
    chr;
  if (input.length === 0) return hash;
  for (i = 0; i < input.length; i++) {
    chr = input.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}
// The main encryption method which takes an optional numeric key
// This encryption is symmetric so passing the encrypted string into the method again with the same encryption key will decrypt it
function crypt_symmetric(input, key) {
  var me = input; //unlink reference
  key = Number(String(Number(key))) === key ? Number(key) % 128 : 13; //optionaly provide key for symmetric-like-""encryption"".
  var newMe;
  newMe = me
    .split("") //to array of characters.
    .map(function(c) {
      return c.charCodeAt(0);
    }) //to array of numbers (each is character's ASCII value)
    .map(function(i) {
      return i ^ key;
    }); //XOR ""ENCRYPTION""
  me = String.fromCharCode.apply(undefined, newMe); //one-liner trick: array-of-numbers to array-of-characters (ASCII value), join to single string. may result in buffer-overflow on long string!
  return me;
}
/* The exported encryption function */
function symEncrypt(myString, myKey) {
  return Base64.encode(
    crypt_symmetric(normalise_to_ascii(myString), hashCode(myKey))
  );
}
exports.symEncrypt = symEncrypt;
/* The exported decryption function */
function symDecrypt(encrypted, myKey) {
  return crypt_symmetric(
    normalise_to_unicode(Base64.decode(encrypted)),
    hashCode(myKey)
  );
}
exports.symDecrypt = symDecrypt;
