import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IntegrationsService } from '../../services/integrations.service';

@Component({
  selector: 'app-add-books',
  imports: [FormsModule],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent {
  @Output() close = new EventEmitter<void>();
  private integrationService=inject(IntegrationsService);
    title='';
    description= '';
    published= true;
  onSubmit(){
    this.integrationService.postData ({
      title: this.title,
      description: this.description,
      published: this.published,
      }
    );
    this.close.emit();
  }
onCancel() {
    this.close.emit();
  
}
}
