"use client";
import React, { useState, useEffect } from 'react';

export default function IPhone() {
    const [iconsSwitch, setIconsSwitch] = useState(false);
    const [wallpaperSwitch, setWallpaperSwitch] = useState(true);
    const [imageSrc, setImageSrc] = useState("icons_framed_screenshots/1.png");

    useEffect(() => {
        if (!iconsSwitch && !wallpaperSwitch) {
            setImageSrc("icons_framed_screenshots/4.png");
        } else if (iconsSwitch && !wallpaperSwitch) {
            setImageSrc("icons_framed_screenshots/3.png");
        } else if (!iconsSwitch && wallpaperSwitch) {
            setImageSrc("icons_framed_screenshots/1.png");
        } else if (iconsSwitch && wallpaperSwitch) {
            setImageSrc("icons_framed_screenshots/2.png");
        }
    }, [iconsSwitch, wallpaperSwitch]);

    return (
        <div>
            <div>
                <img src={imageSrc} alt="iphone_framed_screenshot iphone" style={{ width: "40%" }} />
            </div>
            <div className="d-flex justify-content-center mt-3">
                <div className="form-check form-switch d-flex align-items-center my-switch" style={{ padding: "0px" }}>
                    <span>
                        <label htmlFor="iconsSwitch">
                            <img src="iphone_switch_labels/black_icons.png" alt="black_icons" style={{ width: "1.5em" }} />
                        </label>
                    </span>
                    <input className="form-check-input mx-2" type="checkbox" role="switch" id="iconsSwitch" checked={iconsSwitch} onChange={() => setIconsSwitch(!iconsSwitch)} />
                    <span>
                        <label htmlFor="iconsSwitch">
                            <img src="iphone_switch_labels/white_icons.png" alt="white_icons" style={{ width: "1.5em" }} />
                        </label>
                    </span>
                </div>
                <div className="form-check form-switch d-flex align-items-center my-switch" style={{ paddingLeft: "2.5rem" }}>
                    <span>
                        <label htmlFor="wallpaperSwitch">
                            <img src="iphone_switch_labels/black_wallpaper.png" alt="black_wallpaper" style={{ width: "1.25em" }} />
                        </label>
                    </span>
                    <input className="form-check-input mx-2" type="checkbox" role="switch" id="wallpaperSwitch" checked={wallpaperSwitch} onChange={() => setWallpaperSwitch(!wallpaperSwitch)} />
                    <span>
                        <label htmlFor="wallpaperSwitch">
                            <img src="iphone_switch_labels/white_wallpaper.png" alt="white_wallpaper" style={{ width: "1.25em" }} />
                        </label>
                    </span>
                </div>
            </div>
        </div>
    );
}