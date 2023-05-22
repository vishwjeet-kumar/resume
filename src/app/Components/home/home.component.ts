import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactForm!: FormGroup;
  showMessage:boolean = false;
  constructor(private fb:FormBuilder)
  {
    
  }
  ngOnInit(): void {
    this.refresh();
  }

  refresh()
  {
    this.contactForm = this.fb.group({
      'name':['', Validators.required],
      'email':['', Validators.required],
      'contact':['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      // Process the form data or make API calls here
      this.showMessage = !this.showMessage;
      console.log(this.contactForm.value);

      this.contactForm.patchValue({
        'name':'',
        "email":'',
        "contact":''
      });


      // Call setTimeout with a delay of 2000 milliseconds (2 seconds)
      setTimeout(() => {
        this.showMessage = !this.showMessage;
      }, 5000);
    } else {
      // Handle invalid form
      console.log('Invalid form');
    }
  }

}
