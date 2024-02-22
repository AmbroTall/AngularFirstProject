import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  newMember = ''
  errorMsg = ''
  members: string[] = []

  onInput(member : string){
    this.newMember = member
  }

  onClick(){
    if(this.newMember){
      this.members.push(this.newMember)
      this.errorMsg = ''
      this.newMember = ''
    }else{
      this.errorMsg = "Team name Can't be blank"
    }
  }
}
