import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
api="http://localhost:8080/api/home"
token="eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJvRWZ5V2xCY21XbmR1S0hGbU5Od2ZndkRPa0tDRndqamJlZTN3UGdyX2lrIn0.eyJleHAiOjE3MDY4NDc0NzQsImlhdCI6MTcwNjg0NTY3NCwianRpIjoiZWE2OTljMjMtZGIyYy00NjJkLWJlYzYtOGY4NzY3YzQ1NGI1IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MTgwL3JlYWxtcy9vYXV0aDItZGVtbyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI1MjQ2ZGJiYy1hMjEzLTQ2YjYtODEzZS0wYmVkMDFmNjY3MjciLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJDbGllbnRUZXN0Iiwic2Vzc2lvbl9zdGF0ZSI6ImE0ZDA3NDYzLTM1MjctNDA2MC05MmJhLWIyYjY2NGNkNzU0MyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1vYXV0aDItZGVtbyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJVU0VSIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiYTRkMDc0NjMtMzUyNy00MDYwLTkyYmEtYjJiNjY0Y2Q3NTQzIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJrYXJpbSJ9.A7o-ipc3_1wqd2qEq7gHfRKLFf0LIrE519OOb6z0zMTrnO-aDLh41ZC2ePXPy1hPTw16NOazVeNTdXkIT6qhU7HXiIdl12AVc3mRmzNC-BfoAc5LGV10EbRqog3V_pb_2_3GI9EJ6HUmsry1hvEzlZHAormGUol0oWlVIDdPOLtjxD4hztGOqq8NxhHWqw0UEX4LmilStV4znHpd2WlUruwb248eNYqzvELum_VBXt3vYzeZqykKlqDl2rIO84rx8H12dbxgCtNAOkInEXbGs4uJi6fm2Z97HHEHc7P_O5DgrWOKZPksDsuM6AYWEM_PiVKiQPTpEF67c7CNWnMtNw"


  constructor(private http:HttpClient) { }


  getMessageRessource():Observable<any>{
   const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(this.api+'/welcomeAdmin', { headers });
  }
  getMessageRessource2():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(this.api+'/welcomeManager',{ headers })
  }
  getMessageRessource3():Observable<any>{
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(this.api+'/welcomeUser',{headers})
  }
  getMessageRessource4():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(this.api+'/welcomeGuest',{headers})
  }
}
