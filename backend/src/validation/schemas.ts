import { z } from 'zod';

export const reviewSchema = z.object({
	id: z.number(),
	prNumber: z.number(),
	prTitle: z.string().optional(),
	prAuthor: z.string().optional(),
	status: z.enum(['pending', 'processing', 'completed', 'failed', 'partial']),
	suggestions: z
		.array(
			z.object({
				id: z.number(),
				filePath: z.string(),
				lineNumber: z.number(),
				message: z.string(),
				explanation: z.string(),
				severity: z.enum(['low', 'medium', 'high']),
				category: z.string(),
				feedback: z.enum(['accepted', 'rejected']).optional(),
			}),
		)
		.optional(),
});

export const feedbackSchema = z.object({
	feedback: z.enum(['accepted', 'rejected']),
});

export const paginationQuerySchema = z.object({
	page: z.coerce.number().int().min(1).default(1),
});

export const idParamSchema = z.coerce.number().int().min(1);

export type Review = z.infer<typeof reviewSchema>;
export type Feedback = z.infer<typeof feedbackSchema>;
export type PaginationQuery = z.infer<typeof paginationQuerySchema>;
