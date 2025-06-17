import { useState, type JSX } from "react";
import { Button } from "../../../../globalComponents/Button";

type Role = "admin" | "editor" | "viewer" | "guest";

const Admin = ({ accessLevel }: { accessLevel: string }) => (<div>Admin - accessLevel:{accessLevel}</div>)
const Editor = ({ accessLevel }: { accessLevel: string }) => (<div>Editor - accessLevel:{accessLevel}</div>)
const Viewer = ({ accessLevel }: { accessLevel: string }) => (<div>Viewer - accessLevel:{accessLevel}</div>)
const Guest = ({ accessLevel }: { accessLevel: string }) => (<div>Guest - accessLevel:{accessLevel}</div>)


const RoleBasefactorypattern = () => {
    const [CurrentComponent, setCurrentComponent] = useState<JSX.Element>(<Guest accessLevel="None" />)
    const [currentRole, setCurrentRole] = useState<Role>("guest")
    function componentFactory(role: Role) {
        const components = {
            admin: <Admin accessLevel="all" />,
            editor: <Editor accessLevel="write" />,
            viewer: <Viewer accessLevel="read" />,
            guest: <Guest accessLevel="None" />
        }

        setCurrentRole(role)
        setCurrentComponent(components[role])
    }
    return (
        <div className="flex w-full h-[40vh]">
            <div className="flex-1 border space-y-3 p-3 cursor-pointer ">
                {["admin", "editor", "viewer", "guest"].map((role) => (
                    <Button className="w-full cursor-pointer" variant={currentRole === role ? "default" : "secondary"} onClick={() => componentFactory(role as Role)} key={role}>{role}</Button>
                ))}
            </div>
            <div className="flex-4 border flex justify-center items-center font-bold text-2xl">
                {CurrentComponent}
            </div>
        </div>
    )
}

export default RoleBasefactorypattern