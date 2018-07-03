const fs = require('fs');

const filesToVersion = [
    './manifest.json'
];

const packageJsonContents = fs.readFileSync('./package.json').toString('utf8');
const packageJsonParsed = JSON.parse(packageJsonContents);

const semVerRegex = () => /\bv?(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[\da-z-]+(?:\.[\da-z-]+)*)?(?:\+[\da-z-]+(?:\.[\da-z-]+)*)?\b/ig;

filesToVersion.forEach((path) => {
    const file = fs.readFileSync(path);
    const fileContents = file.toString('utf8');
    const replacedContents = fileContents.replace(semVerRegex(), packageJsonParsed.version);

    fs.writeFileSync(path, replacedContents);
});

