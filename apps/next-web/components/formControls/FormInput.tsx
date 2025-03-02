import { useFormContext } from "react-hook-form";
import { Input, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

interface FormInputProps {
  name: string;
  label: string;
  type?: string;
}

export const FormInput = ({ name, label, type = "text" }: FormInputProps) => {
  const methods = useFormContext();

  console.info('formState', methods.getValues())

  return (
    <FormControl isInvalid={!!methods.formState.errors[name]}>
      <FormLabel>{label}</FormLabel>
      <Input {...methods.register(name)} type={type} />
      <FormErrorMessage>{methods.formState.errors[name]?.message as string}</FormErrorMessage>
    </FormControl>
  );
};
