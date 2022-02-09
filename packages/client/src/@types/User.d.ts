declare module "@types" {
  interface UserJSON {
    id: string;
    pw: string;
    name: string;
  }

  interface User {
    id: string;
    name: string;
  }

  interface UserLogin {
    id: string;
    pw: string;
  }
}
