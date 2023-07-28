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

inside the `Backend` there are 2 layers:

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

### GET /play/videos

This API will return a list of videos.

- URL Params:
  - None
- Data Params:
  - None
- Headers:
  - Content-Type: application/json
- Success Response

  - Code: 200
  - Content:

  ```json
  [
    {
      "_id": "String",
      "videoId": "Number",
      "urlImg": "String",
      "comments": [
        "String",
        "String"
      ],
      "products": [
        "String",
        "String"
      ],
    }
  ]
  ```

### GET /play/videos/:videoId

This API will return a video with the specified id.

- URL Params:
  - required: `videoId=[String]`
- Data Params:
  - None
- Headers:
  - Content-Type: application/json
- Success Response

  - Code: 200
  - Content:

  ```json
  {
    "_id": "String",
    "videoId": "Number",
    "urlImg": "String",
    "comments": [
      "String",
      "String"
    ],
    "products": [
      "String",
      "String"
    ],
  }
  ```

- Error Response

  - Code: 404
  - Content:

  ```json
  {
    "message": "Data yang dicari tidak ada!"
  }
  ```

### GET /play/videos/:videoId/comments

This API will return a list of comments that are related to the video with the specified id.

- URL Params:
  - required: `videoId=[String]`
- Data Params:
  - None
- Headers:
  - Content-Type: application/json
- Success Response

  - Code: 200
  - Content:

  ```json
  [
    {
      "_id": "String",
      "videoId": "Number",
      "username": "String",
      "comment": "String",
      "timestamp": "Date"
    },
    {
      "_id": "String",
      "videoId": "Number",
      "username": "String",
      "comment": "String",
      "timestamp": "Date"
    }
  ]
  ```

### GET /play/videos/:videoId/product

This API will return a list of product that are related to the video with the specified id.

- URL Params:
  - required: `videoId=[String]`
- Data Params:
  - None
- Headers:
  - Content-Type: application/json
- Success Response

  - Code: 200
  - Content:

  ```json
  [
    {
      "_id": "String",
      "videoId": "Number",
      "productId": "Number",
      "urlProduct": "String",
      "title": "String",
      "price": "Number"
    },
    {
      "_id": "String",
      "videoId": "Number",
      "productId": "Number",
      "urlProduct": "String",
      "title": "String",
      "price": "Number"
    }
  ]
  ```

### POST play/videos/new

This API will create a comment associated with the video with the specified id.

- URL Params:
  - required: 
- Data Params:
  ```json
  {
    "videoId": "Number",
    "urlImg": "String"
  }
  ```
- Headers:
  - Content-Type: application/json
- Success Response

  - Code: 200
  - Content:

  ```
  Video ditambahkan!
  ```

  - Error Response

  - Code: 400
  - Content:

  ```json
  {
    "message": "Semua data harus diisi dengan sesuai!"
  }
  ```

### POST play/videos/:videoId/comments

This API will create a comment associated with the video with the specified id.

- URL Params:
  - required: `videoId=[String]`
- Data Params:
  ```json
  {
    "username": "String",
    "comment": "String"
  }
  ```
- Headers:
  - Content-Type: application/json
- Success Response

  - Code: 200
  - Content:

  ```
  Komentar ditambahkan pada video 1!
  ```

  - Error Response

  - Code: 400
  - Content:

  ```json
  {
    "message": "Semua data harus diisi dengan sesuai!"
  }
  ```

## Installation

### Prerequisites

Before you proceed with the installation, make sure you have Node.js and MongoDB

### Steps to Install

Follow these steps to install and run the tokopedia-play:

1. Clone the repository:

   ```bash
   git clone https://github.com/gunawanpr/tokopedia-play.git
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
