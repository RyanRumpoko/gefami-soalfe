const shajs = require("sha.js");
const hashing = "05112024ryanpriaifabula";

const result = shajs("sha256").update(hashing).digest("hex");
console.log(result);
