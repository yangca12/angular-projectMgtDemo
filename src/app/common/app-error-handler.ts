import { ErrorHandler } from '@angular/core';

//global error handler
export class AppErrorHandler implements ErrorHandler {

    handleError(error) {

        alert ('an unexpected error occourred.'); //in real world app, we also wanna log the errors 
        console.log(error);
    }

    
}