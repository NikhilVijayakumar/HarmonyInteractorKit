//path src/common/event/eventType.ts

/**
 * Enum to represent various event types.
 */
export enum EventType {
  IDLE = 1, // Application is in an idle state.
  NEXT = 2, // Next action event.
  PREVIOUS = 3, // Previous action event.
  CANCEL = 4, // Cancelation event.
  COMPLETED = 5, // Event to indicate task completion.
}
