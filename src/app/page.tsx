import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Home() {
  let query = `*[_type="book"]{
  book_name
}`;

  let res = await client.fetch(query);

  console.log(res);
  return <></>;
}
