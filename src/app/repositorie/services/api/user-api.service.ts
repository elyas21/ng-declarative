import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  deleteUser(authorId: unknown): any {
    return this.http.delete(this.baseUrl + 'users/' + authorId);
  }
  updateUser(author: any) {
    return this.http.put(this.baseUrl + 'users/' + author.id, author);
    
  }

  constructor(private http: HttpClient) { }
  baseUrl = 'https://jsonplaceholder.typicode.com/'
  getUsers(){ 
    return this.http.get(this.baseUrl + 'users');
  }
}
