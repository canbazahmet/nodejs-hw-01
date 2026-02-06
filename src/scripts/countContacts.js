import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  return contacts.length;
};

if (process.argv[1]?.endsWith('countContacts.js')) {
  const count = await countContacts();
  console.log('Contacts count:', count);
}
