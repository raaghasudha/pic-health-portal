import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"


@Injectable()
export class AccountsService
{
    constructor(private http:HttpClient)
    {

    }

    validateCred(username:string,pwd:string){
        return this.http.post("https://localhost:44339/api/accounts/ValidateCred",{"UserName":username,"Password":pwd})
    }
}