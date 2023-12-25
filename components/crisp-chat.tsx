"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("faeb274d-adfb-40d3-a9a2-1aaa2e0875d3");
    }, []);

    return null;
}