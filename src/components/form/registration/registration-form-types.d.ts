
export type SubmitRegistrationEvent = (event: React.FormEvent<HTMLFormElement>) => void;

export interface RegistrationProps {
  children: React.ReactNode;
  callbackSubmit: SubmitRegistrationEvent;
}

export interface WrapperStates {
  loading: [Boolean, Function];
}