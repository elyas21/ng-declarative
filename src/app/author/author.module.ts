import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDetailComponent } from './componets/author-detail/author-detail.component';
import { AuthorsComponent } from './componets/authors/authors.component';
import { AuthorRoutingModule } from './author.routing.module';
import { AuthorListCardComponent } from './componets/author-list-card/author-list-card.component';



@NgModule({
  declarations: [
    AuthorDetailComponent,
    AuthorsComponent,
    AuthorListCardComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
