import { HostelWorldListResponse } from '@types/type-list';
import { PrismaClient } from 'prisma';
import fs from 'fs';

const path = './output';
const jsonsInDir = fs.readdirSync(path);
const prisma = new PrismaClient();
const process = async () => {
  const result: any = [];
  for (let file of jsonsInDir) {
    let dir = `${path}/${file}`;
    let readFile = fs.readFileSync(dir, 'utf8');
    if (readFile) {
      let list: HostelWorldListResponse = JSON.parse(readFile);
      for (let hostel of list.properties) {
        // result.push({
        //   name: hostel.name,
        //   location: list.locationEn.city,
        // });
        prisma.post.create({
          name: hostel.name,
          location: list.locationEn.city,
        });
      }
    }
    fs.writeFileSync('result.json', JSON.stringify(result));
    // return;
  }
};

process();
