const db = require("../../../models");

const availableRoomsResolver = async (_, { startDate, endDate }, context) => {
  // Convert string dates to Date objects
  const checkInDate = new Date(startDate);
  const checkOutDate = new Date(endDate);

  if (!context.user) {
    throw new Error("Unauthorized");
  }

  const roomsWithBookings = await db.Room.findAll({
    include: [
      {
        model: db.BookedRooms,
        include: [
          {
            model: db.Booking,
          },
        ],
      },
    ],
  });

  console.log(checkInDate);

  return roomsWithBookings.filter((room) => {
    return (
      room.BookedRooms.filter((bookedRoom) => {
        const booking = bookedRoom.Booking;
        return (
          (booking.checkInDate <= checkInDate &&
            checkInDate <= booking.checkOutDate) ||
          (booking.checkInDate <= checkOutDate &&
            checkOutDate <= booking.checkOutDate) ||
          (checkInDate <= booking.checkInDate &&
            booking.checkInDate <= checkOutDate) ||
          (checkInDate <= booking.checkOutDate &&
            booking.checkOutDate <= checkOutDate)
        );
      }).length === 0
    );
  });
};

module.exports = availableRoomsResolver;
