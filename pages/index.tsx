import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { getSortedPostsData } from "../utils/posts";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";

import styles from "../styles/Home.module.css";

interface Props {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}

const Home: NextPage<Props> = ({ allPostsData }) => {
  //  className={styles.container}
  return (
    <Layout home>
      <div>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className="text-xl leading-normal text-center">
          <p>你好，我是 kane</p>
          <p>一个又菜又爱玩的前端小白，欢迎来到我的博客！</p>
        </section>

        <section className="text-xl leading-normal pt-4">
          <h2 className=" text-2xl my-4 font-bold">Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className="mb-5">
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // 获取文章列表
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
