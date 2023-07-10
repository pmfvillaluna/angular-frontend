import { Address } from "./address";
import { Name } from "./name";
import { ContactInformation } from "./contact-information";
import { Role } from "./role";

export interface Person {
  id: number;
  name: Name;
  address: Address[];
  birthday: Date;
  gwa: number;
  dateHired: Date;
  employed: boolean;
  contactInformation: ContactInformation[];
  roles: Role;
  [key: string]: any
}
