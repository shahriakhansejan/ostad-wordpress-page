import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
import logoFooter from '../../assets/logoFooter.png'
import { SiWindows11 } from 'react-icons/si';
import brandImg from "../../assets/brand.png"

const Footer = () => {
  return (
    <div className="bg-orange-50">
      <footer className="footer text-[#323232] font-medium p-10 container mx-auto">
        <nav>
          <img className='w-32' src={logoFooter} alt="" />
         <p>অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</p>
         <h2>ডাউনলোড করুন ওস্তাদ অ্যাপ</h2>
         <span className='text-2xl gap-8 flex'>
            <a className='bg-white p-3 rounded-md' href="https://play.google.com" target="_blank"><FaGooglePlay/></a>
            <a  className='bg-white p-3 rounded-md'> <FaAppStore/> </a>

            <a  className='bg-white p-3 rounded-md' href="https://apps.microsoft.com" target="_blank"><SiWindows11/></a>
            </span>
           <div className='flex flex-col gap-2'>
           <h3 className='text-lg font-semibold my-4'>কোম্পানি</h3>
           <a href="">আমাদের সম্পর্কে</a>
           <a href="">রিফান্ড পলিসি</a>
           <a href="">প্রাইভেসি পলিসি</a>
           <a href="">টার্মস এবং শর্তাবলি</a>
           </div>
        </nav>
        <nav>
          <h6 className="text-[#151515] text-lg font-semibold">কুইক লিংক</h6>
          <a className="link link-hover">আপকামিং ব্যাচ</a>
          <a className="link link-hover">ফ্রি ক্লাস সমূহ</a>
          <a className="link link-hover">লাইভ ওয়ার্কশপ</a>
          <a className="link link-hover">ব্লগ</a>
        </nav>
        <nav>
        <h6 className="text-[#151515] text-lg font-semibold">যোগাযোগ</h6>
          <a className="link link-hover"><span>@:</span> support@ostad.app</a>
          <a className='flex' href="https://www.google.com/maps/place/Ostad+Limited/@23.8090803,90.4199374,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c71a3d2114eb:0x3cca230448c85572!8m2!3d23.8090803!4d90.4199374!16s%2Fg%2F11q83x_367?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D">
          <span className='mr-2 font-medium text-black'>Address: </span> 
          ka#6/A, <br /> Navana Sylavina, <br /> Baridhara Road, <br /> Nodda, Gulsan-2, <br /> Dhaka-1212
          </a>
        </nav>
      </footer>
      <img className='p-6' src={brandImg} alt="" />
    </div>
  );
};

export default Footer;
