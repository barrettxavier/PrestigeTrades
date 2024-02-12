/*
  Warnings:

  - Added the required column `callOrPut` to the `Trades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trades" ADD COLUMN     "callOrPut" TEXT NOT NULL;
