"use client";
import React, { useState, useEffect } from "react";

export default function IPhone() {
    const [iconsSwitch, setIconsSwitch] = useState(false);
    const [wallpaperSwitch, setWallpaperSwitch] = useState(true);
    const [imageSrc, setImageSrc] = useState("icons_framed_screenshots/1.png");

    useEffect(() => {
        if (!iconsSwitch && !wallpaperSwitch) {
            setImageSrc("4");
        } else if (iconsSwitch && !wallpaperSwitch) {
            setImageSrc("3");
        } else if (!iconsSwitch && wallpaperSwitch) {
            setImageSrc("1");
        } else if (iconsSwitch && wallpaperSwitch) {
            setImageSrc("2");
        }
    }, [iconsSwitch, wallpaperSwitch]);

    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <img
                    src={`images/icons_framed_screenshots/${imageSrc}.png`}
                    alt="iPhone"
                    className="w-40 transition-configuration hover:scale[1.01]"
                />
            </div>
            <div className="d-flex justify-content-center mt-3">
                <div className="form-check form-switch flex items-center my-switch p-0">
                    <span>
                        <label htmlFor="iconsSwitch">
                            <img
                                src="images/iphone_switch_labels/black_icons.png"
                                alt="black_icons"
                                className="w-6"
                            />
                        </label>
                    </span>
                    <input
                        className="form-check-input mx-2"
                        type="checkbox"
                        role="switch"
                        id="iconsSwitch"
                        checked={iconsSwitch}
                        onChange={() => setIconsSwitch(!iconsSwitch)}
                    />
                    <span>
                        <label htmlFor="iconsSwitch">
                            <img
                                src="images/iphone_switch_labels/white_icons.png"
                                alt="white_icons"
                                className="w-6"
                            />
                        </label>
                    </span>
                </div>
                <div className="form-check form-switch d-flex align-items-center my-switch pl-10">
                    <span>
                        <label htmlFor="wallpaperSwitch">
                            <img
                                src="images/iphone_switch_labels/black_wallpaper.png"
                                alt="black_wallpaper"
                                style={{ width: "1.25em" }}
                            />
                        </label>
                    </span>
                    <input
                        className="form-check-input mx-2"
                        type="checkbox"
                        role="switch"
                        id="wallpaperSwitch"
                        checked={wallpaperSwitch}
                        onChange={() => setWallpaperSwitch(!wallpaperSwitch)}
                    />
                    <span>
                        <label htmlFor="wallpaperSwitch">
                            <img
                                src="images/iphone_switch_labels/white_wallpaper.png"
                                alt="white_wallpaper"
                                style={{ width: "1.25em" }}
                            />
                        </label>
                    </span>
                </div>
            </div>
        </div>
    );
}
