import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CardBerita({ image, author, title, url, publishedAt }) {
  return (
    <div className="rounded-lg border-2 border-gray-500 p-2">
      {/* <Image src={image} width={200} height={200} alt="https://ichef.bbci.co.uk/news/1024/branded_news/fc33/live/1ecb1d10-1876-11ef-aaa5-2b41c801f9c6.jpg" /> */}
      <div className="text-lg font-semibold">{title}</div>
      <div>{`Author: ${author}`}</div>
      <div>{`Published At: ${publishedAt}`}</div>
      <Link href={url} passHref={true} className="text-blue-700">
        Link disini
      </Link>
    </div>
  );
}
