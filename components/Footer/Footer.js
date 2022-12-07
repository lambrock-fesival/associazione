import { Col, Row } from "react-bootstrap";
import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<>
			<Row className={styles.footcontainer}>
				<Col>
					<div className={styles.footitem}>Partito Social Italiano</div>
				</Col>
				<Col>
					<div className={styles.footitem}>Collegamenti Utitili</div>
				</Col>
				<Col>
					<div className={styles.footitem}>Statuto e Varie</div>
				</Col>
			</Row>
			<Row className="m-0 bg-dark">
				<div className="p-3 text-info text-center">@Sito realizzato da volontari Lambrock-Festival</div>
			</Row>
		</>
	);
}
