-- AlterTable
ALTER TABLE "JournalEntries" ADD COLUMN     "trade_id" INTEGER;

-- AddForeignKey
ALTER TABLE "JournalEntries" ADD CONSTRAINT "JournalEntries_trade_id_fkey" FOREIGN KEY ("trade_id") REFERENCES "Trades"("id") ON DELETE SET NULL ON UPDATE CASCADE;
