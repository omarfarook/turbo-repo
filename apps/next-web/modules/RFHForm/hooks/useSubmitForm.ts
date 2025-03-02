import useSWRMutation from "swr/mutation";
import { FormData } from "../types";

const submitForm = async (url: string, { arg }: { arg: FormData }) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  });

  if (!res.ok) throw new Error("Submission failed");
  return res.json();
};

export const useSubmitForm = () => {
  const { trigger, isMutating, error } = useSWRMutation("/api/submitForm", submitForm);

  const handleSubmit = async (data: FormData) => {
    try {
      await trigger(data);
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

  return { handleSubmit, isMutating, error };
};
