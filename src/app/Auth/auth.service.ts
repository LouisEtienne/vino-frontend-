import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  etatConnexion:boolean = false;

  estConnecte:BehaviorSubject<boolean>;
  estConnecte$:Observable<boolean>;
  
  titrePage:BehaviorSubject<string>;
  titrePage$:Observable<string>;
  
  constructor() {
    this.estConnecte = new BehaviorSubject<boolean>(false);
    this.estConnecte$ = this.estConnecte.asObservable();

    this.titrePage = new BehaviorSubject<string>("");
    this.titrePage$ = this.titrePage.asObservable();

    if(sessionStorage.getItem("estConnecte") === "true"){
      this.estConnecte.next(true);
    }
  }

  statut():Observable<boolean>{
    return this.estConnecte;
  }

  setConnexion(etatConnexion:boolean):void {
    this.etatConnexion = etatConnexion;
    sessionStorage.setItem("estConnecte", this.etatConnexion.toString());
    this.estConnecte.next(etatConnexion);
  }

  getConnexion():boolean {
    return this.etatConnexion;
  }

  setTitre(titre:string):void{
    this.titrePage.next(titre);
  }

  getTitre():Observable<string>{
    return this.titrePage;
  }

}
