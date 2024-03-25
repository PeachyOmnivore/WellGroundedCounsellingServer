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
});

const availableDateDB = async (id) => await prisma.availableDate.findFirst({
  where: {
    id,
  }
})

const cancelTimeSlotDB = async (timeSlotId) => await prisma.timeSlot.update({
  where: {
    id: timeSlotId
  },
  data: {
    userId: null,
    status: "Available"
  }
})

const deleteTimeSlotDB = async (timeSlotId) => await prisma.timeSlot.delete({
  where: {
    id: timeSlotId
  }
})

module.exports = {
    findBookings,
    bookATimeSlotDB,
    availableDateDB,
    cancelTimeSlotDB,
    deleteTimeSlotDB
}