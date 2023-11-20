import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function CardBerita({ author, title, url, publishedAt }) {
  return (
    <div className="rounded-lg border-2 border-gray-500 p-2">
      <div className="text-lg font-semibold">{title}</div>
      <div>{`Author: ${author}`}</div>
      <div>{`Published At: ${publishedAt}`}</div>
      <Link href={url} passHref={true} className="text-blue-700">
        Link disini
      </Link>
    </div>
  );
}
