# Portfolio Application

This is a full-stack portfolio application built with JavaScript. The project consists of a client-side React application and a server-side Express application. It is designed to be easily extendable with modern styling and animations.

## Project Structure

```
portfolio-app
├── client                # Client-side React application
│   ├── public            # Public assets
│   │   └── index.html    # Main HTML file
│   ├── src               # Source files for React app
│   │   ├── App.js        # Main component
│   │   ├── components     # React components
│   │   │   └── Navbar.js  # Navigation bar component
│   │   ├── styles        # CSS styles
│   │   │   └── main.css   # Main stylesheet
│   │   └── index.js      # Entry point for React app
│   ├── package.json      # Client package configuration
│   └── README.md         # Client documentation
├── server                # Server-side Express application
│   ├── src               # Source files for server
│   │   ├── app.js        # Main server file
│   │   └── routes        # API routes
│   │       └── api.js    # API route definitions
│   ├── package.json      # Server package configuration
│   └── README.md         # Server documentation
├── .gitignore            # Git ignore file
├── README.md             # General project documentation
└── render.yaml           # Deployment configuration for Render
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd portfolio-app
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd server
   npm install
   ```

### Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the client:
   ```
   cd client
   npm start
   ```

The client application will be available at `http://localhost:3000` and the server will run on `http://localhost:5000`.

### Deployment

This application can be deployed to Render using the provided `render.yaml` configuration file. Follow the instructions in the Render documentation to set up your deployment.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for details.