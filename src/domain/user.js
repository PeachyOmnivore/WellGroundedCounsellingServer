const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const findUser = async (email) =>
   await prisma.user.findUnique({
    where: email,
   })

module.exports = {
    registerDB
}
