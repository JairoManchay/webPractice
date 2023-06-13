export interface DataUser {
  id?:     number;
  name:   string;
  email:  string;
  gender: Gender;
  status: Status;
  alt_img?: any;
}

export enum Gender {
  female= 0,
  male=1
}

export enum Status {
  active= 0,
  inactive=1
}
