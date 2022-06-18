
export interface RegistrationProps {
  children: JSX.Element;
  callbackSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface WrapperStates {
  loading: [Boolean, Function];
}