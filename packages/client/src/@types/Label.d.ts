declare module "@types" {
  interface Label {
    id: string;
    name: string;
    description: string;
    color: "light" | "dark";
    backgroundColor: string;
    userId: string;
  }

  interface LabelRequest {
    name: string;
    description: string;
    color: "light" | "dark";
    backgroundColor: string;
  }
}
