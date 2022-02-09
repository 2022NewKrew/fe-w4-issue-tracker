declare module "@types" {
  interface Label extends LabelForm {
    id: string;
  }

  interface LabelForm {
    name: string;
    description: string;
    textColor: "light" | "dark";
    backgroundColor: string;
  }
}
