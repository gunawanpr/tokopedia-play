# Tokopedia Play (Mid Term) Documentation

## Introduction

This repository for backend Mid Term Project of the course "Generasi Gigih 3.0" role Fullstack Engineering
GG3FSGP0342_Gunawan Pratama

## Database Schema

### Video

```
{
    "_id": objectId("string"),
    "videoId: "Number",
    "urlImg": "String"
}
```

### Product

```
{
     "_id": objectId("string"),
     "videoId": "Number",
     "productId": "Number",
     "urlProduct": "String",
     "title": "String",
     "price": "Number"
 }
```

### Comment

```
{
     "_id": objectId("string"),
     "videoId": "Number",
     "username": "String",
     "comment": "String",
     "timeStamp": Date,
 }
```

## API Structure

As shown in the image above, the API structure is as follows:

- `User` who uses or sends the request

- `Backend` is the backend server that will serve the API using Node JS and Express JS

- `Database` is the database that will store the data using MongoDB

inside the `Backend` there are 5 layers:

`Routes:`
the server responds to incoming client requests. They map URLs and HTTP methods to corresponding handler functions, which are executed when the request matches the defined route. Routes determine how the server handles different types of requests from clients.

`Models:`
he representation of a data structure used in the application. It represents an entity or object that will be stored and retrieved from the MongoDB database. The model helps organize data and provides methods to interact with it, such as saving atau retrieving.

## List APIs

- `GET` http://localhost:3000/play/videos
- `GET` http://localhost:3000/play/videos/:videoId
- `GET` http://localhost:3000/play/videos/:videoId/comments
- `GET` http://localhost:3000/play/videos/:videoId/product
- `POST` http://localhost:3000/play/videos/new
- `POST` http://localhost:3000/play/videos/:videoId/comments
- `POST` http://localhost:3000/play/videos/:videoId/product


## Installation

### Prerequisites

Before you proceed with the installation, make sure you have Node.js and MongoDB

### Steps to Install

Follow these steps to install and run the tokopedia-play:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd tokopedia-play
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

5. Open your web browser and go to `http://localhost:3000` to view the API.
