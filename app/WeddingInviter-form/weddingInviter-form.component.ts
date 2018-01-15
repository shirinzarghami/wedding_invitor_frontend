import { WeddingInviterService } from './../wedding-inviter.service';
import { Guest } from './../Guest';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weddingInviter-form',
  templateUrl: './weddingInviter-form.component.html',
  styleUrls: ['./weddingInviter-form.component.css']
})
export class WeddingInviterFormComponent {
  constructor(private weddingInviterService: WeddingInviterService){}
  submitted = false;
  model = new Guest("",true,1,0,'','','','','',true,true,true,'');
  onSubmit() { this.submitted = true;}
  sendInfo() {
    this.weddingInviterService.saveForm(this.model);
  }



  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
   // return form && form.controls['name'] &&
   // form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////

}
