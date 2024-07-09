-- CreateTable
CREATE TABLE `product_login` (
    `lo_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `email` VARCHAR(45) NULL,
    `password` VARCHAR(45) NULL,

    PRIMARY KEY (`lo_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_product` (
    `p_id` INTEGER NOT NULL AUTO_INCREMENT,
    `p_product_name` VARCHAR(45) NULL,
    `p_quantity` VARCHAR(45) NULL,
    `p_price` VARCHAR(45) NULL,
    `p_image` VARCHAR(45) NULL,

    PRIMARY KEY (`p_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
