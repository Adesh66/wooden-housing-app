import { useEffect, useState } from 'react';
import './App.scss';
import Breadcrumb from './components/Breadcrumb';
import FloorPlan from './components/FloorPlan';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ProjectDetails from './components/ProjectDetails';
import WhyChooseUs from './components/WhyChooseUs';
import { getDatabase, ref, onValue } from 'firebase/database';
import cong, { db } from './configuration';
import { collection, getDocs } from '@firebase/firestore';

function App() {
    const [data, setData] = useState([]);
    const usersCollectionRef = collection(db, 'services');
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            console.log(data);

            setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);
    console.log(data);

    const { projectDetails={}, title, description ,img, gallery = []} = data?.[0] || {};
    return (
        <div className='App'>
            <Header />
            <HeroBanner img={img} title={title} description={description} />
            <div className='container xl mx-auto bg-white px-24'>
                <Breadcrumb />
                <WhyChooseUs />
                <ProjectDetails projectDetails={projectDetails} gallery={gallery}/>
                <FloorPlan projectDetails={projectDetails}/>
            </div>
        </div>
    );
}

export default App;
