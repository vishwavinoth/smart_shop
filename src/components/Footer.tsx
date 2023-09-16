"use client";
import {
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";
import payment from "@/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-darkText text-slate-100">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa in
            sint incidunt, minima quos voluptates, nobis autem laborum earum est
            pariatur aperiam. Delectus consectetur maxime quidem.
          </p>
          <div className="flex items-center gap-x-4">
            <a href="https://vishwa.vercel.app/" target="_blank">
              <span className="socialLink">
                <BsInstagram />
              </span>
            </a>
            <a href="https://vishwa.vercel.app/" target="_blank">
              <span className="socialLink">
                <BsGithub />
              </span>
            </a>
            <a href="https://vishwa.vercel.app/" target="_blank">
              <span className="socialLink">
                <BsLinkedin />
              </span>
            </a>
            <a href="https://vishwa.vercel.app/" target="_blank">
              <span className="socialLink">
                <BsFacebook />
              </span>
            </a>
            <a href="https://vishwa.vercel.app/" target="_blank">
              <span className="socialLink">
                <BsTwitter />
              </span>
            </a>
          </div>
        </div>
        <div>
          <p className="text-lg">Laset posts</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Where Music Is Headed Next
              </span>
              <span className="text-orange-600">January 31, 2023</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg">Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Home
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Cart
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                About
              </li>
            </Link>
            <Link href="https://vishwa.vercel.app/" target="_blank">
            <li className="hover:text-orange-500 cursor-pointer duration-200">
              Contact
            </li>
            </Link>
            <li className="hover:text-orange-500 cursor-pointer duration-200">
              Newsletter
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg mb-2">Pay us with your trusted services</p>
          <Image
            src={payment}
            alt="payment banner image"
            className="w-full h-10 object-cover"
          />
        </div>
      </Container>
      <footer className="bg-neutral-200 text-center lg:text-left dark:bg-neutral-700">
        <div className="p-2 text-neutral-700 dark:text-neutral-200 text-center">
          &copy; 2023 Smart Shop. All rights reserved.&nbsp;
          <a
            href="https://vishwa.vercel.app/"
            className="text-neutral-800 dark:text-neutral-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            vishwa.vercel.app
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
