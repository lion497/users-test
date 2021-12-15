import './App.scss';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {UsersPage} from 'pages/UsersPage/UsersPage';
import {Provider} from "react-redux";
import {store} from "store/index";
import {QueryClient, QueryClientProvider} from 'react-query'
import Profile from "./pages/ProfilePage/Profile";

const queryClient = new QueryClient()

function App() {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <HashRouter>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<UsersPage/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                        </Routes>
                    </div>
                </HashRouter>
            </QueryClientProvider>
        </Provider>
    );
}

export default App;
