-- CreateTable
CREATE TABLE "character" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "experience" INTEGER NOT NULL,
    "alignment" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "hit_points" JSONB NOT NULL,
    "death_saves" JSONB NOT NULL,
    "inspiration" BOOLEAN NOT NULL,
    "proficiency" INTEGER NOT NULL,
    "armor_class" INTEGER NOT NULL,
    "initiative" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "passive_perception" INTEGER NOT NULL,
    "attributes" JSONB NOT NULL,
    "skills" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "character_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "character" ADD CONSTRAINT "character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
