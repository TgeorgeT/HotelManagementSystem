const db = require("../../../models");

async function createBookingResolver(parent, args, context) {
  const { userId, checkInDate, checkOutDate, roomIDs } = args;

  try {
    const rooms = await db.Room.findAll({
      where: { id: roomIDs },
    });

    const totalPrice = rooms.reduce((acc, room) => {
      return acc + room.price;
    }, 0);

    const newBooking = await db.Booking.create({
      userId,
      checkInDate,
      checkOutDate,
      totalPrice,
    });

    if (roomIDs && roomIDs.length > 0) {
      await Promise.all(
        roomIDs.map((roomId) => {
          return db.BookedRooms.create({
            roomId,
            bookingId: newBooking.id,
          });
        })
      );
    }

    return newBooking;
  } catch (error) {
    throw new Error("Error creating booking: " + error.message);
  }
}

module.exports = createBookingResolver;
