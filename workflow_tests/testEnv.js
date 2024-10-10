require('dotenv').config()

let host = process.env.API_HOST;
print("API_HOST: " + host);
expect(host, "https://staging-api.lilt.dev");
