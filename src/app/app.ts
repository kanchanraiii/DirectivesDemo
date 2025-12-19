import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  // styleUrls:['']
})
export class App {

  studentName='';
  students: string[]=[];
  
  addStudent(){
    if(this.studentName.trim()){
      this.students.push(this.studentName);
      this.studentName='';
    }
  }

  deleteStudent(index:number){
    this.students.splice(index,1);
  }
}
