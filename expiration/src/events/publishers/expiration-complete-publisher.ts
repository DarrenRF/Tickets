import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@drftickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
