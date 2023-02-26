const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const NFTPath = path.resolve(__dirname, 'contracts', 'Greet.sol');
const source = fs.readFileSync(NFTPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'Greet.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
    remappings: [
      "@openzeppelin/contracts/access/=./node_modules/@openzeppelin/contracts/access/",
      "@openzeppelin/contracts/token/ERC721/=./node_modules/@openzeppelin/contracts/token/ERC721/"
    ],
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
fs.ensureDirSync(buildPath);
console.log(output);
fs.outputJsonSync(
    path.resolve(buildPath, 'Greet.json'),
    output.contracts['Greet.sol']['Greet']
);
