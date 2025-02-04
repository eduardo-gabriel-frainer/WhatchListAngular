import { Component } from '@angular/core';
import { MsgService } from './msg.service';

@Component({
  selector: 'app-msg',
  imports: [],
  templateUrl: './msg.component.html',
  styleUrl: './msg.component.css'
})
export class MsgComponent {
  bg!: string;
  message!: string;
  display: string = 'none';

  constructor(private msgService: MsgService){
    this.bg = this.msgService.bg
    this.message = this.msgService.message
    this.display = this.msgService.display
    setTimeout(() => {
      this.close();
    }, 3000);
  }

  close(){
    this.display = 'none'
  }

}
