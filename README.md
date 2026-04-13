# Pharmacy Category Management System

## Project Details
This Pharmacy Category Management System is designed to help pharmacy businesses manage their inventory, customer data, and sales effectively. It allows for easy categorization of products, tracking of stock levels, and facilitates the management of customer interactions.

## Tech Stack
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
- **Vite**: A modern build tool that provides fast development and optimized production builds.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Setup Guide
1. **Clone the repository**:
   ```bash
   git clone https://github.com/erickystn/projeto_final_bloco_03.git
   cd projeto_final_bloco_03
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the project**:
   ```bash
   npm run dev
   ```
   Open your browser and go to `http://localhost:3000`.

## API Endpoints
- **GET /api/products**: Fetches the list of all products.
- **POST /api/products**: Adds a new product.
- **PUT /api/products/:id**: Updates an existing product by ID.
- **DELETE /api/products/:id**: Deletes a product by ID.

## Components
- **ProductList**: Displays the list of products.
- **ProductForm**: Allows the addition and editing of products.
- **CategoryFilter**: Filters products by their category.

## Troubleshooting
- If you encounter issues during setup, ensure you have the latest version of Node.js installed.
- Check for errors in the terminal for any missing dependencies.

## Contribution Guidelines
1. **Fork the repository**: Click on the fork button at the top right of this page.
2. **Clone your fork**: `git clone https://github.com/your-username/projeto_final_bloco_03.git`
3. **Create a branch**: `git checkout -b feature/your-feature-name`
4. **Make your changes and commit**: `git commit -m 'Added some feature'`
5. **Push to your fork**: `git push origin feature/your-feature-name`
6. **Create a pull request**: Go to the original repository and click on the 'New pull request' button.

## Best Practices
- Write clear and concise commit messages.
- Keep your code DRY (Don't Repeat Yourself).
- Document your code thoroughly.
- Regularly pull updates from the main repository to stay in sync.