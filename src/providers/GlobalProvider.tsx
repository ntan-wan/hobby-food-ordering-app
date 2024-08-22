"use client";

import { IProduct } from "@/lib/types";
import { createContext, useState, useContext } from "react";

const GlobalContext = createContext({});

interface IProps {
    children: React.ReactNode;
}
interface IGlobalState{
	product: IProduct | null;
	[key: string] : any;
}

export function GlobalProvider({ children }: IProps) {
	const [global, setGlobal] = useState<IGlobalState>({
		product: null,
	});

	const setGlobalContext = (data : {[key: string] : any} = {}) => {
		const newState = structuredClone(global);

		Object.keys(data).forEach((key) => {
			newState[key] = data[key];
		})
		
		setGlobal(newState);
	}

    return <GlobalContext.Provider value={{ global, setGlobalContext }}>{children}</GlobalContext.Provider>;
}

export function useGlobal() {
    return useContext(GlobalContext);
}
