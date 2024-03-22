"use client";

import { StoreContext } from "@/context/StoreContext";
import { useContext } from "react";

export const useStore = () => useContext(StoreContext);
