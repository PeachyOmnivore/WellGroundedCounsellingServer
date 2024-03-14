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
                    "10:00": "Available",
                    "12:00": "Available",
                    "14:00": "Available",
                    "16:00": "Available",
                },
            },
            {
                month: "March",
                day: 2,
                timeSlots: {
                    "10:00": "Available",
                    "12:00": "Available",
                    "14:00": "Available",
                    "16:00": "Available",
                },
            },
            {
                month: "March",
                day: 3,
                timeSlots: {
                    "10:00": "Available",
                    "12:00": "Available",
                    "14:00": "Available",
                    "16:00": "Available",
                },
            },
            {
                month: "March",
                day: 4,
                timeSlots: {
                    "10:00": "Available",
                    "12:00": "Available",
                    "14:00": "Available",
                    "16:00": "Available",
                },
            },
            {
                month: "April",
                day: 1,
                timeSlots: {
                    "10:00": "Available",
                    "12:00": "Available",
                    "14:00": "Available",
                    "16:00": "Available",
                },
            },
            {
                month: "April",
                day: 2,
                timeSlots: {
                    "10:00": "Available",
                    "12:00": "Available",
                    "14:00": "Available",
                    "16:00": "Available",
                },
            },
            {
                month: "April",
                day: 3,
                timeSlots: {
                    "10:00": "Available",
                    "12:00": "Available",
                    "14:00": "Available",
                    "16:00": "Available",
                },
            },
            {
                month: "April",
                day: 4,
                timeSlots: {
                    "10:00": "Available",
                    "12:00": "Booked",
                    "14:00": "Available",
                    "16:00": "Available",
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
