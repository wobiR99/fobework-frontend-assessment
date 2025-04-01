import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, "Minimum of 6 characters"),
});
