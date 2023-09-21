`<!-- List Item Template -->
<li class="list-group-item d-flex justify-content-between" data-index="<!-- Replace with client's index -->">
  <!-- Replace with client's name -->
  <strong>$ <!-- Replace with client's balance--></strong>
</li>`;

function list(clients) {
  let clientStrings = clients.map(
    (client) => `
    <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
      ${client.name}
      <strong>${client.balance}</strong>
    </li>
  `
  );

  return clientStrings.join(""); // Join the array into a single string
}

function order(clients, property) {
  return clients.sort((a, b) => {
    if (a[property] > b[property]) {
      return 1;
    } else if (a[property] < b[property]) {
      return -1;
    } else {
      return 0;
    }
  });
}

function total(clients) {
  return clients.reduce((sum, client) => sum + client.balance, 0);
}

function info(clients, index) {
  console.log(clients);
  return clients.find((client) => client.index === index);
}

function search(string) {
  return clients.filter((client) =>
    client.name.toLowerCase().includes(string.toLowerCase())
  );
}
