-- CreateTable
CREATE TABLE "SecondUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "SecondUser_pkey" PRIMARY KEY ("id")
);
