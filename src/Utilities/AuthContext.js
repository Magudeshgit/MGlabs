import {createContext, useState, useContext, useEffect} from "react";
import {account, auth} from "./appwriteconfig"
import {useNavigate} from "react-router-dom"
import {ID} from "appwrite"

const Authenticator = createContext()

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        CheckUser()
    })

    async function Login(credentials) {
        try{
                const logging = await account.createEmailSession(
                    credentials.mail,
                    credentials.password || credentials.password1
                )
                const userDetails = await account.get()
                setUser(userDetails)
                navigate("/home")
            }
    catch(error)
    {
        console.error(error)
        console.log('data:', credentials.mail,
        credentials.password)
    }
    }
    async function Register(credentials) {
        try {
            const newaccount = await account.create(
                ID.unique(),
                credentials.mail,
                credentials.password1,
                credentials.username,   
            )
            Login(credentials)
        } catch (error) {
            console.error(error)
        }
    }
    async function CheckUser() {
        try {
            const userDetails = await account.get()
            setUser(userDetails)
        } 
        catch (error) {
            console.error(error)
        }
    }
    async function Logout() {
        await account.deleteSession('current')
        setUser(null)
        navigate('/')
    }
    
    const context = {
        user,
        Login,
        Register,
        CheckUser,
        Logout
    }

    return (
        <Authenticator.Provider value={context}>
            {children}
        </Authenticator.Provider>
    )
}


export const useAuth = ()=>{return useContext(Authenticator)}
export default Authenticator
