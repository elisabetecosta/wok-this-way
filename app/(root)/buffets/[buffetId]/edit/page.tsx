"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Buffet from "@/lib/models/buffet.model";

import { fetchBuffet } from "@/lib/actions/buffet.actions";

import BuffetForm from "@/components/buffet-form";


export default function EditPage() {

    const { buffetId } = useParams();

    // Ensure buffetId is always a string
    const formattedBuffetId: string = Array.isArray(buffetId) ? buffetId[0] : buffetId;

    const [buffet, setBuffet] = useState<Buffet | undefined>(undefined);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function getBuffet() {

            const buffet = await fetchBuffet(formattedBuffetId);
            setBuffet(buffet);
            setLoading(false);
        };

        getBuffet();

    }, [formattedBuffetId]);


    if (loading) {
        return <div>Loading...</div>;
    }


    return (

        <div>
            {buffet ? (
                <BuffetForm initialData={buffet} />
            ) : (
                <h1>Buffet was not found</h1>
            )}
        </div>
    );
}