const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
