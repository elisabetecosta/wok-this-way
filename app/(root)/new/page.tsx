"use client";

import * as z from "zod";
import { useRouter } from "next/navigation";

import { BuffetValidation } from "@/lib/validations/buffet";
import { createBuffet } from "@/lib/actions/buffet.actions";

import BuffetForm from "@/components/buffet-form";


export default function NewBuffetPage() {

  const router = useRouter();

  const defaultValues = {
    name: "",
    location: "",
    description: "",
    price: 0,
  };


  const onSubmit = async (values: z.infer<typeof BuffetValidation>) => {

    try {

      const buffetId = await createBuffet({
        name: values?.name,
        location: values?.location,
        description: values?.description,
        price: values?.price,
      });

      router.push(`/buffets/${buffetId}`);

    } catch (error: any) {
      console.error(`Failed to submit form: ${error.message}`);
    }
  };


  return <BuffetForm
    formTitle="Add a New Buffet"
    defaultValues={defaultValues}
    onSubmit={onSubmit}
    buttonText="Create Buffet"
  />;
}