import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

export default function LightBox(props: {
    openImage: boolean;
    setOpenImage: (value: boolean) => void;
    link: string;
}) {
    const { openImage, setOpenImage, link } = props;

    const [animationDuration, setAnimationDuration] = useState(500);
    const [maxZoomPixelRatio, setMaxZoomPixelRatio] = useState(1);
    const [zoomInMultiplier, setZoomInMultiplier] = useState(2);
    const [doubleTapDelay, setDoubleTapDelay] = useState(300);
    const [doubleClickDelay, setDoubleClickDelay] = useState(300);
    const [doubleClickMaxStops, setDoubleClickMaxStops] = useState(2);
    const [keyboardMoveDistance, setKeyboardMoveDistance] = useState(50);
    const [wheelZoomDistanceFactor, setWheelZoomDistanceFactor] = useState(100);
    const [pinchZoomDistanceFactor, setPinchZoomDistanceFactor] = useState(100);
    const [scrollToZoom, setScrollToZoom] = useState(true);

    return (
        <>
            <Lightbox
                plugins={[Zoom]}
                open={openImage}
                animation={{ zoom: animationDuration }}
                render={{
                    buttonPrev: true ? () => null : undefined,
                    buttonNext: true ? () => null : undefined,
                }}
                zoom={{
                    maxZoomPixelRatio,
                    zoomInMultiplier,
                    doubleTapDelay,
                    doubleClickDelay,
                    doubleClickMaxStops,
                    keyboardMoveDistance,
                    wheelZoomDistanceFactor,
                    pinchZoomDistanceFactor,
                    scrollToZoom,
                }}
                close={() => setOpenImage(false)}
                slides={[{ src: `/images/project_photos/lightbox/${link}.png` }]}
            />
        </>
    );
}
