require('dotenv').config()

let host = process.env.API_HOST;
console.log("API_HOST: " + host);
expect(host, "https://staging-api.lilt.dev");
