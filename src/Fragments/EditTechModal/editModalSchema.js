import { z } from "zod";

export const formEdit = z.object({
    status: z.string().min(1, "É necessário escolher um nível" )
})