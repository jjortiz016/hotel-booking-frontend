import { Component } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HotelListeningComponent } from '../hotel-listening/hotel-listening.component';

@Component({
  selector: 'app-home',
  imports: [
      DpDatePickerModule,
      HotelListeningComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  datePickerConfig ={
    format: 'YYYY-MM-DD'
  }
}
