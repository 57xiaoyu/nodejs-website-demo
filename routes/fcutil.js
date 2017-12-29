/**
 * Created by 昌华 on 2017/3/24.
 */
//导入模块
var CryptoJS = require('crypto-js');


var aes_key =  'cch@fcassistant~';
// var ivParameter = "1234567890123456";//默认偏移



var aesEncrypt = function (data) {
    var encrypt = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(aes_key), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    encrypt=encrypt.toString().replace("\\r\\n","");
    encrypt=encrypt.toString().replace("\\r","");
    encrypt=encrypt.toString().replace("\\n","");
    console.log("value: " + encrypt);
    return encrypt;
}
var aesDecrypt = function (data) {
    //解密
    var decrypt = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(aes_key), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypt.toString(CryptoJS.enc.Utf8);
}


exports.aesEncrypt = aesEncrypt;
exports.aesDecrypt = aesDecrypt;