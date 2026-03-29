"use client";

import { useState } from "react";

type UseModalResponse = [
  boolean,
  () => void,
  () => void,
  (newValue: boolean) => void,
];

export const useModal = (): UseModalResponse => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
  return [isOpenModal, openModal, closeModal, setIsOpenModal];
};
