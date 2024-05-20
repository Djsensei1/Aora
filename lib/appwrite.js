import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'me.ccdjamilla.aora',
    projectId: '664b39e900343a76a4f1',
    databaseId: '664b3c8d000e20ee6110',
    userCollectionId: '664b3d260025572fd6a3',
    videoCollectionId: '664b3d6e0015f688630a',
    storageId: '664b3f2f003b712e42e2'
}

// Init your React Native SDK
const client = new Client();

client
.setEndpoint(config.endpoint)
.setProject(config.projectId)
.setPlatform(config.platform)
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl,
            }

        )
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession
        (email, password)
        return session;
    } catch (error) {
        throw new Error(error);
    }
}