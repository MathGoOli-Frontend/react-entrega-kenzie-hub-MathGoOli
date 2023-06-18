import { useForm } from "react-hook-form"
import logo from "../../assets/LogoKenzieHub.svg"
import { Link, json } from "react-router-dom"
import { Input, PasswordInput } from "../../Fragments/Form/Input"
import { formLogin } from "./loguinSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../Api/ApiAxios"
import { useNavigate } from "react-router-dom"

import { StyledMain, StyledSection, StyledLink, StyledHeader } from "./style"

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formLogin)
    })
    const navigate = useNavigate()

    const submit = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData)
            console.log(data)
            localStorage.setItem("@kenzieHubToken", JSON.stringify(data.token))
            localStorage.setItem("@kenzieHubUserID", JSON.stringify(data.user))

            navigate("/home")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
        <StyledHeader>
            <img src={logo} alt="" />
        </StyledHeader>
        <StyledMain>

            
            <StyledSection>

                <h2>Login</h2>

                <form onSubmit={handleSubmit(submit)}>

                    <Input
                        type="email"
                        id="email"
                        placeholder="Digite seu email"
                        label="Email"
                        {...register("email")}
                    />
                    {errors.email ? <p>{errors.email.message}</p> : null}
                    <PasswordInput
                        id="password"
                        placeholder="Digite sua senha"
                        label="Password"
                        {...register("password")}
                    />
                    {errors.password ? <p>{errors.password.message}</p> : null}

                    <button type="submit">Entrar</button>

                </form>

                <p>Ainda não possui conta?</p>
                <StyledLink to={"/register"}>Cadastre-se</StyledLink>
            </StyledSection>
        </StyledMain>
    </>
    )
}   