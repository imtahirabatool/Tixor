import { Publisher, Subjects, TicketUpdated } from '@tixor/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdated> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
