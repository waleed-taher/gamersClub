import React from "react";

interface GenrePanelProps {
  label: string;
  onClick: (label: string) => void;
}

const GenrePanel = ({ label, onClick }: GenrePanelProps) => {
  return (
    <div className="flex flex-col w-full ">
      <button
        className="flex items-center justify-center my-2 px-2 py-2 bg-[#ededed] rounded-lg hover:text-purple-700"
        onClick={() => onClick(label)}
      >
        {label}
      </button>
    </div>
  );
};

export default GenrePanel;
