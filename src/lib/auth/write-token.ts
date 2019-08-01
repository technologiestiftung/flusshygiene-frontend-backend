
import fs from 'fs';
import util from 'util';
const writeFileAsync = util.promisify(fs.writeFile);

export const writeToken: (filePath: string, data: string) => Promise<void> = async (filePath, data) => {
  try {
    await writeFileAsync(filePath, data);
  } catch (error) {
    return error;
  }
};

