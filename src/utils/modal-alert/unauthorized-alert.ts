import { SwalAlert } from './swal-alert'

export const UnauthorizedAlert = async (): Promise<void> => {
  await SwalAlert({ icon: 'error', title: 'Falha!', text: 'Email ou senha inválidos.' })
}
