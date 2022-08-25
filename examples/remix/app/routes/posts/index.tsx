import * as RemixNode from "@remix-run/node";
import * as RemixServer from "@remix-run/server-runtime";
import * as RemixReact from "@remix-run/react";
import { getPosts } from "~/models/post.server";

type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader: RemixServer.LoaderFunction = async () => {
  const posts = await getPosts()
  return RemixNode.json<LoaderData>({
    posts,
  });
};

export default function Posts() {
  const { posts } = RemixReact.useLoaderData() as LoaderData;

  return (
    <main>
      <h1>Posts</h1>
      {posts?.length ? (<ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <RemixReact.Link
              to={post.slug}
              className="text-blue-600 underline"
            >
              {post.title}
            </RemixReact.Link>
          </li>
        ))}
      </ul>) : 'empty'}
    </main>
  );
}
