const { exec } = require("node:child_process")

exec("docker build -t js_app . -f js.Dockerfile", (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Done building js_app image");
});