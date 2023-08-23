"use client";

import { ChangeEvent } from "react";

interface ImportDataFormProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ImportDataForm({ onChange }: ImportDataFormProps) {
  return (
    <>
      <form>
        <label htmlFor="formId">
          <input
            name=""
            type="file"
            id="formId"
            onChange={onChange}
            hidden
            accept=".csv"
          />
          <div className="flex w-fit px-4 py-2 bg-green-400 rounded-lg cursor-pointer transform transition duration-500 hover:scale-110">
            Upload CSV
          </div>
        </label>
      </form>
    </>
  );
}
