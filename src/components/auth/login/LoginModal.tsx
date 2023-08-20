import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import Login from "./Login"

type Props = React.PropsWithChildren<{
    trigger: React.ReactNode | string
    footer?: React.ReactNode
}>

const LoginModal = ({
    trigger,
    footer,
}: Props) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="w-[360px]">
                <div className="flex flex-col justify-center items-center">
                    <Login />
                </div>
            </DialogContent>
            {footer && (
                <DialogFooter>
                    {footer}
                </DialogFooter>
            )}
        </Dialog>
    )
}

export default LoginModal