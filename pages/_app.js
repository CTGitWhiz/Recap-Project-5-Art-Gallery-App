import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import useSWR from "swr";

export const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (URL) => fetch(URL).then((res) => res.json());
export default function App({ Component, pageProps }) {
  const data = useSWR(URL, fetcher);
  const { data: picData, error, isLoading } = data;
  if (error) return <h1>failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} picData={picData} />
      </Layout>
    </>
  );
}
