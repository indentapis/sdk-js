import { Event } from './audit'

/**
 * Event processors are used to change the event before it will be send.
 * We strongly advise to make this function sync.
 * Returning a Promise<Event | null> will work just fine, but better be sure that you know what you are doing.
 * Event processing will be deferred until your Promise is resolved.
 */
export type Processor = (event: Event) => Promise<Event | null> | Event | null
