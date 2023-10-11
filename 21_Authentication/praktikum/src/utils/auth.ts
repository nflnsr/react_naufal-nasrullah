import Cookie from "js-cookie";
import { v4 as token } from "uuid";

export const auth = {
  isAuthenticated: () => {
    if (Cookie.get("token")) {
      return true;
    }
    return false;
  },
  storeCookie: (email: string, password: string) => {
    let id = Number(Cookie.get("id")) + 1 || 1;
    Cookie.set("id", `${id}`, { expires: 30 }); //expires in 30 days
    Cookie.set(`email_${id}`, email, { expires: 30 });
    Cookie.set(`password_${id}`, password, { expires: 30 });
    Cookie.set(`token`, token(), { expires: 1/72 }); //expires in 20 minutes
  },
  logout: () => {
    Cookie.remove("token");
  },
};
