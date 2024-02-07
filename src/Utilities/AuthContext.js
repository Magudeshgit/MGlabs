import {createContext, useState, useContext, useEffect} from "react";
import {account, auth} from "./appwriteconfig"
import {useNavigate} from "react-router-dom"
import {ID} from "appwrite"

const Authenticator = createContext()

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    console.log(user)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        CheckUser()
    },[])

    async function Login(credentials) {
        setLoading(true)
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
    setLoading(false)
    }
    async function Register(credentials) {
        setLoading(true)
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
        setLoading(false)
    }
    async function CheckUser() {
        try {
            const userDetails = await account.get()
            setUser(userDetails)
            return true
        } 
        catch (error) {
            return false
        }
    }
    async function Logout() {
        try {
            if (CheckUser)
            {
            await account.deleteSession('current')
            setUser(null)
            navigate('/')
            }
        }
        catch(error)
        {
            console.log("Logout", error)
        }
    }
    
    const context = {
        user,
        setUser,
        loading,
        setLoading,
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
