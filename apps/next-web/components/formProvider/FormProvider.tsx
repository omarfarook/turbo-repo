import { FormProvider as RHFProvider, UseFormReturn, FieldValues } from "react-hook-form";
import { ReactNode } from "react";

interface FormProviderProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: ReactNode;
}

export const FormProvider = <T extends FieldValues>({ methods, onSubmit, children }: FormProviderProps<T>) => {
  return (
    <RHFProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        {children}
      </form>
    </RHFProvider>
  );
};
