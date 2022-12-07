import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Carousel } from "../Carousel";
import { Wave } from "../Wave";

export default function PageTemplate({ children }) {
	const whereis = "Dove si trova il posto?"

	return (
		<>
			<title>Associazione Lambrock Festival</title>
			<Navbar />
			<Carousel />
			<Container>
				<Row className="mt-4">
					<Col>{children}</Col>
				</Row>
				<hr />
				<Header>{whereis}</Header>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.7086604655708!2d9.204294939534543!3d45.72119144859266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786a2f65fcb9d29%3A0xd909f823ace0d477!2sAssociazione%20Culturale%20No%20Profit%20%22Mondo%20Delle%20uoVa%22%20-%20Sala%20Prove!5e1!3m2!1sit!2sit!4v1633005682907!5m2!1sit!2sit"
					title="dovesiamo"
					width="100%"
					height="450"
					style={{ border: 0 }}
					className="mb-3"
					allowFullScreen=""
					loading="lazy"
				/>
			</Container>
			<Wave />
			<Footer />
		</>
	);
}