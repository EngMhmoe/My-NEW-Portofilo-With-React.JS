//import Hooks react
import { useState } from "react";

//import Context Provider
import ContextProjectsData from "../context/ContextProjectsData";

//Data
import { Projects_Data } from "../Data/Projects Component/projects_Data";

export default function ContextProviderProjectsData({ children }) {
  //Projects Data
  const [ProjectsData, setProjectsData] = useState(Projects_Data);

  //Copy Projects Data
  const [CopyProjectsData, setCopyProjectsData] = useState(Projects_Data);

  return (
    <ContextProjectsData.Provider
      value={{
        Projects_Data: ProjectsData,
        setProjectsData: setProjectsData,
        CopyProjectsData: CopyProjectsData,
        setCopyProjectsData: setCopyProjectsData,
      }}
    >
      {children}
    </ContextProjectsData.Provider>
  );
}
