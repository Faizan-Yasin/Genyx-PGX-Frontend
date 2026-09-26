import type { PropsWithChildren } from "react"
import { BrowserRouter } from "react-router"

const AppProvider = ({ children }: PropsWithChildren) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}

export default AppProvider
