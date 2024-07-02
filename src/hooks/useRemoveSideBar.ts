import React, { useEffect } from "react";


const useRemoveSideBar = (callback: () => void, threshold: number = 900) => {

useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > threshold) {
        callback();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize)
    };

  }, []);

}

export default useRemoveSideBar;


