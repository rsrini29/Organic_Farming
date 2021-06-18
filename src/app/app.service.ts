import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from './../environments/environment.prod';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private headers = new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});
  //please modify the base URL after deployment the back-end services. 
  //the URL provided by us are just an example as the backend is not deployed.
  baseUrl = "https/organic_framing_backend/api/insertContactUs";
  baseUrl1 = "https/organic_framing_backend/api/insertRegisterUser";
  baseUrl2 = "https/organic_framing_backend/api/getAllRegisterUsers";
  baseUrl3 = "https/organic_framing_backend/api/insertUserActivity";
  constructor(private httpClient: HttpClient){ 
  }
  getcontactDetails(data:any):Observable<any>{ 
    return this.httpClient.post(this.baseUrl,data,{headers: this.headers});
  }
  getregDetails(data:any):Observable<any>{ 
    return this.httpClient.post(this.baseUrl1,data,{headers: this.headers});
  }
  getsignDetails(data:any):Observable<any>{ 
    return this.httpClient.post(this.baseUrl2,data,{headers: this.headers});
  }
  getschedDetails(data:any):Observable<any>{ 
    return this.httpClient.post(this.baseUrl2,data,{headers: this.headers});
  }

}
