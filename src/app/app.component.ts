import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

interface UserResponse{
	login: string,
	bio: string,
	company: string
	
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements ngOnInit{
  title = 'app';
  
	constructor(private http: HttpClient){
	  
	}  	    
  
  
	ngOnInit(): void{
		this.http.get('https://api.github.com/users/suppli3r').subscribe(data => {
			  console.log("User login:" + data.login);
			  console.log("User bio:" + data.bio);
			  console.log("User company:" + data.company);
		},
		(err: HttpErrorResponse)=> {
			  if(err.error instanceof Error){
				console.log("Client-side Error occured");
			  }else{
				console.log("Server-side Error occured");
			  }
		})
		  
		const req = this.http.post('http://jsonplaceholder.typicode.com/posts',{
			title: 'foo',
			body: 'bar',
			userId: 1
		})
		.subscribe(res=> {
				console.log(res);
		}, err=>{
				console.log("Error occured");
		})
	
  }
}
