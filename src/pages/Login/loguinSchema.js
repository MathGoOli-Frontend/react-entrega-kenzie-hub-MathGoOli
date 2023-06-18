import { z } from "zod";

export const formLogin = z.object({
    email: z.string().min(1, "O Email é obrigatório.").email("Forneça um email válido."),
    password: z.string().min(6, "É necessário ao menos 6 caracteres" )
})