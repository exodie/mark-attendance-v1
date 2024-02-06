/**
 * @param id generated from backend
 * @param title name group
 * @param description faculty naming or ...
 * @param responsiblePerson links to the "main ones" in the group
 */
export interface Group {
  course: number;
  title: string;
  description: string;
  responsiblePerson: ResponsiblePersonOfGroup[];
}

export type ResponsiblePersonOfGroup = {
  name: string;
  link: string;
};
