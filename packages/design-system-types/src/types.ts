interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
export type Button = React.FC<ButtonProps>;

interface IconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
export type IconButton = React.FC<IconButtonProps>;

type FlexContainerProps = {
  children: React.ReactNode;
  flexDirection?: "row" | "column";
};

export type FlexContainer = React.FC<FlexContainerProps>;

type TextFieldProps = {
  readonly?: boolean;
  label: string;
  value: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

export type TextField = React.FC<TextFieldProps>;
