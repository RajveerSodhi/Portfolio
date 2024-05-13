export default function IPhone() {
    return (
        <div>
            <div>
                <img src="icons_framed_screenshots/1.png" alt="iphone_framed_screenshot" style={{ width: "40%" }} />
            </div>
            <div className="d-flex justify-content-center mt-3">
                <div className="form-check form-switch d-flex align-items-center" style={{ padding: "0px" }}>
                    <span>
                        <img src="iphone_switch_labels/black_icons.png" alt="black_icons" style={{ width: "1.5em" }} />
                    </span>
                    <input className="form-check-input mx-2" type="checkbox" role="switch" id="iconsSwitch" />
                    <span>
                        <label className="form-check-label" htmlFor="iconsSwitch">
                            <img src="iphone_switch_labels/white_icons.png" alt="white_icons" style={{ width: "1.5em" }} />
                        </label>
                    </span>
                </div>
                <div className="form-check form-switch d-flex align-items-center" style={{ paddingLeft: "2.5rem" }}>
                    <span>
                        <img src="iphone_switch_labels/black_wallpaper.png" alt="black_wallpaper" style={{ width: "1.25em" }} />
                    </span>
                    <input className="form-check-input mx-2" type="checkbox" role="switch" id="wallpaperSwitch" />
                    <span>
                        <label className="form-check-label" htmlFor="wallpaperSwitch">
                            <img src="iphone_switch_labels/white_wallpaper.png" alt="white_wallpaper" style={{ width: "1.25em" }} />
                        </label>
                    </span>
                </div>
            </div>
        </div>
    );
}