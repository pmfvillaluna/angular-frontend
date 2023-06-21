import { Address } from "./address";
import { Name } from "./name";
import { ContactInformation } from "./contact-information";
import { Role } from "./role";

export interface Person {
  id: number;
  name: Name;
  address: Address[];
  birthday: Date;
  GWA: number;
  dateHired: Date;
  isEmployed: boolean;
  contactInformation: ContactInformation[];
  roleName: Role[];
}
