import React, { createContext, useState } from 'react'

export const ModelContext = createContext();

export function ModelProvider({children}) {
    const [modelItem, setModelItem] = useState({});
    const [close, setClose] = useState(null);

    function addInModel(item) {
      const html = document.querySelectorAll('html')[0];
      html.style.overflow = 'hidden';
        setClose(true);
        setModelItem(item)
      
    }

  return (
    <ModelContext.Provider value={{modelItem, setModelItem, addInModel, close, setClose}}>
        {children}
    </ModelContext.Provider>
  )
}

export default ModelContext