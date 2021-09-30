import { OrganizationPlace } from "./OrgranizationPlace";
import {User} from "./User";

export interface Organization {
    fullName: string,
    id: number,
    phoneNumber: string,
    places: OrganizationPlace[],
    title: number,
    users: User[]
}
