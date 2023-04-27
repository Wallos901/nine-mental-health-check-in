import Layout from "@/components/Layout";
import clientPromise from "@/lib/mongodb";
import { InferGetServerSidePropsType } from "next";

export async function getServerSideProps(context: any) {
  try {
    await clientPromise;

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

const Home = ({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Layout>{isConnected}</Layout>;
};

export default Home;
