module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Recruiter connected:', socket.id);

    socket.on('updateStatus', (data) => {
      io.emit('outreachUpdate', data); // Broadcast to all clients
    });

    socket.on('disconnect', () => {
      console.log('Recruiter disconnected:', socket.id);
    });
  });
};
