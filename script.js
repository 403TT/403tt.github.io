const input = document.getElementById("cliInput");
const output = document.getElementById("output");

const commands = {
  "get -user about": "Name: 403TT\nWebsite: junctxon.io\nDiscord: @403TT\nGitHub: github.com/403TT",
  "discord": "<a href='https://discord.com' target='_blank' style='color: #00ff00;'>Discord: 403TT</a>",
  "github": "<a href='https://github.com/403TT' target='_blank' style='color: #00ff00;'>GitHub:403TT</a>"
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();

    if (cmd === "clear") {
      output.textContent = "junctxon CLI. Type a command below:\n";
    } else {
      output.textContent += `\n$: ${cmd}\n`;
      if (cmd in commands) {
        output.textContent += `${commands[cmd]}\n`;
      } else {
        output.textContent += `You can leave now...\n`;
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