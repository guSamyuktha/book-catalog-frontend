import { Component, inject } from '@angular/core';
import { IntegrationsService } from '../../services/integrations.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-book',
  imports: [FormsModule],
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.css'
})
export class DeleteBookComponent {
  private integrationService=inject(IntegrationsService);
bookId=0;
onSubmit(){
  this.integrationService.deleteData(this.bookId)
}
}
