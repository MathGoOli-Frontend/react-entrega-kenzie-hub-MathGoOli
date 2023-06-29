import { z } from "zod";

export const formRegister = z.object({
    name: z.string().min(3, "Nome deve conter pelo menos 3 caracteres"),
    email: z.string().min(1, "O Email é obrigatório.").email("Forneça um email válido."),
    password: z.string().min(8, "É necessário ao menos 8 caracteres" )
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .regex(/(?=.*?[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/, 'Pelo menos um caracter especial'),
    confirm: z.string().min(1, "confirmar senha é obrigatório"),
    bio: z.string().min(1, "deve conter uma bio"),
    contact: z.string().min(1, "campo contato obrigatório"),
    course_module: z.string(),
}).refine(({password, confirm}) => confirm === password, {
    message: "As senhas precisam corresponder",
    path: ["confirm"],
})