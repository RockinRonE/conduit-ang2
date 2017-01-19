import { Component, Input } from '@angular/core'; 

import { Article } from '../models'; 

@Component({
    selector: 'article-preview',
    templateUrl: './article.component.html'
})

export class ArticlePreviewComponent{
    @Input() article: Article; 



}