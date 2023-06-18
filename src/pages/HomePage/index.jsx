import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/LogoKenzieHub.svg"

export const HomePage = () => {
    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem("@kenzieHubUserID"))
    const token = localStorage.getItem("@kenzieHubToken")
    

    const logoff = () => {
        localStorage.removeItem("@kenzieHubToken")
        localStorage.removeItem("@kenzieHubUserID")

        navigate("/")
    }

    if(token){
        return (
            <>
                <header>
                    <img src={logo} alt="" />
                    <button onClick={logoff}>Sair</button>
                </header>
                <main>
                <section>
                    <h1>{data.name}</h1>
                    <p>{data.course_module}</p>
                </section>
                <section>
                    <h2>Que pena! Estamos em desenvolvimento :(</h2>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </section>
                </main>
            </>
        )
    } else {
        logoff()
    }
}