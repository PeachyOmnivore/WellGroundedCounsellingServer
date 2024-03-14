const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
    const users = await prisma.user.createMany({
        data: [
            {
                email: "fiona.hutch@hotmail.co.uk",
                password: "Pass123!",
                role: "ADMIN",
                firstName: "Fiona",
                lastName: "Hutchison",
                phone: "999999999",
            },
            {
                email: "Lad_777@hotmail.com",
                password: "Pass123!",
                firstName: "Lukas",
                lastName: "Dembicki",
                phone: "999999999",
            },
        ],
    });

    console.log("Created 1 Admin User, 1 Client User", users);

    const availableDatesData = await prisma.availableDate.createMany({
        data: [
            {
                month: "March",
                day: 1,
                timeSlots: {
                    connect: [
                        { time: "10:00", status: "Available" },
                        { time: "12:00", status: "Available" },
                        { time: "14:00", status: "Available" },
                        { time: "16:00", status: "Available" },
                    ],
                },
            },
            {
                month: "March",
                day: 2,
                timeSlots: {
                    connect: [
                        { time: "10:00", status: "Available" },
                        { time: "12:00", status: "Available" },
                        { time: "14:00", status: "Available" },
                        { time: "16:00", status: "Available" },
                    ],
                },
            },
            {
                month: "March",
                day: 3,
                timeSlots: {
                    connect: [
                        { time: "10:00", status: "Available" },
                        { time: "12:00", status: "Available" },
                        { time: "14:00", status: "Available" },
                        { time: "16:00", status: "Available" },
                    ],
                },
            },
            {
                month: "March",
                day: 4,
                timeSlots: {
                    connect: [
                        { time: "10:00", status: "Available" },
                        { time: "12:00", status: "Available" },
                        { time: "14:00", status: "Available" },
                        { time: "16:00", status: "Available" },
                    ],
                },
            },
            {
                month: "April",
                day: 1,
                timeSlots: {
                    connect: [
                        { time: "10:00", status: "Available" },
                        { time: "12:00", status: "Available" },
                        { time: "14:00", status: "Available" },
                        { time: "16:00", status: "Available" },
                    ],
                },
            },
            {
                month: "April",
                day: 2,
                timeSlots: {
                    connect: [
                        { time: "10:00", status: "Available" },
                        { time: "12:00", status: "Available" },
                        { time: "14:00", status: "Available" },
                        { time: "16:00", status: "Available" },
                    ],
                },
            },
            {
                month: "April",
                day: 3,
                timeSlots: {
                    connect: [
                        { time: "10:00", status: "Available" },
                        { time: "12:00", status: "Available" },
                        { time: "14:00", status: "Available" },
                        { time: "16:00", status: "Available" },
                    ],
                },
            },
            {
                month: "April",
                day: 4,
                timeSlots: {
                    connect: [
                        { time: "10:00", status: "Available" },
                        { time: "12:00", status: "Available" },
                        { time: "14:00", status: "Available" },
                        { time: "16:00", status: "Available" },
                    ],
                },
            },
        ],
    });

    console.log("created Date Data:", availableDatesData);

    process.exit(0);
}

seed().catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
});
