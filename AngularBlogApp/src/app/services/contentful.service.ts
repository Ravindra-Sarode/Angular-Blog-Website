import { Injectable } from '@angular/core';

import { createClient, Entry } from 'contentful';
 import {from} from 'rxjs';
// import { catchError, from } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: 'b8o51n8w4lvb',
    accessToken: '7J75kmZoCIZsypbp_p7uJCb886XY8PNeX0mv9C6FJR4'
  });

  getAllEntries(){
    const promise = this.client.getEntries()
    return from(promise);
  }

  getEntryById(id: string){
    const promise = this.client.getEntry(id);
    return from(promise);
    
  }
}
