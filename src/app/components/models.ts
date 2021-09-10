
export interface IHotel {
    hotelName: string;
    rating: number;
    city: string;
    thumbnail: string;
    guestrating: number;
    ratings: {
        no: number;
        text: string;
    };
    mapurl: string;
    filters: string[];
    price: number;
}
