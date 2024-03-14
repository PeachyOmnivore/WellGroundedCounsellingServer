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
            password: true
        },
    });
};

module.exports = {
    findUser
}
