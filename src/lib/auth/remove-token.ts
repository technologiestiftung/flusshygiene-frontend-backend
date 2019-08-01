import fs from 'fs';
import util from 'util';
const unlinkAsync = util.promisify(fs.unlink);
export const removeToken: (filePath: string) => Promise<void> = async (filePath) => {
  try {
    await unlinkAsync(filePath);
  } catch (error) {
    throw error;
  }
}
