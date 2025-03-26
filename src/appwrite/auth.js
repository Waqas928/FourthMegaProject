import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

// we can use this code for auth , only we can change internal data according 
// to backend, frontend remain same e.g asyn creat Account will get email, password,name it donot cahnge
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;//here(in try) we can use if else statement to check if the user is logged in or not, or we can return null, both work same
    }

    async logout() {

        try {
            await this.account.deleteSessions();//this will delete all the sessions means logout from all devices
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService(); // this is object of AuthService class

export default authService


