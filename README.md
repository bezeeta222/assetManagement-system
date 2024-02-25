# Fund Management System(AHAM capital interview)

fund management system built with Nuxt.js and Nuxt UI.

## Feature Set for Financial Application

1. **Authentication Integration:**
   - Enable users to log in securely using their GitHub or Google accounts through OAuth authentication.

2. **Comprehensive Fund Data:**
   - Store detailed fund information including name, description, investment type, performance history, and current Net Asset Value (NAV) in the database.

3. **Historical Performance Visualization:**
   - Display fund performance over time through interactive charts, leveraging libraries like Chart.js or D3.js.

4. **Fund Comparison Tools:**
   - Provide users with intuitive tools to compare various funds, facilitating informed investment decisions based on historical performance data.

5. **Unit Purchase Capability:**
   - Allow users to purchase fund units securely within the platform, managing transactions and updating their portfolios accordingly.

6. **Transaction History Tracking:**
   - Maintain a comprehensive record of fund transactions, enabling users to review their transaction history effortlessly.

7. **Efficient Portfolio Management:**
   - Empower users to manage their investment portfolios effectively, including real-time tracking of holdings and their corresponding values.

8. **Total Investment Assessment:**
   - Calculate and display the total value of user investments based on current market prices, offering insights into overall portfolio performance.

9. **Account Balance Management:**
   - Facilitate seamless management of user account balances, with features for depositing and withdrawing funds as needed.

10. **Transparent Balance Transaction History:**
    - Provide users with visibility into their account balance transaction history, ensuring transparency and accountability.

11. **Detailed Fund Insights with Visuals:**
    - Offer users comprehensive insights into individual funds, complete with detailed charts illustrating historical performance trends.

12. **Mock Fund Data Integration:**
    - Integrate mock fund data seamlessly using a Nuxt Nitro server and SQLite database, ensuring realistic data representation.

13. **ORM Utilization with Drizzle-ORM:**
    - Leverage the power of Drizzle-ORM for efficient object-relational mapping with the SQLite database, simplifying data manipulation and retrieval processes.

By implementing these features systematically, your financial application can provide users with a robust platform for managing investments, analyzing fund performance, and making informed financial decisions.


## Tech Stack

- Nuxt.js - Framework
- Nuxt UI - UI Library
- Nitro - Backend Server
- Better-sqlite3 - Database
- Drizzle ORM - ORM
- Apexcharts - Chart
- Authjs-nuxt - Authentication
- Tailwind CSS - Styling

## Requirements

- Node.js (>= v20.x)
- Pnpm (>= v8.x)

## Installation Steps

1. Begin by cloning the repository to your local machine.
2. Duplicate the `.env` file from `.env.example` and ensure all necessary environment variables are filled in.
3. Install the required dependencies for the application.
4. Generate and seed the database with mock data to populate it with initial values.
5. Start the development server to run the application and begin testing or development work.


## Step-by-step

Start the development server on `http://localhost:3000`:

```bash

cp .env.example .env

pnpm install

pnpm run db:all # For generating, deploying migrations and seeding

pnpm run dev # For starting the development server

```

If you need to start over with new data, you can run the following commands:

```bash

pnpm run db:reset

```

Then, run the following command again to generate and seed the database with mock data:

```bash

pnpm run db:all

```

## deployment is not in the requirement 
