/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const users = await prisma.user.findMany();
  const userCount = faker.number.int({ min: 30, max: 60 })


  for (let i = 0; i < userCount; i++) {
    users.push(
      await prisma.user.create({
        data: {
          email: faker.internet.email(),
          createdAt: faker.date.past(),
          name: faker.internet.displayName()
        },
      }),
    );
  }




  for (const user of users) {
    const feedbackCount = faker.number.int({ min: 1, max: 5 })
    
    for (let i = 0; i < feedbackCount; i++) {
      
      await prisma.feedback.create({
        data: {
          review: faker.number.int({ min: 0, max: 5 }),
          message: faker.lorem.lines({ min: 1, max: 3 }),
          email: user.email,
          userId: user.id,
          createdAt: faker.date.past({years: 3})
        }
      })

    }
    
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    // eslint-disable-next-line no-console
    console.error(error);

    await prisma.$disconnect();

    process.exit(1);
  });
