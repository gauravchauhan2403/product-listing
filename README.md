# Product Listing Application

This project is a React-based product listing application built as part of a frontend engineering assessment.  
It allows user to browse products, apply filters, view product details, and navigate through paginated results.

The application focuses on clean architecture, performance optimizations, and a good user experience.

---

# Tech Stack

- React (Vite)
- Tailwind CSS
- React Router
- DummyJSON API
- JavaScript (ES6+)

---

# Setup Instructions

Follow the steps below to run the project locally.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-folder>
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Run the development Server

```bash
npm run dev
```
## Application Features

- Product listing page
- Pagination support
- Category filtering
- Brand filtering
- Product detail page
- Skeleton loading UI (Shimmer UI)
- Code splitting with lazy loading
- Responsive UI with Tailwind CSS

## Assumptions Made

1. The API used for products is the DummyJSON API and is assumed to be reliable for the scope of this assignment.
2. Pagination is handled on the frontend using the API's limit and skip parameters.
3. Filters such as category and brand are applied client-side after fetching the product list.
4. Product images and data provided by the API are assumed to be valid.
5. Only core features required for the assignment were prioritized over advanced ecommerce features like authentication or cart management.

## Architectural Decisions
- Several architectural decisions were made to keep the project maintainable and scalable.
1. Service Layer for Api Calls

2. Custom Hooks for Data fetching
3. Component based folder structure
4. Code Splitting

## Improvements which can be made

- Global State management using Redux or Zustand
- Better error Handling including error boundaries, Api error states
- More FIlters can be added such as based on rating, sort(low to high, high to low)
- UI can also be improved
- Testcases can be added using React testing library and Jest

#### The goal of this project was to implement a clean, maintainable frontend architecture while focusing on user experience and performance optimizations. The implementation prioritizes readability, modularity, and scalability while keeping the solution simple and practical. <3