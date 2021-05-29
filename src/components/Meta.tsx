import Head from "next/head";
interface Props {
  title: string;
  keywords: string;
  description: string;
}

export default function Meta({ title, keywords, description }: Props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "Cleanerz",
  keywords: "Cleaning app",
  description: "Keep track of and book cleans.",
};
