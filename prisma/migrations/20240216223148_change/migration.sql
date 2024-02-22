/*
  Warnings:

  - You are about to drop the column `trade_id` on the `JournalEntries` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `JournalEntries` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Trades` table. All the data in the column will be lost.
  - Added the required column `userId` to the `JournalEntries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Trades` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "JournalEntries" DROP CONSTRAINT "JournalEntries_trade_id_fkey";

-- DropForeignKey
ALTER TABLE "JournalEntries" DROP CONSTRAINT "JournalEntries_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Trades" DROP CONSTRAINT "Trades_user_id_fkey";

-- AlterTable
ALTER TABLE "JournalEntries" DROP COLUMN "trade_id",
DROP COLUMN "user_id",
ADD COLUMN     "tradeId" INTEGER,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Trades" DROP COLUMN "user_id",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Trades" ADD CONSTRAINT "Trades_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JournalEntries" ADD CONSTRAINT "JournalEntries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JournalEntries" ADD CONSTRAINT "JournalEntries_tradeId_fkey" FOREIGN KEY ("tradeId") REFERENCES "Trades"("id") ON DELETE SET NULL ON UPDATE CASCADE;
