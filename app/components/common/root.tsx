import { AppContextProvider } from "~/context/app.context-provider"
import AppFrame from "./app-frame"

export const Root = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppContextProvider>
            <AppFrame>
                {children}
            </AppFrame>
        </AppContextProvider>
    ) 
}