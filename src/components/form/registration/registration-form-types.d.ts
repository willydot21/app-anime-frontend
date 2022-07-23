
export interface RegistrationProps {
  loginState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  children: React.ReactNode;
  callbackSubmit: (
    event: React.FormEvent<HTMLFormElement>, 
    loadingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  ) => void;
}

export interface WrapperStates {
  loading: [Boolean, Function];
}