import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./game/EventList"
import { EventProvider } from "./game/EventProvider"
import { GameList } from "./game/GameList"
import { GameProvider } from "./game/GameProvider"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            Application views
        </main>
        <GameProvider>
            <Route exact path="/">
                <GameList />
            </Route>
        </GameProvider>
        <EventProvider>
            <Route exact path="/events">
                <EventList />
            </Route>
        </EventProvider>

    </>
}
