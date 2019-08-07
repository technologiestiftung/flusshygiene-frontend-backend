import { config } from 'dotenv';
import { resolve } from 'path';
const res = config({ path: resolve(__dirname, '../../.env') });
console.log(res);

import { auth } from '../lib/auth';

// process.exit();
// This file is only ment to be run on somes setup occasion
// it should get you a new token
const main = async () => {
  try {
    const token = await auth();
    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

main()
  .then((token) => {
    console.log(token);
  })
  .catch((err) => {
    console.error(err);
  });
