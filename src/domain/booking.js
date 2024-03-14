const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const findBookings = async () => await prisma.availableDate.findMany({
  include: {
      timeSlots: true,
  },
});

module.exports = {
    findBookings
}