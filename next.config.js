const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
