/*
  Warnings:

  - You are about to drop the column `address` on the `delivery_address` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `point` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `warehouse` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "delivery_address" DROP COLUMN "address",
ADD COLUMN     "city" VARCHAR(128),
ADD COLUMN     "street" VARCHAR(128);

-- AlterTable
ALTER TABLE "point" DROP COLUMN "address",
ADD COLUMN     "city" VARCHAR(128),
ADD COLUMN     "street" VARCHAR(128);

-- AlterTable
ALTER TABLE "warehouse" DROP COLUMN "address",
ADD COLUMN     "city" VARCHAR(128),
ADD COLUMN     "street" VARCHAR(128);
