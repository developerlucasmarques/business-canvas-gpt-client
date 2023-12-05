import Swal, { type SweetAlertIcon } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface Props {
  icon: SweetAlertIcon
  title: string
  text: string
}

export const ModalAlert = async ({ icon, title, text }: Props): Promise<void> => {
  const MySwal = withReactContent(Swal)
  MySwal.fire({ title, icon, text }).then()
}
