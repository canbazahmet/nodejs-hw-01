import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  await writeContacts([]);
  console.log('All contacts removed.');
};

if (process.argv[1]?.endsWith('removeAllContacts.js')) {
  await removeAllContacts();
}
