"use client";

import * as z from "zod";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import { BuffetValidation } from "@/lib/validations/buffet";
import Buffet from "@/lib/models/buffet.model";
import { createBuffet, updateBuffet } from "@/lib/actions/buffet.actions";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import ImageUpload from "@/components/ui/image-upload";


type BuffetFormValues = z.infer<typeof BuffetValidation>;

interface BuffetFormProps {
    initialData: Buffet | null;
};


const BuffetForm: React.FC<BuffetFormProps> = ({ initialData }) => {

    const router = useRouter();
    const { buffetId } = useParams();

    // Ensure buffetId is always a string
    const formattedBuffetId: string = Array.isArray(buffetId) ? buffetId[0] : buffetId;

    const [loading, setLoading] = useState(false);


    const title = initialData ? "Edit Buffet" : "Create Buffet";
    const toastMessage = initialData ? "Buffet updated." : "Buffet created.";
    const action = initialData ? "Update" : "Create";


    const form = useForm<BuffetFormValues>({
        resolver: zodResolver(BuffetValidation),
        defaultValues: initialData ? {
            ...initialData,
            price: parseFloat(String(initialData?.price))
        } : {
            name: "",
            images: [],
            location: "",
            description: "",
            price: 0,
        }
    });


    const onSubmit = async (values: BuffetFormValues) => {

        try {
                        
            setLoading(true);

            if (initialData) {

                await updateBuffet(formattedBuffetId, values);
                router.push(`/buffets/${formattedBuffetId}`);

            } else {

                const newBuffetId = await createBuffet(values);
                router.push(`/buffets/${newBuffetId}`);
            }

            toast.success(toastMessage);

        } catch (error) {
            toast.error("Failed to submit form.");

        } finally {
            setLoading(false);
        }
    }


    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="mx-auto max-w-2xl px-4 py-4 lg:py-8">
                <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                    {title}
                </h1>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>

                        {/* IMAGES */}
                        <FormField
                            control={form.control}
                            name="images"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Images</FormLabel>
                                    <FormControl>
                                        <ImageUpload
                                            value={field.value.map((image) => image.url)}
                                            disabled={loading}
                                            onChange={(url) => field.onChange([...field.value, { url }])}
                                            onRemove={(url) => field.onChange([...field.value.filter((current) => current.url !== url)])}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid gap-4 mt-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">

                                {/* Name */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="mt-3">
                                            <FormLabel>
                                                Buffet Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Type buffet name"
                                                    {...field}

                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                {/* Location */}
                                <FormField
                                    control={form.control}
                                    name="location"
                                    render={({ field }) => (
                                        <FormItem className="mt-3">
                                            <FormLabel>
                                                Buffet Location
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Insert the address exactly as it is listed by Google"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                {/* Description */}
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem className="mt-3">
                                            <FormLabel>
                                                Buffet Description
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea rows={5} placeholder="Add info about the buffet that you think is relevant" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                {/* Price */}
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem className="mt-3">
                                            <FormLabel>
                                                Price
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Type average price per person"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            // disabled={isSubmitSuccessful}
                            className={`mt-4 inline-flex items-center rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-200 disabled:opacity-40 dark:focus:ring-purple-900 sm:mt-6`}
                        >
                            {action}
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
}

export default BuffetForm;