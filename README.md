# node-class-demo

## [NASA API Web Application](https://api.nasa.gov/)

## Overview

This web application fetches and displays data from the NASA API using Axios. It showcases the Astronomy Picture of the Day (APOD) with its title, owner(copyright), image, description, and date. The application is built using Node.js, Express, and EJS for templating. It's styled using Bootstrap to ensure a responsive and modern design.

## Features

- Fetches data from the NASA API using Axios.
- Displays the title, image, owner(copyright), description, and date of the APOD.
- Error handling for potential issues with the API request.

## Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/mariamills/node-class-demo.git
```

2. Navigate to the project directory:

```bash
cd node-class-demo
```

3. Install the required dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your NASA API key:

```
NASA_API_KEY=your_api_key_here
```

5. Start the application:

```bash
node index.js
```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Deployment / Demo

The application is deployed on [Render](https://render.com/). See it live [here](https://node-class-demo.onrender.com/)

## Contributing

Pull requests are welcome.
