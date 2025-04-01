# Frontend for Fobework Assessment

This repository contains the frontend implementation for the Fobework assessment project. The frontend is built using React and integrates with a backend API that serves dummy data.

## Technologies Used
- React
- TypeScript
- Axios
- Tailwind CSS v4
- React redux
- React router
- Shadcn
- Lucide react icons

## Features
- User authentication (handled with a simple boolean state for demonstration)
- Fetching and displaying financial data
- UI components for savings, investments, and available funds

## Backend API
The backend API was built separately to serve dummy data. It provides the following fields for a user object:
- `name`
- `totalSavings`
- `totalInvestments`
- `availableFunds`
- `investmentPlans`
- `emergencyFunds`
- `savingsPlans`

## Running the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/wobiR99/fobework-frontend-assessment.git
   ```
2. Navigate into the project directory:
   ```sh
   cd FOBEWORK-FRONTEND-ASSESSMENT
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## API Integration
Ensure the backend API is running and update the frontend to use the correct API URL.

## Deployment
The frontend can be deployed using platforms like Vercel .

## Author
Obi Ifeanyi

## License
MIT License

