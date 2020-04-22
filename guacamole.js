const Guacamole = require("guacamole-common-js");

console.log("Connecting to Guacamole...");
var client = new Guacamole.Client(
  new Guacamole.Tunnel("https://remote.imperial.partners:8080/guacamole")
);
// console.log(client);
try {
  fetch("127.0.0.1/api");
} catch (e) {}
document.body.appendChild(client.getDisplay().getElement());
client.connect();
