import {cva} from "class-variance-authority";
import { Proportions } from "lucide-react";

const buttonVariants=cva(
    
"inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
   { variants:{
        variant:{
            primary:"bg-orange-600 text-white hover:bg-orange-700 shadow",
            outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        },
        size:{
            default:"h-[10px] px-[4px] py-[2px] text-sm",
            sm:"h-[8px] px-[3px]  text-xs",
            lg:"h-[12px] px-[8px] text-base",
            icon:"h-[9px] w-[9px]"
        },
    },
    defaultVariants:{
        variant:"primary",
        size:"default"
    },
}     
);

const Button=({
    children,
    variant="primary",
    size="default",
    className="",
    ...props}) => {
        return(
            <button className={`${buttonVariants({variant,size})} ,${className}`}{...props}> {children} </button>
        )
    }
   
export default Button;