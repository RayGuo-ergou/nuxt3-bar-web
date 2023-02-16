import { TRPCClientError } from '@trpc/client'

export const useTRPCError = (TRPCError: any) => {
  if (TRPCError instanceof TRPCClientError) {
    try {
      const errors: { message: string; path: string[] }[] | null = JSON.parse(
        TRPCError.message
      )
      if (!errors) return 'Something went wrong'
      return errors[0].message ? errors[0].message : 'Something went wrong'
    } catch (e: any) {
      return TRPCError.message ? TRPCError.message : 'Something went wrong'
    }
  }
  return 'Something went wrong'
}
