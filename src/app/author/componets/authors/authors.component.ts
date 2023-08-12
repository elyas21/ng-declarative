import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit{
  authors$ = this.authorService.authors$;
  constructor(private authorService: AuthorService){}
  ngOnInit(): void {
  }
  updateUser(){
    this.authorService.updteAuthor({})
    
  }


}
