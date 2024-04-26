# Free Car Box - Server

This repository contains the RESTFUL API with SOCKETS logic created with Express x Mongoose to have a Parking System containing:

-   Parking Lots (public/private locations to park in)
-   Areas (clusters of parking layer/boxes inside the parking lot with a clear separation) ! UPDATED IN REAL TIME
-   Boxes (the actual parking spots for cars) ! UPDATED IN REAL TIME
-   Box Entries (used to check if a box is available, and to calculate hours of occupancy)

To execute:

1. Make sure the environment has all variables as needed.

2. Install every dependency.

```
npm install
```

3. Start server.

```
npm start
```

4. Exposed ports from the server:
- PORT: RESTful API
- SOCKETPORT: Socket Communication
