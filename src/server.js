const http = require("http");

const app = require("./app");

const server = http.createServer(app);

server.listen(app.get("port"), () => {
  console.log(`Server running on port${app.get("port")}`);
});
