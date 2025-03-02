import { useFormContext } from "react-hook-form";
import { Checkbox, FormControl, FormErrorMessage } from "@chakra-ui/react";

interface FormCheckboxProps {
  name: string;
  label: string;
}

export const FormCheckbox = ({ name, label }: FormCheckboxProps) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <FormControl isInvalid={!!errors[name]}>
      <Checkbox {...register(name)}>{label}</Checkbox>
      <FormErrorMessage>{errors[name]?.message as string}</FormErrorMessage>
    </FormControl>
  );
};
