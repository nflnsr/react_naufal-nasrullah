export const deleteUser = () => {
  const deleteUserBtn = document.getElementById("deleteUserBtn");
  let id = Cookies.get("id") || 0;

  deleteUserBtn.addEventListener("click", () => {
    if (id == 0) {
      alert("No user to delete!");
    } else {
      Object.keys(Cookies.get()).forEach((key) => {
        if (key.includes(`${id}`)) {
          Cookies.remove(`${key}`);
        }
      });
      Cookies.set("id", `${id - 1}`, { expires: 1 });
      location.reload();
    }
  });
};