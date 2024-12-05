import { Component } from '@angular/core';
import { BookingFormComponent } from "../../components/booking/booking-form/booking-form.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [BookingFormComponent, HeaderComponent, FooterComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

}
