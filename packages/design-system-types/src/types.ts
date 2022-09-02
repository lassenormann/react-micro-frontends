interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
export type Button = React.FC<IButtonProps>;

interface IIconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
export type IconButton = React.FC<IIconButtonProps>;

type FlexContainerProps = {
  children: React.ReactNode;
  flexDirection?: "row" | "column";
};

export type FlexContainer = React.FC<FlexContainerProps>;

interface ITextFieldProps {
  readonly?: boolean;
  label: string;
  value: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export type TextField = React.FC<ITextFieldProps>;
