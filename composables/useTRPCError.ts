import { TRPCClientError } from '@trpc/client'

export const useTRPCError = (e: any) => {
  if (e instanceof TRPCClientError) {
    const errors: { message: string; path: string[] }[] | null = JSON.parse(
      e.message
    )
    if (!errors) return 'Something went wrong'
    return errors[0].message ? errors[0].message : 'Something went wrong'
  }
  return 'Something went wrong'
}
