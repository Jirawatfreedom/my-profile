'use client';

import Error from 'next/error';

export default function NotFound() {
  return (
    <div lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </div>
  );
}
