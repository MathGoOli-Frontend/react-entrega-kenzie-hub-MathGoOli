import { useForm } from "react-hook-form"
import logo from "../../assets/LogoKenzieHub.svg"
import { Link } from "react-router-dom"
import { Input } from "../../Fragments/Form/Input/index"
import {Select} from "../../Fragments/Form/Select/index"
import { formRegister } from "./registerSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../Api/ApiAxios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formRegister)
    })
    const navigate = useNavigate()

    const submit = async (formData) => {
            
        try {
            const data= await api.post("/users", formData)
            toast(data.statusText
                , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            setTimeout(() => {
                navigate("/")
            }, 5000)
            

        } catch (error) {
            toast(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
    }

    return(
        <main>
            <img src={logo} alt="" />
            <Link to={"/"}>Voltar</Link>

            <form onSubmit={handleSubmit(submit)}>
            <Input 
                type="name" 
                id="name" 
                placeholder="Digite seu nome" 
                label="Nome" 
                {...register("name")}
            />
            {errors.name ? <p>{errors.name.message}</p>: null}
            <Input 
                type="email" 
                id="email" 
                placeholder="Digite seu email" 
                label="Email" 
                {...register("email")}
            />
            {errors.email ? <p>{errors.email.message}</p>: null}
            <Input 
                type="password" 
                id="password" 
                placeholder="Digite sua senha" 
                label="Password" 
                {...register("password")}
            />
            {errors.password ? <p>{errors.password.message}</p>: null}
            <Input 
                type="password" 
                id="confirm" 
                placeholder="confirme sua senha" 
                label="confirm" 
                {...register("confirm")}
            /> 
            {errors.confirm ? <p>{errors.confirm.message}</p>: null}
            <Input 
                type="bio" 
                id="bio" 
                placeholder="fale sobre você" 
                label="bio" 
                {...register("bio")}
            />
            {errors.bio ? <p>{errors.bio.message}</p>: null}
            <Input 
                type="contact" 
                id="contact" 
                placeholder="opção de contato" 
                label="contato" 
                {...register("contact")}
            />
            {errors.contact ? <p>{errors.contact.message}</p>: null}
            <Select
                id="course_module" 
                label="selecionar módulo" 
                {...register("course_module")}
            >
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>

            </Select>
            {errors.course_module ? <p>{errors.course_module.message}</p>: null}
            <button type="submit">Entrar</button>

            </form>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                {/* Same as */}
            <ToastContainer />
        </main>
    )
}