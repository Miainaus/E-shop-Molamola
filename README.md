# Fullstack E-Commerce Shop Web Application

The Fullstack E-Commerce Shop Web Application is designed to provide users with an engaging shopping experience. It enables users to browse products, view product details, add items to their shopping cart, and make purchases. The application utilizes modern web development practices to ensure a smooth and responsive user interface.

## Features

- **Routing:** The application uses React Router to manage navigation between different pages, including the home page, category product pages, and individual product pages.

- **Styling:** SCSS (Sass) is employed to style the page content, providing a visually appealing and consistent design across the application.

- **Data Fetching:** A custom hook encapsulates Axios data fetching requests, allowing for efficient retrieval of data from the backend.

- **State Management:** Redux Toolkit is used to manage variables within the shopping cart module, ensuring a seamless shopping experience by maintaining consistent state.

- **Backend Data Management:** Strapi, coupled with PostgreSQL, is employed to manage and update backend data, including product information, categories, and user data.

## Technologies Used

- Frontend:
  - React.js
  - React Router
  - SCSS (Sass)
  - Redux Toolkit
  - Axios

- Backend:
  - Strapi
  - PostgreSQL



## Application Structure

```
e-commerce-shop/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── styles/
│   │   ├── redux/
│   │   └── ...
│   └── ...
│
├── backend/
│   ├── config/
│   ├── api/
│   ├── controllers/
│   ├── models/
│   └── ...
│
├── README.md
└── ...
```

## Usage

- Browse the products by visiting different category pages.
- Click on a product to view its details on the individual product page.
- Add items to your shopping cart and proceed to checkout.
- Explore the responsive design on different devices.



Feel free to customize and expand upon this README to fit your project's specific details and requirements. Make sure to include any additional setup instructions, security considerations, or any other information that would be useful to users and contributors.
