import Image from 'next/image';
import React, { useCallback, useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';

import shortenAddress from '@/utils/shortenAddres';
import clsx from 'clsx';
import SpinnerIcon from 'public/icons/spinner.svg';

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MintModal = (props: ModalProps) => {
  const { modalOpen, setModalOpen } = props;

  return (
    <Transition appear show={modalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-30"
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full flex flex-col max-w-lg h-[330px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="div" className="flex text-t-l text-black">
                  Mint Nonce Membership
                </Dialog.Title>

                <div className="w-full flex-1 relative">
                  <div className="h-full pt-[20px] flex flex-col items-start gap-y-[10px]">
                    <div className="flex flex-col w-full text-b-l text-black">
                      <div className="flex gap-x-2 "></div>
                      <span> hi </span>
                    </div>

                    <div className="grow w-full flex text-b-m">
                      <div className="w-[30%] relative h-full flex flex-col">
                        <div className="pt-[8%] bottom-0 h-[25%] w-full"></div>
                      </div>
                    </div>
                    <div className="w-[70%] pl-[10%] h-full flex flex-col items-center justify-around">
                      <div className="w-full h-[75%] flex flex-col justify-around items-center p-[5%]"></div>
                      <div className="w-full h-[18%] relative "></div>

                      <div className="w-full h-[7%] text-center text-[10px] text-red"></div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MintModal;
