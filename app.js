const express = require('express');
const app = express();
const port = 3000;

const team = [
  { name: "PrasadBhai", role: "Manager", status: "Online" },
  { name: "Bob", role: "Developer", status: "Offline" }
];

app.get('/', (req, res) => {
  res.send(`<h1>Team Dashboard</h1>
    <ul>
      ${team.map(member => `<li>${member.name} - ${member.role} (${member.status})</li>`).join('')}
    </ul>`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
