const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const seachInput = document.querySelector("[data-searcb]");

seachInput.addEventListener("inout", (e) => {
  const value = e.target.value;
  console.log(value);
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const card = userCardTemplate.textContent.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name; //kanski ekki name
      body.textContent = user.email; //kanski ekki email
      userCardContainer.append(card);
    });
  });
