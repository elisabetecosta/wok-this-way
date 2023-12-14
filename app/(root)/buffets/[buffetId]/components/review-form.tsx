"use client";

import * as z from "zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import { ReviewValidation } from "@/lib/validations/review";
import { createReview } from "@/lib/actions/review.actions";

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

import RatingInput from "@/components/ui/rating-input";


type ReviewFormValues = z.infer<typeof ReviewValidation>;

interface ReviewFormProps {
    buffetId: string;
};


const ReviewForm: React.FC<ReviewFormProps> = ({ buffetId }) => {

    const [rating, setRating] = useState(3);

    const form = useForm<ReviewFormValues>({
        resolver: zodResolver(ReviewValidation),
        defaultValues:
        {
            buffetId: buffetId,
            title: "",
            description: "",
        }
    });

    const isSubmitSuccessful = form.formState.isSubmitSuccessful;

    useEffect(() => {

        form.setValue("rating", rating);

        if (isSubmitSuccessful) {
            form.reset();
            setRating(3);
        }
        // eslint-disable-next-line
    }, [rating, isSubmitSuccessful]);


    async function onSubmit(values: ReviewFormValues) {

        try {

            await createReview(values);
            toast.success("Review successfully created!");

        } catch (error) {
            toast.error("Failed to submit review.");
        }
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>

                <div className="mb-4 p-4 w-full rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-700">

                    <div className="w-1/2 p-2">
                        <FormLabel className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                            Rating
                        </FormLabel>
                        <Input
                            type="hidden"
                            name="rating"
                            value={rating}
                        />
                        <RatingInput rating={rating} setRating={setRating} />
                    </div>


                    <div className="mb-2 w-full lg:w-1/4 p-2">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="mt-3">
                                    <FormLabel className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            {...field}
                                            className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500 dark:focus:ring-teal-500"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>


                    <div className="mb-2 p-2">
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="mt-3">
                                    <FormLabel className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        Description
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            rows={4}
                                            placeholder="Leave a review..."
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500 dark:focus:ring-teal-500"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>


                    <div className="flex items-center justify-between px-3 py-2 dark:border-gray-600">
                        <Button
                            type="submit"
                            disabled={isSubmitSuccessful}
                            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                        >
                            Post Review
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
}

export default ReviewForm;