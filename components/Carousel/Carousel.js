import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

import simo from '../../public/images/carousel/simo.jpg';
import yoga from '../../public/images/carousel/yoga.jpg';
import vitto from '../../public/images/carousel/vittogaytrap.jpg';

function CarouselFade() {
    return (
        <Carousel fade>
            <Carousel.Item >
                <CarouselImage>{simo}</CarouselImage>
                <Carousel.Caption>
                    <h3>Prima Edizione</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage>{vitto}</CarouselImage>
                <Carousel.Caption>
                    <h3>Altro Evento Importante</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage>{yoga}</CarouselImage>
                <Carousel.Caption>
                    <h3>10 Anni di Lambrock</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    );
}

export default CarouselFade;

function CarouselImage(imgPath) {
    return (

        <Image
            src={imgPath.children}
            className="bg-block d-block"
            height={500}
            objectFit="cover"
            objectPosition="center"
            quality={100}
            alt="Lambrock"
            layout="responsive"
        //onLoadingComplete={e => console.log(e)}
        />

    )
}