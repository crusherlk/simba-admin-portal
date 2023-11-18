import { Fragment } from "react";
import { HiOutlineBell } from "react-icons/hi";
import { Popover, Transition, Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import profilePic1 from "../assets/photo-1.jpeg";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="h-16 px-4 flex items-center justify-end border-b border-gray-200">
      <div className="flex items-center mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 ${
                  open && "bg-gray-100"
                }`}
              >
                <HiOutlineBell fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2 w-80">
                  <div className="bg-white rounded shadow-md ring-1 ring-black ring-opacity-5 p-2">
                    <strong className="text-gray-700 font-medium">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is the notification panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none hover:ring-2 hover:ring-gray-400">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${profilePic1})`,
                }}
              >
                <span className="sr-only">John Doe</span>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`text-gray-700 focus:bg-gray-200 cursor-pointer rounded px-4 py-2 ${
                      active && "bg-gray-100"
                    }`}
                    onClick={() => navigate("/")}
                  >
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`text-gray-700 focus:bg-gray-200 cursor-pointer rounded px-4 py-2 ${
                      active && "bg-gray-100"
                    }`}
                    onClick={() => navigate("/")}
                  >
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`text-red-500 focus:bg-gray-200 cursor-pointer rounded px-4 py-2 ${
                      active && "bg-gray-100"
                    }`}
                    onClick={() => navigate("/login")}
                  >
                    Sign Out
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
export default Header;
