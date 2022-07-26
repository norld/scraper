import { Response, Request, NextFunction } from 'express';
import { PrismaClient } from 'prisma';

export const getApi = async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  // const posts = await prisma.post.findMany({
  //   where: { published: true },

  //   include: { author: true },
  // });

  // res.json('ok', 200);
  res.send('hello world');
};
