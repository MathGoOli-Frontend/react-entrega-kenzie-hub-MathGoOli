import { Link } from "react-router-dom"
import logo from "../../assets/LogoKenzieHub.svg"
import { useContext } from "react"

import { MainDiv, Header, PageMain, NameSection } from "./style"
import { TecnologiesSection } from "./TecnologiesSection/index"
import { UserContext } from '../../providers/UserContext'
import { Loading } from "../../Fragments/Loading"

export const HomePage = () => {

    const { user, userLogoff, isLoading } = useContext(UserContext)

        if(isLoading){
            return(
                <Loading/>
            )
        }
        if(user){

            return (
                <MainDiv>
                    <Header>
                        <img src={logo} alt="" />
                        <button onClick={userLogoff}>Sair</button>
                    </Header>
                    <PageMain>
                        <NameSection>
                            <h1>{`Olá, ${user.name}`}</h1>
                            <p>{user.course_module}</p>
                        </NameSection>
                        <TecnologiesSection/>
                    </PageMain>
                </MainDiv>
            )
        }
    
}