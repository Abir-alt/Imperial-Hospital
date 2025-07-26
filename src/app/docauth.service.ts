import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

    authenticate(username: string, password: string) {
      if (username === 'doctor' && password === 'doctor123') {
        sessionStorage.setItem('username', username);
        return true;
      } else {
        return false;
      }
    }

    isUserLoggedIn() {
      console.log("doctor login done");
      let user = sessionStorage.getItem('username');
      console.log(user);
      return !(user === null);
    }

    logout() {
      console.log("doctor logout done");
      sessionStorage.removeItem('username');
    }

  

}
