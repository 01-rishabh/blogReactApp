import conf from '../conf/conf';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl);
        this.client.setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    //In case i need to change the backend as a service as here we are using appwrite.I might build my own backend as well.
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique, email, password, name);
            if(userAccount){
                //call another function, if user exists already then make him login
                return this.login({email, password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    async login({email, password}){
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            throw new Error(error);
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();
            return true;
        } catch (error) {
            console.log("Appwrite error :: logout :: error:", error); 
            throw new Error(error);
        }
    }

    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (error) {
            console.log("Mubarak ho error aaya hai!!!", error);
            
            throw new error; 
        }

        return null;
    }
}

const authService =  new AuthService();

export default authService;

