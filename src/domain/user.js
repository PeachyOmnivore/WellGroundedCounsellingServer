const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const findUser = async (email) => {
    return await prisma.user.findFirst({
        where: {
            email,
        },
        select: {
            email: true,
            password: true,
        },
    });
};

module.exports = {
    findUser
}
