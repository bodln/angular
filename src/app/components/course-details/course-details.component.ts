import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  @Input() course?:Course;
  @Output() deleteEvent = new EventEmitter<number>()
  @Output() sendCourse = new EventEmitter<Course>()

  deleteCourse() {
    console.log("Event emmitted");
    this.deleteEvent.emit(this.course?.id)
  }

  populateClick(){
    this.sendCourse.emit(this.course)
    console.log("popopo", this.course)
  }
}
