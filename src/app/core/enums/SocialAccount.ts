export interface ISocialAccount {
  SocialName: SocialAccountsTypes;
  //SocialName:number;
  SocialLink: string;
}

export enum SocialAccountsTypes {
  Facebook = 1,
  Linkedin = 2,
  GitHub = 3
}
