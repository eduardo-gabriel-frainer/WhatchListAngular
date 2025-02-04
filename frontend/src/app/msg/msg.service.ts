import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  bg!: string;
  message!: string;
  display!: string;

  constructor() { }

  setMsg(msg: string, bg: string){
    this.message = msg
    this.bg = bg
    this.display = 'flex'

    setTimeout(() => {
      this.display = 'none';
    }, 1000);
  }
}
