import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const registerDB = async (firstName, lastName, phone, email, hash) =>
    await prisma.user.create({
        data: {
            firstName,
            lastName,
            phone,
            email,
            password: hash,
        },
    });

module.exports = {
    registerDB
}
