import { z } from "zod";

export const projectSchema =z.object({
    name : z.string().min(1,"Project Name is required").max(100,"Project name must be less than 100"),
    key: z.string().min(2,"Project Key is required").max(10,"Project key must be less than 10"),
    description: z.string().max(500,"Description must be less than 500 characters")
    
})