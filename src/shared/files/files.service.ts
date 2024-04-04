import { BadRequestException, Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FilesService {
  public filesFolder = 'uploads';

  constructor() {
    const dir = `/app/${this.filesFolder}`;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  }

  public saveFiles(files: Express.Multer.File[]) {
    if (files.length > 5) {
      throw new BadRequestException('Maximum 5 files are allowed');
    }
    const filePromises = files.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const pathName = `/app/uploads/${file.originalname}`;
        fs.writeFile(pathName, file.buffer, (err) => {
          if (err) {
            console.error(err);
            reject(err);
          }
          resolve(pathName);
        });
      });
    });

    return Promise.allSettled(filePromises);
  }
}
