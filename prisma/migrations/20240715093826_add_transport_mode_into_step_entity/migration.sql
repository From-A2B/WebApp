-- CreateEnum
CREATE TYPE "TransportMode" AS ENUM ('Walk', 'Bike', 'Car', 'Boat', 'Plane');

-- AlterTable
ALTER TABLE "Step" ADD COLUMN     "transportMode" "TransportMode" NOT NULL DEFAULT 'Car';
