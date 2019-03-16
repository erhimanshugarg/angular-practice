import { FormControl, ValidationErrors } from '@angular/forms';

/**
 * Minimum Age Validator
 */
export class MinAgeValidator {

    /**
     * Validate age entered by user
     * @param minAge
     */
    public static validate( minAge: number ) {
        return ( formControl: FormControl ): ValidationErrors | null => {
         const age: any = formControl.value;

         if ( age === null || age === undefined || age.length === 0 ) {
             return null;
         } 
         else if ( age >= minAge ) {
            return null
         } else {
             return {
                 minAge: {
                     minAge,
                     reason: `Age must be equals to or greater than ${minAge}.`,
                 }
             }
         }
        }
    }
}