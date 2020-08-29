const RSA = require('node-rsa');
const key = new RSA({b: 512})

key.generateKeyPair();

const publicDer = key.exportKey('public');
const privateDer = key.exportKey('private');

/**
 * Cifra un texto por medio del algoritmo de RSA
 * @param {String} text texto a cifrar
 * @param {Object} rsa objeto de RSA
 */
function encryptRSA(text, rsa){
    return rsa.encrypt(text, 'base64')
}

/**
 * Decifra un texto por medio del algoritmo de RSA
 * @param {String} text texto a cifrar
 * @param {Object} rsa objeto de RSA
 */
function decryptRSA(text, rsa){
    return rsa.decrypt(text, 'utf8')
}
console.log(`Llave publica: ${publicDer}`)
console.log(`Llave privada: ${privateDer}`)
const texto = "Si termine mi tarea :D";
const textoEncriptado = encryptRSA(texto, key);
console.log(`Texto encriptado: ${textoEncriptado}`)
console.log('================================================')
console.log(`Texto desencriptado: ${decryptRSA(textoEncriptado, key)}`)