import { z } from "zod";

export const signupSchema = z.object({
    username: z.string().min(3).max(30).trim(),
    password: z.string().min(5).max(30).trim(),
    name: z.string().max(30).trim()
});

export const signinSchema = z.object({
    username: z.string().min(3).max(30).trim(),
    password: z.string().min(5).max(30).trim(),
});

export const roomSchema = z.object({
    name: z.string().max(30).trim(),
    roomId : z.number()
});