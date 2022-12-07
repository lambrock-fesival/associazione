import ReactMarkdown from "react-markdown";
import PageTemplate from "../components/Templates/PageTemplate";
import { getPageMD } from "../utils/load-md";

export default function Galleria({ data }) {
  return (
    <PageTemplate>
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </PageTemplate>
  );
}

export async function getStaticProps() {
  const data = getPageMD("galleria");
  return {
    props: {
      data,
    },
  };
}