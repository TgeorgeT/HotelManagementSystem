const db = require("../../../models");

const createBookingResolver = async (_, { booking }, context) => {
    // const { userId, sizeTwoRoomCount, sizeFourRoomCount, checkInDate, checkOutDate } = booking;

    // // checking if we are logged in or the roles of the logged in user after updating user schema
    // if (context.user) {

    //     // validate the booking object
    //     const validationError = validateBooking(booking);
    //     if (validationError.length > 0) {
    //         return {
    //             "error": validationError
    //         };
    //     }

    //     // check if there are available rooms for the given dates
    //     // const availableSizeTwoRooms = await db.Room.find({

    //     // });



    //     // if (availableRooms.length === 0) {
    //     //     return {
    //     //         "error": "No available rooms for the given dates."
    //     //     };
    //     // }

    //     // const newBooking = await db.Booking.create({
    //     //     userId,
    //     //     sizeTwoRoomCount,
    //     //     sizeFourRoomCount,
    //     //     checkInDate,
    //     //     checkOutDate,
    //     // });

    //     return newBooking;
    // } else {
    //     return "Unauthorized!";
    // }
};