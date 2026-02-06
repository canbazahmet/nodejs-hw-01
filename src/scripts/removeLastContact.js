import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    console.log('No contacts to remove.');
    return;
  }
  const removed = contacts.pop();
  await writeContacts(contacts);
  console.log('Removed last contact:', removed.id);
};

if (process.argv[1]?.endsWith('removeLastContact.js')) {
  await removeLastContact();
}
