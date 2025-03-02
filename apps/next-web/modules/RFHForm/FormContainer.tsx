"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Box, Text } from "@chakra-ui/react";
import { FormComponent } from "./components";
import { useSubmitForm } from "./hooks";
import { formSchema } from "./schemas";
import { FormData } from "./types";

const FormContainer = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  const { error, handleSubmit } = useSubmitForm();

  return (
    <FormProvider {...methods}>
      <Box maxW="400px" mx="auto">
        {error && <Text color="red.500">Submission failed</Text>}
        <form onSubmit={methods.handleSubmit(handleSubmit)} noValidate>
          <FormComponent />
        </form>
      </Box>
    </FormProvider>
  );
};

export default FormContainer;
