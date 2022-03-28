import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './redux/store'
import CustomRoutes from './routes/customRoutes'

const App = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <CustomRoutes />
            </BrowserRouter>
        </Provider>
    )
}

export default App