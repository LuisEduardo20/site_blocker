const fs = require("fs-extra");

fs.copySync("./manifest.json", "dist/site-blocker-app/manifest.json");
