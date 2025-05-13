export type TGetPosts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsResponseType<T> = T extends { id: number | string }
  ? TGetPosts
  : TGetPosts[];
