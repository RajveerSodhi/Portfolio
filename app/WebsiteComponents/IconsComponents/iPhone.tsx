export default function IPhone() {
    return (
        <div>
            <img src="icons_framed_screenshots/1.png" alt="iphone_frame" style={{ width: "40%" }} />
            <div>
                <span className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="iconsSwitch" />
                    <label className="form-check-label" htmlFor="iconsSwitch">..</label>
                </span>
                <span className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="wallpaperSwitch" />
                    <label className="form-check-label" htmlFor="wallpaperSwitch">..</label>
                </span>
            </div>
        </div>
    );
}