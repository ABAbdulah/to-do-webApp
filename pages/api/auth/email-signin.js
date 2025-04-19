import { hash, compare } from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: "Missing email or password" });

  try {
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      // Register new user with hashed password
      const hashed = await hash(password, 10);
      user = await prisma.user.create({
        data: {
          email,
          password: hashed,
        },
      });
    } else {
      // Compare password
      const valid = await compare(password, user.password || "");
      if (!valid) return res.status(401).json({ message: "Invalid credentials" });
    }

    // Optionally generate a session (or handle with NextAuth custom provider)
    return res.status(200).json({ message: "Authenticated", userId: user.id });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
