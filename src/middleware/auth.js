const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const secret = process.env.JWT_SECRET;

const verifyToken = async (req, res, next) => {
    const header = req.header("authorization");

    if (!header) {
        return res.status(400).json({ error: "Missing auth token" });
    }

    const [_, token] = header.split(" ");
    const verifiedToken = jwt.verify(token, secret);

    const foundUser = await prisma.user.findUnique({
        where: {
            email: verifiedToken
        },
    });

    if (!foundUser) {
        return res.status(404).json({ error: "User not found" });
    }

    req.user = foundUser;
    next();
};


module.exports = {
    verifyToken
};