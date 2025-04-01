import { useEffect, useState } from "react";
import axios from "axios";

const user = {
  name: "John Doe",
  totalSavings: 45376.57,
  totalInvestments: 120342.64,
  availableFunds: 10017.46,
  investmentPlans: [
    { type: "Fixed Deposit", amount: 5000, roi: "5% per annum" },
    { type: "Stocks", amount: 3000, roi: "8% per annum" },
  ],
  emergencyFunds: 5840.8,
  savingsPlans: [
    { type: "High-Yield Savings", balance: 5000 },
    { type: "Retirement Savings", balance: 12000 },
  ],
};

type User = typeof user;

const useFetchData = () => {
  const [data, setData] = useState<User | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const url = "https://fobework-api.onrender.com/user"; //input url string once created

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);

        setData(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        setIsLoading(false);
      } catch (error: any) {
        setErrorMsg(error.message);
        setIsLoading(false);
      }
    };

    if (data === null) getData();
  }, []);

  return { data, isLoading, errorMsg };
};

export default useFetchData;
