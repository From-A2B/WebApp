/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const users = await prisma.user.findMany();

  for (const user of users) {
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

      const stepCount = faker.number.int({ min: 20, max: 30 });

      for (let j = 0; j < stepCount; j++) {
        await prisma.step.create({
          data: {
            tripId: trip.id,
            order: j + 1,
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
