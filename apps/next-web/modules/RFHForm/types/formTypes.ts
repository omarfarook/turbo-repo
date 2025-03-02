import { z } from "zod";
import { formSchema } from "../schemas";

export type FormData = z.infer<typeof formSchema>;