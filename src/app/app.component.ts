import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  newMember = '';
  teamMembers: string[] = []

  addInput(member : string){
    this.newMember = member
  }

  addMember(){
    this.teamMembers.push(this.newMember)
    console.log(this.teamMembers)
  }
}
