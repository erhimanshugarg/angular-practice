import { ErrorHandler, Injector, Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * GlobalErrorHandlerService - Handles all the Service error
 */
@Injectable({
  providedIn: 'root',
} )
export class GlobalErrorHandlerService implements ErrorHandler {

  /**
   * Constructor
   */
  constructor(private injector: Injector) {
  }

  /**
   * Handles Error Occured during service response.
   * @param error
   */
  handleError(error: any): void {

    const router: Router = this.injector.get(Router);

    // A client-side or network error occurred.
    if ( error.error instanceof ErrorEvent ) {
      console.error(`error message ${error.error.message}`);
    } else {
      // Backend returns unsuccessful response codes such as 404, 500 etc.
      console.error(`error message ${error.message}`);
      console.error( `error code ${error.code}`) ;
    }

    router.navigate([ '/error' ] ); // navigate to error page
  }

}
