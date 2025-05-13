export type TGetUsers = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type TCreateUser = {
  id: number;
  name: string;
};

export type TGetTodos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TGetPosts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsResponseType<T> = T extends { id: number | string }
  ? TGetPosts
  : TGetPosts[];
