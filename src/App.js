import react from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Header from './Header';
import Slider from './Slider';
import Sdata from './Sdata';
import Footer from './Footer';

const ncard = (val) => {
    return (
        <Card
            imgsrc={val.imgsrc}
            alt={val.alt}
            title={val.title}
            sname={val.sname}
            Link={val.Link}
        />
    );
}

const App = () => {
    return (
        <>
            <Header />
            <Slider />
            <h1 className="netflix__series">List of Top 8 Netflix Series in 2021</h1>
            {Sdata.map(ncard)}
            <Footer />

        </>
    );
}

export default App;
