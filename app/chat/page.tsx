import ChatCamera from "@/components/ChatCamera";
import Background from "@/public/background.jpg";
import Image from 'next/image';

const ChatPage = () => {
    return (
        <main className="flex flex-grow items-center">
            {/* Background Image */}
            <div className="relative w-full h-[98%] mx-2">
                {/* Absolute positioning for background image */}
                <div className="absolute inset-0 bg-cover bg-right-bottom rounded-lg">
                    <Image src={Background} layout="fill" objectFit="cover" alt="background" />
                </div>
                
                {/* Chat Camera Component */}
                <div className="relative w-full h-full flex items-center justify-center px-6">
                    <ChatCamera />
                </div>
            </div>
        </main>
    );
}

export default ChatPage;
