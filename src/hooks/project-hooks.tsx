import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useClient } from "context/auth-context";

const queryClient = useQueryClient();

const getProjectshConfig = (client) => ({
  queryKey: ["projects"],
  queryFn: () =>
    client(`books?query=${encodeURIComponent(query)}`).then(
      (data: { books: any }) => data.books
    ),
  config: {
    onSuccess(books: unknown) {
      for (const book of books) {
        queryCache.setQueryData(
          ["book", { bookId: book.id }],
          book,
          bookQueryConfig
        );
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

export { useBook, useBookSearch };
