import { IHotel } from '../models';

let h1: IHotel = {
  hotelName: 'Hotel Lancaster',
  rating: 4,
  city: 'Paris',
  thumbnail:
    'http://comerciodearrecife.com/wp-content/uploads/hotel-prueba-1.jpg',
  guestrating: 4,
  ratings: {
    no: 8.8,
    text: 'Excellent',
  },
  mapurl:
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83998.94722687619!2d2.277019841665155!3d48.8588377391234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1554987763683!5m2!1sen!2sgr',
  filters: [
    'Car Park',
    'Sauna',
    'Pool',
    'Wifi',
    'Balcony'
  ],
  price: 706,
};

let h2: IHotel = {
  hotelName: 'Prince de Galles',
  rating: 5,
  city: 'Toulouz',
  thumbnail:
    'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,f_auto,h_450,q_auto:eco,w_450/itemimages/42/88/42886_v5.jpeg',
  guestrating: 4,
  ratings: {
    no: 9.0,
    text: 'Excellent',
  },
  mapurl:
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83998.94722687619!2d2.277019841665155!3d48.8588377391234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1554987763683!5m2!1sen!2sgr',
  filters: [
    'Car Park',
    'Sauna',
    'Pool' ],
  price: 1213,
};

let h3: IHotel = {
  hotelName: 'Hotel Hilton',
  rating: 5,
  city: 'Marseille',
  thumbnail:
    'https://cdn.hotelplanner.com/Common/Images/_HotelPlanner/Home-Page/fade/sld6.jpg',
  guestrating: 4.9,
  ratings: {
    no: 9.8,
    text: 'Excellent',
  },
  mapurl:
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83998.94722687619!2d2.277019841665155!3d48.8588377391234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1554987763683!5m2!1sen!2sgr',
  filters: [
    'Pool',
    'Wifi',
    'Balcony'],
  price: 1500,
};

let h4: IHotel = {
  hotelName: 'Hotel Hilton',
  rating: 5,
  city: 'Paris',
  thumbnail:
    'https://www.hotel-board.com/picture/hilton-paris-opera-hotel-3210196.jpg',
  guestrating: 3.9,
  ratings: {
    no: 9.8,
    text: 'Excellent',
  },
  mapurl:
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83998.94722687619!2d2.277019841665155!3d48.8588377391234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1554987763683!5m2!1sen!2sgr',
  filters: [
    'Car Park',
    'Sauna',
    'Pool',
    'Wifi',
  ],
  price: 1500,
};

export let hotels: IHotel[] = [h1, h2, h3, h4];
