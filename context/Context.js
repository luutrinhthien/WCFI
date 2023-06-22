import { useContext, createContext, useState } from 'react'

const Context = createContext()


function ContextProvider({ children }) {
    const [reloadUI, setReloadUI] = useState(false)

    return (
        <Context.Provider value={[reloadUI, setReloadUI]}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }