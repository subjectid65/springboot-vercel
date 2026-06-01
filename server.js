const{ createServer }=require('vercel-java');
const app=require('./public/your-spring-boot-app');
module.exports.handler=createServer(app);
