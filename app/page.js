import React from "react";
import CardBerita from "./components/CardBerita";

export default async function page() {
  const api = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`);

  const api_json = await api.json();
  console.log(api_json);
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mt-5">BERITA TERKINI</h1>
      {/* {JSON.stringify(api_json.articles)} */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        {api_json.articles.map((berita) => {
          return <CardBerita author={berita.author} title={berita.title} url={berita.url} publishedAt={berita.publishedAt} key={berita.url} />;
        })}
      </div>
    </div>
  );
}
