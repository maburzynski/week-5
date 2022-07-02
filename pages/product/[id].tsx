import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { NextSeo } from "next-seo";
export default function SSGPage({ product }: { product: SSRPageProps }) {
  console.log(product);

  if (!product)
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );

  return (
    <>
      <NextSeo
        title={product.title}
        description={product.description}
        canonical={`/products/${product.id}`}
        openGraph={{
          url: `/products/${product.id}`,
          title: product.title,
          description: product.description,
          images: [
            {
              url: product.image,
              width: 800,
              height: 600,
              alt: product.title,
              type: "image/jpeg",
            },
          ],
          site_name: "Our Shop",
        }}
      />

      <main className="flex items-center justify-center h-screen">
        <div className="card w-64 bg-base-100 shadow-xl">
          <Image
            src={product.image}
            alt="Avatar Tailwind CSS Component"
            layout="responsive"
            width={100}
            height={100}
            objectFit="contain"
            quality={1}
          />

          <div className="card-body">
            <h2 className="card-title w-24 rounded">{product.title}</h2>
            <article className="p4 prose lg:prose-xl">
              <ReactMarkdown>{product.longDescription}</ReactMarkdown>
            </article>
            <div className="card-actions justify-end">
              <Link href="/listing/1">
                <button className="btn btn-primary">Back</button>
              </Link>
            </div>
          </div>
        </div>

        <div></div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${params.id}`
  );
  const product = await res.json();
  return {
    props: { product },
    revalidate: 360,
  };
};

export async function getStaticPaths() {
  const res = await fetch("https://naszsklep-api.vercel.app/api/products");
  const products = await res.json();

  const paths = products.map(({ id }: { id: string }) => ({
    params: { id: `${id}` },
  }));
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
      { params: { id: "8" } },
      { params: { id: "9" } },
      { params: { id: "10" } },
      { params: { id: "11" } },
      { params: { id: "12" } },
      { params: { id: "13" } },
      { params: { id: "14" } },
      { params: { id: "15" } },
      { params: { id: "16" } },
      { params: { id: "17" } },
      { params: { id: "18" } },
      { params: { id: "19" } },
      { params: { id: "20" } },
      { params: { id: "21" } },
      { params: { id: "22" } },
      { params: { id: "23" } },
      { params: { id: "24" } },
      { params: { id: "25" } },
    ],
    fallback: true,
  };
}

interface SSRPageProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: Rating;
  image: string;
  longDescription: string;
}

interface Rating {
  rate: number;
  count: number;
}
