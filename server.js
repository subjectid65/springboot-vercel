const { createServer } = require('vercel-java');
const app = require('./public/root.war');
module.exports.handler = createServer(app);
