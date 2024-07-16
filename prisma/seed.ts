/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const users = await prisma.user.findMany();
  const userCount = faker.number.int({ min: 30, max: 60 });

  for (let i = 0; i < userCount; i++) {
    users.push(
      await prisma.user.create({
        data: {
          email: faker.internet.email(),
          createdAt: faker.date.past(),
          name: faker.internet.displayName(),
        },
      })
    );
  }

  for (const user of users) {
    const feedbackCount = faker.number.int({ min: 1, max: 5 });

    for (let i = 0; i < feedbackCount; i++) {
      await prisma.feedback.create({
        data: {
          review: faker.number.int({ min: 0, max: 5 }),
          message: faker.lorem.lines({ min: 1, max: 3 }),
          email: user.email,
          userId: user.id,
          createdAt: faker.date.past({ years: 3 }),
        },
      });
    }

    const tripCount = faker.number.int({ min: 5, max: 10 });

    for (let i = 0; i < tripCount; i++) {
      const trip = await prisma.trip.create({
        data: {
          userId: user.id,
          name: faker.lorem.words(3),
          startDate: faker.date.past(),
          endDate: faker.date.future(),
          description: faker.lorem.sentence(),
          image: faker.image.url(),
        },
      });

      const stepCount = faker.number.int({ min: 15, max: 30 });

      for (let j = 0; j < stepCount; j++) {
        await prisma.step.create({
          data: {
            tripId: trip.id,
            rank: j * 1000,
            name: faker.lorem.words(2),
            startDate: faker.date.future(),
            endDate: faker.date.future(),
            description: faker.lorem.sentence(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude(),
          },
        });
      }
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
