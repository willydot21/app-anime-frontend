import React, { FocusEventHandler } from "react";

export interface PlaceHolderInputProps {
  name?: string;
  placeholder?: string;
  type?: string;
  _ref?: React.RefObject<HTMLInputElement>
  focus?: FocusEventHandler<HTMLInputElement>
}