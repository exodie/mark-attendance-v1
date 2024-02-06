/**
 * @param login login user
 * @param password hash password user
 * @param name Fullname or just name
 * @param link Social network link
 * @param group Group with user
 */
export interface User {
  login: string;
  password: string;
  name: string;
  link: string;
  group: string;
}
