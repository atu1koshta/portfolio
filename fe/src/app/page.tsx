import Image from "next/image";
import Navbar from '../components/common/Navbar';
import Home from '../components/Home'
import dynamic from 'next/dynamic';

const UpArrow = dynamic(() => import('../components/common/UpArrow'), { ssr: false });

export default function Page() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <Home/>
      <UpArrow/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      </main>
    </div>
  );
}
