const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
    const users = await prisma.user.createMany({
        data: [
            {
                email: "fiona@wellgroundedcounselling.com",
                password: "$2b$12$Y4uZRrmsk.TYvzMn.zpFLenQuKtj5S2bt.h5m3cSEbdgjIv06LiNC",
                role: "ADMIN",
                firstName: "Fiona",
                lastName: "Hutchison",
                phone: "999999999",
            },
            {
                email: "Lad_777@hotmail.com",
                password: "$2b$12$RsDfBYUhaZw9xXKVGieiiehsJt6Fhggc8qaZcyGh.pCapN7K7BO2G",
                firstName: "Lukas",
                lastName: "Dembicki",
                phone: "999999999",
            },
        ],
    });

    console.log("Created 1 Admin User, 1 Client User", users);

    const availableDatesData = await prisma.availableDate.createMany({
        data: [
            { month: "March", day: 1 },
            { month: "March", day: 2 },
            { month: "March", day: 3 },
            { month: "March", day: 4 },
            { month: "April", day: 1 },
            { month: "April", day: 2 },
            { month: "April", day: 3 },
            { month: "April", day: 4 },
        ],
    });

    console.log("created Date Data:", availableDatesData);

    const timeSlotsData = await prisma.timeSlot.createMany({
        data: [
            { time: "10:00", status: "Available", availableDateId: 1 },
            { time: "12:00", status: "Available", availableDateId: 1 },
            { time: "14:00", status: "Available", availableDateId: 1 },
            { time: "16:00", status: "Available", availableDateId: 1 },
            { time: "10:00", status: "Available", availableDateId: 2 },
            { time: "12:00", status: "Available", availableDateId: 2 },
            { time: "14:00", status: "Available", availableDateId: 2 },
            { time: "16:00", status: "Available", availableDateId: 2 },
            { time: "10:00", status: "Available", availableDateId: 3 },
            { time: "12:00", status: "Available", availableDateId: 3 },
            { time: "14:00", status: "Available", availableDateId: 3 },
            { time: "16:00", status: "Available", availableDateId: 3 },
            { time: "10:00", status: "Available", availableDateId: 4 },
            { time: "12:00", status: "Available", availableDateId: 4 },
            { time: "14:00", status: "Available", availableDateId: 4 },
            { time: "16:00", status: "Available", availableDateId: 4 },
            { time: "10:00", status: "Available", availableDateId: 5 },
            { time: "12:00", status: "Available", availableDateId: 5 },
            { time: "14:00", status: "Available", availableDateId: 5 },
            { time: "16:00", status: "Available", availableDateId: 5 },
            { time: "10:00", status: "Available", availableDateId: 6 },
            { time: "12:00", status: "Available", availableDateId: 6 },
            { time: "14:00", status: "Available", availableDateId: 6 },
            { time: "16:00", status: "Available", availableDateId: 6 },
            { time: "10:00", status: "Available", availableDateId: 7 },
            { time: "12:00", status: "Available", availableDateId: 7 },
            { time: "14:00", status: "Available", availableDateId: 7 },
            { time: "16:00", status: "Available", availableDateId: 7 },
            { time: "10:00", status: "Available", availableDateId: 8 },
            { time: "12:00", status: "Available", availableDateId: 8 },
            { time: "14:00", status: "Available", availableDateId: 8 },
            { time: "16:00", status: "Available", availableDateId: 8 },
        ],
    });

    console.log("Created timeslots:", timeSlotsData)

    process.exit(0);
}

seed().catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
});
