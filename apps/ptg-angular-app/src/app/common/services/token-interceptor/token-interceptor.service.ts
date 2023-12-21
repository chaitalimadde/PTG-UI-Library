/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @interceptor Interceptor Service;
 * @description This service for TokenInterceptor
 */


import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '@ptg-angular-app/auth/services/auth.service';
import { environment } from '@ptg-ui/apps/ptg-angular-app/src/environments/environment';
import { getLastItem } from '@ptg-angular-app/common/utils/utils';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const URLToExclude = environment.URLToExclude;
    if (!(URLToExclude.findIndex((url) =>getLastItem(request.url).includes(url)) > -1)) 
    {
      const tokenType = 'Bearer';
      const token = JSON.parse(this.authService.getToken())?.jwt||"";
      request = request.clone({
        setHeaders: {
          Authorization: `${tokenType} ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
