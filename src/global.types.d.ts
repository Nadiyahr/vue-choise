declare type Post = {
  [key: string]: string;
  body: string;
  id: number;
  title: string;
  userId: number;
}

declare type Photo = {
  albumId: number;
  id: number;
  thumbnailUrl: string
  title: string;
  url: string;
}

declare interface List extends Post, Photo {
  title1: string;
}


