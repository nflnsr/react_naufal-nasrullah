import { readUser } from "./js/readUser.js";
import { createUser } from "./js/createUser.js";
import { deleteUser } from "./js/deleteUser.js";

export class User {
  constructor(
    firstName,
    lastName,
    username,
    email,
    address,
    addressTwo,
    gender,
    nationality,
    language
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.address = address;
    this.addressTwo = addressTwo;
    this.gender = gender;
    this.nationality = nationality;
    this.language = language;
  }
}

export const firstName = document.getElementById("first-name");
export const lastName = document.getElementById("last-name");
export const username = document.getElementById("username");
export const email = document.getElementById("email");
export const address = document.getElementById("address");
export const addressTwo = document.getElementById("address-two");
export const genders = document.querySelectorAll("input[name='gender']");
export let selectedGender = "";
export const nationality = document.getElementById("nationality");
export const languages = document.querySelectorAll("input[name='language']");
export let selectedLanguages;

genders.forEach((gender) => {
  gender.addEventListener("change", () => {
    selectedGender = document.querySelector(
      "input[name='gender']:checked"
    ).value;
  });
});

languages.forEach((language) => {
  language.addEventListener("change", () => {
    selectedLanguages = [];
    languages.forEach((language) => {
      if (language.checked) {
        selectedLanguages.push(language.value);
      }
    });
  });
});

readUser();
createUser();
deleteUser();