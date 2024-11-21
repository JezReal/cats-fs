-- CreateTable
CREATE TABLE "Cat" (
    "id" SERIAL NOT NULL,
    "catName" VARCHAR(255) NOT NULL,
    "catImage" VARCHAR(255) NOT NULL,
    "catDescription" VARCHAR(255) NOT NULL,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);
