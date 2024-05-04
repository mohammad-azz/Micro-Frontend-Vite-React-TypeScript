import { ReactNode } from "react"

type Dialog_Type = {
    Content : string,
    Title:string,
    Action : Function
}
type Modal_Type = {
    visible:boolean,
    title:string,
    content:HTMLElement| null,
    invisible:React.Dispatch<React.SetStateAction<boolean>>
}