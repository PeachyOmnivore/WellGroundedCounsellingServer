const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const findUser = async (email) => {
    return await prisma.user.findFirst({
        where: {
            email,
        },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            phone: true,
            email: true,
            password: true,
            timeSlot: {
                include: {
                    availableDate: true,
                },
            },
        },
    });
};

const updateUserDB = async (firstName, lastName, phone, email, password, id) =>
    prisma.user.update({
        where: {
            id,
        },
        data: {
            firstName,
            lastName,
            phone,
            email,
            password,
        },
    });

module.exports = {
    findUser,
    updateUserDB,
};
