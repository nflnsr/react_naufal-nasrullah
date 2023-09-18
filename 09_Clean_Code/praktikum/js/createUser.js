import {
  User,
  firstName,
  lastName,
  username,
  email,
  address,
  addressTwo,
  selectedGender,
  nationality,
  selectedLanguages,
} from "../index.js";

export const createUser = () => {
  const forms = document.querySelectorAll(".needs-validation");
  let listUser = [];
  let id = Cookies.get("id") || 0;

  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (form.checkValidity()) {
        let newUser = new User(
          firstName.value,
          lastName.value,
          username.value,
          email.value,
          address.value,
          addressTwo.value,
          selectedGender,
          nationality.value,
          selectedLanguages
        );
        listUser.push(newUser);
        id++;
        Cookies.set("id", `${id}`, { expires: 1 });
        listUser.forEach((user) => {
          Object.entries(user).forEach(([key, val] = entry) => {
            Cookies.set(`${key}${id}`, `${val}`, { expires: 1 });
          });
        });

        alert(`
              First Name: ${firstName.value}
              Last Name: ${lastName.value}
              Username: ${username.value}
              Email: ${email.value}
              Address: ${address.value}
              Address 2: ${addressTwo.value}
              Gender: ${selectedGender}
              Nationality: ${nationality.value}
              Language(s): ${selectedLanguages}
              `);
      } else if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        alert("Please fill the form correctly!");
      }
      form.classList.add("was-validated");
    });
  });
};
