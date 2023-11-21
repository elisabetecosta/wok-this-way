"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

import { BuffetValidation } from "@/lib/validations/buffet";


interface FormProps {
    formTitle: string;
    defaultValues: {
        name: string;
        location: string;
        description: string;
        price: number;
    };
    onSubmit: (values: z.infer<typeof BuffetValidation>) => Promise<void>;
    buttonText: string;
};


const BuffetForm: React.FC<FormProps> = ({ formTitle, defaultValues, onSubmit, buttonText }) => {

    const form = useForm<z.infer<typeof BuffetValidation>>({
        resolver: zodResolver(BuffetValidation),
        defaultValues
    });


    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-2xl px-4 py-4 lg:py-8">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    {formTitle}
                </h2>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>

                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
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
                            {buttonText}
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
}

export default BuffetForm;