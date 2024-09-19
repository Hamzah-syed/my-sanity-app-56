import { client } from "@/sanity/lib/client";
import Book from "./books-client";

export default async function Home() {
  let query = `*[_type=="book"]{
  book_name
}`;

  const res = await client.fetch(query);

  console.log(res);
  return (
    <>
      <Book />
    </>
  );
}
