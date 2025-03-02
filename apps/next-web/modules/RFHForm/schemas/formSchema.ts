import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  terms: z.boolean().refine((val) => val === true, { message: "You must accept the terms" }),
  gender: z.string().min(1, "Gender is required"),
});