import { useForm } from "react-hook-form"
import logo from "../../assets/LogoKenzieHub.svg"
import { Input, PasswordInput } from "../../Fragments/Form/Input"
import { formLogin } from "./loguinSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"

import { UserContext } from '../../providers/UserContext'

import { Loading } from "../../Fragments/Loading"

import { StyledMain, StyledSection, StyledLink, StyledHeader } from "./style"

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formLogin)
    })
    const { userLoguinSubmit, isLoading } = useContext(UserContext)

    if(isLoading){
        return(
            <Loading/>
        )
    }

    return (
        <>
        <StyledHeader>
            <img src={logo} alt="" />
        </StyledHeader>
        <StyledMain>

            
            <StyledSection>

                <h2>Login</h2>

                <form onSubmit={handleSubmit(userLoguinSubmit)}>

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

                <p className="text-style-headline">Ainda não possui conta?</p>
                <StyledLink to={"/register"}>Cadastre-se</StyledLink>
            </StyledSection>
        </StyledMain>
    </>
    )
}   