import { experimental_use as use } from "react";

import { Book } from "../src/types/Book";

async function getBooks(): Promise<Book[]> {
  const res = await fetch("https://www.abibliadigital.com.br/api/books");

  const books = await res.json();

  return books;
}

export default async function Books() {
  const books = await getBooks();

  console.log(books);

  return (
    <main className="p-4 rounded-lg bg-gray-800">
      <h1 className="text-xl font-bold">Livros</h1>
      <div className="flex flex-col gap-2">
        {books.map((book) => (
          <div key={book.name} className="flex flex-col gap-1">
            <strong>{book.name}</strong>
          </div>
        ))}
      </div>
    </main>
  );
}
