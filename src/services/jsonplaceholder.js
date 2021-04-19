import { getApiUrl } from "./api";

export function getUsers() {
  return fetch(
    getApiUrl(`users`)
  ).then((result) => result.json());
}
