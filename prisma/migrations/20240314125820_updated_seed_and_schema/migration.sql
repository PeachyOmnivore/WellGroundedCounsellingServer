/*
  Warnings:

  - You are about to drop the column `userId` on the `AvailableDate` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AvailableDate" DROP CONSTRAINT "AvailableDate_userId_fkey";

-- AlterTable
ALTER TABLE "AvailableDate" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "TimeSlot" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "TimeSlot" ADD CONSTRAINT "TimeSlot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
