require('dotenv').config();

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD.
      define(['expect.js', process.cwd()+'/src/index'], factory);
    } else if (typeof module === 'object' && module.exports) {
      // CommonJS-like environments that support module.exports, like Node.
      factory(require('expect.js'), require(process.cwd()+'/src/index'));
    } else {
      // Browser globals (root is window)
      factory(root.expect, root.LiltNode);
    }
}(this, function(expect, LiltNode) {
    let host = process.env.API_HOST;
    console.log("API_HOST: " + host);
    expect(host, "https://staging-api.lilt.dev");
}));
