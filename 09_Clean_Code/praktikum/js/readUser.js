export const readUser = () => {
  let allCookies = Cookies.get();
  delete allCookies.id;
  let users = [];

  for (let i = 0; i < Object.keys(allCookies).length / 9; i++) {
    const user = [];
    for (let j = i * 9; j < (i + 1) * 9; j++) {
      user.push(Object.values(allCookies)[j]);
    }
    users.push(user);
  }

  new gridjs.Grid({
    search: true,
    sort: true,
    pagination: {
      limit: 3,
    },
    columns: [
      "First Name",
      "Last Name",
      "Username",
      "Email",
      "Gender",
      "Address",
      "Address 2",
      "Nationality",
      "Language",
    ],
    data: users,
  }).render(document.getElementById("table-gridjs"));
};
