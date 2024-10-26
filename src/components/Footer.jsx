import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#EFEEEB] h-36 w max-w-full flex flex-row justify-between items-center px-32 py-16">
      <div className="flex space-x-4 justify-between">
        <span className="text-base font-medium">Get in touch</span>
        <div className="flex space-x-4">
          <a href="#">
            <Linkedin size={24} color="#333536" />
          </a>
          <a href="#">
            <Github size={24} color="#333536" />
          </a>
          <a href="#">
            <Mail size={24} color="#333536" />
          </a>
        </div>
      </div>
      <a href="" className="text-base font-medium text-[#26231E]">
        Home Page
      </a>
    </footer>
  );
}