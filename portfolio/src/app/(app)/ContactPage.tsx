'use client'
import React, { useEffect } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useToast } from '../../components/hooks/use-toast'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form';
function ContactPage() {
    const formSchema = z.object({
        name: z.string().min(2,{
            message: "Name must be at least 2 characters"
        }),
        email: z.string().email(),
        subject: z.string().min(10,{
            message: "Subject must be at least 10 characters"
        }),
        message: z.string().min(10,{
            message: "Message must be at least 10 characters"}),
    });

    const form = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
        }
    );

    const { toast } = useToast();

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post("/api/sendmail", data);

            console.log(response.data.message);
            
            if (response.data.success) {
                toast({
                    description: response.data.message,
                });
            } else {
                toast({
                    description: response.data.message,
                    variant: "destructive",
                })
            }
            form.reset();
        } catch (error) {
            toast({
                description: "Something went wrong",
                variant: "destructive",
            });
        }
    }

    useEffect(() => {
        
    },[])
  return (
    <div className='bg-gray-900 text-white p-5'>
        <h1 className='text-4xl font-bold text-blue-700 mb-5'>Contact Me</h1>
        <div className='flex justify-center items-center w-full'>
            <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-md bg-gray-800 backdrop-blur-4xl backdrop-opacity-1 border border-gray-700 shadow-gray-900/10 dark:shadow-xl">
                <div className='text-center'>
                    <h1  className="text-4xl mb-6 font-bold tracking-tight ">Send us a Message</h1>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>FullName</FormLabel>
                            <FormControl>
                                <Input placeholder="FullName" {...field} className='text-gray-800' />
                            </FormControl>
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field} className='text-gray-800' />
                            </FormControl>
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input placeholder="Subject" {...field} className='text-gray-800' />
                            </FormControl>
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Message" {...field} className='text-gray-800' />
                            </FormControl>
                            </FormItem>
                        )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default ContactPage