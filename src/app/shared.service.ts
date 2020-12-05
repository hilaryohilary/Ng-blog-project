import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
blogTitle = 'My First Angular Blog';
baseUrl = 'http://localhost:4200/';
constructor() { }

}
