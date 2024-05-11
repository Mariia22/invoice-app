import { z } from "zod";

export const invoiceFormSchema = z.object({
  senderStreetAddress: z.string().min(5, {message:"Must be 5 or more characters long"}),
  senderCity: z.string().min(5, {message:"Must be 5 or more characters long"}),
  senderPostCode: z.string().min(5, {message:"Must be 5 or more characters long"}),
  senderCountry: z.string().min(5, {message:"Must be 5 or more characters long"}),
  clientName: z.string().min(5, {message:"Must be 5 or more characters long"}),
  clientEmail: z.string().min(5, {message:"Must be 5 or more characters long"}),
  clientStreetAddress: z.string().min(5, {message:"Must be 5 or more characters long"}),
  clientCity: z.string().min(5, {message:"Must be 5 or more characters long"}),
  clientPostCode: z.string().min(5, {message:"Must be 5 or more characters long"}),
  clientCountry: z.string().min(5, {message:"Must be 5 or more characters long"}),
  invoiceData: z.string().min(5, {message:"Must be 5 or more characters long"}),
  paymentTerms: z.number(),
  description: z.string().min(5, {message:"Must be 5 or more characters long"}),
});

export type invoiceFormType = z.infer<typeof invoiceFormSchema>;
