import styles from './app.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from '../src/redux/store/store';
import Home from '../src/pages/Home/Home';
import SignUpCreate from './pages/SignUpCreate/SignUpCreate';
import SignIn from './pages/SignIn/SignIn';
import MyChats from './pages/MyChats/MyChats';
import UserAgreements from './pages/UserAgreements/UserAgreements';
import PolicyProcessingPersonalDataDocument from './pages/PolicyProcessingPersonalDataDocument/PolicyProcessingPersonalDataDocument';
import ConfirmPhone from './pages/ConfirmPhone/ConfirmPhone';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import OnboardingStart from '../src/pages/Onboarding/OnboardingStart';
import OnboardingSecond from '../src/pages/Onboarding/OnboardingSecond';
import OnboardingEnd from '../src/pages/Onboarding/OnboardingEnd';
//import ChooseRole from '../src/pages/ChooseRole/ChooseRole';
import BrandChoice from './pages/BrandChoice/BrandChoice';
import BloggerChoice from './pages/BloggerChoice/BloggerChoice';
import TheBloggerQuestionnire from './pages/TheBloggerQuestionnire/TheBloggerQuestionnire';
import TheBrandQuestionnireFirst from './pages/TheBrandQuestionnireFirst/TheBrandQuestionnireFirst';
import TheBrandQuestionnireSecond from './pages/TheBrandQuestionnireSecond/TheBrandQuestionnireSecond';
import TheBrandQuestionnireThird from './pages/TheBrandQuestionnireThird/TheBrandQuestionnireThird';
import TheBrandQuestionnireFouth from './pages/TheBrandQuestionnireFouth/TheBrandQuestionnireFouth';
import StartPage from './pages/StartPage/StartPage';
import StartPageLight from './pages/StartPageLight/StartPageLight';
import ChatRoom from './pages/ChatRoom/ChatRoom';



function App() {

    const navigate = useNavigate();

    useEffect(() => {
        if(false)
            navigate('/brand-choice/brand-questionnire-first');
        if(true)
            navigate('/start-page'); 
        if(false)
            navigate('/brand-choice'); 
        if(false)
            navigate('/onboarding-start');
        if(false)
            navigate('/');
        if(false)
            navigate('/myChats')
    }, [])
    
    const paths = {
        startPage: "/start-page",
        startPageLight: "/start-pageLight",
        signUpCreate: "/signUp-create",
        userAgreements: "/signUp-create/user-agreements",
        policyPersonalData: "/signUp-create/policy-personalData",
        confirmPhone: "/signUp-create/confirm-phone",
        signIn: "/signIn",
        onboardingStart: "/onboarding-start",
        onboardingSecond: "/onboarding-second",
        onboardingEnd: "/onboarding-end",
        //chooseRole: "/choose-role",
        brandChoice: "/brand-choice",
        bloggerChoice: "/blogger-choice",
        theBloggerQuestionnire: "/blogger-choice/blogger-questionnire",
        theBrandQuestionnireFirst: "/brand-choice/brand-questionnire-first",
        theBrandQuestionnireSecond: "/brand-choice/brand-questionnire-second",
        theBrandQuestionnireThird: "/brand-choice/brand-questionnire-third",
        theBrandQuestionnireFouth: "/brand-choice/brand-questionnire-fouth",
        home: "/",
        myChats: "/myChats",
        chatRoom: "/chatRoom"
    };

    const routes = [
        { path: paths.startPage, element: <StartPage /> },
        { path: paths.startPageLight, element: <StartPageLight /> },
        { path: paths.signUpCreate, element: <SignUpCreate /> },
        { path: paths.userAgreements, element: <UserAgreements /> },
        { path: paths.policyPersonalData, element: <PolicyProcessingPersonalDataDocument /> },
        { path: paths.confirmPhone, element: <ConfirmPhone /> },
        { path: paths.signIn, element: <SignIn /> },
        { path: paths.onboardingStart, element: <OnboardingStart /> },
        { path: paths.onboardingSecond, element: <OnboardingSecond /> },
        { path: paths.onboardingEnd, element: <OnboardingEnd /> },
        //{ path: paths.chooseRole, element: <ChooseRole /> },
        { path: paths.home, element: <Home /> },
        { path: paths.brandChoice, element: <BrandChoice /> },
        { path: paths.bloggerChoice, element: <BloggerChoice /> },
        { path: paths.theBloggerQuestionnire, element: <TheBloggerQuestionnire /> },
        { path: paths.theBrandQuestionnireFirst, element: <TheBrandQuestionnireFirst /> },
        { path: paths.theBrandQuestionnireSecond, element: <TheBrandQuestionnireSecond /> },
        { path: paths.theBrandQuestionnireThird, element: <TheBrandQuestionnireThird /> },
        { path: paths.theBrandQuestionnireFouth, element: <TheBrandQuestionnireFouth /> },
        { path: paths.myChats, element: <MyChats /> },
        { path: paths.chatRoom, element: <ChatRoom /> },
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
