import {account} from './appwriteconfig'
import {ID} from 'appwrite'

export async function SignupUser(credentials)
{
    try {
        const newaccount = await account.create(
            ID.unique(),
            credentials.mail,
            credentials.name,
            credentials.username,
            
        )
        return newaccount
    } catch (error) {
        return error
    }
}