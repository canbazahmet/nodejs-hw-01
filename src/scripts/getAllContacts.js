import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  return contacts;
};

const isDirectRun =
  process.argv[1] &&
  /getallcontacts(\.js)?$/i.test(process.argv[1].replace(/\\/g, '/'));

if (isDirectRun) {
  const all = await getAllContacts();
  console.table(all);
}
