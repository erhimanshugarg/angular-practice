import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MinAgeValidator } from 'src/app/shared/validations/validators/min-age.validator';
import { NameValidator } from 'src/app/shared/validations/validators/name.validator';

@Component( {
    selector: 'form-validation',
    templateUrl: './form-validation.component.html'
} )

export class FormValidationComponent implements OnInit {
    
    public validationForm: FormGroup;
    
    constructor( private formBuilder: FormBuilder ) {

        this.validationForm = this.formBuilder.group( {
            firstName : [ '', Validators.compose( [ Validators.required, NameValidator.validate() ] )],
            lastName: [ '', Validators.compose( [ Validators.required, Validators.minLength(3)] )],
        } );
    }

    public ngOnInit(): void {
       
    }

    public submit(): void {
        console.log( this.validationForm.value );
    }
}