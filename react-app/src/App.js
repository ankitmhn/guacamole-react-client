import React, { useEffect } from "react";
import "./App.css";
import Guacamole from "./guacamole";

function App() {
  useEffect(() => {
    var display = document.getElementById("display");

    // Instantiate client, using an HTTP tunnel for communications.
    var guac = new Guacamole.Client(
      new Guacamole.HTTPTunnel(
        "http://remote.imperial.partners:8080/guacamole/tunnel"
      )
    );

    // Add client to display div
    display.appendChild(guac.getDisplay().getElement());

    // Error handler
    guac.onerror = function (error) {
      alert(error);
    };

    // Connect
    guac.connect();

    // Disconnect on close
    window.onunload = function () {
      guac.disconnect();
    };

    // Mouse
    var mouse = new Guacamole.Mouse(guac.getDisplay().getElement());

    mouse.onmousedown = mouse.onmouseup = mouse.onmousemove = function (
      mouseState
    ) {
      guac.sendMouseState(mouseState);
    };

    // Keyboard
    var keyboard = new Guacamole.Keyboard(document);

    keyboard.onkeydown = function (keysym) {
      guac.sendKeyEvent(1, keysym);
    };

    keyboard.onkeyup = function (keysym) {
      guac.sendKeyEvent(0, keysym);
    };
  });
  return (
    <div className="App" id="display">
      <h1>Rendered!</h1>
    </div>
  );
}

export default App;
