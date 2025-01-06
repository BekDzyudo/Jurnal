import { createContext, useState } from "react"

export const JurnalContext = createContext()

export const JurnalProvider = ({children})=>{
    const [lang, setLang] = useState("uz")
    return(
        <JurnalContext.Provider value={{lang, setLang}}>
            {children}
        </JurnalContext.Provider>
    )
}

