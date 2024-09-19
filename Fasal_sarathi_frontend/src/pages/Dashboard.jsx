import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { apiClient } from "../lib/api-client";

// Chart.js setup
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { CURRENT_USER_ROUTES, HISTORY_ROUTES } from "../utils/constrants";
import { Link } from "react-router-dom";
import { Button, ErrorPage, LoadingPage } from "../components/index.js";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice/authThunk";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await apiClient.get(CURRENT_USER_ROUTES, {
          withCredentials: true,
        });
        setUser(response.data.user);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    const fetchHistoryData = async () => {
      try {
        const response = await apiClient.get(HISTORY_ROUTES, {
          withCredentials: true,
        });
        setHistoryData(response.data.predictions);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserData();
    fetchHistoryData();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  // Bar chart data for Nutrients (N, P, K)
  const nutrientChartData = {
    labels: ["Nitrogen (N)", "Phosphorus (P)", "Potassium (K)"],
    datasets: [
      {
        label: "Nutrient Levels",
        data: [
          historyData[0]?.PresentN,
          historyData[0]?.PresentP,
          historyData[0]?.PresentK,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:fixed lg:top-0 lg:w-full">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/5 bg-[#055c43] text-white flex flex-col px-6 py-4 lg:py-14">
        {/* User Profile Section */}
        <div className="flex flex-col items-center mb-6">
          {/* User Profile */}
          <img
            className="w-24 h-24 rounded-full mb-4"
            src={user?.picture || "https://via.placeholder.com/150"}
            alt="User Profile"
          />
          <h3 className="text-lg font-semibold">
            {user?.fullName || "User Name"}
          </h3>
          <p className="text-gray-400">{user?.email || "user@example.com"}</p>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-grow">
          <ul>
            <li className="mb-4">
              <Link
                to="/"
                className="text-white hover:bg-green-700 p-2 block rounded-lg"
              >
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/dashboard"
                className="text-white hover:bg-green-700 p-2 block rounded-lg"
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/history"
                className="text-white hover:bg-green-700 p-2 block rounded-lg"
              >
                History
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="#"
                className="text-white hover:bg-green-700 p-2 block rounded-lg"
              >
                Settings
              </Link>
            </li>
            <li className="mb-4">
              <Button
                onClickHandler={() => dispatch(logout())}
                className="text-white hover:bg-red-700 p-2 block rounded-lg w-full text-start"
                btnname={"Logout"}
              />
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-4/5 bg-gray-100 p-6 lg:overflow-y-scroll h-screen lg:h-[100vh]  lg:no-scrollbar">
        <div className="sticky top-0 mb-6 backdrop-blur-sm">
          <h1 className="text-3xl font-extrabold ">Dashboard</h1>
        </div>

        {/* Dashboard Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-100 shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-extrabold mb-2">Crop Type</h3>
            <p className="text-xl font-semibold">
              {historyData[0]?.CropType || "N/A"}
            </p>
          </div>
          <div className="bg-green-100 shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-extrabold mb-2">Soil Type</h3>
            <p className="text-xl font-semibold">
              {historyData[0]?.SoilType || "N/A"}
            </p>
          </div>
          <div className="bg-yellow-100 shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-extrabold mb-2">Fertilizer Used</h3>
            <p className="text-xl font-semibold">
              {historyData[0]?.fertilizer_name || "N/A"}
            </p>
          </div>
        </div>

        {/* Nutrient Levels Bar Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Nutrient Levels (N, P, K)</h2>
          <Bar data={nutrientChartData} />
        </div>

        {/* Recent History Section */}
        <div className="bg-gray-100 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">History</h2>
          <ul>
            {historyData && historyData.length > 0 ? (
              <>
                {/* Table for larger screens */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th className="py-2 px-3 border-b-2">Date</th>
                        <th className="py-2 px-3 border-b-2">Crop Type</th>
                        <th className="py-2 px-3 border-b-2">Soil Type</th>
                        <th className="py-2 px-3 border-b-2">Fertilizer Name</th>
                        <th className="py-2 px-3 border-b-2">Fertilizer Quantity</th>
                        <th className="py-2 px-3 border-b-2">Nutrients (N, P, K)</th>
                        <th className="py-2 px-3 border-b-2">Moisture</th>
                        <th className="py-2 px-3 border-b-2">Humidity</th>
                        <th className="py-2 px-3 border-b-2">Temperature</th>
                      </tr>
                    </thead>
                    <tbody>
                      {historyData?.map((item, index) => (
                        <tr key={index} className="text-center font-normal">
                          <td className="py-2 px-4 border-b">
                            {new Date(item?.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-2 px-4 border-b">{item?.CropType}</td>
                          <td className="py-2 px-4 border-b">{item?.SoilType}</td>
                          <td className="py-2 px-4 border-b">{item?.fertilizer_name}</td>
                          <td className="py-2 px-4 border-b">
                            ({item?.fertilizer_quantity} kg per acre)
                          </td>
                          <td className="py-2 px-4 border-b">
                            N: {item?.PresentN}, P: {item?.PresentP}, K: {item?.PresentK}
                          </td>
                          <td className="py-2 px-4 border-b">{item?.Moisture} %</td>
                          <td className="py-2 px-4 border-b">{item?.Humidity} %</td>
                          <td className="py-2 px-4 border-b">{item?.Temparature} °C</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Cards for mobile view */}
                <div className="md:hidden grid gap-4">
                  {historyData?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md border"
                    >
                      <h3 className="font-semibold text-lg mb-2">
                        {new Date(item?.createdAt).toLocaleDateString()}
                      </h3>
                      <p>
                        <span className="font-semibold">Crop Type:</span>{" "}
                        {item?.CropType}
                      </p>
                      <p>
                        <span className="font-semibold">Soil Type:</span>{" "}
                        {item?.SoilType}
                      </p>
                      <p>
                        <span className="font-semibold">Fertilizer:</span>{" "}
                        {item?.fertilizer_name} ({item?.fertilizer_quantity} kg/acre)
                      </p>
                      <p>
                        <span className="font-semibold">Nutrients:</span> N:{" "}
                        {item?.PresentN}, P: {item?.PresentP}, K: {item?.PresentK}
                      </p>
                      <p>
                        <span className="font-semibold">Moisture:</span> {item?.Moisture} %
                      </p>
                      <p>
                        <span className="font-semibold">Humidity:</span> {item?.Humidity} %
                      </p>
                      <p>
                        <span className="font-semibold">Temperature:</span>{" "}
                        {item?.Temparature} °C
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p>No history available.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
