const input = document.getElementById("cliInput");
const output = document.getElementById("output");

const commands = {
  "get -user about": "Name: 403TT<br>Website: junctxon.io<br>Discord: @403TT<br>GitHub: github.com/403TT",
  "discord": "<a href='https://discord.com' target='_blank' style='color: #00ff00;'>Discord: 403TT</a>",
  "github": "<a href='https://github.com/403TT' target='_blank' style='color: #00ff00;'>GitHub: 403TT</a>"
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();

    if (cmd === "clear") {
      output.innerHTML = "junctxon CLI. Type a command below:<br>";
    } else {
      output.innerHTML += `<br>$: ${cmd}<br>`;
      if (cmd in commands) {
        output.innerHTML += `${commands[cmd]}<br>`;
      } else {
        output.innerHTML += `You can leave now...<br>`;
      }
    }

    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});

// Focus input when clicking anywhere on the page
document.addEventListener("click", () => {
  input.focus();
});
