import { Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut, LuUser } from "react-icons/lu";
import { RiSettings3Line } from "react-icons/ri";

const Profile = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark_mode") === "false" ? false : true
  );
  const [notifications, setNotifications] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState(localStorage.getItem("user_phone") || "");
  useEffect(() => {
    localStorage.setItem("dark_mode", darkMode);
  }, [darkMode]);
  useEffect(() => {
    if (!window.Telegram?.WebApp) return;

    const tg = window.Telegram.WebApp;
    tg.ready();

    const u = tg.initDataUnsafe?.user;
    if (!u) return;

    setUser({
      id: u.id,
      first_name: u.first_name,
      last_name: u.last_name,
      username: u.username,
      photo: u.photo_url,
    });
  }, []);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    localStorage.setItem("user_phone", value);
  };

  const handleLogout = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.close();
    }
  };

  return (
    <section
      className="w-full min-h-screen transition-colors duration-300 pb-10 overflow-x-hidden"
      style={{ backgroundColor: darkMode ? "#171717" : "#ffffff" }}
    >
      {/* PROFILE CARD */}
      <div className="flex justify-center pt-20 px-4">
        <div className="w-full max-w-md bg-gradient-to-br from-orange-400 via-orange-500 to-orange-400 rounded-4xl">
          <div className="flex items-end justify-center relative -top-14">
            <div className="w-28 h-28 border-4 border-white rounded-full bg-white overflow-hidden">
              {user?.photo ? (
                <img
                  src={user.photo}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">
                  {user?.first_name?.[0] || "G"}
                </div>
              )}
            </div>
          </div>

          <div className="text-center text-white text-[26px] font-bold relative -top-10">
            {user
              ? `${user.first_name || ""} ${user.last_name || ""}`
              : "Guest"}
          </div>

          <div className="grid grid-cols-3 gap-2 px-4 pb-4 relative -top-5">
            {[
              ["Phone", phone || "-"],
              ["Position", "Mid"],
              ["Nationality", "-"],
              ["Games", "0"],
              ["Won", "0"],
              ["Lost", "0"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="bg-amber-300/30 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-white text-[13px] h-14"
              >
                <p>{label}</p>
                <span className="font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto space-y-5 mt-4">
        <div className="px-4">
          <span
            className={`text-lg font-medium ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Account
          </span>

          <div
            onClick={() => setIsProfileOpen(true)}
            className={`mt-3 h-11 flex gap-4 items-center border-2 border-orange-500 px-3 rounded-lg cursor-pointer ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <LuUser size={18} />
            <span>Profile Info</span>
          </div>

          <div
            className={`mt-3 h-11 flex gap-4 items-center border-2 border-orange-500 px-3 rounded-lg ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <IoSettingsOutline size={18} />
            <span>Settings</span>
          </div>
        </div>

        <div className="px-4">
          <span
            className={`text-lg font-medium ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Preferences
          </span>

          <div
            className={`mt-3 h-14 flex justify-between items-center border-2 border-orange-500 px-3 rounded-lg ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <div className="flex gap-4 items-center">
              <RiSettings3Line size={20} />
              <span>Dark Mode</span>
            </div>
            <Switch
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              color="warning"
              size="small"
            />
          </div>

          <div
            className={`mt-3 h-14 flex justify-between items-center border-2 border-orange-500 px-3 rounded-lg ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <div className="flex gap-4 items-center">
              <IoIosNotificationsOutline size={24} />
              <span>Notifications</span>
            </div>
            <Switch
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              color="warning"
              size="small"
            />
          </div>
        </div>

        <div className="px-4">
          <span
            className={`text-lg font-medium ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            More
          </span>

          <div
            className={`mt-3 h-11 flex gap-4 items-center border-2 border-orange-500 px-3 rounded-lg ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <FaRegComment size={18} />
            <span>Live Support</span>
          </div>

          <div
            className={`mt-3 h-11 flex gap-4 items-center border-2 border-orange-500 px-3 rounded-lg ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <BsQuestionCircle size={18} />
            <span>About</span>
          </div>
        </div>
      </div>
      <div
        onClick={handleLogout}
        className="flex items-center justify-center gap-3 text-red-500 text-lg mt-8 cursor-pointer"
      >
        <LuLogOut /> <span>Log Out</span>
      </div>

      {isProfileOpen && (
        <div
          onClick={() => setIsProfileOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-md rounded-2xl p-6 shadow-2xl ${
              darkMode
                ? "bg-neutral-900 text-white border border-neutral-800"
                : "bg-white text-gray-800"
            }`}
          >
            <h2 className="text-[24px] font-bold mb-6 text-center text-orange-500">
              Profil ma'lumotlari
            </h2>

            <div className="space-y-4">
              <p className="flex justify-between border-b pb-2">
                <span className="opacity-70">Ism:</span>
                <span className="font-medium">
                  {user ? `${user.first_name} ${user.last_name || ""}` : "-"}
                </span>
              </p>
              <p className="flex justify-between border-b pb-2">
                <span className="opacity-70">Username:</span>
                <span className="font-medium">@{user?.username || "yo‘q"}</span>
              </p>
              <p className="flex justify-between border-b pb-2">
                <span className="opacity-70">Telegram ID:</span>
                <span className="font-medium">{user?.id || "-"}</span>
              </p>

              <div>
                <label className="text-sm opacity-70 block mb-2">
                  Telefon raqamingiz:
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+998901234567"
                  className={`w-full px-3 py-2 rounded-lg border-2 outline-none ${
                    darkMode
                      ? "bg-neutral-800 border-neutral-700 text-white"
                      : "bg-gray-50 border-gray-200 text-black"
                  }`}
                />
              </div>
            </div>

            <button
              onClick={() => setIsProfileOpen(false)}
              className="mt-8 w-full py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 active:scale-95"
            >
              Yopish va Saqlash
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
