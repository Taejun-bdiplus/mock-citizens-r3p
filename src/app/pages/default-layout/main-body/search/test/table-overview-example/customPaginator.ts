import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class MatPaginatorIntlCro extends MatPaginatorIntl {
  config: any;

    constructor() {
        super();  
      
        this.getAndInitTranslations();
      }
    
      getAndInitTranslations() {
          
        this.itemsPerPageLabel = "";
        this.nextPageLabel = "";
        this.previousPageLabel = "";
        this.changes.next();
      }
    
     override getRangeLabel = (page: number, pageSize: number, length: number) =>  {
        if (length === 0 || pageSize === 0) {
          return ``;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return ``;
      }
  };
