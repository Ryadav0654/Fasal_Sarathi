import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
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
  ArcElement,
} from "chart.js";
import { Link } from "react-router-dom";
import { Button, LoadingPage } from "../components/index.js";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import {logout} from "../redux/slice/AuthSlice"
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import {HISTORY_ROUTES, LOGOUT_ROUTE} from "../utils/constrants"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, status } = await apiClient.get(
          HISTORY_ROUTES,
          {}
        );
        // console.log("user/predictions", data);
        if (data && status === 200) {
          setHistoryData(data.user.predictionHistory.reverse());
          setUser({
            fullName: data.user.fullName,
            email: data.user.email,
          });
        }
      } catch (error) {
        setLoading(false);
        if (isAxiosError(error)) {
          console.log(error.response);
          toast.error(error.response.data.message);
        } else {
          console.log("getUserdata error", error);
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    try {
      const {data, status} = apiClient.post(LOGOUT_ROUTE, {});
      if (data && status === 200) {
        toast.success(data.message);
        dispatch(logout());
        navigate("/");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response);
        toast.error(error.response.data.message);
      } else {
        console.log("logout error", error);
        toast.error(error);
      }
    }
  };

  if (loading) {
    return <LoadingPage />;
  }

  // Bar chart data for Nutrients (N, P, K)
  const nutrientChartData = {
    labels: ["Nitrogen (N)", "Phosphorus (P)", "Potassium (K)"],
    datasets: [
      {
        label: "Nutrient Levels",
        data: [
          historyData[0]?.PresentN || 0,
          historyData[0]?.PresentP || 0,
          historyData[0]?.PresentK || 0,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 2,
        borderRadius: 6,
        barPercentage: 0.5,
      },
    ],
  };

  // Aggregate crop type counts for pie chart
  const cropTypeCounts = historyData.reduce((acc, curr) => {
    if (curr.CropType) {
      acc[curr.CropType] = (acc[curr.CropType] || 0) + 1;
    }
    return acc;
  }, {});

  // Pie chart data for Crop Type distribution
  const cropPieData = {
    labels: Object.keys(cropTypeCounts),
    datasets: [
      {
        label: "Crop Type Count",
        data: Object.values(cropTypeCounts),
        backgroundColor: [
          "#34d399", // emerald-400
          "#fbbf24", // yellow-400
          "#3b82f6", // blue-500
          "#f87171", // red-400
          "#a78bfa", // purple-400
          "#6b7280", // gray-500
        ],
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  };

  // Pie chart options
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 15,
          padding: 15,
          font: { size: 14, weight: "bold" },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed}`,
        },
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:fixed lg:top-0 lg:w-full">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/5 bg-[#065f46] text-white flex flex-col px-6 py-6 lg:py-14">
        {/* User Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-white shadow-md"
            src={user?.picture || "./user-image.jpg"}
            alt="User Profile"
          />

          <h3 className="text-lg font-semibold">
            {user?.fullName || "User Name"}
          </h3>
          <p className="text-gray-300 text-sm truncate max-w-full text-center">
            {user?.email || "user@example.com"}
          </p>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-grow">
          <ul>
            <li className="mb-3">
              <Link
                to="/"
                className="text-white hover:bg-green-700 p-3 block rounded-lg transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="/dashboard"
                className="text-white hover:bg-green-700 p-3 block rounded-lg transition-colors duration-200"
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="#"
                className="text-white hover:bg-green-700 p-3 block rounded-lg transition-colors duration-200"
              >
                Settings
              </Link>
            </li>
            <li className="mb-3">
              <Button
                onClickHandler={() => handleLogout()}
                className="text-white hover:bg-red-700 p-3 block rounded-lg w-full text-start transition-colors duration-200"
                btnname={"Logout"}
              />
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-4/5 bg-gray-50 p-6 lg:overflow-y-scroll h-screen lg:h-[100vh] lg:no-scrollbar">
        <div className="mb-6 z-10 backdrop-blur-md">
          <h1 className="text-4xl font-extrabold text-gray-800">Dashboard</h1>

          {/* Stylish Welcome Card */}
          <div className="mt-5 bg-gradient-to-r from-green-400 to-emerald-600 text-white rounded-2xl p-6 shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold mb-2">
              🎉 Welcome back, {user?.fullName || "User Name"}!
            </h2>
            <p className="text-white/90 text-lg">
              You&apos;re now logged in — explore your dashboard to view
              insights, manage tasks, and stay productive. Let’s make today
              count!
            </p>
          </div>
        </div>

        {/* Dashboard Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-extrabold mb-3">Crop Type</h3>
            <p className="text-xl font-semibold text-blue-700">
              {historyData[0]?.CropType || "N/A"}
            </p>
          </div>
          <div className="bg-green-50 shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-extrabold mb-3">Soil Type</h3>
            <p className="text-3xl font-semibold text-green-700">
              {historyData[0]?.SoilType || "N/A"}
            </p>
          </div>
          <div className="bg-yellow-50 shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-extrabold mb-3">Fertilizer Used</h3>
            <p className="text-3xl font-semibold text-yellow-600">
              {historyData[0]?.fertilizer_name || "N/A"}
            </p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Nutrient Levels Bar Chart */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-5 text-gray-800">
              Nutrient Levels (N, P, K)
            </h2>
            <Bar
              data={nutrientChartData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
              }}
            />
          </div>

          {/* Crop Type Pie Chart */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-5 text-gray-800">
              Crop Type Distribution
            </h2>
            <Doughnut data={cropPieData} options={pieOptions} />
          </div>
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
                        <th className="py-2 px-3 border-b-2 text-left">Date</th>
                        <th className="py-2 px-3 border-b-2 text-left">
                          Crop Type
                        </th>
                        <th className="py-2 px-3 border-b-2 text-left">
                          Soil Type
                        </th>
                        <th className="py-2 px-3 border-b-2 text-left">
                          Fertilizer Name
                        </th>
                        <th className="py-2 px-3 border-b-2 text-left">
                          Fertilizer Quantity
                        </th>
                        <th className="py-2 px-3 border-b-2 text-left">
                          Nutrients (N, P, K)
                        </th>
                        <th className="py-2 px-3 border-b-2 text-left">
                          Moisture
                        </th>
                        <th className="py-2 px-3 border-b-2 text-left">
                          Humidity
                        </th>
                        <th className="py-2 px-3 border-b-2 text-left">
                          Temperature
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {historyData?.map((item, index) => (
                        <tr
                          key={index}
                          className="text-center font-normal hover:bg-gray-50 transition-colors duration-150"
                        >
                          <td className="py-2 px-4 border-b text-left">
                            {new Date(item?.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-2 px-4 border-b text-left">
                            {item?.CropType}
                          </td>
                          <td className="py-2 px-4 border-b text-left">
                            {item?.SoilType}
                          </td>
                          <td className="py-2 px-4 border-b text-left">
                            {item?.fertilizer_name}
                          </td>
                          <td className="py-2 px-4 border-b text-left">
                            ({item?.fertilizer_quantity} kg per acre)
                          </td>
                          <td className="py-2 px-4 border-b text-left">
                            N: {item?.PresentN}, P: {item?.PresentP}, K:{" "}
                            {item?.PresentK}
                          </td>
                          <td className="py-2 px-4 border-b text-left">
                            {item?.Moisture} %
                          </td>
                          <td className="py-2 px-4 border-b text-left">
                            {item?.Humidity} %
                          </td>
                          <td className="py-2 px-4 border-b text-left">
                            {item?.Temparature} °C
                          </td>
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
                      className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-200"
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
                        {item?.fertilizer_name} ({item?.fertilizer_quantity}{" "}
                        kg/acre)
                      </p>
                      <p>
                        <span className="font-semibold">Nutrients:</span> N:{" "}
                        {item?.PresentN}, P: {item?.PresentP}, K:{" "}
                        {item?.PresentK}
                      </p>
                      <p>
                        <span className="font-semibold">Moisture:</span>{" "}
                        {item?.Moisture} %
                      </p>
                      <p>
                        <span className="font-semibold">Humidity:</span>{" "}
                        {item?.Humidity} %
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
