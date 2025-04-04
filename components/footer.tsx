import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
    <footer className="border-t-transparent">
        <div className="p-5 flex-center items-center justify-center">
        © 2023 - {`${currentYear}`} {`${APP_NAME}®`}. All Rights Reserved.
        </div>
    </footer>
    );
}
 
export default Footer;