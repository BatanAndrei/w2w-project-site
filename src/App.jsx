import styles from './app.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from '../src/redux/store/store';
import Home from '../src/pages/Home/Home';
import Card from '../src/pages/Card/Card';
import SignUpCreate from './pages/SignUpCreate/SignUpCreate';
import SignIn from './pages/SignIn/SignIn';
import Chat from './pages/Chat/Chat';
import UserAgreements from './pages/UserAgreements/UserAgreements';
import PolicyProcessingPersonalDataDocument from './pages/PolicyProcessingPersonalDataDocument/PolicyProcessingPersonalDataDocument';
import ConfirmPhone from './pages/ConfirmPhone/ConfirmPhone';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import OnboardingStart from '../src/pages/Onboarding/OnboardingStart';
import OnboardingSecond from '../src/pages/Onboarding/OnboardingSecond';
import OnboardingEnd from '../src/pages/Onboarding/OnboardingEnd';
import ChooseRole from '../src/pages/ChooseRole/ChooseRole';
import BrandChoice from './pages/BrandChoice/BrandChoice';
import BloggerChoice from './pages/BloggerChoice/BloggerChoice';


function App() {

    const navigate = useNavigate();

    useEffect(() => {
        if(false)
        navigate('/signUp-create');
    }, [])

    const paths = {
        signUpCreate: "/signUp-create",
        userAgreements: "/signUp-create/user-agreements",
        policyPersonalData: "/signUp-create/policy-personalData",
        confirmPhone: "/signUp-create/confirm-phone",
        signIn: "/signIn",
        onboardingStart: "/onboarding-start",
        onboardingSecond: "/onboarding-second",
        onboardingEnd: "/onboarding-end",
        chooseRole: "/choose-role",
        brandChoice: "/choose-role/brand-choice",
        bloggerChoice: "/choose-role/blogger-choice", 
        home: "/",
        //card: "/card",
        //chat: "/websocket"
    };

    const routes = [
        { path: paths.signUpCreate, element: <SignUpCreate /> },
        { path: paths.userAgreements, element: <UserAgreements /> },
        { path: paths.policyPersonalData, element: <PolicyProcessingPersonalDataDocument /> },
        { path: paths.confirmPhone, element: <ConfirmPhone /> },
        { path: paths.signIn, element: <SignIn /> },
        { path: paths.onboardingStart, element: <OnboardingStart /> },
        { path: paths.onboardingSecond, element: <OnboardingSecond /> },
        { path: paths.onboardingEnd, element: <OnboardingEnd /> },
        { path: paths.chooseRole, element: <ChooseRole /> },
        { path: paths.home, element: <Home /> },
        { path: paths.brandChoice, element: <BrandChoice /> },
        { path: paths.bloggerChoice, element: <BloggerChoice /> },
        //{ path: paths.card, element: <Card /> },
        //{ path: paths.chat, element: <Chat /> },
    ];

    return (
        <div className={styles.app}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <main className={styles.main}>
                        <Routes>
                            {routes.map((route, index) => (<Route key={index} path={route.path} element={route.element} />))}
                        </Routes>
                    </main>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
