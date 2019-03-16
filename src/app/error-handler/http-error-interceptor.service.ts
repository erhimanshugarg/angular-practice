import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * It will globally handle all the http errors thrown by service
 */
export class ServiceErrorInterceptor implements HttpInterceptor {

  /**
   *
   * @param request - The intercepted Request
   * @param next - The next interceptor in the pipeline
   */
  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError( (error: HttpErrorResponse) => {
          let errorMessage = '';

          // check network/client failure
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Message is ${ error.error.message }`;
          } else {
            // check service thrown http error code and message
            errorMessage = `Error occured : ${ error.message } ${ error.status }`;
          }
          return throwError(errorMessage);
        } )
    )
  }

}
