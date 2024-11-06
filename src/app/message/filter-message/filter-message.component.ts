import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-filter-message',
  standalone: true,
  imports: [MatIcon, FormsModule],
  templateUrl: './filter-message.component.html',
  styleUrl: './filter-message.component.scss',
})
export class FilterMessageComponent {
  @Output() filterByTopicNameChange = new EventEmitter<string>();
  @Input() filterTerm: string = '';

  emitFilterTopicNameChange(event: Event) {
    const inputel = event.target as HTMLInputElement;
    this.filterTerm = inputel.value;
    this.filterByTopicNameChange.emit(this.filterTerm);
  }
}
