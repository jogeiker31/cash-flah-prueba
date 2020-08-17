import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { EmailService } from '../email.service';
import { MatDialog } from '@angular/material';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  
  constructor(
    private fb:FormBuilder,
    private formService:EmailService,
    private dialog:MatDialog
  ) { }

  ngOnInit() {
  }

  

  
  formulario = this.fb.group( {

    nombre:['',[Validators.required]],
    apellido:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    mensaje:['',[]]

 },)






register(){
 
  this.formService.sendEmail(this.formulario.value).subscribe((resp:any)=>{
    console.log(resp);
    
    if(resp.ok){
      this.dialog.open(SuccessDialogComponent,{
        width:'350px',
        data:{title:'Correo enviado',msg:'Le enviamos un correo electronico con sus datos'}
      })
    }
  })
}
  









}
