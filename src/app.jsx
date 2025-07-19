import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './frontend/components/homePage';
import TransactionMain from './frontend/components/transactionMain';
import Layout from './frontend/components/layout';
import TrackitDashboard from './frontend/components/dashboard'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/trackit" element={<HomePage />} />

                <Route element={<Layout />}>
                    <Route path="/trackit/transactions" element={<TransactionMain />} />
                    <Route path='/trackit/dashboard' element={<TrackitDashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
