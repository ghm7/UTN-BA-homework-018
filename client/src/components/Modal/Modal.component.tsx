import { MouseEventHandler, ReactElement } from 'react';
// import { X } from 'react-feather';

import './Modal.styles.css';

interface IModalProps {
  open: boolean;
  onClose: MouseEventHandler<HTMLElement>;
  children: ReactElement;
  twoBtnModal?: ITwoBtnModal;
  hasBackdrop: boolean;
}

interface ITwoBtnModal {
  acceptBtn: string;
  declineBtn: string;
}

export default function Modal({
  open,
  onClose,
  children,
  twoBtnModal,
  hasBackdrop,
}: IModalProps) {
  const { acceptBtn, declineBtn } = twoBtnModal ?? {};
  let buttons: ReactElement = <></>;

  if (twoBtnModal) {
    buttons = (
      <div className="flex flex-row gap-4">
        <button
          className="px-4 py-2 rounded-md bg-[rgb(12,47,110)] hover:bg-[rgb(23,37,84)]"
          onClick={onClose}
        >
          {acceptBtn}
        </button>
        <button
          className="px-4 py-2 rounded-md bg-[rgb(127,29,29)] hover:bg-[rgb(69,10,10)]"
          onClick={onClose}
        >
          {declineBtn}
        </button>
      </div>
    );
  }

  return (
    // backdrop
    <div
      onClick={(e) => (hasBackdrop ? onClose(e) : null)}
      className={`
        fixed z-10 inset-0 flex justify-center items-center transition-colors overflow-y-auto ${
          open ? 'show bg-[rgba(8,8,8,0.97)]' : 'hide'
        }
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-primaryDarker rounded-xl shadow p-6 transition-all flex flex-col gap-4 items-center ${
            open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
          }
        `}
      >
        {/* <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          >
          <X />
          </button> */}
        {children}
        <>{buttons}</>
      </div>
    </div>
  );
}
