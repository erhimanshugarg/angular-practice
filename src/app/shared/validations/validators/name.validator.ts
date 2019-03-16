import { FormControl, ValidationErrors, Validators } from '@angular/forms';

export class NameValidator {
    
    public static validate() {
        return ( formControl: FormControl ): ValidationErrors | null  => {
            const name: string = formControl.value;

            if ( name === null || name === undefined ) {
                return null;
            } 
            
            return Validators.compose ( 
                [ 
                    Validators.minLength( 3 ),
                    Validators.maxLength( 35 )
                ] )( formControl );
        }
    }
}