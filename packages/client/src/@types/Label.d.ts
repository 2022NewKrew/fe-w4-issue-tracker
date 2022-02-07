declare module "@types" {
  interface Label {
    id: string;
    name: string;
    description: string;
    color: "light" | "dark";
    backgroundColor: string;
  }

  interface LabelRequest {
    name: string;
    description: string;
    color: "light" | "dark";
    backgroundColor: string;
  }
}
