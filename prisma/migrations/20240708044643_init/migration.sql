/*
  Warnings:

  - You are about to alter the column `p_quantity` on the `tbl_product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `Int`.
  - You are about to alter the column `p_price` on the `tbl_product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `Int`.

*/
-- AlterTable
ALTER TABLE `tbl_product` MODIFY `p_quantity` INTEGER NULL,
    MODIFY `p_price` INTEGER NULL,
    MODIFY `p_image` VARCHAR(255) NULL;
