"use client";

import * as z from "zod";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { BuffetValidation } from "@/lib/validations/buffet";
import { fetchBuffet } from "@/lib/actions/buffet.actions";
import { updateBuffet } from "@/lib/actions/buffet.actions";

import BuffetForm from "@/components/buffet-form";

interface BuffetProps {
    name: string;
    location: string;
    price: number;
    description: string;
};


export default function EditPage() {

    const { buffetId } = useParams();

    // Ensure buffetId is always a string
    const formattedBuffetId: string = Array.isArray(buffetId) ? buffetId[0] : buffetId;

    console.log(formattedBuffetId)

    const router = useRouter();

    const [buffet, setBuffet] = useState<BuffetProps | undefined>(undefined);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function getBuffet() {

            const buffet = await fetchBuffet(formattedBuffetId);
            setBuffet(buffet);
            setLoading(false);
        };

        getBuffet();

    }, [formattedBuffetId]);


    const defaultValues = {
        name: buffet?.name ?? "",
        location: buffet?.location ?? "",
        description: buffet?.description ?? "",
        price: buffet?.price ?? 0,
    };


    const onSubmit = async (values: z.infer<typeof BuffetValidation>) => {
        try {

            await updateBuffet(
                formattedBuffetId,
                {
                    name: values?.name,
                    location: values?.location,
                    description: values?.description,
                    price: values?.price,
                }
            );

            router.push(`/buffets/${formattedBuffetId}`);

        } catch (error: any) {
            console.error(`Failed to submit form: ${error.message}`);
        }
    };


    if (loading) {
        return <div>Loading...</div>;
    }
    

    return (

        <div>
            {buffet ? (
                <BuffetForm
                    formTitle={`Update ${buffet?.name}`}
                    defaultValues={defaultValues}
                    onSubmit={onSubmit}
                    buttonText="Update Buffet"
                />
            ) : (
            <h1>Buffet was not found</h1>
          )}
        </div>
    );
}