export interface Group {
  title: string;
  description: string;
  responsiblePerson: {
    name: string;
    link: string;
  }[];
}
