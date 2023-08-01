import Image from 'next/image';
import React, { useCallback, useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useMint } from '@/hooks/useMint';

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MintModal = (props: ModalProps) => {
  const { modalOpen, setModalOpen } = props;
  const { mintLoading, mintError, mintSuccess, mintWrite, mintTx } =
    useMint('30');

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
          <div className="fixed inset-0 bg-black bg-opacity-75" />
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
              <Dialog.Panel className="w-full flex flex-col max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="w-full flex flex-col gap-y-[20px] relative">
                  <Image
                    src="/bikeToken.png"
                    alt="bikeToken"
                    width={619}
                    height={468}
                  />
                  <div
                    className="mt-[20px] cursor-pointer bg-gradient-to-r from-[#01E99D] to-[#07D1D3] w-full py-[14px] text-white rounded-[16px] text-center text-[20px] font-bold "
                    onClick={() => mintWrite?.()}
                  >
                    토큰 수령하기
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
