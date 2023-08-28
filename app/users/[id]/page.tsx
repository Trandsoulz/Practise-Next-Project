import { User } from "@/app/types/User";
import getPosts from "@/app/utils/getPosts";
import getUser from "@/app/utils/getUser";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const id = params.id;

  const user: User = await getUser(id);

  return {
    title: user.name,
    description: "A likkle description about the user",
  };
};

const UserPage = async ({ params } : Props) => {
  // { params: { id } }: { params: { id: string } }

  const id = params.id;
  const user: User = await getUser(id);
  const post = await getPosts(id);

  return (
    <>
      <h1 className="px-4 underline">User Profile</h1>
      <div className=" p-4">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>

      <h1 className="px-4 underline">User Posts</h1>
      <div className="p-4">
        <h1 className="text-lg">Title : {post.title}</h1>
        <p className="py-2 max-w-xl">{post.body}</p>
      </div>
      {/* Add more user information here */}
    </>
  );
};

export default UserPage;
