import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactServiceService } from 'src/app/services/contact-service.service';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  successRes=0;
  courseForm:FormGroup=this._fb.group({
    
    "email":['',Validators.required],
    "message":['',Validators.required],
    "name":['',Validators.required],
    "subject":['',Validators.required]

  })

  constructor(private _fb: FormBuilder,private _router:Router, private _serviceInst:ContactServiceService ) { }

  ngOnInit(): void {
  }
  onSubmit(form: FormGroup){
    console.log(form)
    if(form.valid){
      const email=form.value;
      console.log(email);
      this._serviceInst.sendEmail(email).subscribe((res:any)=>{
        console.log(res);
        this.successRes=1;
        form.reset();
        //this._router.navigate(['/home']);

      })
    }
  }
}
