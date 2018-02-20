import {Injectable} from '@angular/core';

import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/observable';

@Injectable()
export class GithubAuthInterceptor implements HttpInterceptor{
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		
		const authReq = req.clone({
			
		headers: req.headers.set('Authorization','token 6f774bcf475e958579679b2da33f59b6db1bf773')
		});
		
		return next.handle(authReq);
	}
}