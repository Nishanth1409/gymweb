import jwt from "jsonwebtoken";

type TokenPayload = {
  id: string;
  email: string;
  name: string;
};

const JWT_SECRET = process.env.JWT_SECRET;

function getJwtSecret() {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured.");
  }
  return JWT_SECRET;
}

export function signToken(payload: TokenPayload) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: "7d" });
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, getJwtSecret()) as TokenPayload;
}
