import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './componets/authors/authors.component';
import { AuthorDetailComponent } from './componets/author-detail/author-detail.component';

const routes: Routes = [
    {
        path:'',
        component: AuthorsComponent
    },
    {
        path:':authorId',
        component: AuthorDetailComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
