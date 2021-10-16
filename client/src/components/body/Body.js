import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ActivationEmail from './auth/ActivationEmail'
import Login from './auth/Login'
import Register from './auth/Register'
import NotFound from '../utils/NotFound/NotFound'
import ForgotPass from '../body/auth/ForgotPassword'
import ResetPass from '../body/auth/ResetPassword'
import Profile from './profile/Profile'

import {useSelector} from 'react-redux'
import Test from './test_paper/Test'
import Message from '../utils/Message/Message'
import Quiz from './quiz/Quiz'
import './Body.css'

function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged} = auth
    return (
        <section>
            <Switch>
                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />
                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />
                <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
                <Route path="/status" component={isLogged ? Quiz : NotFound} exact />
                <Route path="/test" component={isLogged ? Test : Message} exact />
                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />
            </Switch>
            <div className="body_container">
                <h2>Instructions : </h2>
                <ul>
                    <li>Participants have to register themselves and have to start their account using an activation link which will be provided to you into your registered email.</li>
                    <li>Participants have to strictly follow the guidelines given by the organizers.</li>
                    <li>Any kind of malpractices will not be tolerated.</li>
                    <li>This MCQ quiz consists of 4 programming languages i.e, C, C++, Python, Java.</li>
                    <li>There are 30 questions.</li>
                    <li>Each question contains points with a timeout of 30 seconds.</li>
                    <li>If you fail to choose the coorect answer within the time limit, you'll lose the quiz.</li>
                    <li>If you successfully attempt all the questions, you'll be moving to the next round.</li>
                    <li>The next round is basically a coding round where you can choose programming languages of your own to complete the problem statement.</li>
                    <li>This round will contain 2 questions with a time limit of 1 hr.</li>
                    <li>Best of luck!!!</li>
                </ul>
            </div>
        </section>
    )
}

export default Body
