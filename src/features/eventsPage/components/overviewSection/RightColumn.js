import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiExternalLink,
} from "react-icons/fi";
import { HiOutlineTicket } from "react-icons/hi2";

export default function RightColumn() {
  return (
   <div className="flex-1 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col">
          <h2 className="text-[22px] font-bold mb-8">When and Where</h2>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <FiCalendar className="w-4.5 h-4.5 text-[#3bc3c1] mt-0.5" />
              <span className="text-[15px] font-medium text-gray-800">
                Wednesday 10th September 2025
              </span>
            </div>

            <div className="flex items-start gap-4">
              <FiClock className="w-4.5 h-4.5 text-[#3bc3c1] mt-0.5" />
              <span className="text-[15px] font-medium text-gray-800">
                09:00 - 16:00pm EEST
              </span>
            </div>

            <div className="flex items-start gap-4">
              <FiMapPin className="w-4.5 h-4.5 text-[#3bc3c1] mt-0.5" />
              <div className="flex items-center gap-3">
                <span className="text-[15px] font-medium text-gray-800">
                  Addis Ababa
                </span>
                <a
                  href="#"
                  className="text-[#3bc3c1] text-xs font-medium hover:underline"
                >
                  view map
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiUsers className="w-4.5 h-4.5 text-[#3bc3c1] mt-0.5" />
              <span className="text-[15px] font-medium text-gray-800">
                1,250 candidate ticket allocation
              </span>
            </div>
          </div>

          <div className="mt-auto space-y-3">
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-[#3bc3c1] text-[#3bc3c1] font-medium hover:bg-gray-50 transition-colors">
              <FiExternalLink className="w-4 h-4" />
              <span>Share this Event</span>
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#3bc3c1] text-white font-medium hover:bg-[#32abaa] transition-colors shadow-md shadow-[#3bc3c1]/20">
              <HiOutlineTicket className="w-5 h-5" />
              <span>Get Tickets</span>
            </button>
          </div>
        </div>
  )
}
