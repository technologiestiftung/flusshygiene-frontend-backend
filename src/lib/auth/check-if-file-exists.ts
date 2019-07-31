const fs = require('fs');
export const checkFileExists: (tokenPath: string) => boolean = (tokenPath) => {
  if (fs.existsSync(tokenPath) === true && fs.lstatSync(tokenPath).isDirectory() === false) {
    return true;
  } else {
    return false;
  }
}
