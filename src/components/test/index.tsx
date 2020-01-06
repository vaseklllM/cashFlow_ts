import React from "react"
import { Box, Typography } from "@material-ui/core"

type TProps = {
    name: string
}

const App: React.FC<TProps> = props => {
    return (
        <div className='App'>
            <header className='App-header'>
                <Box>
                    Edit <Typography variant='h5'>qweqwdasdqw</Typography> and save to reload.
                </Box>
                <span>
                    {props.name}
                </span>
            </header>
        </div>
    )
}

export default App
