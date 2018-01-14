import { Guest } from './../Guest';
import { Component } from '@angular/core';


@Component({
  selector: 'app-weddingInviter-form',
  templateUrl: './weddingInviter-form.component.html',
  styleUrls: ['./weddingInviter-form.component.css']
})
export class WeddingInviterFormComponent {
  submitted = false;
  model = new Guest(true,1,0,'','','','','',true,true,true,'');
  onSubmit() { this.submitted = true; debugger}



  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
   // return form && form.controls['name'] &&
   // form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////

}
