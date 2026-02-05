import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count = 5) => {
  const n = Number(count);
  const qty = Number.isFinite(n) && n > 0 ? Math.floor(n) : 1;

  const contacts = await readContacts();
  for (let i = 0; i < qty; i++) {
    contacts.push(createFakeContact());
  }
  await writeContacts(contacts);
  console.log(`Generated ${qty} contact(s). Total: ${contacts.length}`);
};

if (process.argv[1]?.endsWith('generateContacts.js')) {
  await generateContacts(process.argv[2]);
}
