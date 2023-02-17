import * as pkg from 'vue-toastification'
const { useToast: Toast } = pkg

export const useToast = () => {
  return Toast()
}
