import { Component, Input, OnInit } from '@angular/core';
import { Booking, BookingStatus } from '../../../models/booking.model';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-booking-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-resume.component.html',
  styleUrl: './booking-resume.component.css'
})
export class BookingResumeComponent implements OnInit{
reservas: Booking[] = [];
booking: any;

constructor(private bookingService: BookingService){}
  ngOnInit(): void {
    this.reservas = this.bookingService.getAllBookings();
  }

  eliminarReserva(id: number) {
    this.bookingService.deleteBookingById(id)
  }
}
