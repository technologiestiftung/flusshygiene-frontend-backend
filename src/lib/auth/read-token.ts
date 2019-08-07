import fs from 'fs';
import util from 'util';
const readFileAsync = util.promisify(fs.readFile);
export const readToken: (filePath: string) => Promise<string> = async (
  filePath,
) => {
  try {
    const fileContent = await readFileAsync(filePath, 'utf8');
    return fileContent;
  } catch (error) {
    return error;
  }
};
