import { Col, Container, Row } from 'react-bootstrap';

export default function Header(title) {
	return (
		<Container>
			<Row>
				<Col>
					<h1 className='mt-2 mb-4'>{title.children}</h1>
				</Col>
			</Row>
		</Container>
	);
}
