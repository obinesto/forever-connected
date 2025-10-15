import { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import {
  FaRegCalendarCheck,
  FaRegClock,
  FaMapMarkerAlt,
  FaHeart,
  FaRegCopy,
} from "react-icons/fa";
import { IoClose, IoFlowerOutline } from "react-icons/io5";
import headerBg from "/header-backgrounds/emerald-dark-image.jpg";
import img1 from "/pre-wedding-shots/F&C1.jpg";
import img3 from "/pre-wedding-shots/F&C3.jpg";

const scheduleDetails = [
  {
    title: "Wedding Ceremony",
    date: "Saturday, November 8th, 2025",
    time: "10:00 AM",
    venue: "St. Augustine's Catholic Church, Ibusa, Delta State",
    description: "Witness our vows to each other in this beautiful ceremony.",
    image: img1,
    mapLink: "https://maps.app.goo.gl/ZGrDURbgu3NUya6H9",
    calendar: {
      startTime: "10:00",
      endTime: "11:30",
    },
  },
  {
    title: "Wedding Reception",
    date: "Saturday, November 8th, 2025",
    time: "1:00 PM",
    venue: "Lamibele's Place, Asaba, Delta State",
    description:
      "Join us for dinner, toasts, and dancing immediately after the ceremony.",
    image: img3,
    mapLink: "https://maps.app.goo.gl/3QSYJVqns2wgg8QLA",
    calendar: {
      startTime: "13:00",
      endTime: "17:00",
    },
  },
];

const apiUrl = import.meta.env.VITE_API_URL;

export default function Schedule() {
  const scheduleRef = useRef(null);
  useScrollFadeIn(scheduleRef, ".animate-schedule");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rsvpStep, setRsvpStep] = useState("initial");
  const [guestDetails, setGuestDetails] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [copyStatus, setCopyStatus] = useState("Copy");
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus("Copy"), 2000); // Reset after 2 seconds
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    // Reset state after a short delay to allow for closing animation
    setTimeout(() => {
      setRsvpStep("initial");
      setGuestDetails({ name: "", email: "" });
    }, 300);
  };

  const handleRsvpYes = () => setRsvpStep("attending");
  const handleRsvpNo = () => setRsvpStep("notAttending");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuestDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookRsvp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(`${apiUrl}/guest`, guestDetails);
      setRsvpStep("success");
      setTimeout(closeModal, 3000); // Close modal after 3 seconds
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "An error occurred. Please try again.";
      setError(errorMessage);
      setTimeout(() => setError(""), 3000); // Clear error after 3 seconds
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={scheduleRef} className="pt-[60px] bg-amber-50 text-emerald-900">
      {/* Header */}
      <header
        className="relative h-[50vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="font-allura text-6xl md:text-8xl bg-gradient-to-r from-amber-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-md py-1 px-2">
              Wedding Schedule
            </h1>
            <p className="mt-2 text-lg font-cormorant">
              View our wedding timeline
            </p>
          </div>
        </div>
      </header>

      {/* Schedule Sections */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
          {scheduleDetails.map((event, index) => (
            <section
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-schedule ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-5/12 flex-shrink-0">
                <div className="p-1 md:p-2 rounded-lg shadow-xl bg-gradient-to-br from-emerald-800 to-amber-400 transform md:hover:scale-105 transition-transform duration-500">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto object-cover rounded-md"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Details Card */}
              <div className="flex flex-col gap-4 w-full md:w-7/12">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl relative transition-transform duration-300 hover:-translate-y-2">
                  <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-emerald-800 mb-4">
                    {event.title}
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-center gap-3">
                      <FaRegCalendarCheck className="text-amber-400" />
                      <span>{event.date}</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <FaRegClock className="text-amber-400" />
                      <span>{event.time}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-amber-400 mt-1 flex-shrink-0" />
                      <span>{event.venue}</span>
                    </p>
                    <a
                      href={event.mapLink.replace(
                        "embed?pb=",
                        "maps/dir/?api=1&destination="
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-sm text-emerald-800 hover:text-amber-400 transition-colors"
                    >
                      <FaMapMarkerAlt />
                      Get Directions
                    </a>
                    <div className="absolute bottom-1 right-1">
                      <AddToCalendarButton
                        size="4"
                        name={`Franklin & Cynthia's ${event.title}`}
                        description={event.description}
                        startDate="2025-11-08"
                        endDate="2025-11-08"
                        startTime={event.calendar.startTime}
                        endTime={event.calendar.endTime}
                        location={event.venue}
                        timeZone="Africa/Lagos"
                        options={[
                          "Apple",
                          "Google",
                          "iCal",
                          "Outlook.com",
                          "Yahoo",
                        ]}
                        iCalFileName="Frankling & Cynthia Wedding-Event"
                        buttonStyle="3d"
                        trigger="click"
                        hideCheckmark
                        hideBranding
                        hideBackground
                      />
                    </div>
                  </div>
                </div>
                <p className="text-emerald-800 italic mb-6 text-center md:text-left">
                  {event.description}
                </p>
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* RSVP Section */}
      <section className="py-16 md:py-24" id="rsvp">
        {/* RSVP card */}
        <div className="container mx-auto px-4 animate-schedule hover:-translate-y-2 transition-transform duration-300">
          <h2 className="text-4xl md:text-5xl text-center font-cormorant font-bold text-emerald-800">
            RSVP
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center">
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto text-center font-cormorant font-semibold">
              Your presence is the greatest gift of all. let's know if you can
              make it by October 31st, 2025.
            </p>
            <button
              onClick={openModal}
              className="mt-8 bg-emerald-800 text-white font-bold py-3 px-10 rounded-full hover:bg-amber-400 hover:text-emerald-900 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              RSVP Now
            </button>
          </div>
        </div>
      </section>

      {/* RSVP Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-t from-amber-50/30 to-emerald-900/40 flex items-center justify-center transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-2xl p-8 m-4 max-w-md w-full relative transform transition-all duration-300 scale-95"
            onClick={(e) => e.stopPropagation()}
            style={{ transform: "scale(1)" }}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Close modal"
            >
              <IoClose size={28} />
            </button>

            {rsvpStep === "initial" && (
              <div className="text-center">
                <h3 className="text-2xl font-cormorant font-bold text-emerald-800 mb-4">
                  Will you be able to join us?
                </h3>
                <p className="text-gray-600 mb-8">
                  Kindly respond before Novemver 1st, 2025.
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleRsvpYes}
                    className="bg-emerald-700 text-white py-2 px-2 md:px-6 rounded-md hover:bg-emerald-800 transition-colors"
                  >
                    Yes, I'll be there
                  </button>
                  <button
                    onClick={handleRsvpNo}
                    className="bg-gray-200 text-gray-700 py-2 px-2 md:px-6 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    No, I can't make it
                  </button>
                </div>
              </div>
            )}

            {rsvpStep === "attending" && (
              <div>
                <h3 className="text-2xl font-cormorant font-bold text-emerald-800 mb-6 text-center">
                  We're excited to see you!
                </h3>
                <form onSubmit={handleBookRsvp}>
                  <label
                    htmlFor="guestName"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Kindly enter your name and email to book your RSVP:
                  </label>
                  <input
                    type="text"
                    id="guestName"
                    name="name"
                    value={guestDetails.name}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 mb-2"
                    placeholder="e.g., John Doe"
                    required
                    disabled={loading}
                  />
                  <input
                    type="email"
                    id="guestEmail"
                    name="email"
                    value={guestDetails.email}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="e.g., johndoe@example.com"
                    required
                    disabled={loading}
                  />
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full mt-6 bg-emerald-800 text-white font-bold py-3 px-4 rounded-full hover:bg-amber-400 hover:text-emerald-900 transition-all duration-300 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <IoFlowerOutline className="animate-spin mr-2" />{" "}
                        Booking RSVP...
                      </>
                    ) : (
                      "Book RSVP"
                    )}
                  </button>
                </form>
                {error && (
                  <p className="mt-4 text-sm text-red-600 text-center">
                    {error}
                  </p>
                )}
              </div>
            )}

            {rsvpStep === "notAttending" && (
              <div className="text-center">
                <h3 className="text-2xl font-cormorant font-bold text-emerald-800 mb-4">
                  We're sad you can't make it
                </h3>
                <p className="text-gray-600 mb-6">
                  You will be missed! We'd still love for you to be a part of
                  our story. Feel free to explore our journey on our{" "}
                  <Link
                    to="/story"
                    onClick={closeModal}
                    className="text-amber-500 hover:underline font-semibold"
                  >
                    story page
                  </Link>
                  .
                </p>
                <div className="mt-6 bg-emerald-50 p-4 rounded-lg text-sm">
                  <p className="font-semibold text-emerald-800 flex items-center justify-center gap-2">
                    Support Our New Beginning{" "}
                    <FaHeart className="text-amber-500" />
                  </p>
                  <p className="mt-2 text-gray-700">
                    If you'd like to send a gift, you can contribute to our
                    future via bank transfer or visit our full{" "}
                    <Link
                      to="/gift"
                      onClick={closeModal}
                      className="text-amber-500 hover:underline font-semibold"
                    >
                      gift registry
                    </Link>
                    .
                  </p>
                  <div className="mt-3 text-left font-cormorant text-emerald-900 space-y-1">
                    <p>
                      <strong>Bank:</strong> GTBank
                    </p>
                    <p>
                      <strong>Account:</strong> Cynthia Nwaokocha
                    </p>
                    <p className="flex items-center gap-2">
                      <strong>A/C No:</strong> 0709945500
                      <button
                        onClick={() => copyToClipboard("0709945500")}
                        className="flex items-center gap-1 text-amber-500 hover:text-amber-600 text-xs"
                        aria-label="Copy account number"
                      >
                        <FaRegCopy />{" "}
                        <span
                          className={`${
                            copyStatus === "Copied!" ? "text-emerald-600" : ""
                          }`}
                        >
                          {copyStatus}
                        </span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {rsvpStep === "success" && (
              <div className="text-center">
                <FaRegCalendarCheck
                  className="mx-auto text-emerald-500 text-5xl mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-cormorant font-bold text-emerald-800 mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-600">Your RSVP has been confirmed.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
