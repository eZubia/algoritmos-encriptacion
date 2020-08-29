const crypto = require('crypto');

function encondeAes(text ,key){
    const aesKey = crypto.createCipher('aes-128-cbc', key);
    let str = aesKey.update(text, 'utf8', 'hex');
    str += aesKey.final('hex');
    return str;
}

function decodeAes(text ,key){
    const aesKey = crypto.createDecipher('aes-128-cbc', key);
    let str = aesKey.update(text, 'hex', 'utf8');
    str += aesKey.final('utf8');
    return str;
}

const key = 'Xx7SpW6dt8MNd3ujAoAjK9UxT5tBbn7G';
let encriptado = encondeAes("Por poco se me olvida :D", key);
console.log(`Texto cifrado: ${encriptado}`)
console.log(`Texto Desifrado: ${decodeAes(encriptado, key)}`)