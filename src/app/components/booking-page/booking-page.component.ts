import { Component, OnInit } from '@angular/core';
import { IHotel } from '../models';
import { hotels } from './mockUp';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
})
export class BookingPageComponent implements OnInit {
  price = {
    defaultValue: 706,
    min: 706,
    max: 1500,
    step: 10,
  };

  inputValue: number[] = [0, 1500];

  roomTypes: string[] = ['Single', 'Family Rooms', 'Double'];

  ratingStars: number[] = [1, 2, 3, 4, 5];

  guestRating: string[] = ['Okay', 'Fair', 'Good', 'Very Good', 'Excellent'];

  amentities: string[] = ['Car Park', 'Sauna', 'Pool', 'Wifi', 'Balcony'];

  hotelLocation: string[] = ['Paris', 'Toulouz', 'Marseille'];

  Hotels: IHotel[] = hotels;

  filteredHotels: IHotel[] = hotels;

  userSearch!: string;

  propertyType!: string;

  guestRatings!: string;

  location!: string;

  amentity!: string;

  constructor() {}

  ngOnInit(): void {}

  resetFilteredHotels(): void {
    this.filteredHotels = this.Hotels;
  }

  searchByCity(): void {
    this.resetFilteredHotels();
    if (this.userSearch) {
      this.filteredHotels = this.filteredHotels.filter((x) =>
        x.city.toUpperCase().includes(this.userSearch.toUpperCase())
      );
    }
  }


  filterPrice(): void {
    this.resetFilteredHotels();
    this.filteredHotels.forEach(hotel => {
      if (hotel.price >= this.inputValue[0] && hotel.price <= this.inputValue[1]) {
        this.filteredHotels = this.filteredHotels.filter(
        (x) => x.price >= this.inputValue[0] && hotel.price <= this.inputValue[1]
        )
      }
    }); 
  }

  filter(): void {
    this.resetFilteredHotels();

    //filter by hotel's stars
    if (this.propertyType != 'All') {
      this.filteredHotels = this.filteredHotels.filter((x) =>
        x.rating.toString().includes(this.propertyType)
      );
    }

    //filter by guest rating
    if (this.guestRatings != 'All') {
      this.filteredHotels = this.filteredHotels.filter((x) =>
        x.ratings.text.toUpperCase().includes(this.guestRatings.toUpperCase())
      );
    }

    //filter by city
    if (this.location != 'All') {
      this.filteredHotels = this.filteredHotels.filter((x) =>
        x.city.toUpperCase().includes(this.location.toUpperCase())
      );
    }
  }

  filterAmentities(): void {
    this.resetFilteredHotels();
    //filter amentities
    if (this.amentity != 'Amentities') {
      this.filteredHotels = this.filteredHotels.filter((x) =>
        // x.city.toUpperCase().includes(this.amentity.toUpperCase())
        x.filters.includes(this.amentity)
      );
    }
  }
}
