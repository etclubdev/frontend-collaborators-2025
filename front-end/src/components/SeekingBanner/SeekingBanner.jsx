import './SeekingBanner.css'

import { background, seekingImage, block1, block2 } from '../../assets/images/collaborators'

export const SeekingBanner = () => {
    return (
        <div className="seeking-banner-section">
            <img loading="lazy" style={{ pointerEvents: "none" }} className="seeking-banner-background" src={background} alt="background" />
            <div className="seeking-banner-image">
                <img loading="lazy" style={{ pointerEvents: "none" }} src={seekingImage} alt="Collaborators Seeking" />
                <img loading="lazy" style={{ pointerEvents: "none" }} id="seeking-banner-block-2" src={block1} alt="block" />
            </div>
            <div className="seeking-banner-block">
                <img loading="lazy" style={{ pointerEvents: "none" }} id="seeking-banner-block-1" src={block2} alt="block" />
            </div>
        </div>
    )
}