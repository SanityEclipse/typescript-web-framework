export class User {
  constructor(private data: UserProps) { }

  get(propName: string): (number | string) {
    return this.data[propName];
  }
}

interface UserProps {
  name: string;
  age: number;
}