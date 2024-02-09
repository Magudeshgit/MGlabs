import {Client, Account, Avatars} from "appwrite"

export const client = new Client()
client.setEndpoint('https://cloud.appwrite.io/v1')
client.setProject('65b63bc20a2a0b19f460')

const avatars = new Avatars(client)

export const account = new Account(client)
export const avatar = avatars.getInitials()