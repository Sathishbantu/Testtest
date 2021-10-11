import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';

  testForm: FormGroup

  imageUrl: any = [];


  constructor(private fb: FormBuilder){
    this.testForm = this.fb.group({
      sectionTitle: ['', Validators.required],
      descripction: ['', Validators.required],
    })
  }

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        console.log(this.imageUrl,'imge');
        
        this.testForm.patchValue({
          file: reader.result
        });

      }
      // ChangeDetectorRef since file is loading outside the zone
    }
  }

  Submit(){
    let obj= {
      sectionTitle: '',
    

    }    
  }
}
