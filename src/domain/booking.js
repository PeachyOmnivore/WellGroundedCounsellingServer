const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const findBookings = async () => await prisma.availableDate.findMany({
  include: {
      timeSlots: true,
  },
});

const bookATimeSlotDB = async (userId, timeSlotId) => await prisma.timeSlot.update({
  where: {
    id: timeSlotId
  },
  data: {
    status: "Unavailable",
    userId,
  }
})

module.exports = {
    findBookings,
    bookATimeSlotDB
}