import { z } from "zod";

export const formAdd = z.object({
    title: z.string().min(1, "Nome da tecnologia é obrigatório."),
    status: z.string().min(1, "É necessário escolher um nível" )
})