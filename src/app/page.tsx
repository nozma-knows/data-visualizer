"use client";
import { ChakraProvider } from "@chakra-ui/react";

import ImportDataForm from "@/components/forms/import-data-form";
import DisplayData from "@/ui/data/display-data";
import { ChangeEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DataInsights from "@/ui/data/data-insights";
import VisualizeData from "@/ui/data/visualize-data";
import { HashLoader } from "react-spinners";

export default function Home() {
  // Variables
  const title = `Data Visualizer`;
  const description = `This is an application for visualizing data saved in csv format`;

  // State
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string[][] | null>(null);
  const [test, setTest] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    if (e.target.files) {
      try {
        const file = e.target.files[0];
        const fileUrl = URL.createObjectURL(file);
        const response = await fetch(fileUrl);
        const text = await response.text();
        const lines = text.split("\n");
        const _data = lines.map((line) => line.split(","));
        setData(_data);
      } catch (err) {
        console.error("Error: ", err);
      }
    }
  };

  // Framer-motion animation objects
  const logoEffect = {
    intial: {
      scale: 1,
    },
    dataLoaded: {
      scale: 1.2,
    },
  };

  const titleEffect = {
    intial: {
      scale: 1,
    },
    logoDataLoaded: {
      scale: 1.2,
    },
    titleDataLoaded: {
      opacity: 0,
    },
  };

  return (
    <ChakraProvider>
      <div className="flex flex-col w-screen h-screen justify-center items-center gap-12 overflow-auto">
        <motion.div
          className="flex flex-col text-center gap-4"
          variants={titleEffect}
          animate={data ? "logoDataLoaded" : "initial"}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <h1>{title}</h1>
          <motion.div
            variants={titleEffect}
            animate={data ? "titleDataLoaded" : "initial"}
          >
            {description}
          </motion.div>
        </motion.div>
        {data ? (
          <DisplayData data={data} />
        ) : (
          <div>
            {loading ? (
              <HashLoader />
            ) : (
              <ImportDataForm onChange={handleFileChange} />
            )}
          </div>
        )}
      </div>
    </ChakraProvider>
  );
}
