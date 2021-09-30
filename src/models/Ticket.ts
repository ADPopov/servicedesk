import { Organization } from "./Organization";
import { OrganizationPlace } from "./OrgranizationPlace";
import { TicketStatus } from "./TicketStatus";
import { TicketType } from "./TicketType";
import {User} from "./User";

export interface Ticket {
    id: number,
    created: string,
    createdByUser: User,
    description: string,
    image: string,
    modified: string,
    organization: Organization,
    place: OrganizationPlace,
    responsibleByUser: User,
    statusId: number,
    supportedByUser: User
    ticketStatus: TicketStatus,
    ticketType: TicketType,
    title: string,
    unreadUser: number
}
