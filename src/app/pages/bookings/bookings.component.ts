import { Component, OnInit } from '@angular/core';
import { BookingResumeComponent } from '../../components/booking/booking-resume/booking-resume.component';
import { Booking } from '../../models/booking.model';
import { BookingService } from '../../service/booking.service';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BookingResumeComponent],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit{
  reservas: Booking[] =[];

  constructor(private bookingService: BookingService){}

ngOnInit(): void {
 this.reservas = this.bookingService.getAllBookings();
}

}
