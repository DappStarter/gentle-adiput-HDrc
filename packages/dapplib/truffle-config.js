require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan radar museum come install pave army giggle'; 
let testAccounts = [
"0x448b09f53a21235aa7c6f2974937bae3f3468d078ea6bf1238d961c9ddee6629",
"0xee47b67c65a10d150cec992eb79d60977e7d01c8dea99b994e40bbfa4b3aed6d",
"0x7fe81aec9e0c0c664c4487c9fb2fabe111f0c0954cc296b444c57ae725678f26",
"0xa95c857b00b9ed9e4f526c95f23f4dfd07d2b417b54969c02f1198d89ad74f50",
"0x71dc84e14f37fddad9e92abc5e40e65c55d43bfc6355f445ef0ce4e8f4134c9e",
"0x6a0a85e49857297abe5ea0820a9d346040d4550f9b18f56861e57f978b057d21",
"0xea82e7c5a0b4e4c0876a5abe11b1eb59cd3edf8e844b59394b8a64056872cf56",
"0xb8c317026dad32721138bc2a494aa65aa9595acbc1de27e7adc86a0d6f23875d",
"0xe90b1e693d3915716d69b65994706dc947e6c020f427eaa596c199880c4ae158",
"0x422423d25d9fdd38d97197c08841aba4368c8ebd13f1a23a527633e6ba2fd315"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

