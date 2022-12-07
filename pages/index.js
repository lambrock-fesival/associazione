import ReactMarkdown from "react-markdown";
import HomeTemplate from "../components/Templates/HomeTemplate";
import { getPageMD } from "../utils/load-md";

export default function Home({ data }) {
	return (
		<>
			<HomeTemplate>
				<ReactMarkdown>{data.content}</ReactMarkdown>
			</HomeTemplate>

		</>
	);
}

export async function getStaticProps() {
	const data = getPageMD("home");
	return {
		props: {
			data,
		},
	};
}
