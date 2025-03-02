
import { FormCheckbox } from "@/components/formControls/FormCheckbox";
import { FormInput } from "@/components/formControls/FormInput";
import { FormRadio } from "@/components/formControls/FormRadio";
import { Button } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const FormComponent = () => {
    const { handleSubmit, setValue } = useFormContext();

  return (
    <>
      <FormInput name="name" label="Name" />
      <FormInput name="email" label="Email" type="email" />
      <FormCheckbox name="terms" label="I agree to the terms and conditions" />
      <FormRadio name="gender" label="Gender" options={[{ value: "male", label: "Male" }, { value: "female", label: "Female" }]} />
      <Button type="submit" mt={4} colorScheme="blue">Submit</Button>
    </>
  );
};
