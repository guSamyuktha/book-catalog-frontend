import { Component, inject, Input } from '@angular/core';
import {ApiResponse, Book } from '../book.model';
import { FormsModule } from '@angular/forms';
import { IntegrationsService } from '../../services/integrations.service';
import { JwPaginationModule } from 'jw-angular-pagination';
@Component({
  selector: 'app-view-books',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './view-books.component.html',
  styleUrl: './view-books.component.css'
})
export class ViewBooksComponent {
  private integrationService=inject(IntegrationsService);
  pageOfItems!: Array<any>;
  books:Book[]|undefined;
  searchTerm='';
bookService: any;
  constructor(){
    this.integrationService.getBooks().subscribe(
      (response: ApiResponse) => {
      if (response.success) {
      this.books = response.data ;
      } 
      },
      );
  }
  
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
