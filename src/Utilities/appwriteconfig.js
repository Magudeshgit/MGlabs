import {Client, Account} from "appwrite"

export const client = new Client()
client.setEndpoint('https://cloud.appwrite.io/v1')
client.setProject('65b63bc20a2a0b19f460')

export const account = new Account(client)
