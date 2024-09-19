import React, { useEffect, useState } from 'react';

import { apiClient } from '../lib/api-client';
import { ErrorPage, LoadingPage } from '../components/index.js';
import { HISTORY_ROUTES } from '../utils/constrants';

const HistoryPage = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch history data from your API
    const fetchHistoryData = async () => {
      try {
        const response = await apiClient.get(HISTORY_ROUTES, {
          withCredentials: true, // If you're using cookies for authentication
        });
        console.log("history response: ", response);
        setHistoryData(response.data.predictions);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHistoryData();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if(historyData.length === 0) {
    return <div className="flex justify-center items-center h-screen text-5xl font-extrabold">No history found</div>;
  }
  else{
    return (
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-extrabold text-center mb-6 ">User History</h1>
    
          {/* Table for larger screens */}
          <div className="hidden md:block">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2">Date</th>
                  <th className="py-2 px-4 border-b-2">Crop Type</th>
                  <th className="py-2 px-4 border-b-2">Soil Type</th>
                  <th className="py-2 px-4 border-b-2">Fertilizer Name</th>
                  <th className="py-2 px-4 border-b-2">Fertilizer Quantity</th>
                  <th className="py-2 px-4 border-b-2">Nutrients (N, P, K)</th>
                  <th className="py-2 px-4 border-b-2">Moisture</th>
                  <th className="py-2 px-4 border-b-2">Humidity</th>
                  <th className="py-2 px-4 border-b-2">Temperature</th>
                </tr>
              </thead>
              <tbody>
                {historyData?.map((item, index) => (
                  <tr key={index} className='text-center font-normal'>
                    <td className="py-2 px-4 border-b">{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td className="py-2 px-4 border-b">{item.CropType}</td>
                    <td className="py-2 px-4 border-b">{item.SoilType}</td>
                    <td className="py-2 px-4 border-b">
                      {item.fertilizer_name}
                    </td>
                    <td className="py-2 px-4 border-b ">
                       ({item.fertilizer_quantity} kg per acre)
                    </td>
                    <td className="py-2 px-4 border-b">
                      N: {item.PresentN}, P: {item.PresentP}, K: {item.PresentK}
                    </td>
                    <td className="py-2 px-4 border-b">{item.Moisture} %</td>
                    <td className="py-2 px-4 border-b">{item.Humidity} %</td>
                    <td className="py-2 px-4 border-b">{item.Temparature} °C</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    
          {/* Cards for mobile */}
          <div className="block md:hidden ">
            {historyData?.map((item, index) => (
              <div key={index} className=" shadow-lg rounded-lg p-4 mb-4 bg-[#08553f] text-white">
                <div className="text-white text-center font-bold mb-3">{new Date(item.createdAt).toLocaleDateString()}</div>
                <div className="text-white">Crop Type: {item.CropType}</div>
                <div className="text-white">Soil Type: {item.SoilType}</div>
                <div className="text-white font-semibold">
                  Fertilizer name: {item.fertilizer_name}
                </div>
                <div className="text-white font-semibold">
                  Fertilizer Quantity:  ({item.fertilizer_quantity} kg)
                </div>
                <div className="text-white">Moisture: {item.Moisture} %</div>
                <div className="text-white">Humidity: {item.Humidity} %</div>
                <div className="text-white">Temperature: {item.Temperature} °C</div>
                <div className="text-white">
                  Nutrients - N: {item.PresentN}, P: {item.PresentP}, K: {item.PresentK}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  }
  
};

export default HistoryPage;
