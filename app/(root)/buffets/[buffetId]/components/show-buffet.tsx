"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit, Trash } from "lucide-react";

import { deleteBuffet } from "@/lib/actions/buffet.actions";

import { AlertModal } from "@/components/alert-modal";
import { Button } from "@/components/ui/button";


interface ShowBuffetProps {
    buffet: {
        _id: string;
        name: string;
        location: string;
        price: number;
        description: string;
    };
};


const ShowBuffet: React.FC<ShowBuffetProps> = ({ buffet }) => {

    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);


    const onDelete = async () => {

        try {

            setLoading(true);

            await deleteBuffet(buffet._id);

            router.push("/buffets");
            console.log("Buffet deleted");

        } catch (error: any) {
            console.error(`Failed to delete buffet: ${error.message}`);

        } finally {
            setLoading(false);
            setOpen(false);
        }
    }


    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            />

            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                <div className="mt-8 flex justify-between">
                    <div className="max-w-[35ch] space-y-2">
                        <h1 className="text-xl font-bold sm:text-2xl">
                            {buffet.name}
                        </h1>

                        <p className="text-sm">{buffet.location}</p>
                    </div>

                    <p className="text-lg font-bold">{buffet.price} €</p>
                </div>

                <div className="mt-4">
                    <div className="prose max-w-xl">
                        <p>{buffet.description}</p>
                    </div>

                    <Button
                        variant="default"
                        size="icon"
                        onClick={() => router.push(`/buffets/${buffet._id}/edit`)}
                    >
                        <Edit className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => setOpen(true)}
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ShowBuffet;