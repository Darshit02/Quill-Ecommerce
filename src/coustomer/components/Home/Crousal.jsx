import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCrousalData } from './mainCrousalData';

const Crousal = () => {
    let items = mainCrousalData.map(item => (
        <img src={item.image} alt="" className='cursor-pointer w-full xl:h-[35rem] object-cover h-[30rem] md:h-[35rem]' role='presentation'/>
    ));
    return (
        <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={2000}
                infinite
                animationType='fade'
        />
    );
};

export default Crousal;