# Free Car Box - Server

This repository contains the RESTFUL API logic created with Express x Mongoose to have a Parking System containing:

- Parking Lots (public/private locations to park in)
- Lot Areas (clusters of parking layer/boxes inside the parking lot with a clear separation)
- Area Layers (lower, base, and higher floors)
- Layer Boxes (the actual parking spots for cars)
- Box Entries (used to check if a box is available, and to calculate hours of occupancy)

## The goals to achieve with this server:

-   [x] Connected to MongoDB Cloud
-   [x] Available in Github
-   [x] Pulled into EC2
-   [x] Works with any Computer with WiFi Module
-   [x] Has \* Endpoints as planned

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
