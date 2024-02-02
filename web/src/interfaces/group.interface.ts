/**
 * @param id generated from backend
 * @param title name group
 * @param description faculty naming or ...
 * @param responsiblePerson links to the "main ones" in the group
 */
export interface Group {
  id: string;
  title: string;
  description: string;
  responsiblePerson: {
    name: string;
    link: string;
  }[];
}
