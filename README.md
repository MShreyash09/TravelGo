![Alt text for the logo](../public/travelgo-logo.png)


# TravelGo 🌍

A modern, full-stack travel and destination booking platform designed to help users explore, review, and book their dream vacations.

## 🚀 Features

- **User Authentication:** Secure user registration and login utilizing JWT and bcrypt.
- **Explore Destinations:** Browse a wide variety of travel destinations, complete with detailed descriptions and images.
- **Multilingual Support:** Implemented **Sarvam AI API** to provide dynamic translation and multi-language support for regional Indian languages.
- **Seamless Booking & Payments:** Integrated with **Stripe** for reliable and secure checkout/payment processing.
- **User Reviews & Ratings:** Users can read and leave reviews on different travel destinations.
- **Admin Dashboard:** A dedicated admin panel for managing destinations, handling image uploads (via Multer), and viewing user contacts.
- **Responsive UI:** A clean, professional, and fully responsive user interface built using React and Styled Components.

## 🛠️ Tech Stack

**Frontend:**
- **React.js** (Bootstraped with Vite)
- **React Router** for seamless navigation
- **Styled Components** for scoped, maintainable CSS
- **React Hot Toast** for user-friendly notifications

**Backend:**
- **Node.js** & **Express.js** for the RESTful API
- **MongoDB** with **Mongoose** for data storage and modeling
- **JWT** (JSON Web Tokens) for secure authentication
- **Stripe** for payment gateway integration
- **Multer** for handling local image uploads

## 📂 Project Structure

```text
simple-travelgo/
├── client/          # Frontend React application (Vite)
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Application views/pages
│   │   └── ...
│   └── package.json
└── server/          # Backend Express application
    ├── config/      # Database and environment configurations
    ├── controllers/ # Route logic handlers
    ├── models/      # Mongoose database schemas
    ├── routes/      # API route definitions
    ├── uploads/     # Statically served uploaded images
    └── server.js    # Entry point for the backend
```

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running locally, or an Atlas URI.
- A [Stripe](https://stripe.com/) account for testing payments.
- [Sarvam AI](https://www.sarvam.ai/) API access for multi-language translation.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MShreyash09/simple-travelgo.git
   cd simple-travelgo
   ```

2. **Setup the Backend:**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `/server` directory and add your environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   # Add Sarvam API keys if required by your controller
   ```
   Start the backend development server:
   ```bash
   npm run dev
   ```

3. **Setup the Frontend:**
   Open a new terminal window and navigate to the client folder:
   ```bash
   cd client
   npm install
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```

The frontend should now be running on `http://localhost:5173` and the backend strictly on `http://localhost:5000`.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.

## 📝 License

This project is licensed under the ISC License.
