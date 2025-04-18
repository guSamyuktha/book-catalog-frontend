import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IntegrationsService } from '../../services/integrations.service';

@Component({
  selector: 'app-update-book',
  imports: [FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  private integrationService=inject(IntegrationsService);
  bookId=0;
  title='';
  description= '';
  published= true;
  onSubmit(){
    this.integrationService.updateData ({
      title: this.title,
      description: this.description,
      published: this.published,
      }, this.bookId
    );
  }
}
