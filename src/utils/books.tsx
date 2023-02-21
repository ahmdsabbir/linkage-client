/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useClient } from "context/auth-context";
import * as React from "react";

const queryClient = useQueryClient();

const loadingBook = {
  title: "Loading...",
  author: "loading...",
  coverImageUrl: "bookPlaceholderSvg",
  publisher: "Loading Publishing",
  synopsis: "Loading...",
  loadingBook: true,
};

const loadingBooks = Array.from({ length: 10 }, (v, index) => ({
  id: `loading-book-${index}`,
  ...loadingBook,
}));

const getBookSearchConfig = (
  client: (arg0: string) => Promise<unknown>,
  query: string | number | boolean
) => ({
  queryKey: ["bookSearch", { query }],
  queryFn: () =>
    client(`books?query=${encodeURIComponent(query)}`).then(
      (data: { books: any }) => data.books
    ),
  config: {
    onSuccess(books: unknown) {
      for (const book of books) {
        queryCache.setQueryData(["book", { bookId: book.id }], book);
        queryClient.invalidateQueries;
      }
    },
  },
});

function useBookSearch(query: any) {
  const client = useClient();
  const result = useQuery(getBookSearchConfig(client, query));
  return { ...result, books: result.data ?? loadingBooks };
}

function useBook(bookId: any) {
  const client = useClient();
  const { data } = useQuery({
    queryKey: ["book", { bookId }],
    queryFn: () =>
      client(`books/${bookId}`).then((data: { book: any }) => data.book),
  });
  return data ?? loadingBook;
}

function useRefetchBookSearchQuery() {
  const client = useClient();
  return React.useCallback(
    async function refetchBookSearchQuery() {
      queryCache.removeQueries("bookSearch");
      await queryCache.prefetchQuery(getBookSearchConfig(client, ""));
    },
    [client]
  );
}

function setQueryDataForBook(book: { id: any }) {
  queryCache.setQueryData(["book", { bookId: book.id }], book, bookQueryConfig);
}

export {
  useBook,
  useBookSearch,
  useRefetchBookSearchQuery,
  setQueryDataForBook,
};
