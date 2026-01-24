import React from "react";
import { cn } from "@/lib/utils";

interface ParagraphProps {
  content: string;
  className?: string;
  textColor?: string;
}

const Textcontent: React.FC<ParagraphProps> = ({
  content,
  className,
  textColor,
}) => {
  
  return (
    <p className={cn(`text-base font-normal ${textColor}`, className)}>
      {content}
    </p>
  );
};

export default Textcontent;
