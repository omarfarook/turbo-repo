import { useFormContext } from "react-hook-form";
import { Radio, RadioGroup, Stack, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

interface FormRadioProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

export const FormRadio = ({ name, label, options }: FormRadioProps) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <FormControl isInvalid={!!errors[name]}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup>
        <Stack direction="row">
          {options.map(({ value, label }) => (
            <Radio key={value} {...register(name)} value={value}>
              {label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <FormErrorMessage>{errors[name]?.message as string}</FormErrorMessage>
    </FormControl>
  );
};
