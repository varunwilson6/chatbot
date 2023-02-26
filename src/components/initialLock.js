import React, { useState, useMemo } from "react";
import Modal from "react-modal";
import { useUserStore } from "../store";

const staticPassword = `${new Date().getDate()}sky lantern`;

const users = [
  {
    userLabel: "User 1",
    userId: 1,
  },
  {
    userLabel: "User 2",
    userId: 2,
  },
];

const LockView = () => {
  const [currentLock] = useState(new Date().getDate() + "skylantern");
  const [isModalOpen, updateModal] = useState(true);
  const [showUserSelect, updateUserSelect] = useState(false);

  const { updateUser, userName } = useUserStore((state) => state);

  const handlePasswordChange = (e) => {
    const userInput = e.target.value;
    if (currentLock === userInput) {
      updateUser(true);
    }
  };

  const isRenderUserSelect = useMemo(
    () => showUserSelect && !userName,
    [userName, showUserSelect]
  );

  const handleUserSelect = (userId) => {
    updateUser(userId);
    updateModal(false);
  };

  const renderAskPassword = () => {
    return (
      <>
        <div className="w-full">
          <h4 className="align-center text-center text-2xl">Enter Password</h4>
        </div>
        <div className="mt-8">
          <input
            onChange={handlePasswordChange}
            className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-center"
            id="password"
            type="password"
            placeholder="******************"
          ></input>
        </div>
      </>
    );
  };

  const renderUserSelect = () => {
    return (
      <>
        <div className="w-full">
          <h4 className="align-center text-center text-2xl">Select User</h4>
        </div>
        <div className="mt-8 flex flex-col">
          {users?.map(({ userLabel, userId }) => {
            return (
              <div
                key={userId}
                onClick={() => handleUserSelect(userId)}
                className="px-4 py-2 rounded-xl border cursor-pointer mb-2"
              >
                {userLabel}
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="w-full">
      <Modal className="" ariaHideApp={false} isOpen={isModalOpen}>
        <div className="p-4 bg-[] h-full flex flex-col items-center">
          {isRenderUserSelect ? renderUserSelect() : renderAskPassword()}
        </div>
      </Modal>
    </div>
  );
};

export default LockView;
