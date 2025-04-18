import { Component, inject } from '@angular/core';
import { DeleteBookComponent } from "../books/delete-book/delete-book.component";
import { AddBooksComponent } from '../books/add-books/add-books.component';
import { IntegrationsService } from '../services/integrations.service';
import { Book } from '../books/book.model';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header/header.component";
import { ViewBooksComponent } from "../books/view-books/view-books.component";
import { UpdateBookComponent } from "../books/update-book/update-book.component";

@Component({
  selector: 'app-admin',
  imports: [AddBooksComponent, DeleteBookComponent, HeaderComponent, ViewBooksComponent, UpdateBookComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private router: Router){}
  books?:Book[];
  selectedValue=0;
  onClickAddBook() {
    this.selectedValue=1;
  }
  onClickViewBook() {
    this.selectedValue=3;
    // this.router.navigate(['/viewbooks']);
  }
  onClickUpdateBook() {
    this.selectedValue=4;
  }
  onClickRemoveBook() {
    this.selectedValue=2;
  }
}
