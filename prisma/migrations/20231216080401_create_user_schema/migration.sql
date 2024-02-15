-- CreateTable
CREATE TABLE "delivery_address" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "description" VARCHAR(255) NOT NULL,
    "address" VARCHAR(128) NOT NULL,
    "usr_id" UUID,

    CONSTRAINT "delivery_address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "delivery_method" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "method_name" VARCHAR(64) NOT NULL,
    "price" INTEGER,

    CONSTRAINT "delivery_method_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ordr" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "description" VARCHAR(255),
    "massa" DECIMAL(5,3) NOT NULL,
    "ordr_date" TIMESTAMP(6),
    "ordr_priority" VARCHAR(64) NOT NULL,
    "usr_id" UUID,
    "point_id" UUID,
    "status_id" UUID,
    "delivery_method_id" UUID,
    "delivery_address_id" UUID,
    "dimension" INTEGER,

    CONSTRAINT "ordr_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "point" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "point_name" VARCHAR(64) NOT NULL,
    "address" VARCHAR(128) NOT NULL,

    CONSTRAINT "point_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portin" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "massa" DECIMAL(5,3) NOT NULL,
    "description" VARCHAR(255),
    "ordr_id" UUID,
    "status_portin_id" UUID,
    "dimension" INTEGER,

    CONSTRAINT "portin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portin_product" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "product_id" UUID,
    "portin_id" UUID,
    "quantity_product" INTEGER,

    CONSTRAINT "portin_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portin_warehouse" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "portin_id" UUID,
    "warehouse_id" UUID,
    "date_arrival" TIMESTAMP(6),
    "date_departure" TIMESTAMP(6),
    "delivery_method_id" UUID,

    CONSTRAINT "portin_warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "product_name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "serial_number" UUID DEFAULT gen_random_uuid(),
    "portin_id" UUID,
    "warehouse_id" UUID,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status_ordr" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "status_name" VARCHAR(128) NOT NULL,
    "status_date" TIMESTAMP(6),

    CONSTRAINT "status_ordr_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status_portin" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "status_name" VARCHAR(128) NOT NULL,
    "status_date" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "status_portin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usr" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "first_name" VARCHAR(64) NOT NULL,
    "last_name" VARCHAR(64) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "phone" VARCHAR(32) NOT NULL,
    "role_value" VARCHAR(32) NOT NULL,

    CONSTRAINT "usr_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "warehouse" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "warehouse_name" VARCHAR(64) NOT NULL,
    "address" VARCHAR(128) NOT NULL,

    CONSTRAINT "warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usr_email_key" ON "usr"("email");

-- AddForeignKey
ALTER TABLE "delivery_address" ADD CONSTRAINT "delivery_address_usr_id_fkey" FOREIGN KEY ("usr_id") REFERENCES "usr"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ordr" ADD CONSTRAINT "ordr_delivery_address_id_fkey" FOREIGN KEY ("delivery_address_id") REFERENCES "delivery_address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ordr" ADD CONSTRAINT "ordr_delivery_method_id_fkey" FOREIGN KEY ("delivery_method_id") REFERENCES "delivery_method"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ordr" ADD CONSTRAINT "ordr_point_id_fkey" FOREIGN KEY ("point_id") REFERENCES "point"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ordr" ADD CONSTRAINT "ordr_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "status_ordr"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ordr" ADD CONSTRAINT "ordr_usr_id_fkey" FOREIGN KEY ("usr_id") REFERENCES "usr"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portin" ADD CONSTRAINT "portin_ordr_id_fkey" FOREIGN KEY ("ordr_id") REFERENCES "ordr"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portin" ADD CONSTRAINT "portin_status_portin_id_fkey" FOREIGN KEY ("status_portin_id") REFERENCES "status_portin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portin_product" ADD CONSTRAINT "portin_warehouse_portin_id_fkey" FOREIGN KEY ("portin_id") REFERENCES "portin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portin_product" ADD CONSTRAINT "portin_warehouse_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portin_warehouse" ADD CONSTRAINT "portin_warehouse_delivery_method_id_fkey" FOREIGN KEY ("delivery_method_id") REFERENCES "delivery_method"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portin_warehouse" ADD CONSTRAINT "portin_warehouse_portin_id_fkey" FOREIGN KEY ("portin_id") REFERENCES "portin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portin_warehouse" ADD CONSTRAINT "portin_warehouse_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "warehouse"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_portin_id_fkey" FOREIGN KEY ("portin_id") REFERENCES "portin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "warehouse"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
