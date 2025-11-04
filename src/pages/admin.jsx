import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FaUsers, FaSpinner, FaExclamationTriangle } from "react-icons/fa";
import headerBg from "/header-backgrounds/emerald-dark-image.jpg";

export default function Admin() {
  const [guestsData, setGuestsData] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  const fetchGuests = useCallback(
    async (page = 1) => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          `${apiUrl}/guest?page=${page}&limit=10`
        );
        if (response.data && response.data.info) {
          setGuestsData(response.data.info);
          setPagination(response.data.pagination);
        }
      } catch (err) {
        setError("Failed to fetch guests. Please try again.");
        console.error("Error fetching guests:", err);
      } finally {
        setLoading(false);
      }
    },
    [apiUrl]
  );

  useEffect(() => {
    const savedPassword = localStorage.getItem("admin password");
    if (savedPassword && savedPassword === adminPassword) {
      setIsAuthenticated(true);
    }
  }, [adminPassword]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchGuests(1);
    }
  }, [isAuthenticated, fetchGuests]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === adminPassword) {
      localStorage.setItem("admin password", password);
      setIsAuthenticated(true);
    } else {
      setError("Incorrect password.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= pagination.totalPages) {
      fetchGuests(newPage);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-[60px] min-h-screen flex flex-col items-center justify-center bg-amber-50 px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl text-center w-full max-w-sm">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">
            Admin Access
          </h2>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-emerald-800 text-white font-bold py-2 px-4 rounded-full hover:bg-amber-400 hover:text-emerald-900 transition-colors duration-300"
            >
              Login
            </button>
          </form>
          {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[60px] bg-amber-50 text-emerald-900">
      {/* Header */}
      <header
        className="relative h-[50vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="font-allura text-6xl md:text-8xl bg-gradient-to-r from-amber-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-md py-1 px-2">
              Admin Dashboard
            </h1>
            <p className="mt-2 text-lg font-cormorant">Guest List</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {loading && (
          <div className="flex justify-center items-center p-8">
            <FaSpinner className="animate-spin text-4xl text-emerald-800" />
          </div>
        )}

        {error && !loading && (
          <div className="text-center p-8 bg-red-100 text-red-700 rounded-lg">
            <FaExclamationTriangle className="mx-auto text-3xl mb-2" />
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="bg-white rounded-lg shadow-xl overflow-x-auto">
            <h2 className="p-2 md:p-4 font-semibold text-center">
              Total RSVP: {pagination?.total}
            </h2>
            <table className="w-full text-left">
              <thead className="bg-emerald-800 text-white uppercase text-sm">
                <tr>
                  <th className="p-4">S/N</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">RSVP Date</th>
                </tr>
              </thead>
              <tbody>
                {guestsData.map((guest, index) => (
                  <tr
                    key={guest._id}
                    className="border-b border-gray-200 hover:bg-amber-50"
                  >
                    <td className="p-4 font-semibold">
                      {(pagination.page - 1) * pagination.limit + index + 1}
                    </td>
                    <td className="p-4">{guest.name}</td>
                    <td className="p-4 text-gray-600">
                      {new Date(guest.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {pagination && pagination.totalPages > 1 && (
              <div className="flex justify-between items-center p-4">
                <button
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span className="font-semibold">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.totalPages}
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
