

import { Component } from '@angular/core';
import { Employee } from './../modelakainterface/employee.model';
import { NgForm } from '@angular/forms';

import { FormsService } from './../services/forms-poster.service';

@Component ({
  selector: 'app-template',
  templateUrl: './forms.component.html',
})

export class FormsComponent {
  languages = [ 'Angular', 'NodeJs', 'MongoDB'];

  // as we have used constructor in our model/interface class we have use new keyword to create the object of the
  // that interface class.

  model = new Employee('John', 'Andrew', 'a@a.com', false , 'male', 'Angular');

  constructor( private formsService: FormsService ) {}

  firstToUpper( value: String ): void {
    if (value.length > 0) {
      // there is a function called "charAt" which let us select any position character at the string and then there is
      // another function called "slice" which let us select or slice specific number of characters from a string.


      this.model.firstname = value.charAt(0).toUpperCase() + value.slice(1);


      // char at first place is capitalised and is added to the rest of the string.
    } else {
      this.model.firstname = value ;
    }
  }


  // import ngforms for this

  submitForms(form: NgForm) {
    console.log(form.value);

    this.formsService.postEmploye(form.value)
    .subscribe(
      data => console.log('success'),
      err => console.log(err)
    );
  }
}













/* ng-pristine, ng-untouched, ng-valid are three positive classes
   ng-dirty , ng-touched, ng-invalid are three negative classes

   pristine and dirty works with touching the element, once its touched it becomes dirty

   touched and untouched works with holding the element, while we r on that element it is untouched and as soon
   as we go to other element it becomes touched

   valid and invalid works with wtever the constraints are kept to that element if satisfied then valid otherwise invalid.

*/










