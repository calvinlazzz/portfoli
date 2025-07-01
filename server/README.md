# Portfolio Server

This is the server-side application for the portfolio project. It is built using Node.js and Express, providing a RESTful API for the client-side application.

## Getting Started

To get started with the server, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio-app/server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   npm start
   ```

   The server will start on `http://localhost:5000` by default.

## API Endpoints

The server exposes the following API endpoints:

- `GET /api/portfolio`: Retrieves the portfolio data.
- `POST /api/portfolio`: Adds a new portfolio item.
- `PUT /api/portfolio/:id`: Updates an existing portfolio item.
- `DELETE /api/portfolio/:id`: Deletes a portfolio item.

## Folder Structure

- `src/app.js`: Main application file where the Express server is set up.
- `src/routes/api.js`: Contains the API routes for handling requests.

## Deployment

To deploy the server, ensure that you have the necessary environment variables set up and follow the instructions in the `render.yaml` file for deployment on Render. 

## License

This project is licensed under the MIT License. See the LICENSE file for details.