export class Article {
    description: string = '';
    slug: string;
    title: string = '';
    tagList: Array<string> = [];
    createdAt: string;
    updatedAt: string; 
    favorited: boolean; 
    favoritesCount: number; 
    
}