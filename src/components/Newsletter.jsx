import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "@mui/material/Button";


export const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("¡Gracias! Tu mail se registró correctamente.")
        setEmail('');
}



    return (
    <Col lg={12}>
        <div className="newsletter">
        <Row>
            <Col lg={12} md={6} xl={5}>
            <h1>Subscribete a nuestra Newsletter</h1>
            <h5>¡no te pierdas nuestras novedades! Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            </Col>
            <Col lg={12} md={6} xl={7}>
            <form  onSubmit={handleSubmit} className="new-email">
                <input 
                    onChange={handleEmail}
                    value={email}
                    type= {"email"} 
                    required
                    placeholder="Mail@gmail.com" 
                    />
                <Button type="submit" variant="contained">Suscribirse</Button>
            </form>
            </Col>
        </Row>
        </div>
    </Col>
)
}