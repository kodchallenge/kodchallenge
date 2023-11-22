const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const COMPILER_DOCKER_IMAGES_PATH = path.join(__dirname, '..', 'dockerfiles', 'compilers');

const compilers = fs.readdirSync(COMPILER_DOCKER_IMAGES_PATH);

console.log(compilers)

compilers.forEach((compiler) => {
    try {

        if (!compiler.includes('Dockerfile')) return;
        const compilerDockerfilePath = path.join(COMPILER_DOCKER_IMAGES_PATH, compiler);
        const compilerDockerImageName = `${compiler.split('.')[0]}_app`; // _app using the kodchallenge packages :(

        exec(`docker build -t ${compilerDockerImageName} -f ${compilerDockerfilePath} .`, (error, stdout, stderr) => {
            if (error) {
                console.error(`\x1b[31mError building docker image for ${compiler}: ${error}\x1b[0m`);
                return;
            }

            console.log(`\x1b[32mSuccess building docker image for ${compiler}\x1b[0m`);
        });
    } catch(err) {
        console.error(`\x1b[31mError building docker image for ${compiler}: ${err}\x1b[0m`);
    }
});