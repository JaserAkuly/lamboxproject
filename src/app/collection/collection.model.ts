export interface CardI {
  titleCard: string;
  subtitleCard: string;
  contentCard: string;
  imageCard?: any;
  id?: string;
  tagsCard: string;
  fileRef?: string;
}

export interface FileI {
  name: string;
  imageFile: File;
  size: string;
  type: string;
}

export interface UserI {
  email: string;
  password?: string;
  displayName?: string;
  photoURL?: string;
  uid?: string;
  phoneNumber?: string;
}