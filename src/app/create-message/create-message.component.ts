import { Component, inject, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { NgClass, NgIf } from '@angular/common';
import { AppService } from '../../service/app.service';
import { CreateMessageDto } from '../../dto/createMessageDto';

@Component({
  selector: 'app-create-message',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButton,
    NgIf,
    NgClass,
  ],
  templateUrl: './create-message.component.html',
  styleUrl: './create-message.component.scss',
})
export class CreateMessageComponent {
  selectBuyerOptions = [
    { name: 'Please choose', value: null },
    { name: 'BM Tech Team', value: 63 },
  ];
  private _fb = inject(FormBuilder);
  private _appservice = inject(AppService);

  isSuccessFull: boolean = false;

  createMessageForm: FormGroup = this._fb.group({
    name: [null, Validators.required],
    referenceID: ['Please choose', Validators.required],
  });

  saveForm() {
    const messageDto = new CreateMessageDto(
      this.createMessageForm?.value.name,
      this.createMessageForm?.value.referenceID
    );

    this._appservice.postMessage(messageDto).subscribe({
      next: (res) => {
        this.isSuccessFull = true;
      },
      error: (error) => {
        this.isSuccessFull = false;
        console.log(error.message);
      },
    });
  }
}
