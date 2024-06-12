"use client";
import Image from "next/image";
import Switch from "react-switch";
import React, { useState, useEffect } from "react";

export default function IPhone() {
    const [iconsSwitch, setIconsSwitch] = useState(false);
    const [wallpaperSwitch, setWallpaperSwitch] = useState(true);
    const [imageSrc, setImageSrc] = useState("1");

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
            <Image
                src={`/images/icons_framed_screenshots/${imageSrc}.png`}
                alt="iPhone"
                width={375}
                height={812}
                priority={true}
                className="rounded-[2.16rem] md:rounded-[3.2rem] z-40 w-auto aspect-ratio h-auto max-h-[30rem] md:max-h-[42rem] transition-configuration hover:scale[1.01]"
            />
            <div className="flex flex-row justify-center items-center mt-3">
                <div className="my-switch flex flex-row">
                    <span>
                        <label htmlFor="iconsSwitch">
                            <Image
                                src="/images/iphone_switch_labels/black_icons.png"
                                alt="black_icons"
                                width={24}
                                height={24}
                                className="aspect-ratio w-5 z-40"
                            />
                        </label>
                    </span>
                    <Switch
                        id="iconsSwitch"
                        onChange={() => setIconsSwitch(!iconsSwitch)}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        checked={iconsSwitch}
                        height={16}
                        width={30}
                        handleDiameter={12}
                        className="mx-1 z-40"
                    />
                    <span>
                        <label htmlFor="iconsSwitch">
                            <Image
                                src="/images/iphone_switch_labels/white_icons.png"
                                alt="white_icons"
                                width={24}
                                height={24}
                                className="aspect-ratio w-5 z-40"
                            />
                        </label>
                    </span>
                </div>
                <div className="pl-8 flex flex-row items-center justift-center my-switch">
                    <span>
                        <label htmlFor="wallpaperSwitch">
                            <Image
                                src="/images/iphone_switch_labels/black_wallpaper.png"
                                alt="black_wallpaper"
                                width={24}
                                height={48}
                                className="aspect-ratio w-5 z-40"
                            />
                        </label>
                    </span>
                    <Switch
                        id="iconsSwitch"
                        onChange={() => setWallpaperSwitch(!wallpaperSwitch)}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        checked={wallpaperSwitch}
                        height={16}
                        width={30}
                        handleDiameter={12}
                        className="mx-1 z-40"
                    />
                    <span>
                        <label htmlFor="wallpaperSwitch">
                            <Image
                                src="/images/iphone_switch_labels/white_wallpaper.png"
                                alt="white_wallpaper"
                                width={24}
                                height={48}
                                className="aspect-ratio w-5 z-40"
                            />
                        </label>
                    </span>
                </div>
            </div>
        </div>
    );
}
