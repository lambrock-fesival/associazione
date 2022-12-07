import PageTemplate from "../components/Templates/PageTemplate";
import Aside from "../components/Aside/Aside";
import { getPageMD } from "../utils/load-md";
import Header from "../components/Header/Header";

export default function Storia({ data }) {
    const title = "La Nostra Storia"
    return (
        <PageTemplate>
            <Header>{title}</Header>
            <Aside>{data}</Aside>
        </PageTemplate >
    );
}

export async function getStaticProps() {
    const data = [getPageMD("Origini"), getPageMD("Altro"), getPageMD("10 Anni di Lambrock")]
    return {
        props: {
            data,
        },
    };
}