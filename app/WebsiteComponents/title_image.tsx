import { Col } from "react-bootstrap";

export default function Image() {
    return (
        <Col xs={12} lg={6} className="mb-4 mb-md-0 d-flex justify-content-center">
            <div style={{ width: "400px", height: "400px", borderRadius: "50%", overflow: "hidden", border: "5px solid #000" }}>
                <img src="Photo.jpg" alt="Rajveer Sodhi Photo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
        </Col>
    );
}
