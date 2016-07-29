import {Component} from 'angular2/core';
import {AuthorService} from './author.service'

@Component({
    selector: 'authors',
    template: `
                 <h2>My Favorite Authors</h2>
                 {{text}}
                 <ul>
                    <li *ngFor= "let author of authors"> 
                        {{author}}
                    </li>
                 </ul>
              `,
    providers: [AuthorService] 
})
export class AuthorsComponent { 
    text: string = 'Those are some great authors: ';
    authors;

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}