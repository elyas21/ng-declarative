import { Injectable } from '@angular/core';
import { Subject, merge, switchMap } from 'rxjs';
import { UserApiService } from 'src/app/repositorie/services/api/user-api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {

  authorsData$ = this._getAuthors();
  updateAuthor$ = new Subject();
  updateAutorData = this._updateAuthor();

  deleteAuthor$  = new Subject();
  deleteAuthoData = this._deleteAuthor();
  authors$ = merge(
    this.authorsData$,
    this.updateAutorData,
    this.deleteAuthoData
  )

  
  private _deleteAuthor() {
    return this.deleteAuthor$.pipe(
      switchMap(authorId=>{
        return this.authorApiService.deleteUser(authorId)
      }),
      switchMap(()=>this.authorsData$)
    )
  
    }
    deleteAutor(authorId: any) {
      this.deleteAuthor$.next(authorId);
    }

  constructor(private authorApiService: UserApiService) {}
  
  _getAuthors() {
    return this.authorApiService.getUsers();
  }
  updteAuthor(author: any) {
    this.updateAuthor$.next(author);
  }
  _updateAuthor() {
    return this.updateAuthor$.pipe(
      switchMap(author=>{
        return this.authorApiService.updateUser(author)
      }),
      switchMap(()=>this.authorsData$)
    )
  }
     
  

}
