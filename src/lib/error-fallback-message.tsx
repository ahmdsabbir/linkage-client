/* eslint-disable @typescript-eslint/no-unsafe-member-access */
function ErrorMessage({ error }) {
  return (
    <div role="alert" className="text-error">
      <span>There was an error: </span>
      <pre className="m-0 -mb-1 " style={{ whiteSpace: "break-spaces" }}>
        {error.message}
      </pre>
    </div>
  );
}

function FullPageErrorFallback({ error }) {
  return (
    <div
      role="alert"
      className="flex min-h-screen flex-col items-center justify-center text-error"
    >
      <p>Uh oh... There&apos;s a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  );
}

export { FullPageErrorFallback, ErrorMessage };
