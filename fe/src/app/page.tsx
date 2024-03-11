import Image from "next/image";
import Navbar from '../components/common/Navbar';
import dynamic from 'next/dynamic';

const UpArrow = dynamic(() => import('../components/common/UpArrow'), { ssr: false });

export default function Home() {
  return (
    <div>
      <UpArrow/>
      <Navbar /> {/* Include the Navbar component */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Your existing content here */}
        {/* ... */}
      </main>
    </div>
  );
}
