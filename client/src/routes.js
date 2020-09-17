import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import FilesPage from './pages/FilesPage'
import UploadPage from './pages/UploadPage'
import DetailPage from './pages/DetailPage'
import AuthPage from './pages/AuthPage'
import ProfilePage from './pages/ProfilePage'


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/files' exact>
                    <FilesPage />
                </Route>
                <Route path='/upload' exact>
                    <UploadPage />
                </Route>
                <Route path='/detail/:id' >
                    <DetailPage />
                </Route>
                <Route path='/profile' exact>
                    <ProfilePage />
                </Route>
                {/* <Route path='/files'> <div>fff</div></Route> */}
                <Redirect to='/files' />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path='/' exact>
                <AuthPage />
            </Route>
            <Redirect to='/' />
        </Switch>
    )

}